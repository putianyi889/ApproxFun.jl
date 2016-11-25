var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#ApproxFun.jl-Documentation-1",
    "page": "Home",
    "title": "ApproxFun.jl Documentation",
    "category": "section",
    "text": "ApproxFun is a package for approximating and manipulating functions, and for solving differential and integral equations.  Pages = [\"usage/constructors.md\",\n         \"faq.md\",\n         \"library.md\"]"
},

{
    "location": "usage/constructors.html#",
    "page": "Constructors",
    "title": "Constructors",
    "category": "page",
    "text": ""
},

{
    "location": "usage/constructors.html#Constructors-1",
    "page": "Constructors",
    "title": "Constructors",
    "category": "section",
    "text": "Funs in ApproxFun are instances of Julia types with one field to store coefficients and another to describe the function space. Similarly, each function space has one field describing its domain, or another function space. Let's explore:x = Fun(identity,-1..1)\nf = exp(x)\ng = f/sqrt(1-x^2)\nspace(f)   # Chebyshev(Interval(-1.0,1.0))\nspace(g)   # JacobiWeight(-0.5,-0.5,Interval(-1.0,1.0))The absolute value is another case where the space of the output is inferred from the operation:f = Fun(x->cospi(5x),-1..1)\ng = abs(f)\nspace(f)   # Chebyshev(Interval(-1.0,1.0))\nspace(g)   # PiecewiseSpace((Chebyshev(Interval(-1.0,-0.9)),...))"
},

{
    "location": "usage/constructors.html#Convenience-constructors-1",
    "page": "Constructors",
    "title": "Convenience constructors",
    "category": "section",
    "text": "The default space is Chebyshev, which can represent non-periodic functions on intervals.  Each Space type has a default domain: for Chebyshev this is -1..1, for Fourier and Laurent this is -π..π.  Thus the following are synonyms:Fun(exp,Chebyshev(Interval(-1,1)))\nFun(exp,Chebyshev(Interval()))\nFun(exp,Chebyshev(-1..1))\nFun(exp,Chebyshev())\nFun(exp,-1..1)\nFun(exp,Interval())\nFun(exp,Interval(-1,1))\nFun(exp)If a function is not specified, then it is taken to be identity.  Thus we have the following synonyms:x = Fun(identity,-1..1)\nx = Fun(-1..1)\nx = Fun(identity)\nx = Fun()"
},

{
    "location": "usage/constructors.html#Using-ApproxFun-for-“manual”-interpolation-1",
    "page": "Constructors",
    "title": "Using ApproxFun for “manual” interpolation",
    "category": "section",
    "text": "The ApproxFun package for Julia implements all of the necessary operations for Chebyshev interpolation and operations (like differentiation or integration) on Chebyshev interpolants.Normally, you give it a function f and a domain d, and construct the Chebyshev interpolant by fc = Fun(f, d). The ApproxFun package figures out the necessary number of Chebyshev points (i.e., the polynomial order) required to interpolate f to nearly machine precision, so that subsequent operations on fc can be viewed as \"exact\".However, in cases where the function to be interpolated is extremely expensive, and possibly even is evaluated by an external program, it is convenient to be able to decide on the desired Chebyshev order in advance, evaluate the function at those points \"manually\", and then construct the Chebyshev interpolant. However, this procedure isn't documented in the ApproxFun manual. In this notebook, we show how to do that for the example f(x) = exp(2x) on the domain 0..1."
},

{
    "location": "usage/constructors.html#Manually-constructing-the-Chebyshev-interpolant-1",
    "page": "Constructors",
    "title": "Manually constructing the Chebyshev interpolant",
    "category": "section",
    "text": "using ApproxFun\nf(x) = exp(2x) # the function to be interpolated\nd = Space(0..1) # the domain to interpolate inLet's interpolate using only N = 10 points. We'll start by using the ApproxFun.points function to get the x coordinates to interpolate at:N = 10\nx = points(d, N)\n10-element Array{Float64,1}:\n 0.00615583\n 0.0544967\n 0.146447\n 0.273005\n 0.421783\n 0.578217\n 0.726995\n 0.853553\n 0.945503\n 0.993844Note that these are Chebyshev points, clustered near the endpoints of the domain.Next, we'll evaluate our function f at these points:y = f(x)\n10-element Array{Float64,1}:\n 1.01239\n 1.11516\n 1.3403\n 1.72635\n 2.32464\n 3.17858\n 4.28016\n 5.51299\n 6.62603\n 7.29864Finally, we'll construct the Chebyshev interpolant fc by using the lowest-level Fun constructor, where we pass in an array of Chebyshev coefficients along with the domain. To get the Chebyshev coefficients, we'll use the ApproxFun.transform method:fc = Fun(ApproxFun.transform(d, y), d)\nFun([3.441523869125335,3.0725234451419356,0.7380008479667985,0.12052005327473987,0.01488052831835938,0.0014758267278678237,0.00012226103967574454,8.694251606738979e-6,5.415128415009462e-7,2.993315462163082e-8],Chebyshev(【0.0,1.0】))"
},

{
    "location": "usage/constructors.html#Using-the-Chebyshev-interpolant-1",
    "page": "Constructors",
    "title": "Using the Chebyshev interpolant",
    "category": "section",
    "text": "We can evaluate the interpolation at a point x ∈ d just by calling fc(x). Since we only used 10 points, it is not accurate to machine precision, but it is still pretty accurate:fc(0.2) - f(0.2)\n1.3975267609822595e-9We can compute the derivative at an arbitrary point simply by fc'(x), which will give us a good approximation for the exact derivative 2*exp(2x):fc'(0.2) - 2*exp(2*0.2)\n5.5879429972094385e-9"
},

{
    "location": "faq.html#",
    "page": "Frequently Asked Questions",
    "title": "Frequently Asked Questions",
    "category": "page",
    "text": ""
},

{
    "location": "faq.html#Frequently-Asked-Questions-1",
    "page": "Frequently Asked Questions",
    "title": "Frequently Asked Questions",
    "category": "section",
    "text": ""
},

{
    "location": "faq.html#Approximating-functions-1",
    "page": "Frequently Asked Questions",
    "title": "Approximating functions",
    "category": "section",
    "text": ""
},

{
    "location": "faq.html#How-do-I-interpolate-a-function-at-a-specified-grid?-1",
    "page": "Frequently Asked Questions",
    "title": "How do I interpolate a function at a specified grid?",
    "category": "section",
    "text": "In the case where the grid is specified by points(space,n), you can apply the default transform to data:S = Chebyshev([1,2])  \np = points(S,20) # the default grid\nv = exp.(p)      # values at the default grid\nf = Fun(ApproxFun.transform(S,vals),S)ApproxFun has no inbuilt support for interpolating functions at other sets of points, but this can be accomplished manually by evaluating the basis at the set of points and using \\:S = Chebyshev([1,2])  \nn = 50\np = linspace(1,2,n)  # a non-default grid\nv = exp.(p)           # values at the non-default grid\n# Create a Vandermonde matrix by evaluating the basis at the grid\nV = Array(Float64,n,n)\nfor k = 1:n\n    V[:,k] = Fun([zeros(k-1);1],S)(p)\nend\nf = Fun(V\\v,S)   Note that an evenly spaced grid suffers from instability for large n.  The easiest way around this is to use least squares with more points than coefficients, instead of interpolation:S = Chebyshev([1,2])  \nn = 100; m = 50\np = linspace(1,2,n)  # a non-default grid\nv = exp.(p)           # values at the non-default grid\n# Create a Vandermonde matrix by evaluating the basis at the grid\nV = Array(Float64,n,m)\nfor k = 1:m\n    V[:,k] = Fun([zeros(k-1);1],S)(p)\nend\nf = Fun(V\\v,S)   "
},

{
    "location": "library.html#",
    "page": "Library",
    "title": "Library",
    "category": "page",
    "text": ""
},

{
    "location": "library.html#Library-1",
    "page": "Library",
    "title": "Library",
    "category": "section",
    "text": ""
},

{
    "location": "library.html#ApproxFun.Fun",
    "page": "Library",
    "title": "ApproxFun.Fun",
    "category": "Type",
    "text": "Fun(s::Space,coefficients::Vector)\n\nreturns a Fun with the specified coefficients in the space s\n\n\n\nFun(f,s::Space)\n\nreturn a Fun representing the function, number, or vector f in the space s.  If f is vector-valued, it returns a vector-valued analogue of s.\n\n\n\nFun(f,d::Domain)\n\nreturns Fun(f,Space(d)), that is, it uses the default space for the specified domain.\n\n\n\nFun(s::Space)\n\nreturns Fun(identity,s)\n\n\n\nFun(f)\n\nreturns Fun(f,Chebyshev())\n\n\n\nFun()\n\nreturns Fun(identity,Chebyshev()).\n\n\n\n"
},

{
    "location": "library.html#Base.ones-Tuple{ApproxFun.Space}",
    "page": "Library",
    "title": "Base.ones",
    "category": "Method",
    "text": "ones(d::Space)\n\nReturn the Fun that represents the function one on the specified space.\n\n\n\n"
},

{
    "location": "library.html#Base.zeros-Tuple{ApproxFun.Space}",
    "page": "Library",
    "title": "Base.zeros",
    "category": "Method",
    "text": "zeros(d::Space)\n\nReturn the Fun that represents the function one on the specified space.\n\n\n\n"
},

{
    "location": "library.html#Constructing-a-Fun-1",
    "page": "Library",
    "title": "Constructing a Fun",
    "category": "section",
    "text": "Funones(::Space)zeros(::Space)"
},

{
    "location": "library.html#ApproxFun.Arc",
    "page": "Library",
    "title": "ApproxFun.Arc",
    "category": "Type",
    "text": "Arc(c,r,(θ₁,θ₂))\n\nrepresents the arc centred at c with radius r from angle θ₁ to θ₂. \n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Circle",
    "page": "Library",
    "title": "ApproxFun.Circle",
    "category": "Type",
    "text": "Circle(c,r,o)\n\nrepresents the circle centred at c with radius r which is positively (o=true) or negatively (o=false) oriented.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Curve",
    "page": "Library",
    "title": "ApproxFun.Curve",
    "category": "Constant",
    "text": "Curve Represents a domain defined by the image of a Fun.  Example usage would be\n\nx=Fun(1..2)\nCurve(exp(im*x))  # represents an arc\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Disk",
    "page": "Library",
    "title": "ApproxFun.Disk",
    "category": "Type",
    "text": "Disk(c,r)\n\nrepresents the disk centred at c with radius r.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Interval",
    "page": "Library",
    "title": "ApproxFun.Interval",
    "category": "Type",
    "text": "Interval(a,b)\n\nrepresents an interval from a to b.  In the case where a and b are complex or 2-dimensional, it represents the line segment between a and b.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Line",
    "page": "Library",
    "title": "ApproxFun.Line",
    "category": "Type",
    "text": "Line{a}(c)\n\nrepresents the line at angle a in the complex plane, centred at c.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.PeriodicInterval",
    "page": "Library",
    "title": "ApproxFun.PeriodicInterval",
    "category": "Type",
    "text": "PeriodicInterval(a,b)\n\nrepresents a periodic interval from a to b, that is, the point b is identified with a.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Point",
    "page": "Library",
    "title": "ApproxFun.Point",
    "category": "Type",
    "text": "Point(x)\n\nrepresents a single point at x.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.ProductDomain",
    "page": "Library",
    "title": "ApproxFun.ProductDomain",
    "category": "Type",
    "text": "ProductDomain((d1,d2))\n\nrepresents the product of two domains, the set {(x,y) : x ∈ d1 & y ∈ d2}.\n\nMultiplication of domains is overrident to return a ProductDomain. For example, the following represents the rectangle 1 ≤ x ≤ 2 & 3 ≤ y ≤ 4:\n\nInterval(1,2)*(3,4)\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Ray",
    "page": "Library",
    "title": "ApproxFun.Ray",
    "category": "Type",
    "text": "Ray{a}(c,o)\n\nrepresents a ray at angle a starting at c, with orientation out to infinity (o = true) or back from infinity (o = false).\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.UnionDomain",
    "page": "Library",
    "title": "ApproxFun.UnionDomain",
    "category": "Type",
    "text": "UnionDomain((d1,d2,…,dn))\n\nrepresents a union of multiple subdomains: {x : x ∈ d1 || … || x ∈ dn}.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.∂",
    "page": "Library",
    "title": "ApproxFun.∂",
    "category": "Function",
    "text": "∂(d::Domain)\n\nreturns the boundary of d.  For example, the boundary of a Disk() is a Circle(), and the boundary of Interval()^2 is a piecewise interval that sketches the boundary of a rectangle.\n\n\n\n"
},

{
    "location": "library.html#Domains-1",
    "page": "Library",
    "title": "Domains",
    "category": "section",
    "text": "ArcCircleCurveDiskIntervalLinePeriodicIntervalApproxFun.PointProductDomainRayUnionDomain∂"
},

{
    "location": "library.html#ApproxFun.canonicalspace",
    "page": "Library",
    "title": "ApproxFun.canonicalspace",
    "category": "Function",
    "text": "canonicalspace(s::Space)\n\nreturns a space that is used as a default to implement missing functionality, e.g., evaluation.  Implement a Conversion operator or override coefficients to support this.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.itransform",
    "page": "Library",
    "title": "ApproxFun.itransform",
    "category": "Function",
    "text": "itransform(s::Space,coefficients::Vector)\n\nTransform coefficients back to values.  Defaults to using canonicalspace as in transform.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.transform",
    "page": "Library",
    "title": "ApproxFun.transform",
    "category": "Function",
    "text": "transform(s::Space,vals::Vector)\n\nTransform values on the grid specified by points(s,length(vals)) to coefficients in the space s. Defaults to coefficients(transform(canonicalspace(space),values),canonicalspace(space),space)\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.evaluate-Tuple{ApproxFun.Space,Array{T,1},Any}",
    "page": "Library",
    "title": "ApproxFun.evaluate",
    "category": "Method",
    "text": "evaluate(sp::Space,coefficients::Vector,x)\n\nEvaluates the expansion at a point x. If x is in the domain, then this should return zero.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.dimension-Tuple{ApproxFun.Space}",
    "page": "Library",
    "title": "ApproxFun.dimension",
    "category": "Method",
    "text": "dimension(s::Space)\n\nreturns the dimension of s, which is the maximum number of coefficients.\n\n\n\n"
},

{
    "location": "library.html#Accessing-information-about-a-spaces-1",
    "page": "Library",
    "title": "Accessing information about a spaces",
    "category": "section",
    "text": "ApproxFun.canonicalspaceitransformtransformevaluate(::Space,::Vector,::)ApproxFun.dimension(::Space)"
},

{
    "location": "library.html#ApproxFun.SequenceSpace",
    "page": "Library",
    "title": "ApproxFun.SequenceSpace",
    "category": "Type",
    "text": "SequenceSpace is the space of all sequences, i.e., infinite vectors. Also denoted ℓ⁰.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.ConstantSpace",
    "page": "Library",
    "title": "ApproxFun.ConstantSpace",
    "category": "Type",
    "text": "ConstantSpace is the 1-dimensional scalar space.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Chebyshev",
    "page": "Library",
    "title": "ApproxFun.Chebyshev",
    "category": "Type",
    "text": "Chebyshev() is the space spanned by the Chebyshev polynomials\n\n    T_0(x),T_1(x),T_2(x),…\n\nwhere T_k(x) = cos(k*acos(x)).  This is the default space as there exists a fast transform and general smooth functions on [-1,1] can be easily resolved.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Taylor",
    "page": "Library",
    "title": "ApproxFun.Taylor",
    "category": "Constant",
    "text": "Taylor() is the space spanned by [1,z,z^2,...].  This is a type alias for Hardy{true}.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Hardy",
    "page": "Library",
    "title": "ApproxFun.Hardy",
    "category": "Type",
    "text": "Hardy{false}() is the space spanned by [1/z,1/z^2,...]\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Fourier",
    "page": "Library",
    "title": "ApproxFun.Fourier",
    "category": "Constant",
    "text": "Fourier() is the space spanned by the trigonemtric polynomials\n\n    1,sin(θ),cos(θ),sin(2θ),cos(2θ),…\n\nSee also Laurent.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Laurent",
    "page": "Library",
    "title": "ApproxFun.Laurent",
    "category": "Constant",
    "text": "Laurent() is the space spanned by the complex exponentials\n\n    1,exp(-im*θ),exp(im*θ),exp(-2im*θ),…\n\nSee also Fourier.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.CosSpace",
    "page": "Library",
    "title": "ApproxFun.CosSpace",
    "category": "Type",
    "text": "CosSpace() is the space spanned by [1,cos θ,cos 2θ,...]\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.SinSpace",
    "page": "Library",
    "title": "ApproxFun.SinSpace",
    "category": "Type",
    "text": "SinSpace() is the space spanned by [sin θ,sin 2θ,...]\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Jacobi",
    "page": "Library",
    "title": "ApproxFun.Jacobi",
    "category": "Type",
    "text": "Jacobi(b,a) represents the space spanned by Jacobi polynomials P_k^{(a,b)}, which are orthogonal with respect to the weight (1+x)^β*(1-x)^α\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.JacobiWeight",
    "page": "Library",
    "title": "ApproxFun.JacobiWeight",
    "category": "Type",
    "text": "JacobiWeight weights a basis on [-1,1] weighted by (1+x)^β*(1-x)^α. Note the inconsistency of the parameters with Jacobi. when the domain is [a,b] the weight is inferred by mapping to [-1,1]\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.LogWeight",
    "page": "Library",
    "title": "ApproxFun.LogWeight",
    "category": "Type",
    "text": "LogWeight  represents a function on [-1,1] weighted by log((1+x)^β*(1-x)^α)\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.ArraySpace",
    "page": "Library",
    "title": "ApproxFun.ArraySpace",
    "category": "Type",
    "text": "ArraySpace used to represent array-valued expansions in space.  The coefficients are of each entry are interlaced.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.TensorSpace",
    "page": "Library",
    "title": "ApproxFun.TensorSpace",
    "category": "Type",
    "text": "TensorSpace(Chebyshev(),Chebyshev())\n\nrepresents a tensor product of two 1D spaces.  The coefficients are interlaced in lexigraphical order.\n\nTo see this in action, consider\n\nFourier()*Chebyshev()  # returns TensorSpace(Fourier(),Chebyshev())\n\nThis represents functions on [-π,π) x [-1,1], using the Fourier basis for the first argument and Chebyshev basis for the second argument, that is, φ_k(x)T_j(y), where\n\nφ_0(x) = 1,\nφ_1(x) = sin x,\nφ_2(x) = cos x,\nφ_3(x) = sin 2x,\nφ_4(x) = cos 2x\n…\n\nBy Choosing (k,j) appropriately, we obtain a single basis:\n\nφ_0(x)T_0(y) (= 1),\nφ_0(x)T_1(y) (= y),\nφ_1(x)T_0(y) (= sin x),\nφ_0(x)T_2(y), …\n\n\n\n"
},

{
    "location": "library.html#Inbuilt-spaces-1",
    "page": "Library",
    "title": "Inbuilt spaces",
    "category": "section",
    "text": "SequenceSpaceConstantSpaceChebyshevTaylorHardy{false}FourierLaurentCosSpaceSinSpaceJacobiJacobiWeightApproxFun.LogWeightApproxFun.ArraySpaceTensorSpace"
},

{
    "location": "library.html#ApproxFun.domain",
    "page": "Library",
    "title": "ApproxFun.domain",
    "category": "Function",
    "text": "domain(f::Fun)\n\nreturns the domain that f is defined on\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.coefficients",
    "page": "Library",
    "title": "ApproxFun.coefficients",
    "category": "Function",
    "text": "coefficients(f::Fun) -> Vector\n\nreturns the coefficients of f, corresponding to the space space(f).\n\n\n\ncoefficients(f::Fun,s::Space) -> Vector\n\nreturns the coefficients of f in the space s, which may not be the same as space(f).\n\n\n\ncoefficients(cfs::Vector,fromspace::Space,tospace::Space) -> Vector\n\nconverts coefficients in fromspace to coefficients in tospace\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.extrapolate",
    "page": "Library",
    "title": "ApproxFun.extrapolate",
    "category": "Function",
    "text": "extrapolate(f::Fun,x)\n\nreturns an extrapolation of f from its domain to x.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.ncoefficients",
    "page": "Library",
    "title": "ApproxFun.ncoefficients",
    "category": "Function",
    "text": "ncoefficients(f::Fun) -> Integer\n\nreturns the number of coefficients of a fun\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.points",
    "page": "Library",
    "title": "ApproxFun.points",
    "category": "Function",
    "text": "points(f::Fun)\n\nreturns a grid of points that f can be transformed into values and back\n\n\n\npoints(s::Space,n::Integer)\n\nreturns a grid of approximately n points, for which a transform exists from values at the grid to coefficients in the space s.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.space",
    "page": "Library",
    "title": "ApproxFun.space",
    "category": "Function",
    "text": "space(f::Fun)\n\nreturns the space of f\n\n\n\n"
},

{
    "location": "library.html#Base.values",
    "page": "Library",
    "title": "Base.values",
    "category": "Function",
    "text": "values(f::Fun)\n\nreturns f evaluated at points(f)\n\n\n\n"
},

{
    "location": "library.html#Accessing-information-about-a-Fun-1",
    "page": "Library",
    "title": "Accessing information about a Fun",
    "category": "section",
    "text": "domaincoefficientsextrapolatencoefficientspointsspaceApproxFun.values"
},

{
    "location": "library.html#ApproxFun.reverseorientation",
    "page": "Library",
    "title": "ApproxFun.reverseorientation",
    "category": "Function",
    "text": "reverseorientation(f::Fun)\n\nreturn f on a reversed orientated contour.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.setdomain",
    "page": "Library",
    "title": "ApproxFun.setdomain",
    "category": "Function",
    "text": "setdomain(f::Fun,d::Domain)\n\nreturns f projected onto domain\n\n\n\n"
},

{
    "location": "library.html#Base.chop",
    "page": "Library",
    "title": "Base.chop",
    "category": "Function",
    "text": "chop(f::Fun,tol) -> Fun\n\nreduces the number of coefficients by dropping the tail that is below the specified tolerance.\n\n\n\n"
},

{
    "location": "library.html#Modify-a-Fun-1",
    "page": "Library",
    "title": "Modify a Fun",
    "category": "section",
    "text": "reverseorientationApproxFun.setdomainchop"
},

{
    "location": "library.html#ApproxFun.Operator",
    "page": "Library",
    "title": "ApproxFun.Operator",
    "category": "Type",
    "text": "Operator{T}\n\nis an abstract type to represent linear operators between spaces.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.domainspace",
    "page": "Library",
    "title": "ApproxFun.domainspace",
    "category": "Function",
    "text": "domainspace(op::Operator)\n\ngives the domain space of op.  That is, op*f will first convert f to a Fun in the space domainspace(op) before applying the operator.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.rangespace",
    "page": "Library",
    "title": "ApproxFun.rangespace",
    "category": "Function",
    "text": "rangespace(op::Operator)\n\ngives the range space of op.  That is, op*f will return a Fun in the space rangespace(op), provided f can be converted to a Fun in domainspace(op).\n\n\n\n"
},

{
    "location": "library.html#Base.getindex-Tuple{ApproxFun.Operator,Any,Any}",
    "page": "Library",
    "title": "Base.getindex",
    "category": "Method",
    "text": "op[k,j]\n\nreturns the kth coefficient of op*Fun([zeros(j-1);1],domainspace(op)).\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.linsolve",
    "page": "Library",
    "title": "ApproxFun.linsolve",
    "category": "Function",
    "text": "linsolve(A,b;tolerance=tol,maxlength=n)\n\nsolves a linear equation, usually differential equation, where A is an operator or array of operators and b is a Fun or array of funs.  The result u will approximately satisfy A*u = b.\n\n\n\n"
},

{
    "location": "library.html#Base.LinAlg.qrfact-Tuple{ApproxFun.Operator}",
    "page": "Library",
    "title": "Base.LinAlg.qrfact",
    "category": "Method",
    "text": "qrfact(A::Operator)\n\nreturns a cached QR factorization of the Operator A.  The result QR enables solving of linear equations: if u=QR\\b, then u approximately satisfies A*u = b.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.cache-Tuple{ApproxFun.Operator}",
    "page": "Library",
    "title": "ApproxFun.cache",
    "category": "Method",
    "text": "cache(op::Operator)\n\nCaches the entries of an operator, to speed up multiplying a Fun by the operator.\n\n\n\n"
},

{
    "location": "library.html#Operators-1",
    "page": "Library",
    "title": "Operators",
    "category": "section",
    "text": "OperatordomainspacerangespaceBase.getindex(::Operator,::,::)linsolveqrfact(::Operator)cache(::Operator)"
},

{
    "location": "library.html#ApproxFun.Conversion",
    "page": "Library",
    "title": "ApproxFun.Conversion",
    "category": "Type",
    "text": "Conversion(fromspace::Space,tospace::Space)\n\nrepresents a conversion operator between fromspace and tospace, when available.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Derivative",
    "page": "Library",
    "title": "ApproxFun.Derivative",
    "category": "Type",
    "text": "Derivative(sp::Space,k::Int) represents the k-th derivative on sp.\n\n\n\nDerivative(sp::Space,k::Vector{Int}) represents a partial derivative on a multivariate space. For example,\n\nDx = Derivative(Chebyshev()^2,[1,0]) # ∂/∂x\nDy = Derivative(Chebyshev()^2,[0,1]) # ∂/∂y\n\n\n\nDerivative(sp::Space) represents the first derivative Derivative(sp,1).\n\n\n\nDerivative(k) represents the k-th derivative, acting on an unset space. Spaces will be inferred when applying or manipulating the operator.\n\n\n\nDerivative() represents the first derivative on an unset space. Spaces will be inferred when applying or manipulating the operator.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Integral",
    "page": "Library",
    "title": "ApproxFun.Integral",
    "category": "Type",
    "text": "Integral(sp::Space,k::Int) represents a k-th integral on sp. There is no guarantee on normalization.\n\n\n\nIntegral(sp::Space) represents the first integral Integral(sp,1).\n\n\n\nIntegral(k)represents thek`-th integral, acting on an unset space. Spaces will be inferred when applying or manipulating the operator.\n\n\n\nIntergral() represents the first integral on an unset space. Spaces will be inferred when applying or manipulating the operator.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Laplacian",
    "page": "Library",
    "title": "ApproxFun.Laplacian",
    "category": "Type",
    "text": "Laplacian(sp::Space) represents the laplacian on space sp.\n\n\n\nLaplacian() represents the laplacian on an unset space. Spaces will be inferred when applying or manipulating the operator.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Multiplication",
    "page": "Library",
    "title": "ApproxFun.Multiplication",
    "category": "Type",
    "text": "Multiplication(f::Fun,sp::Space) is the operator representing multiplication by f on functions in the space sp.\n\n\n\nMultiplication(f::Fun) is the operator representing multiplication by f on an unset space of functions.  Spaces will be inferred when applying or manipulating the operator.\n\n\n\n"
},

{
    "location": "library.html#Inbuilt-operators-1",
    "page": "Library",
    "title": "Inbuilt operators",
    "category": "section",
    "text": "ConversionDerivativeIntegralLaplacianMultiplication"
},

]}
