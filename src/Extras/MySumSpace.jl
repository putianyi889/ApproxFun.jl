
evaluate(f::AbstractArray{<:AbstractArray,1}, S::Array{<:Space,1}, x) = sum(evaluate.(f,S,x))

