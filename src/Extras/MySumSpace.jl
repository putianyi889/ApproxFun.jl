export MySumSpace,MatrixOperator

struct MySumSpace{D,R} <: Space{D,R}
    spaces::Array{<:Space{D,R},1}
end
struct MatrixOperator{T} <: Operator{T}
    matrix::Array{<:Operator{T},2}
    function MatrixOperator(C::Array{<:Operator{T},2}) where T
        for m in 1:size(C)[1]
            if !foldl(spacescompatible,rangespace.(C[m,:]))
                error("Row $(m) does not have the same rangespace.")
            end
        end
        for n in 1:size(C)[2]
            if !foldl(spacescompatible,domainspace.(C[:,n]))
                error("Column $(n) does not have the same domainspace.")
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

domainspace(S::MatrixOperator)=MySumSpace([domainspace.(S.matrix[1,n]) for n in 1:size(S.matrix)[2]])
rangespace(S::MatrixOperator)=MySumSpace([rangespace.(S.matrix[m,1]) for m in 1:size(S.matrix)[1]])

# Interact with coefficients
*(D::MatrixOperator,f::Array{<:AbstractArray,1})=D.matrix*f

evaluate(f::AbstractArray{<:AbstractArray,1}, S::MySumSpace, x) = sum(evaluate.(f,S.spaces,x))

# MatrixOperator Constructor
function Conversion(S1::MySumSpace, S2::MySumSpace)
    @assert length(S1) == length(S2)
    MatrixOperator([m==n ? Conversion(S1[m],S2[n]) : ZeroOperator(S1[m],S2[n]) for n in 1:length(S2), m in 1:length(S1)])
end

function Conversion(S1::MySumSpace, S2::MySumSpace, plan::Array{<:Integer,1})
    @assert length(S1) == length(S2)
    MatrixOperator([plan[m]==n ? Conversion(S1[m],S2[n]) : ZeroOperator(S1[m],S2[n]) for n in 1:length(S2), m in 1:length(S1)])
end

