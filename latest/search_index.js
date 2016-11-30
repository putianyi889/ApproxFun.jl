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
    "text": "ApproxFun is a package for approximating and manipulating functions, and for solving differential and integral equations.  Pages = [\"usage/constructors.md\",\n         \"usage/domains.md\",\n         \"usage/spaces.md\",\n         \"usage/operators.md\",\n         \"faq.md\",\n         \"library.md\"]"
},

{
    "location": "usage/domains.html#",
    "page": "Domains",
    "title": "Domains",
    "category": "page",
    "text": ""
},

{
    "location": "usage/domains.html#Domains-1",
    "page": "Domains",
    "title": "Domains",
    "category": "section",
    "text": "Domain is an abstract type whose subtypes represent oriented domains on which we wish to approximate functions.   Examples include Interval, Ray, Line and Arc.   Periodic domains include PeriodicInterval, PeriodicLine and Circle."
},

{
    "location": "usage/domains.html#Relationship-with-spaces-1",
    "page": "Domains",
    "title": "Relationship with spaces",
    "category": "section",
    "text": "Every domain d has a default space, constructed via Space(d).  For example, the default space for Interval() is Chebyshev(Interval()), which is efficient for representing smooth functions.  On the other hand, the default space for PeriodicInterval() is Fourier(Interval()), which uses trigonometric polynomials to approximate periodic functions.  "
},

{
    "location": "usage/domains.html#Manipulating-domains-1",
    "page": "Domains",
    "title": "Manipulating domains",
    "category": "section",
    "text": "Domains can be manipulated to make more complicated domains.  For example, you can take the union of an interval and a circleInterval() ∪ Circle(3,0.5)    # equivalent to union(Interval(),Circle(3,0.5))and the following creates a rectangle [0,1]^2:rect=Interval(0,1)^2Some other set operations are partially implemented:Interval(0,2) ∩ Interval() # returns Interval(0,1)"
},

{
    "location": "usage/spaces.html#",
    "page": "Spaces",
    "title": "Spaces",
    "category": "page",
    "text": ""
},

{
    "location": "usage/spaces.html#Spaces-1",
    "page": "Spaces",
    "title": "Spaces",
    "category": "section",
    "text": "A Space is an abstract type whose subtypes indicate which space a function lives in. This typically corresponds to the span of a (possibly infinite) basis."
},

{
    "location": "usage/spaces.html#Chebyshev-space-1",
    "page": "Spaces",
    "title": "Chebyshev space",
    "category": "section",
    "text": "The default space in ApproxFun is Chebyshev, which represents expansions in Chebyshev polynomials:f(x) = sum_k=0^infty f_k T_k(x)where T_k(x) = cos k rm acos x.   Note that there is an intrinsic link between Chebyshev and CosSpace:  g(theta) = f(cos theta) = sum_k=0^infty f_k cos k thetaIn other words:DocTestSetup = quote\n    using ApproxFun\nendjulia> f=Fun(exp,Chebyshev());\n\njulia> g=Fun(CosSpace(),f.coefficients); # specify the coefficients directly\n\njulia> f(cos(0.1))\n2.70473560723178\n\njulia> g(0.1)\n2.70473560723178"
},

{
    "location": "usage/spaces.html#Ultraspherical-spaces-1",
    "page": "Spaces",
    "title": "Ultraspherical spaces",
    "category": "section",
    "text": "A key tool for solving differential equations are the ultraspherical spaces, which can be defined by the span of derivatives of Chebyshev polynomials.  Note that Ultraspherical(1) corresponds to the Chebyshev basis of the second kind: U_k(x) = sin (k+1) rm acos x over sin rm acos x.   The relationship with Chebyshev polynomials follows from trigonemetric identities: T_k(x) = k U_k-1(x).  Converting between ultraspherical polynomials (with integer orders) is extremely efficient: it requires O(n) operations, where n is the number of coefficients."
},

{
    "location": "usage/spaces.html#Fourier-and-Laurent-spaces-1",
    "page": "Spaces",
    "title": "Fourier and Laurent spaces",
    "category": "section",
    "text": "There are several different spaces to represent functions on periodic domains, which are typically a PeriodicInterval, Circle or PeriodicLine.  CosSpace represents expansion in cosine series:f(theta) = sum_k=0^infty f_k cos k thetaSinSpace represents expansion in sine series:f(theta) = sum_k=0^infty f_k sin (k+1) thetaTaylor represents expansion with only non-negative complex exponential terms:f(theta) = sum_k=0^infty f_k rm e^rm i k thetaHardy{false} represents expansion with only negative complex exponential terms:f(theta) = sum_k=0^infty f_k rm e^-rm i (k+1) thetaFourier represents functions that are sums of sines and cosines.  Note that if a function has the formf(theta) = f_0 + sum_k=1^infty f_k^rm c cos k theta + f_k^rm s sin kthetathen the coefficients of the resulting Fun are order as f_0f_1^rm sf_1^rm c. For example:julia> f = Fun(Fourier(),[1,2,3,4]);\n\njulia> f(0.1)\n4.979356652307978\n\njulia> 1 + 2sin(0.1) + 3cos(0.1) + 4sin(2*0.1)\n4.979356652307979Laurent represents functions that are sums of complex exponentials.  Note that if a function has the formf(theta) = sum_k=-infty^infty f_k rm e^rm i k thetathen the coefficients of the resulting Fun are order as f_0f_-1f_1. For example:julia> f = Fun(Laurent(),[1,2,3,4]);\n\njulia> f(0.1)\n9.895287137755096 - 0.6948439065334164im\n\njulia> 1 + 2exp(-im*0.1) + 3exp(im*0.1) + 4exp(-2im*0.1)\n9.895287137755094 - 0.6948439065334167im"
},

{
    "location": "usage/spaces.html#Modifier-spaces-1",
    "page": "Spaces",
    "title": "Modifier spaces",
    "category": "section",
    "text": "Some spaces are built out of other spaces.  A simple example is JacobiWeight(β,α,space) which weights space, which is typically Chebyshev() or Jacobi(b,a),  by a Jacobi weight (1+x)^β*(1-x)^a.@meta  DocTestSetup = nothing"
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
    "text": "Funs in ApproxFun are instances of Julia types with one field to store coefficients and another to describe the function space. Similarly, each function space has one field describing its domain, or another function space. Let's explore:DocTestSetup = quote\n    using ApproxFun\nendjulia> x = Fun(identity,-1..1);\n\njulia> f = exp(x);\n\njulia> g = f/sqrt(1-x^2);\n\njulia> space(f)   # Output is pretty version of Chebyshev(Interval(-1.0,1.0))\nChebyshev(【-1.0,1.0】)\n\njulia> space(g)   # Output is pretty version of  JacobiWeight(-0.5,-0.5,Interval(-1.0,1.0))\n(1-x^2)^-0.5[Chebyshev(【-1.0,1.0】)]The absolute value is another case where the space of the output is inferred from the operation:julia> f = Fun(x->cospi(5x),-1..1);\n\njulia> g = abs(f);\n\njulia> space(f)   \nChebyshev(【-1.0,1.0】)\n\njulia> space(g)\nChebyshev(【-1.0,-0.9000000000000002】)⨄Chebyshev(【-0.9000000000000002,-0.6999999999999996】)⨄Chebyshev(【-0.6999999999999996,-0.5000000000000001】)⨄Chebyshev(【-0.5000000000000001,-0.30000000000000043】)⨄Chebyshev(【-0.30000000000000043,-0.09999999999999962】)⨄Chebyshev(【-0.09999999999999962,0.10000000000000053】)⨄Chebyshev(【0.10000000000000053,0.29999999999999966】)⨄Chebyshev(【0.29999999999999966,0.500000000000001】)⨄Chebyshev(【0.500000000000001,0.6999999999999998】)⨄Chebyshev(【0.6999999999999998,0.9000000000000006】)⨄Chebyshev(【0.9000000000000006,1.0】)"
},

{
    "location": "usage/constructors.html#Convenience-constructors-1",
    "page": "Constructors",
    "title": "Convenience constructors",
    "category": "section",
    "text": "The default space is Chebyshev, which can represent non-periodic functions on intervals.  Each Space type has a default domain: for Chebyshev this is -1..1, for Fourier and Laurent this is -π..π.  Thus the following are synonyms:Fun(exp,Chebyshev(Interval(-1,1)))\nFun(exp,Chebyshev(Interval()))\nFun(exp,Chebyshev(-1..1))\nFun(exp,Chebyshev())\nFun(exp,-1..1)\nFun(exp,Interval())\nFun(exp,Interval(-1,1))\nFun(exp)If a function is not specified, then it is taken to be identity.  Thus we have the following synonyms:x = Fun(identity,-1..1)\nx = Fun(-1..1)\nx = Fun(identity)\nx = Fun()"
},

{
    "location": "usage/constructors.html#Specifying-coefficients-explicitly-1",
    "page": "Constructors",
    "title": "Specifying coefficients explicitly",
    "category": "section",
    "text": "It is sometimes necessary to specify coefficients explicitly.  This is possible via specifying the space followed by a vector of coefficients:julia> f = Fun(Taylor(),[1,2,3]);  # represents 1 + 2z + 3z^2\n\njulia> f(0.1)\n1.23\n\njulia> 1+2*0.1+3*0.1^2\n1.23"
},

{
    "location": "usage/constructors.html#Using-ApproxFun-for-“manual”-interpolation-1",
    "page": "Constructors",
    "title": "Using ApproxFun for “manual” interpolation",
    "category": "section",
    "text": "The ApproxFun package for Julia implements all of the necessary operations for Chebyshev interpolation and operations (like differentiation or integration) on Chebyshev interpolants.Normally, you give it a function f and a domain d, and construct the Chebyshev interpolant by fc = Fun(f, d). The ApproxFun package figures out the necessary number of Chebyshev points (i.e., the polynomial order) required to interpolate f to nearly machine precision, so that subsequent operations on fc can be viewed as \"exact\".However, in cases where the function to be interpolated is extremely expensive, and possibly even is evaluated by an external program, it is convenient to be able to decide on the desired Chebyshev order in advance, evaluate the function at those points \"manually\", and then construct the Chebyshev interpolant. However, this procedure isn't documented in the ApproxFun manual. In this notebook, we show how to do that for the example f(x) = exp(2x) on the domain 0..1.DocTestSetup = nothing"
},

{
    "location": "usage/operators.html#",
    "page": "Operators",
    "title": "Operators",
    "category": "page",
    "text": ""
},

{
    "location": "usage/operators.html#Operators-1",
    "page": "Operators",
    "title": "Operators",
    "category": "section",
    "text": "DocTestSetup = quote\n    using ApproxFun\nendLinear operators between two spaces in ApproxFun are represented by subtypes of Operator.  Every operator has a domainspace and rangespace. That is, if a Fun f has the space domainspace(op), thenop*f is a Fun with space rangespace(op).Note that the size of an operator is specified by the dimension of the domain and range space.  "
},

{
    "location": "usage/operators.html#Calculus-operators-1",
    "page": "Operators",
    "title": "Calculus operators",
    "category": "section",
    "text": "Differential and integral operators are perhaps the most useful type of operators in mathematics.  Consider the derivative operator on CosSpace:julia> D = Derivative(CosSpace())\nConcreteDerivative:CosSpace(【-3.141592653589793,3.141592653589793❫)→SinSpace(【-3.141592653589793,3.141592653589793❫)\n 0.0  -1.0                                                   \n       0.0  -2.0                                             \n             0.0  -3.0                                       \n                   0.0  -4.0                                 \n                         0.0  -5.0                           \n                               0.0  -6.0                     \n                                     0.0  -7.0               \n                                           0.0  -8.0         \n                                                 0.0  -9.0   \n                                                       0.0  ⋱\n                                                            ⋱\n\njulia> f = Fun(θ->cos(cos(θ)),CosSpace());\n\njulia> fp = D*f;\n\njulia> fp(0.1) ≈ f'(0.1) ≈ sin(cos(0.1))*sin(0.1)\ntrueHere, we specified the domain space for the derivative operator, and it automatically determined the range space:DocTestSetup = quote\n    using ApproxFun\n    D = Derivative(CosSpace())\n    f = Fun(θ->cos(cos(θ)),CosSpace())\n    fp = D*f\nendjulia> rangespace(D) == space(fp) == SinSpace()\ntrueOperators can be identified with infinite-dimensional matrices, whose entries are given by the canonical bases in the domain and range space.  In this case, the relevant formula is D cos k theta = -k sin k theta That is, the (k,k+1)th entry is as follows:julia> k,j = 5,6;\n\njulia> ej = Fun(domainspace(D),[zeros(j-1);1]);\n\njulia> D[k,j] ≈ (D*ej).coefficients[k] ≈ -k\ntrueThe Chebyshev space has the property that its derivatives are given by ultraspherical spaces:julia> Derivative(Chebyshev())\nConcreteDerivative:Chebyshev(【-1.0,1.0】)→Ultraspherical(1,【-1.0,1.0】)\n 0.0  1.0                                           \n      0.0  2.0                                      \n           0.0  3.0                                 \n                0.0  4.0                            \n                     0.0  5.0                       \n                          0.0  6.0                  \n                               0.0  7.0             \n                                    0.0  8.0        \n                                         0.0  9.0   \n                                              0.0  ⋱\n                                                   ⋱"
},

{
    "location": "usage/operators.html#Functionals-1",
    "page": "Operators",
    "title": "Functionals",
    "category": "section",
    "text": "A particularly useful class of operators are _functionals_, which map from functions to scalar numbers.  These are represented by operators of size 1 × ∞: that is, infinite-dimensional analogues of row vectors.As an example, the evaluation functional f(0) on CosSpace has the form:julia> B = Evaluation(CosSpace(),0)\nConcreteEvaluation:CosSpace(【-3.141592653589793,3.141592653589793❫)→ConstantSpace(Point(0))\n 1.0  1.0  1.0  1.0  1.0  1.0  1.0  1.0  1.0  1.0  ⋯\n\njulia> B*f ≈ f(0)\ntrueAs can be seen from the output, rangespace(B) is a ConstantSpace(Point(0)), a one-dimensional space used to represent scalars whose domain is a single point, 0."
},

{
    "location": "usage/operators.html#Algebraic-manipulation-of-operators-1",
    "page": "Operators",
    "title": "Algebraic manipulation of operators",
    "category": "section",
    "text": "Operators can be algebraically manipulated, provided that the domain and range spaces are compatible, or can be made compatible.   As a simple example, we can add the second derivative of a Fourier space to the identity operator:julia> D2 = Derivative(Fourier(),2)\nDerivativeWrapper:Fourier(【-3.141592653589793,3.141592653589793❫)→Fourier(【-3.141592653589793,3.141592653589793❫)\n 0.0   0.0                                                      \n 0.0  -1.0   0.0                                                \n       0.0  -1.0   0.0                                          \n             0.0  -4.0   0.0                                    \n                   0.0  -4.0   0.0                              \n                         0.0  -9.0   0.0                        \n                               0.0  -9.0    0.0                 \n                                     0.0  -16.0    0.0          \n                                            0.0  -16.0    0.0   \n                                                   0.0  -25.0  ⋱\n                                                           ⋱   ⋱\n\njulia> D2 + I\nPlusOperator:Fourier(【-3.141592653589793,3.141592653589793❫)→Fourier(【-3.141592653589793,3.141592653589793❫)\n 1.0  0.0                                                     \n 0.0  0.0  0.0                                                \n      0.0  0.0   0.0                                          \n           0.0  -3.0   0.0                                    \n                 0.0  -3.0   0.0                              \n                       0.0  -8.0   0.0                        \n                             0.0  -8.0    0.0                 \n                                   0.0  -15.0    0.0          \n                                          0.0  -15.0    0.0   \n                                                 0.0  -24.0  ⋱\n                                                         ⋱   ⋱When the domain and range space are not the same, the identity operator becomes a conversion operator.  That is, to represent D+I acting on the Chebyshev space, we would do the following:julia> D = Derivative(Chebyshev())\nConcreteDerivative:Chebyshev(【-1.0,1.0】)→Ultraspherical(1,【-1.0,1.0】)\n 0.0  1.0                                           \n      0.0  2.0                                      \n           0.0  3.0                                 \n                0.0  4.0                            \n                     0.0  5.0                       \n                          0.0  6.0                  \n                               0.0  7.0             \n                                    0.0  8.0        \n                                         0.0  9.0   \n                                              0.0  ⋱\n                                                   ⋱\n\njulia> C = Conversion(Chebyshev(),Ultraspherical(1))\nConcreteConversion:Chebyshev(【-1.0,1.0】)→Ultraspherical(1,【-1.0,1.0】)\n 1.0  0.0  -0.5                                             \n      0.5   0.0  -0.5                                       \n            0.5   0.0  -0.5                                 \n                  0.5   0.0  -0.5                           \n                        0.5   0.0  -0.5                     \n                              0.5   0.0  -0.5               \n                                    0.5   0.0  -0.5         \n                                          0.5   0.0  -0.5   \n                                                0.5   0.0  ⋱\n                                                      0.5  ⋱\n                                                           ⋱\n\njulia> D + C\nPlusOperator:Chebyshev(【-1.0,1.0】)→Ultraspherical(1,【-1.0,1.0】)\n 1.0  1.0  -0.5                                             \n      0.5   2.0  -0.5                                       \n            0.5   3.0  -0.5                                 \n                  0.5   4.0  -0.5                           \n                        0.5   5.0  -0.5                     \n                              0.5   6.0  -0.5               \n                                    0.5   7.0  -0.5         \n                                          0.5   8.0  -0.5   \n                                                0.5   9.0  ⋱\n                                                      0.5  ⋱\n                                                           ⋱ApproxFun can automatically determine the spaces, so if one writes D + I it will translate it to D + C.  Now consider the Fredholm integral operator of the second kind:L u = u + rm e^x int_-1^1 u(x) rm dxWe can construct this usingjulia> x = Fun();\n\njulia> Q = DefiniteIntegral(Chebyshev())\nConcreteDefiniteIntegral:Chebyshev(【-1.0,1.0】)→ConstantSpace\n 2.0  0.0  -0.666667  0.0  -0.133333  0.0  -0.0571429  0.0  -0.031746  0.0  ⋯\n\njulia> L = I + exp(x)*Q\nLowRankPertOperator:Chebyshev(【-1.0,1.0】)→Chebyshev(【-1.0,1.0】)\n 3.53213     0.0  -0.844044     0.0  …  0.0  -0.0401926    0.0  ⋯\n 2.26064     1.0  -0.753545     0.0     0.0  -0.0358831    0.0  ⋱\n 0.542991    0.0   0.819003     0.0     0.0  -0.0086189    0.0  ⋱\n 0.0886737   0.0  -0.0295579    1.0     0.0  -0.00140752   0.0  ⋱\n 0.0109485   0.0  -0.00364949   0.0     0.0  -0.000173785  0.0  ⋱\n 0.00108585  0.0  -0.000361951  0.0  …  0.0  -1.72358e-5   0.0  ⋱\n 8.99546e-5  0.0  -2.99849e-5   0.0     0.0  -1.42785e-6   0.0  ⋱\n 6.39687e-6  0.0  -2.13229e-6   0.0     1.0  -1.01538e-7   0.0  ⋱\n 3.98425e-7  0.0  -1.32808e-7   0.0     0.0   1.0          0.0  ⋱\n 2.20735e-8  0.0  -7.35785e-9   0.0     0.0  -3.50374e-10  1.0  ⋱\n  ⋮           ⋱     ⋱            ⋱   …   ⋱     ⋱            ⋱   ⋱\n\njulia> u = cos(10x^2);\n\njulia> (L*u)(0.1)\n1.3777980523127333\n\njulia> u(0.1) + exp(0.1)*sum(u)\n1.3777980523127336Note that DefiniteIntegral is a functional, i.e., a 1 × ∞ operator.  when multiplied on the left by a function, it automatically constructs the operator rm e^x int_-1^1 f(x) dx viaDocTestSetup = quote\n    using ApproxFun\n    x = Fun()\n    Q = DefiniteIntegral(Chebyshev())\nendjulia> M = Multiplication(exp(x),ConstantSpace())\nConcreteMultiplication:ConstantSpace→Chebyshev(【-1.0,1.0】)\n 1.26607    \n 1.13032    \n 0.271495   \n 0.0443368  \n 0.00547424\n 0.000542926\n 4.49773e-5\n 3.19844e-6\n 1.99212e-7\n 1.10368e-8\n  ⋮         \n\njulia> M*Q\nTimesOperator:Chebyshev(【-1.0,1.0】)→Chebyshev(【-1.0,1.0】)\n 2.53213     0.0  -0.844044     0.0  …  0.0  -0.0401926    0.0  ⋯\n 2.26064     0.0  -0.753545     0.0     0.0  -0.0358831    0.0  ⋱\n 0.542991    0.0  -0.180997     0.0     0.0  -0.0086189    0.0  ⋱\n 0.0886737   0.0  -0.0295579    0.0     0.0  -0.00140752   0.0  ⋱\n 0.0109485   0.0  -0.00364949   0.0     0.0  -0.000173785  0.0  ⋱\n 0.00108585  0.0  -0.000361951  0.0  …  0.0  -1.72358e-5   0.0  ⋱\n 8.99546e-5  0.0  -2.99849e-5   0.0     0.0  -1.42785e-6   0.0  ⋱\n 6.39687e-6  0.0  -2.13229e-6   0.0     0.0  -1.01538e-7   0.0  ⋱\n 3.98425e-7  0.0  -1.32808e-7   0.0     0.0  -6.32421e-9   0.0  ⋱\n 2.20735e-8  0.0  -7.35785e-9   0.0     0.0  -3.50374e-10  0.0  ⋱\n  ⋮           ⋱     ⋱            ⋱   …   ⋱     ⋱            ⋱   ⋱DocTestSetup = nothing"
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
    "text": "In the case where the grid is specified by points(space,n), you can apply the default transform to data:DocTestSetup = quote\n    using ApproxFun\nendjulia> S = Chebyshev(1..2);\n\njulia> p = points(S,20); # the default grid\n\njulia> v = exp.(p);      # values at the default grid\n\njulia> f = Fun(S,ApproxFun.transform(S,v));\n\njulia> f(1.1)\n3.0041660239464347\n\njulia> exp(1.1)\n3.0041660239464334ApproxFun has no inbuilt support for interpolating functions at other sets of points, but this can be accomplished manually by evaluating the basis at the set of points and using \\:julia> S = Chebyshev(1..2);\n\njulia> n = 50;\n\njulia> p = linspace(1,2,n);   # a non-default grid\n\njulia> v = exp.(p);           # values at the non-default grid\n\njulia> V = Array(Float64,n,n); # Create a Vandermonde matrix by evaluating the basis at the grid\n\njulia> for k = 1:n\n           V[:,k] = Fun(S,[zeros(k-1);1]).(p)\n       end\n\njulia> f = Fun(S,V\\v);\n\njulia> f(1.1)\n3.0041660228311926\n\njulia> exp(1.1)\n3.0041660239464334Note that an evenly spaced grid suffers from instability for large n.  The easiest way around this is to use least squares with more points than coefficients, instead of interpolation:julia> S = Chebyshev(1..2);\n\njulia> n = 100; m = 50;\n\njulia> p = linspace(1,2,n);   # a non-default grid\n\njulia> v = exp.(p);           # values at the non-default grid\n\njulia> V = Array(Float64,n,m); # Create a Vandermonde matrix by evaluating the basis at the grid\n\njulia> for k = 1:m\n           V[:,k] = Fun(S,[zeros(k-1);1]).(p)\n       end\n\njulia> f = Fun(S,V\\v);\n\njulia> f(1.1)\n3.004166023946434\n\njulia> exp(1.1)\n3.0041660239464334We can use this same approach for multivariate functions:julia> S = Chebyshev(0..1)^2;\n\njulia> n = 1000; m = 50;\n\njulia> srand(0); x = rand(n); y = rand(n);\n\njulia> v = exp.(x .* cos(y));  # values at the non-default grid\n\njulia> V = Array(Float64,n,m); # Create a Vandermonde matrix by evaluating the basis at the grid\n\njulia> for k = 1:m\n          V[:,k] = Fun(S,[zeros(k-1);1]).(x,y)\n       end\n\n\njulia> f = Fun(S,V\\v);\n\njulia> f(0.1,0.2)\n1.1029700685084018\n\njulia> exp(0.1*cos(0.2))\n1.1029701284210731DocTestSetup = nothing"
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
    "text": "Arc(c,r,(θ₁,θ₂))\n\nrepresents the arc centred at c with radius r from angle θ₁ to θ₂.\n\n\n\n"
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
    "category": "Function",
    "text": "Interval(a::Real,b::Real)\n\nrepresents the set {x : a ≤ x ≤ b}.\n\n\n\n"
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
    "location": "library.html#ApproxFun.Jacobi",
    "page": "Library",
    "title": "ApproxFun.Jacobi",
    "category": "Type",
    "text": "Jacobi(b,a) represents the space spanned by Jacobi polynomials P_k^{(a,b)}, which are orthogonal with respect to the weight (1+x)^β*(1-x)^α\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.Ultraspherical",
    "page": "Library",
    "title": "ApproxFun.Ultraspherical",
    "category": "Type",
    "text": "Ultraspherical(λ) is the space spanned by the ultraspherical polynomials\n\n    C_0^{(λ)}(x),C_1^{(λ)}(x),C_2^{(λ)}(x),…\n\nNote that λ=1 this reduces to Chebyshev polynomials of the second kind: C_k^{(1)}(x) = U_k(x).\n\n\n\n"
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
    "location": "library.html#ApproxFun.JacobiWeight",
    "page": "Library",
    "title": "ApproxFun.JacobiWeight",
    "category": "Type",
    "text": "JacobiWeight(β,α,s::Space)\n\nweights a space s by a Jacobi weight, which on -1..1 is (1+x)^β*(1-x)^α. For other domains, the weight is inferred by mapping to -1..1.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.LogWeight",
    "page": "Library",
    "title": "ApproxFun.LogWeight",
    "category": "Type",
    "text": "LogWeight(β,α,s::Space)\n\nrepresents a function on -1..1 weighted by log((1+x)^β*(1-x)^α). For other domains, the weight is inferred by mapping to -1..1.\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.ArraySpace",
    "page": "Library",
    "title": "ApproxFun.ArraySpace",
    "category": "Type",
    "text": "ArraySpace(s::Space,dims...)\n\nis used to represent array-valued expansions in a space s.  The coefficients are of each entry are interlaced.\n\nFor example,\n\nf = Fun(x->[exp(x),sin(x)],-1..1)\nspace(f) == ArraySpace(Chebyshev(),2)\n\n\n\n"
},

{
    "location": "library.html#ApproxFun.TensorSpace",
    "page": "Library",
    "title": "ApproxFun.TensorSpace",
    "category": "Type",
    "text": "TensorSpace(a::Space,b::Space)\n\nrepresents a tensor product of two 1D spaces a and b. The coefficients are interlaced in lexigraphical order.\n\nFor example, consider\n\nFourier()*Chebyshev()  # returns TensorSpace(Fourier(),Chebyshev())\n\nThis represents functions on [-π,π) x [-1,1], using the Fourier basis for the first argument and Chebyshev basis for the second argument, that is, φ_k(x)T_j(y), where\n\nφ_0(x) = 1,\nφ_1(x) = sin x,\nφ_2(x) = cos x,\nφ_3(x) = sin 2x,\nφ_4(x) = cos 2x\n…\n\nBy Choosing (k,j) appropriately, we obtain a single basis:\n\nφ_0(x)T_0(y) (= 1),\nφ_0(x)T_1(y) (= y),\nφ_1(x)T_0(y) (= sin x),\nφ_0(x)T_2(y), …\n\n\n\n"
},

{
    "location": "library.html#Inbuilt-spaces-1",
    "page": "Library",
    "title": "Inbuilt spaces",
    "category": "section",
    "text": "SequenceSpaceConstantSpaceChebyshevJacobiUltrasphericalTaylorHardy{false}FourierLaurentCosSpaceSinSpaceJacobiWeightApproxFun.LogWeightApproxFun.ArraySpaceTensorSpace"
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
