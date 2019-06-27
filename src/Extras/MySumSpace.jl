
evaluate(f::AbstractArray{<:AbstractArray,1}, S::Array{<:Space,1}, x) = sum(evaluate.(f,S,x))

function Conversion(S1::Array{<:Space,1}, S2::Array{<:Space,1})
    @assert size(S1) == size(S2)
    [m==n ? Conversion(S1[m],S2[n]) : ZeroOperator(S1[m],S2[n]) for n in 1:length(S2), m in 1:length(S1)]
end
