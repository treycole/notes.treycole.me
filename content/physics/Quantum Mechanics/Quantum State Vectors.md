---
created: 2020-01-26T14:00:00
modified: 2025-04-06T18:10
tags:
  - Physics
  - Quantum-Mechanics
---
__Reference__
- "Quantum Mechanics", David McIntyre

A postulate of quantum mechanics is that kets are to be used for a mathematical description of a quantum mechanical system. These kets are abstract entities that obey many of the rules you know about ordinary spatial vectors. Hence they are called __quantum state vectors__. These vectors must employ complex numbers in order to properly describe quantum mechanical systems. Quantum state vectors are part of a vector space that we call \textbf{Hilbert space}. The dimensionality of the Hilbert space is determined by the physics of the system at hand. In the SG-example, the two possible results for a spin component measurement dictate that the vector space has only two dimensions. That makes the problem mathematically as simple as it can be. Because quantum state vectors are abstract, it is hard to say much about what they are, other than how they behave mathematically and how they lead to physical predictions. 

In the two-dimensional vector space of a spin-1/2 system, the two kets $\ket{\pm}$ form a basis, just like the __unit vector__ $\hat{i}$, $\hat{j}$, $\hat{k}$ form a basis for describing vectors in three-dimensional space. However, the analogy we want to make with these spatial vectors is only mathematical, not physical. The spatial unit vectors have three important mathematical properties that are characteristic of a basis: the basis vectors  $\hat{i}$, $\hat{j}$, $\hat{k}$ are 

- __normalized__
- __orthogonal__, 
- __complete__. 

Spatial vectors are normalized if their magnitudes are unity, and they are orthogonal if they are geometrically perpendicular to each other. The basis is complete if any general vector in the space can be written as a linear superpostition of the basis of the basis vectors. 
$$
\begin{split}
    \hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1 \ \  normalization\\
    \hat{i}\cdot\hat{j} = \hat{i}\cdot\hat{k} = \hat{j}\cdot\hat{k} = 0 \ \ orthogonality\\
    \vec{A} = a_x\hat{i} + a_y\hat{j} + a_z\hat{z} \ \ completeness
\end{split}
$$
 where $\vec{A}$ is a general vector. Note that the \textbf{dot product}, also called the \textbf{scalar product}, is central to the description of these properties. 
 
 Continuing the mathematical analogy between spatial vectors and abstract vectors, we require that these same properties (at least conceptually) apply to quantum mechanical basis vectors. For the $S_z$ measurement, there are only two possible results, corresponding to the states $\ket{+}$ and $\ket{-}$, so these two states comprise a complete set of basis vectors. This basis is known as the \textbf{$S_Z$ basis}. The completeness of the basis kets $\ket{\pm}$ implies that a general quantum state vector $\ket{\psi}$ is a linear combination of the two basis kets:
$$
    \ket{\psi} = a\ket{+}+b\ket{-}
$$
where a and b are complex scalar number multiplying each ket. This addition of two kets yields another ket in the same abstract space. The complex scalar can appear either before or after the ket without affecting the mathematical properties of the ket (i.e., $a\ket{+}=\ket{+}a$). It is customary to use the Greek letter $\psi$ (psi) for a general quantum state. You may have seen $\psi(x)$ used before as a quantum mechanical wave function. However, the state vector or ket $\ket{\psi}$ is not a wave function. Kets do not have any spatial dependence as wave functions do. 

As we said above, the machinery of quantum mechanics requires the use of complex numbers. You may have seen other fields of physics use complex numbers. For example, sinusoidal oscillations can be described using the complex exponential $e^{i\omega t}$ rather than $\cos(\omega t)$. However, in such cases, the complex numbers are not required, but are rather a convenience to make the mathematics easier. When using complex notation to describe classical vectors like electric and magnetic fields, the definition of the dot product is generalized slightly, such that one of the vectors is complex conjugated. A similar approach is taken in quantum mechanics. The analog of the complex conjugated vector of classical physics is called a \textbf{bra} in the Dirac notation of quantum mechanics. Thus corresponding to a general ket $\ket{\psi}$, there is a bre, or bre vector, which is written as $\bra{\psi}$. If a general ket $\ket{\psi}$ is specified as $\ket{\psi} = a\ket{+}+b\ket{-}$, then the corresponding bra $\bra{\psi}$ is defined as 
$$
    \bra{\psi} = a^{*}\bra{+}+b^{*}\bra{-}
$$
where the basis bras $\bra{+}$ and $\bra{-}$ correspond to the basis kets $\ket{+}$ and $\ket{-}$, respectively, and the coefficients $a$ and $b$ have been complex conjugated.

To discuss orthogonality and normalization (known together as __orthonormality__) we must first define scalar products as they apply to these new kets. The scalar product in quantum mechanics is defined as the product of a bra and a ket taken in the proper order -- bra first, then ket second:
$$
    (\bra{bra})(\ket{ket})
$$
When the bra and ket are combind together in this manner, we get a bracket written in shorthand as 
$$
    \langle bra | ket\rangle
$$
Thus, given the basis kets $\ket{+}$ and $\ket{-}$, one inner product, for example, is written as 
$$
    (\bra{+})(\ket{-}) = \langle + | -\rangle
$$
and so on. The scalar product in quantum mechanics is generally referred to as an __inner product__ or a __projection__.