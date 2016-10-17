__precompile__()

module ApproxFun
    using Base, Compat, Plots, FastGaussQuadrature, FastTransforms, DualNumbers, BandedMatrices
    import FixedSizeArrays, ToeplitzMatrices

import Base.LinAlg: BlasFloat

import Base: values,getindex,setindex!,*,.*,+,.+,-,.-,==,<,<=,>,|,
                >=,./,/,.^,^,\,∪,transpose, size


import BandedMatrices: bzeros, bandinds, bandrange, PrintShow, eachbandedindex, bandshift,
                        unsafe_getindex, unsafe_setindex!, bandwidth, AbstractBandedMatrix,
                        dot, dotu, normalize!, flipsign,
                        colstart, colstop, colrange, rowstart, rowstop, rowrange,
                        bandwidths, αA_mul_B_plus_βC!, showarray

import Compat: view

import FixedSizeArrays: Vec

export pad!,pad,sample,chop!,complexroots,roots,svfft, reverseorientation

##Testing
export bisectioninv





include("LinearAlgebra/LinearAlgebra.jl")


include("Fun/Fun.jl")
include("Multivariate/Multivariate.jl")
include("Operators/Operator.jl")

include("Domains/Domains.jl")
include("Spaces/Spaces.jl")




## Further extra features

include("PDE/PDE.jl")
include("Caching/caching.jl")
include("Extras/Extras.jl")
include("Plot/Plot.jl")

include("docs.jl")


## Testing
# These routines are for the unit tests
using Base.Test
function functionaltest(A)
    @test rowstart(A,1) == 1
    @test colstop(A,1) == 1
    @test A[1:10]' == A[1,1:10]
    @test A[1:10][3:10] == A[3:10]
    @test A[1:10] == [A[k] for k=1:10]

    co=cache(A)
    @test co[1:100] == A[1:100]
    @test co[1:100] == A[1:100]
    @test co[200:300] == A[1:300][200:300] == A[200:300]
end

function infoperatortest(A)
    @test isinf(size(A,1))
    @test isinf(size(A,2))
    B=A[1:5,1:5]

    for k=1:5,j=1:5
        @test_approx_eq B[k,j] A[k,j]
    end

    @test_approx_eq A[1:5,1:5][2:5,1:5] A[2:5,1:5]
    @test_approx_eq A[1:5,2:5] A[1:5,1:5][:,2:end]

    for k=1:10
        @test isfinite(colstart(A,k)) && colstart(A,k) > 0
        @test isfinite(rowstart(A,k)) && colstart(A,k) > 0
    end

    co=cache(A)
    @test co[1:100,1:100] == A[1:100,1:100]
    @test co[1:100,1:100] == A[1:100,1:100]
    @test co[200:300,200:300] == A[1:300,1:300][200:300,200:300] == A[200:300,200:300]

    let C=cache(A)
        resizedata!(C,5,35)
        resizedata!(C,10,35)
        @test norm(C.data[1:10,1:C.datasize[2]]-A[1:10,1:C.datasize[2]]) ≤ eps()
    end
end

function raggedbelowoperatortest(A)
    @test israggedbelow(A)
    for k=1:20
        @test isfinite(colstop(A,k))
    end
    infoperatortest(A)
end

function bandedbelowoperatortest(A)
    @test isbandedbelow(A)
    @test isfinite(bandwidth(A,1))
    raggedbelowoperatortest(A)

    for k=1:10
        @test colstop(A,k) ≤ k + bandwidth(A,1)
    end
end


function almostbandedoperatortest(A)
    bandedbelowoperatortest(A)
end

function bandedoperatortest(A)
    @test isbanded(A)
    @test isfinite(bandwidth(A,2))
    almostbandedoperatortest(A)
    for k=1:10
        @test rowstop(A,k) ≤ k + bandwidth(A,2)
    end

    @test isa(A[1:10,1:10],BandedMatrix)
end


function bandedblockoperatortest(A)
    raggedbelowoperatortest(A)
    @test isfinite(blockbandwidth(A,2))
    @test isfinite(blockbandwidth(A,1))

    for K=1:10
        @test K ≤ blockcolstop(A,K) ≤ K + blockbandwidth(A,1) < ∞
        @test K ≤ blockrowstop(A,K) ≤ K + blockbandwidth(A,2) < ∞
    end
end

function bandedblockbandedoperatortest(A)
    bandedblockoperatortest(A)
    @test isfinite(subblockbandwidth(A,1))
    @test isfinite(subblockbandwidth(A,2))

    @test isa(A[1:10,1:10],BandedBlockBandedMatrix)
end


## precompile
function _precompile_()
    precompile(Chebyshev,tuple())
    precompile(Fun,tuple())
    precompile(Base.exp,(Fun{Chebyshev{Interval{Float64}},Float64},))
    precompile(linsolve,(Vector{Operator{Float64}},Vector{Float64}))
    precompile(\,(Vector{Operator{Float64}},Vector{Float64}))
    precompile(+,(Int,Fun{Chebyshev{Interval{Float64}},Float64}))
    precompile(+,(Fun{Chebyshev{Interval{Float64}},Float64},Fun{Chebyshev{Interval{Float64}},Float64}))
    precompile(+,(Fun{ConstantSpace{AnyDomain},Float64},Fun{Chebyshev{Interval{Float64}},Float64}))
    precompile(union,(ConstantSpace{AnyDomain},Chebyshev{Interval{Float64}}))
    precompile(union,(Chebyshev{Interval{Float64}},ConstantSpace{AnyDomain}))
    precompile(Fun,(Fun{ConstantSpace{AnyDomain},Float64},Chebyshev{Interval{Float64}}))
end

_precompile_()

end #module
