---
created: 2025-04-13T14:09
modified: 2025-04-13T14:09
---
__References__
- Moore, Ran, Wen, "Topological Surface States in Three-Dimensional Magnetic Insulators", PRL, 101, 186805 (2008)

### Introduction
 There exists nonmagnetic band insulators in which spin-orbit coupling plays similar role to that of magnetic field in the _Integer quantum Hall effect_ (IQHE). In 2D, these _topological insulators_ (TIs) have robust edge states, observed in HgTe/(Hg,Cd)Te heterostructures, and are predicted to show a _spin quantum Hall effect_. 

Existence of a genuinely 3D topological insulator phase with protected _surface_ states, recently observed in $Bi_{0.9}Sb_{0.1}$ is surprising because the IQHE does not have a fully 3D version, but only layered versions of the 2D case. Both 2D and 3D TIs are _nonmagnetic_, and in fact unbroken TR invariance is required for the edge state to remain _gapless_. Edge or surface states of TIs and IQHE exist because there are topological invariants that distinguish these insulating states from ordinary insulators, and across a boundary between one of these states and an ordinary insulator, the energy gap must close.

There exists generally 3D TIs of electrons moving in a magnetic background. Here, they show a cubic-lattice model with nontrivial _three-dimensional_ topological invariant (the Hopf invariant in momentum space) and extended surface states, and discusses which materials might realize the "Hopf insulator" phase. This insulator is simpler in some ways than the $\mathbb{Z}_2$ topological insulators, since minimal realizations requires only two bands (with spin) rather than four. They argue pyrochlore-lattice compounds with noncollinear magnetic order are realistic candidates for Hopf insulators.

### General TI
Consider a general band insulator with $n$ filled bands and $m$ empty bands. In $k$-space, such a band insulator is described by an $m\times n$ dimensional matrix $H(\mathbf{k})$ which has $m$ positive and $n$ negative eigenvalues for any $\mathbf{k}$ (with $E_F=0$). Without changing the ground state, we may deform all the positive eigenvalues to $1$ and all the negative eigenvalues to $-1$. Thus $H(\mathbf{k})$ has the form
$$
H(\mathbf{k}) = W(\mathbf{k}) I_{m,n} W^{\dagger}(\mathbf{k})
$$
where $I_{m,n}$ is the diagonal matrix with $m$ $1$'s and $n$ $-1$'s, and $W(\mathbf{k}) \in SU(m+n)$. We see that for any fixed $\mathbf{k}$, $H(\mathbf{k})$ is a point on the manifold $SU(m+n)/G_{m,n}$ where $G_{m,n}$ is a subgroup of $SU(m+n)$ that is formed by transformations that leave $I_{m,n}$ invariant. We find that $G_{m,n} = SU(m) \times SU(n) \times U(1)$ and
$$
H(\mathbf{k}) \equiv M_{m,n}
$$