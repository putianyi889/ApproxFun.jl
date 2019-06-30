export MySumSpace,MatrixOperator

using LinearAlgebra

struct MySumSpace{D,R} <: Space{D,R}
    spaces::Array{<:Space{D,R},1}
    function MySumSpace(S::Array{<:Space{D,R},1}) where {D,R}
        if !foldl(domainscompatible,domain.(S))
            error("Components of MySumSpace do not have the same domain.")
        else
            new{D,R}(S)
        end
    end
end
struct MatrixOperator{T} <: Operator{T}
    matrix::Array{<:Operator{T},2}
    function MatrixOperator(C::Array{<:Operator{T},2}) where T
        for m in 1:size(C)[1]
            if !foldl(spacescompatible,rangespace.(C[m,:]))
                error("Row $(m) do not have the same rangespace.")
            end
        end
        for n in 1:size(C)[2]
            if !foldl(spacescompatible,domainspace.(C[:,n]))
                error("Column $(n) do not have the same domainspace.")
            end
        end
        new{T}(C)
    end
end

# Basic
Base.getindex(S::MySumSpace,k::Integer)=S.spaces[k]
Base.length(S::MySumSpace)=Base.length(S.spaces)
Base.size(S::MySumSpace)=Base.size(S.spaces)
Base.getindex(D::MatrixOperator,k::Integer,m::Integer)=D.matrix[k,m]
Base.getindex(D::MatrixOperator,k::Integer)=D.matrix[k]
Base.size(D::MatrixOperator)=size(D.matrix)
Base.show(io::IO,C::MatrixOperator)=print(io,typeof(C))

domainspace(S::MatrixOperator)=MySumSpace([domainspace(S.matrix[1,n]) for n in 1:size(S.matrix)[2]])
rangespace(S::MatrixOperator)=MySumSpace([rangespace(S.matrix[m,1]) for m in 1:size(S.matrix)[1]])
domain(S::MySumSpace)=domain(S.spaces[1])

spacescompatible(S1::MySumSpace,S2::MySumSpace)=all(spacescompatible.(S1.spaces,S2.spaces))

function diagonal(C::Array{<:Operator,1})
    N = length(C)
    dsp = domainspace.(C)
    rsp = rangspace.(C)
    MatrixOperator([m==n ? C[m] : ZeroOperator(dsp[m],rsp[n]) for n in 1:N, m in 1:N])
end

# Algebra
*(D::MatrixOperator,f::Array{<:AbstractArray,1})=D.matrix*f
*(C1::MatrixOperator,C2::MatrixOperator)=MatrixOperator(C1.matrix*C2.matrix)
*(C::MatrixOperator,k::Number)=MatrixOperator(C.matrix*k)
*(k::Number,C::MatrixOperator)=MatrixOperator(k*C.matrix)
evaluate(f::AbstractArray{<:AbstractArray,1}, S::MySumSpace, x) = sum(evaluate.(f,S.spaces,x))

# MatrixOperator Constructors
Conversion(S1::MySumSpace, S2::MySumSpace) = diagonal(Conversion.(S1.spaces,S2.spaces))
Multiplication(f::Fun,sp::MySumSpace)=diagonal(Multiplication.(f,sp.spaces))
for op in (:Derivative,:LeftIntegral,:RightIntegral)
    @eval $op(S::MySumSpace,k) = diagonal($op.(S.spaces,k))
end
