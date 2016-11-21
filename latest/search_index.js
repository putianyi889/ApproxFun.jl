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
    "text": ""
},

{
    "location": "index.html#ApproxFun.Arc",
    "page": "Home",
    "title": "ApproxFun.Arc",
    "category": "Type",
    "text": "Arc(c,r,(θ₁,θ₂))\n\nrepresents the arc centred at c with radius r from angle θ₁ to θ₂. \n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Circle",
    "page": "Home",
    "title": "ApproxFun.Circle",
    "category": "Type",
    "text": "Circle(c,r,o)\n\nrepresents the circle centred at c with radius r which is positively (o=true) or negatively (o=false) oriented.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Curve",
    "page": "Home",
    "title": "ApproxFun.Curve",
    "category": "Constant",
    "text": "Curve Represents a domain defined by the image of a Fun.  Example usage would be\n\nx=Fun([1,2])\nCurve(exp(im*x))  # represents an arc\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Disk",
    "page": "Home",
    "title": "ApproxFun.Disk",
    "category": "Type",
    "text": "Disk(c,r)\n\nrepresents the disk centred at c with radius r.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Interval",
    "page": "Home",
    "title": "ApproxFun.Interval",
    "category": "Type",
    "text": "Interval(a,b)\n\nrepresents an interval from a to b.  In the case where a and b are complex or 2-dimensional, it represents the line segment between a and b.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Line",
    "page": "Home",
    "title": "ApproxFun.Line",
    "category": "Type",
    "text": "Line{a}(c)\n\nrepresents the line at angle a in the complex plane, centred at c.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.PeriodicInterval",
    "page": "Home",
    "title": "ApproxFun.PeriodicInterval",
    "category": "Type",
    "text": "PeriodicInterval(a,b)\n\nrepresents a periodic interval from a to b, that is, the point b is identified with a.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.ProductDomain",
    "page": "Home",
    "title": "ApproxFun.ProductDomain",
    "category": "Type",
    "text": "ProductDomain((d1,d2))\n\nrepresents the product of two domains, the set {(x,y) : x ∈ d1 & y ∈ d2}.\n\nMultiplication of domains is overrident to return a ProductDomain. For example, the following represents the rectangle 1 ≤ x ≤ 2 & 3 ≤ y ≤ 4:\n\nInterval(1,2)*(3,4)\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.Ray",
    "page": "Home",
    "title": "ApproxFun.Ray",
    "category": "Type",
    "text": "Ray{a}(c,o)\n\nrepresents a ray at angle a starting at c, with orientation out to infinity (o = true) or back from infinity (o = false).\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.UnionDomain",
    "page": "Home",
    "title": "ApproxFun.UnionDomain",
    "category": "Type",
    "text": "UnionDomain((d1,d2,…,dn))\n\nrepresents a union of multiple subdomains: {x : x ∈ d1 || … || x ∈ dn}.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.∂",
    "page": "Home",
    "title": "ApproxFun.∂",
    "category": "Function",
    "text": "∂(domain)\n\nreturns the boundary of domain.  For example, the boundary of a Disk() is a Circle(), and the boundary of Interval()^2 is a piecewise interval that sketches the boundary of a rectangle.\n\n\n\n"
},

{
    "location": "index.html#Domains-1",
    "page": "Home",
    "title": "Domains",
    "category": "section",
    "text": "ArcCircleCurveDiskIntervalLinePeriodicIntervalProductDomainRayUnionDomain∂"
},

{
    "location": "index.html#ApproxFun.Fun",
    "page": "Home",
    "title": "ApproxFun.Fun",
    "category": "Type",
    "text": "Fun(coefficients,space)\n\nreturns a Fun with coefficients in the space\n\n\n\n"
},

{
    "location": "index.html#Constructing-a-Fun-1",
    "page": "Home",
    "title": "Constructing a Fun",
    "category": "section",
    "text": "Fun"
},

{
    "location": "index.html#ApproxFun.domain",
    "page": "Home",
    "title": "ApproxFun.domain",
    "category": "Function",
    "text": "domain(::Fun)\n\nreturns the domain that a Fun is defined on\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.coefficients",
    "page": "Home",
    "title": "ApproxFun.coefficients",
    "category": "Function",
    "text": "coefficients(fun,space)\n\nreturns the coefficients of a fun in a possibly different space\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.extrapolate",
    "page": "Home",
    "title": "ApproxFun.extrapolate",
    "category": "Function",
    "text": "extrapolate(fun,x)\n\nreturns an extrapolation of fun from its domain to x.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.ncoefficients",
    "page": "Home",
    "title": "ApproxFun.ncoefficients",
    "category": "Function",
    "text": "ncoefficients(fun) -> Integer\n\nreturns the number of coefficients of a fun\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.points",
    "page": "Home",
    "title": "ApproxFun.points",
    "category": "Function",
    "text": "points(fun)\n\nreturns a grid of points that the fun can be transformed into values and back\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.space",
    "page": "Home",
    "title": "ApproxFun.space",
    "category": "Function",
    "text": "space(fun)\n\nreturns the space of fun\n\n\n\n"
},

{
    "location": "index.html#Base.values",
    "page": "Home",
    "title": "Base.values",
    "category": "Function",
    "text": "values(fun)\n\nreturns fun evaluated at points(fun)\n\n\n\n"
},

{
    "location": "index.html#Accessing-information-about-a-Fun-1",
    "page": "Home",
    "title": "Accessing information about a Fun",
    "category": "section",
    "text": "domaincoefficientsextrapolatencoefficientspointsspaceApproxFun.values"
},

{
    "location": "index.html#ApproxFun.reverseorientation",
    "page": "Home",
    "title": "ApproxFun.reverseorientation",
    "category": "Function",
    "text": "reverseorientation(fun)\n\nreturn fun on a reversed orientated contour\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.setdomain",
    "page": "Home",
    "title": "ApproxFun.setdomain",
    "category": "Function",
    "text": "setdomain(fun,domain)\n\nreturns fun projected onto domain\n\n\n\n"
},

{
    "location": "index.html#Base.chop",
    "page": "Home",
    "title": "Base.chop",
    "category": "Function",
    "text": "chop(fun,tol)\n\nreduces the number of coefficients by dropping the tail that is below the specified tolerance.\n\n\n\n"
},

{
    "location": "index.html#Modify-a-Fun-1",
    "page": "Home",
    "title": "Modify a Fun",
    "category": "section",
    "text": "reverseorientationApproxFun.setdomainchop"
},

{
    "location": "index.html#ApproxFun.Operator",
    "page": "Home",
    "title": "ApproxFun.Operator",
    "category": "Type",
    "text": "Operator{T}\n\nis an abstract type to represent linear operators between spaces.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.linsolve",
    "page": "Home",
    "title": "ApproxFun.linsolve",
    "category": "Function",
    "text": "linsolve(A,b;tolerance=tol,maxlength=n)\n\nsolves a linear equation, usually differential equation, where A is an operator or array of operators and b is a Fun or array of funs.  The result u will approximately satisfy A*u = b.\n\n\n\n"
},

{
    "location": "index.html#Base.LinAlg.qrfact-Tuple{ApproxFun.Operator}",
    "page": "Home",
    "title": "Base.LinAlg.qrfact",
    "category": "Method",
    "text": "qrfact(A::Operator)\n\nreturns a cached QR factorization of the Operator A.  The result QR enables solving of linear equations: if u=QR\\b, then u approximately satisfies A*u = b.\n\n\n\n"
},

{
    "location": "index.html#ApproxFun.cache-Tuple{ApproxFun.Operator}",
    "page": "Home",
    "title": "ApproxFun.cache",
    "category": "Method",
    "text": "cache(operator)\n\nCaches the entries of an operator, to speed up multiplying a Fun by the operator.\n\n\n\n"
},

{
    "location": "index.html#Operators-1",
    "page": "Home",
    "title": "Operators",
    "category": "section",
    "text": "Operatorlinsolveqrfact(::Operator)cache(::Operator)"
},

{
    "location": "faq.html#",
    "page": "FAQ",
    "title": "FAQ",
    "category": "page",
    "text": ""
},

{
    "location": "faq.html#Frequently-Asked-Questions-1",
    "page": "FAQ",
    "title": "Frequently Asked Questions",
    "category": "section",
    "text": ""
},

{
    "location": "faq.html#Approximating-functions-1",
    "page": "FAQ",
    "title": "Approximating functions",
    "category": "section",
    "text": ""
},

{
    "location": "faq.html#How-do-I-interpolate-a-function-at-a-specified-grid?-1",
    "page": "FAQ",
    "title": "How do I interpolate a function at a specified grid?",
    "category": "section",
    "text": "In the case where the grid is specified by points(space,n), you can apply the default transform to data:S = Chebyshev([1,2])  \np = points(S,20) # the default grid\nv = exp.(p)      # values at the default grid\nf = Fun(ApproxFun.transform(S,vals),S)ApproxFun has no inbuilt support for interpolating functions at other sets of points, but this can be accomplished manually by evaluating the basis at the set of points and using \\:S = Chebyshev([1,2])  \nn = 50\np = linspace(1,2,n)  # a non-default grid\nv = exp.(p)           # values at the non-default grid\n# Create a Vandermonde matrix by evaluating the basis at the grid\nV = Array(Float64,n,n)\nfor k = 1:n\n    V[:,k] = Fun([zeros(k-1);1],S)(p)\nend\nf = Fun(V\\v,S)   Note that an evenly spaced grid suffers from instability for large n.  The easiest way around this is to use least squares with more points than coefficients, instead of interpolation:S = Chebyshev([1,2])  \nn = 100; m = 50\np = linspace(1,2,n)  # a non-default grid\nv = exp.(p)           # values at the non-default grid\n# Create a Vandermonde matrix by evaluating the basis at the grid\nV = Array(Float64,n,m)\nfor k = 1:m\n    V[:,k] = Fun([zeros(k-1);1],S)(p)\nend\nf = Fun(V\\v,S)   "
},

]}
