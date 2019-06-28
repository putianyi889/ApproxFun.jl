struct MySumSpace <: Space
    spaces::Array{<:Space,1}
end

Base.getindex(S::MySumSpace,k::Integer)=MySumSpace.spaces[k]
length(S::MySumSpace)=length(S.spaces)

evaluate(f::AbstractArray{<:AbstractArray,1}, S::MySumSpace, x) = sum(evaluate.(f,S.spaces,x))

function Conversion(S1::Array{<:Space,1}, S2::Array{<:Space,1})
    @assert length(S1) == length(S2)
    [m==n ? Conversion(S1[m],S2[n]) : ZeroOperator(S1[m],S2[n]) for n in 1:length(S2), m in 1:length(S1)]
end
    
struct MatrixOperator <: Operator
    matrix::Array{<:Operator,2}
end

for op in (:Base.getindex,:Base.size)
    @eval $op(D::MatrixOperator...)=$op(D.matrix...)
end
#Base.getindex(D::MatrixOperator,k::Integer,m::Integer)=D.matrix[k,m]
#Base.getindex(D::MatrixOperator,k::Integer)=D.matrix[k]
#Base.size(D::MatrixOperator)=size(D.matrix)
