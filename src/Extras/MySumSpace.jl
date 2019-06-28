export MySumSpace,MatrixOperator

struct MySumSpace{D,R} <: Space{D,R}
    spaces::Array{<:Space{D,R},1}
end
struct MatrixOperator{T} <: Operator{T}
    matrix::Array{<:Operator{T},2}
end

Base.getindex(S::MySumSpace,k::Integer)=MySumSpace.spaces[k]
Base.length(S::MySumSpace)=Base.length(S.spaces)
Base.size(S::MySumSpace)=Base.size(S.spaces)
Base.getindex(D::MatrixOperator,k::Integer,m::Integer)=D.matrix[k,m]
Base.getindex(D::MatrixOperator,k::Integer)=D.matrix[k]
Base.size(D::MatrixOperator)=size(D.matrix)

evaluate(f::AbstractArray{<:AbstractArray,1}, S::MySumSpace, x) = sum(evaluate.(f,S.spaces,x))

function Conversion(S1::MySumSpace, S2::MySumSpace)
    @assert length(S1) == length(S2)
    MatrixOperator([m==n ? Conversion(S1[m],S2[n]) : ZeroOperator(S1[m],S2[n]) for n in 1:length(S2), m in 1:length(S1)])
end
