const MySumSpace = Array{<:Space,1}

struct MySumSpace{SV,D,R}<:DirectSumSpace{SV,D,R}
    spaces::SV
    MySumSpace{SV,D,R}(dom::Domain) where {SV,D,R} =
        new(tuple(map(typ->typ(dom),SV.parameters)...))
    MySumSpace{SV,D,R}(sp::Tuple) where {SV,D,R} = new(sp)
end

MySumSpace(sp::Tuple) = MySumSpace{typeof(sp),domaintype(first(sp)),
                                mapreduce(rangetype,promote_type,sp)}(sp)

MySumSpace(A::MySumSpace,B::MySumSpace) = MySumSpace(tuple(A.spaces...,B.spaces...))
MySumSpace(A::Space,B::MySumSpace) = MySumSpace(tuple(A,B.spaces...))
MySumSpace(A::MySumSpace,B::Space) = MySumSpace(tuple(A.spaces...,B))
MySumSpace(A::Space...) = MySumSpace(A)
MySumSpace(sp::AbstractArray) = MySumSpace(tuple(sp...))

canonicalspace(A::MySumSpace) = MySumSpace(sort(collect(A.spaces)))

MySumSpace(A::ConstantSpace{AnyDomain}, B::ConstantSpace{AnyDomain}) = error("Should not happen")
MySumSpace(A::SumSpace, B::ConstantSpace{AnyDomain}) = MySumSpace(A, setdomain(B, domain(A)))
MySumSpace(B::ConstantSpace{AnyDomain}, A::SumSpace) = MySumSpace(setdomain(B, domain(A)), A)
MySumSpace(A::Space, B::ConstantSpace{AnyDomain}) = MySumSpace(A, setdomain(B, domain(A)))
MySumSpace(B::ConstantSpace{AnyDomain}, A::Space) = MySumSpace(setdomain(B, domain(A)), A)

setdomain(A::MySumSpace,d::Domain) = MySumSpace(map(sp->setdomain(sp,d),A.spaces))

