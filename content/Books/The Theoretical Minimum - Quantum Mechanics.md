---
created: 2025-04-06T14:48
modified: 2025-04-06T15:14
tags:
  - Book
  - Physics
  - Quantum-Mechanics
---
My notes and summary of the book _"The Theoretical Minimum: Quantum Mechanics_ by Leonard Susskind

# Chapter 1 - Systems and Experiments
### 1.1 - QM is Different
QM deals with small objects, atoms are on the upper end of scale in size. Electrons frequently used as object of study. Sensory organs cant detect electrons, the best we can do to understand electrons and their motion is to treat them as mathematical abstraction.

1. States behave differently than in classical mechanics and have different logical structure
2. Measurement and states are different things, they posess different labels.

### 1.2 - Spins and Qubits

Spin is extra degree of freedom attached to a particle. Naively, could be thought of as an arrow pointing in some direction, but this picture is too classical to accurately represent the real situation.

Spin abstracted away from the electron is the simplest and most quantum system. Isolated quantum spin is an example of the general class of systems we call _qubits_-quantum bits. Play the same role in the quantum world as classical bits in computers in the classical world. Two state system $\equiv$ bit. 

Degree of freedom $\sigma$, can be +1 or -1 in the classical space of states. In QM this system can be thought of as a qubit. Many systems - maybe all - can be built up by combining qubits. 

### 1.3 - An Experiment

Experiment involves more than just a system, also involves an apparatus $\mathcal{A}$ to make measurements and record results. Thought of as a "black box" with "this end up" arrow on it, direction will affect the result of measurement. Begin in the +z direction, initially don't know $\sigma$. Result will show +1 or -1 in window.

 Evolution of $\sigma(n)$ from instant to instant in the simplest case, nothing happens $\sigma(n+1)=\sigma(n)$. If we measure $\sigma = +1$, a subsequent measurement should confirm this by showing the same result. We say the first interaction with apparatus $\mathcal{A}$ _prepares_ the system in one of the two states. Subsequent measurements _confirms_ that state. So far nothing different than classical mechanics.

If flip apparatus upside down and measure spin that was initially found to be +1, we find -1. So there must be some sense of spatial direction, so could be thought of as a vector. We would then assume their to be components, $\sigma_x$, $\sigma_y$, $\sigma_z$. When the apparatus is upright, it measures the component of the spin vector along the z-direction. Still nothing different than in classical mechanics.

Next, the apparatus begins upright in z-direction, prepares the state in $\sigma = +1$. Rotate $\mathcal{A}$ by 90 degrees, pointing along x-direction, then measure x-component of spin. If it is a vector along the up arrow, should get 0 since x and z are orthogonal. Instead we get $\sigma_x = \pm1$. $\mathcal{A}$ always gives $\pm1$. If we repeat this experiment over and over, with spin initially measured along z, then measure it along x, the result is a random series of +1 and -1. Determinism has broken down, but we do know that 50\% turn out +1 and 50\% turn out -1. The average is zero, instead of classically the component is zero.

If the apparatus is directed along arbitrary unit vector, $\hat{m}$, the spin measured, then rotated about an angle, $\theta$, along a new unit vector $\hat{n}$, the statistical average of the measurement of the spin along $\hat{n}$ is
$$
\langle\sigma\rangle = \hat{m} \cdot \hat{n}
$$
### 1.4 - Experiments Are Never Gentle
You can never learn something about the quantum system without changing something else. Suppose we measured $\sigma = +1$ along the z-axis. Successive measurements always confirm this. If however, in between successive measurements, turned $\mathcal{A}$ along x-axis and made a measurement, all information about the spin along the z-direction is lost, it results in a random value. We cannot know the components of spin along two direction simultaneously. You can technically, but not in a reproducible way.

### 1.5 - Propositions
Classically space of states is a set. A coin's space of states is a set of two elements \{H, T\}, a die's is \{1,2,3,4,5,6\}. The logic of set theory is _Boolean logic_, a formalized version of classical logic of propositions. Fundamental idea of BL is truth value of a proposition, either T or F. Related set theory concept is subset. A proposition is true for all elements in its subset and false for elements not. Example, the set of the possible states of a die {1,2,3,4,5,6}. The proposition

- _A_:  The die shows an odd-numbered face. The corresponding subset is {1,3,5}.

Every proposition has a negation, which is its opposite, 

- not A: The die does not show an odd-numbered face. The corresponding subset is {2,4,6}.

Rules for combining propositions into more complex propositions use the connectives __and__, __or__, and __not__. __Not__ was used in the example above. __And__ applies to a pair of propositions saying they are both true. It gives the elements in common between two subsets, that is, the _intersection_ of the subsets. Boolean logic uses the inclusive version of __Or__, which is true if either or both of the propositions are true. Inclusive or has a set theoretic interpretation as the _union_ of two sets. Applied to two subsets, it gives the elements in either or both of the subsets.

### 1.6 - Testing Classical Propositions
In the spins example we have two propositions which we can test the truth value of using the apparatus $\mathcal{A}$
$$
\mathrm{A:\ \sigma_z=+1}
$$
$$
\mathrm{B:\ \sigma_x=+1}
$$
We can evaluate each of the relations __NOT__, __OR__, and __AND__. 
$$
\mathrm{\textbf{NOT}\ A:\ \sigma_z=-1}
$$
We can also evaluate composite propositions
$$
\mathrm{A\ \textbf{OR}\ B:\ \sigma_z=+1\ \textbf{OR}\ \sigma_x=+1}
$$
$$
\mathrm{A\ \textbf{AND}\ B:\ \sigma_z=+1\ \textbf{AND}\ \sigma_x=+1}
$$
Considering how we would test the propositon (A __OR__ B). If the spins behaved classically, we could gently measure $\sigma_z$ and record the value. If it is +1 then the proposition is _true_. If it is -1, then we measure $\sigma_x$, if it is +1 then the proposition is _true_ if it is -1 then the proposition is _false_.

Alternatively we could change the order of measurements, measuring $\sigma_x$ first. This procedure could be called (B __OR__ A). In classical physics, the two orders give the same answer. The measurements are so gentle that they do not affect the results of subsequent measurements. Therefor (A __OR__ B) has the same meaning as (B __OR__ A).

### 1.7 - Testing Quantum Propositions
Something unknown to us has prepared the spin to be $\sigma_z = +1$. Our job is to us $\mathcal{A}$ to determine if (A __OR__ B) is true or false using the above procedure.

Begin by measuring $\sigma_z$. Since the unknown agent set this up, we will find it to be $\sigma_z = +1$, thus (A __OR__ B) is _true_. We could still test $\sigma_x$ just to see what happens. The answer is unpredictable, we randomly find that $\sigma_x = +1$ and $\sigma_x = -1$. But neither of these outcomes affect the truth of (A __OR__ B).

Now lets reverse the order of the measurement. As before it will be called (B __OR__ A), this time $\sigma_x$ will be measured first. The result is random, since the system is initially in $\sigma_z = +1$. If $\sigma_x = +1$, then the proposition is true and we are done. But suppose we find the spin to be oriented along the -x direction, then we will need to test the spin along the z-direction to verify whether (B __OR__ A) is _true_ or _false_. As a result of our first measurement, the spin is in the $\sigma_x = -1$ state, no longer in its original state. According to quantum mechanics, the result of the measurement along the z-axis will be randomly $\pm1$. This means that 25% percent probability that the experiment produces $\sigma_x = -1$ and $\sigma_z = -1$. In other words, with a probability of $\frac{1}{4}$, we find that (B __OR__ A) is _false_; this occurs despite the fact that the hidden agent had originally made sure that $\sigma_z = +1$.

Thus, in this example, the inclusive or is not symmetric. The truth of (A __OR__ B) may depend on the order in which we confirm the propositions. This not only means that the laws of quantum physics are different from their classical counterparts, this means that the very foundations of logic are different in quantum physics as well. 

What about (A __AND__ B)? Suppose we measure $\sigma_x = +1$ and $\sigma_z = +1$. We would be inclined to say (A __AND__ B) is _true_. But in physics, the truth of a proposition requires verification by subsequent observation. In classical Physics, the gentleness of measurements in classical physics implies that subsequent experiments are unaffected and will confirm an earlier experiment. Heads doesn't change to Tails by observing it. Quantum mechanically, the second measurement ($\sigma_x = +1$) ruins the possibility of verifying the first since the state is now in $\sigma_x = +1$ and a measurement of $\sigma_z$ will be randomly $\pm1$.

This is a result of the __Uncertainty Principle__. This uncertainty principle doesn't only apply to to position and momentum(velocity); it applies to many pairs of observable quantities. In the case of spin, it applies to propositions involving two different components of $\sigma$. In the case of position and momentum, the two propositions one might consider are

- A certain particle has position $x$
- That same particle has momentum $p$

From these we can form two composite propositions using __AND__ and __OR__
- A certain particle has position $x$ __AND__ That same particle has momentum $p$ 
- A certain particle has position $x$ __OR__ That same particle has momentum $p$

These propositions have meaning classically, but quantum mechanically the first of these propositions is completely meaningless, and the second one means something quite different. It all comes down to a deep logical difference between the classical and quantum concepts of the state of a system.

### 1.8 - Complex Numbers
A complex number $z$ is the sum of a real number and an imaginary number. We can write it as
$$
z = x+iy
$$
where $x$ and $y$ are real and $i^2 = -1$. Complex numbers can be added, multiplied, and divided by the standard rules of arithmetic. They can be visualized as points on the complex plane with coordinates $(x,y)$. The can also be represented in polar coordinates.
$$
z = re^{i\phi} = r(\cos\phi + i\sin\phi)
$$

Adding complex numbers is easy in component form: just add the components. Similarly, multiplying them is easy in their polar form: Simply multiply the radii and add the angles
$$ (r_1e^{i\phi_1})(r_2e^{i\phi_2}) = (r_{1}r_{2}e^{i(\phi_{1}+\phi_{2})})$$
Every complex number $z$ has a complex conjugate $z^*$ that is obtained by simply reversing the sign of the imaginary part. If
$$
z = x+iy = re^{i\phi}
$$
then
$$
z^* = x-iy = re^{-i\phi}
$$
Multiplying a complex number and its conjugate always gives a positive real result:
$$
z^{*}z=r^2
$$
For every $z$ there is a unique $z^*$ and vice versa.

There is a special class of complex numbers called "phase-factors". A phase-factor is simply a complex number whose r-component is 1. If z is a phase-factor, then the following hold
$$
z^{*}z = 1
$$
$$
z = e^{i\phi}
$$
$$
z = \cos\phi + i \sin\phi
$$
### 1.9 - Vector Spaces
#### Axioms
For a classical system, the space of states is a set (the set of possible states), and the logic of classical Physics is Boolean. The space of states of a quantum system is _not_ a mathematical set; it is a _vector space_. Relations between the elements of a vector space are different from between the elements of a set, and the logic of propositions is different as well. 

A mathematical vector space is an abstract construction that may or may not have anything to do with ordinary space. It may have any number of dimensions from 1 to $\infty$ and it may have components that are integers, real numbers, or even more general things.

The vector spaces we use to define quantum mechanical states are called __Hilbert Spaces__. Hilbert space may either have a finite or infinite number of dimensions. Hilbert space is composed of elements $\ket{A}$ called _ket-vectors_ or just _kets_.

Here are the axioms we will use to define the vector space of states, Hilbert Space, of a quantum system ($z$ and $w$ are complex numbers).
1.  The sum of any two ket-vectors is also a vector $$ \ket{A} + \ket{B} = \ket{C}$$
2. Vector addition is commutative
	$$ \ket{A} + \ket{B} = \ket{B} + \ket{A} $$
3.  Vector addition is associative
    $$ \{\ket{A} + \ket{B}\} + \ket{C} = \ket{A} + \{\ket{B} + \ket{C}\}$$
4.  There is a unique vector 0 such that when you add it to any ket, it gives the same ket
     $$ \ket{A} + 0 = \ket{A} $$
5.  Given any ket $\ket{A}$, there is a unique ket -$\ket{A}$ such that
     $$\ket{A} + (-\ket{A}) = 0$$
6.  Given any ket $\ket{A}$ and any complex number z, you can multiply them to get a new ket. Also, multiplication by a scalar is linear
    $$\ket{zA} = z\ket{A} = \ket{B} $$
7.  The distributive property holds
    $$
    z\{\ket{A}+\ket{B}\} = z\ket{A} + z\ket{B}
    $$
    $$
    \{z+w\}\ket{A} = z\ket{A} + w\ket{A}
    $$

Axioms 6 and 7 together are often called _linearity_. The difference between these vectors in Hilbert space, and 3-vectors in real space is Axiom 6. Multiplication by a complex number upon a 3-vector is not defined. One can think of 3-vectors as forming real vector space, and kets as forming a complex vector space. Our definition of ket vectors is fairly abstract. 
##### Functions and Column Vectors
Some examples of complex vector spaces. Firstly, consider the set of continuous complex-valued functions of a variable x. Call the functions A(x). They satisfy all 7 axioms. 
Two dimensional column vectors provide another concrete example. We construct them by stacking up a pair of complex numbers, $\alpha_1$ and $\alpha_2$ in the form
$$
\begin{pmatrix}
    \alpha_1\\
    \alpha_2\\
\end{pmatrix}
$$
and identify this "stack" with the ket-vector. The complex numbers $\alpha_i$ are the components of $\ket{A}$. You can add two column vectors by adding their components:
$$
\begin{pmatrix}
    \alpha_1\\
    \alpha_2\\
\end{pmatrix} + \begin{pmatrix}
    \beta_1\\
    \beta_2\\
\end{pmatrix} = \begin{pmatrix}
    \alpha_1 + \beta_1\\
    \alpha_2 + \beta_2\\
\end{pmatrix}
$$
You can multiply the column vector by complex number $z$ just by multiplying the components,
$$z\begin{pmatrix}\alpha_1\\ \alpha_2 \end{pmatrix}  = \begin{pmatrix}z\alpha_1\\ z\alpha_2 \end{pmatrix}$$
Column vector spaces of any number of dimensions can be constructed. For example, here is a five-dimensional column vector:
$$
\begin{pmatrix}\alpha_1\\ \alpha_2\\ \alpha_3\\ \alpha_4\\ \alpha_5 \\ \end{pmatrix}
$$
#### Bras and Kets
In the same way complex numbers have a dual, the conjugate, kets have a dual, the bra. For every ket $\ket{A}$, there is a "bra" vector in the dual space, denoted by $\bra{A}$. Bra vectors satisfy the same axioms as kets, but there are two things to keep in mind about their correspondence

1.  Suppose $\bra{A}$ is the bra corresponding to the ket $\ket{A}$, and $\bra{B}$ is the bra corresponding to the ket $\ket{B}$. Then the bra corresponding to
    $$\ket{A} + \ket{B}$$
    is
    $$\bra{A} + \bra{B}$$
2. If z is a complex number, then it is _not_ true that the bra corresponding to $z\ket{A}$ is $\bra{A}z$. You have to remember to complex conjugate. Thus, the bra corresponding to
    $$z\ket{A}$$
    is
    $$\bra{A}z^*$$
In the concrete example where kets are represented by column vectors, the dual bras are represented by row vectors, where the entries being drawn from the complex conjugate numbers. Thus, if the ket $\ket{A}$ is represented by the column 
$$
\begin{pmatrix}\alpha_1 \\ \alpha_2 \\ \alpha_3 \\ \alpha_4 \\ \alpha_5 \end{pmatrix}
$$
then the corresponding bra $\bra{A}$ is represented by the row
$$
\begin{pmatrix} \alpha_1^* & \alpha_2^* & \alpha_3^* & \alpha_4^* & \alpha_5^* \end{pmatrix}
$$
#### Inner Products
Analogous to the dot product for 3-vectors are \textit{inner products} for bras and kets. The inner product of a bra and ket is written in this way
$$\braket{B}{A}$$
The result of this operation is a complex number. The axioms for inner products are

1.  They are linear
    $$\bra{C}\{\ket{A} + \ket{B} \} = \braket{C}{A} + \braket{C}{B}$$
2.  Interchanging bras and kets corresponds to complex conjugation:
    $$\braket{B}{A} = \braket{A}{B}^*$$
3.  The inner product of a ket $\ket{A}$ with itself $\braket{A}{A}$ is a real number.

In the representation of bras and kets by row and column vectors, the inner product is defined in terms of components
$$
\begin{align}
\nonumber
\braket{B}{A} &= \begin{pmatrix}\beta_1^* & \beta_2^* & \beta_3^* & \beta_4^* & \beta_5^*\\ \end{pmatrix} \begin{pmatrix} \alpha_1 \\ \alpha_2 \\ \alpha_3 \\ \alpha_4 \\ \alpha_5 \end{pmatrix} \\
\nonumber
&= \beta_1^* \alpha_1 + \beta_2^* \alpha_2 + \beta_3^* \alpha_3 + \beta_4^* \alpha_4 + \beta_5^* \alpha_5 
\end{align}
$$

The rules are essentially the same for dot products: add the products of corresponding components of the vectors whose inner product is being calculated.

Using the inner product, we can define some concepts that are familiar from 3-vectors:

1.  _Normalized Vector_: A vector is said to be normalized if its inner product with itself is 1. Normalized vectors satisfy,
	$$
	\braket{A}{A} = 1
	$$
	For ordinary 3-vectors, the term _normalized vector_ is usually replaced by _unit vector_
2. _Orthogonal Vectors_: Two vectors are said to be orthogonal if their inner product is zero. $\ket{A}$ and $\ket{B}$ are orthogonal if
    $$
    \braket{B}{A} = 0
    $$

#### Orthonormal Bases
When working with ordinary 3-vectors, it is extremely useful to introduce a set of 3 mutually orthogonal unit vectors and use them as a basis to construct any vector. An example being the unit 3-vectors that point along the x, y, and z axes. These are usually denoted $\hat{i}$, $\hat{j}$, and $\hat{k}$. Each is of unit length and orthogonal to the others. A fourth unit vector isnt possible in three dimensions. The dimension of a space can be defined as the maximum number of mutually orthogonal vectors in that space. 

There is nothing special about x, y, and z. As long as the basis vectors are of unit length and are mutually orthogonal they comprise a _orthonormal basis_. The same principle is true for complex vector spaces. The dimensionality is simply the number of entries in the column or row vector.

Consider an N-dimensional space and a particular orthonormal basis of ket-vectors labeled $\ket{i}$. The label $i$ runs from 1 to N. Consider a vector $\ket{A}$, written as a sum of basis vectors:
$$\ket{A} = \sum_i \alpha_i \ket{i}$$
the $\alpha_i$ are complex numbers called the _components_ of the vector, and to calculate them we take the inner product of both sides with a basis bra $\bra{j}$:
$$\braket{j}{A} = \sum_i \alpha_i \braket{j}{i}$$
Next use the fact that basis vectors are orthonormal. This implies that $\braket{j}{i} = 0$ if $i$ is not equal to $j$, and $\braket{j}{i} = 1$ if $i=j$. In other words
$$\braket{j}{i} = \delta_{ij}$$
This bakes the sum collapse to one term
$$\braket{j}{A} = \alpha_j$$
Thus we see that the components of a vector are just its inner products with the basis vectors. We can rewrite this in the elegant form
$$\ket{A} = \sum_i \ket{i}\braket{i}{A}$$
# Chapter 2 - Quantum States

### 2.1 - States and Vectors
Knowing a systems state means knowing everything that can be known about the system. Quantum states behave much different than classical states. Is the unpredictability due to incompleteness of our definition of quantum states? Various views

1.  Yes, there are hidden variables that if we can access would allow complete predictability. Version A of this view says that those variables could possibly be measured. Version B says that since we are quantum mechanical, there are restrictions to accessing the hidden variables
2.  No, quantum mechanics is a complete calculus and nature is probabilistic

In practice we use view 2, what this means for the quantum spin is that when the apparatus $\mathcal{A}$ acts and tells us that $\sigma_z = \pm1$, there is no more to know, or can be known. Likewise, if we rotate $\mathcal{A}$ and measure $\sigma_z = \pm 1$, there is no more to know. Same for y-axis or any other axis.

### 2.2 - Representing Spin States
Our goal is to build a representation that captures everything we know about the behavior of spins.

Begin by labeling the possible spin states along the three coordinate axes. If $\mathcal{A}$ is oriented along the $z$ axis, the two possible states that can be prepared correspond to $\sigma_z = \pm 1$. Lets call them _up_ and _down_ and denote them by the ket-vectors $\ket{u}$ and $\ket{d}$. Thus, when the apparatus is oriented along the z-axis and registers +1, the state $\ket{u}$ has been prepared.

On the other hand, if the apparatus is oriented along the x-axis and registers -1, the state $\ket{l}$ has been prepared. We'll call it _left_. If $\mathcal{A}$ is oriented along the y axis, it can prepare the states $\ket{i}$ and $\ket{o}$ (_in and out_).

_All possible spin states can be represented in a two-dimensional vector space_

We could, somewhat arbitrarily, choose $\ket{u}$ and $\ket{d}$ as the two basis vectors and write any state as a linear superposition of these two. Use the symbol $\ket{A}$ for a generic state
$$
\ket{A} = \alpha_u\ket{u} + \alpha_d\ket{d}
$$
where $\alpha_{u,d}$ are the components of $\ket{A}$ along the basis directions $\ket{u,d}$. Mathematically we can identify the components of $\ket{A}$ as
$$
\alpha_u = \braket{u}{A}
$$
$$
\alpha_d = \braket{d}{A}
$$
$\ket{A}$ can represent any state of the spin, prepared in any manner. The components $\alpha_u$ and $\alpha_d$ are complex numbers; by themselves, they have no experimental meaning, but their magnitudes do. In particular $\alpha_u^*\alpha_u$ and $\alpha_d^*\alpha_d$ have the following meaning

1.  Given that the spin has been prepared in the state $\ket{A}$, and that the apparatus is oriented along z, the quantity $\alpha_u^*\alpha_u$ is the probability that the spin would be measured as $\sigma_z = +1$. In other words, it is the probability of the spin being _up_ if measured along the z axis.
2.  Likewise, $\alpha_d^*\alpha_d$ is the probability that $\sigma_z$ would be _down_ if measured.

