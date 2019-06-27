
evaluate(f::AbstractArray{<:AbstractArray,1}, S::Array{<:Space,1}, x) = sum(evaluate.(f,S,x))

function Conversion(S1::Array{<:Space,1}, S2::Array{<:Space,1})
    
end
