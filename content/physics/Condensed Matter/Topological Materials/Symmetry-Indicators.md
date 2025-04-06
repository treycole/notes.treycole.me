---
created: 2025-04-06T17:28
modified: 2025-04-06T17:38
tags:
  - Topological-Materials
  - Condensed-Matter
  - Physics
---
__References__
- Liang Fu and C. L. Kane. Topological insulators with inversion symmetry. Phys. Rev. B, 76:045302, Jul 2007.
- Eslam Khalaf, Hoi Chun Po, Ashvin Vishwanath, and Haruki Watanabe. Symmetry indicators and anomalous surface states of topological crystalline insulators. Phys. Rev. X, 8:031070, Sep 2018.
-  Hoi Chun Po, Ashvin Vishwanath, and Haruki Watanabe Symmetry-based indicators of band topology in the 230 space groups. Nature Communications, 8(1):50, 2017.
- Jeffrey C. Y. Teo, Liang Fu, and C. L. Kane. Surface states and topological invariants in three-dimensional topological insulators: Application to bi1−xsbx. Phys.Rev. B, 78:045426, Jul 2008.

As seen with [[Topological Crystalline Insulators]] (TCIs), crystal symmetry can be crucial in determining the topology of a band structure. In addition to translational symmetry, a crystal is characterized by a particular point group. The point groups have elements that operate on the lattice, generally taking one point to another, leaving at least one point invariant. These operations include rotations, mirror reflections, inversions, and rotoinversions, comprising rotation and inversion operations. In combination with lattice translations, these point groups generate a space group, of which there are 230 possible combinations of symmetries [Po2017] (Not including magnetic space groups). 

Deriving topological invariants for all 230 possible space groups is a difficult task. Furthermore, in TCIs, surfaces may be completely gapped despite having a topological bulk [khalaf2018]. This makes identifying topology from topological invariants or surface band structures for the numerous possible TCIs generally challenging. However, these are not the only ways to deduce the topology of a band structure. A band structure can be characterized as topological using only the symmetry properties of the Bloch eigenstates at HSM [khalaf2018]. This classification naturally includes TCIs and the earlier $\mathbb{Z}_2$ [[Topological Insulators| topological insulators]] in the presence of inversion symmetry. Notably, it omits Chern insulators. 

A paradigmatic example is the Fu-Kane parity criterion for inversion-symmetric $\mathbb{Z}_2$ topological insulators. In [[Topological Materials#Fu-Kane Parity Criterion|2007]], Fu and Kane showed that in this situation, the $\mathbb{Z}_2$ invariant can be computed using only the information about the parity of the energy eigenstates at the time-reversal invariant crystal momenta (TRIM). This formula takes the form
$$
(-1)^{\nu} = \prod_{i\in \rm TRIM} \prod_{m=1}^{\rm n_{occ}/2}\ \xi_{2m}(\mathbf{\Gamma_i})
$$
where $\mathbf{\Gamma_i}$ are the TRIM and the eigenstates have definite parity under the action of the inversion operator,
$$
\mathcal{I} |u_{n, \mathbf{\Gamma_i}}\rangle = \xi_n(\mathbf{\Gamma_i}) |u_{n, \mathbf{\Gamma_i}}\rangle 
$$
with $\xi_n(\mathbf{\Gamma_i}) = \pm 1$. When $\nu$ is even (odd), the system is in a topologically (non-)trivial $\mathbb{Z}_2$-even (odd) state. The quantity $\nu$ is the weak topological invariant in 2-dimensions and the strong topological invariant in 3-dimensions for quantum spin Hall insulators.

Shortly after this work, Teo, Fu, and Kane showed that the symmetry eigenvalues can reveal additional topological structure in inversion-symmetric topological insulators [Teo2008]. In the strong 3-dimensional topological insulator $\rm Bi_{1-x} Sb_x$ with $\mathbb{Z}_2$ class $(1; 111)$, the inversion eigenvalues at the eight TRIM determine which TRIM the Fermi surface encloses, defining the surface fermion parity. 

### Symmetry Indicators
This characterization of band topology based on symmetry eigenvalues has been generalized to all 230 space groups in [[Po2017]]. In their paper, they remark that a given band structure can be characterized by the number of bands ($\eta$) and the multiplicity of symmetry eigenvalues at the HSM $\{ n_{\mathbf{k}}^{\alpha}| \alpha = 1\cdots D_\mathbf{k}\}$, where $n_{\mathbf{k}}^{\alpha}$ is the number of times the $\alpha$-th irrep occurs at $\mathbf{k}$, and $D_\mathbf{k}$ is the number of irreps. Compatibility relations - such as the number of bands $\eta$, band continuity, and the assumption of a gapped band structure - constrain the multiplicity. For example, consider a one-dimensional centro-symmetric insulator. In this case, two HSM are invariant under inversion, $k = 0, \pi$. The parities of the Bloch eigenstates at the HSM take the values $\chi = \pm 1$. The compatibility relations enforce $\eta = n_0^+ + n_0^-  = n_\pi^+ + n_\pi^-$. These constraints can be cast as a matrix-valued problem, $\mathcal{C}\mathbf{n} = 0$, where $\mathbf{n} = (n_0^+, n_0^-, n_\pi^+, n_\pi^-, \eta)$. The solutions give the kernel (null-space) of the matrix $\mathcal{C}$, which in this case is $3$-dimensional, reflecting that we had two constraints on the $5$ degrees of freedom. A particular band structure corresponds to a vector space spanned by the kernel of $\mathcal{C}$. In particular, the authors argue all band structures can be identified with the group
$$
    Z^{d_{BS}} \equiv \mathbb{Z} \times \mathbb{Z} \times \cdots \times \mathbb{Z}
$$
where $d_{BS}$ is the dimension of the kernel and depends on the particular space group.  Similarly, if one constructs the same type of group for all trivial atomic insulators $Z^{d_{AI}}$, the symmetry indicator group is defined as the quotient group, 
$$
    X^{d_{BS}} \equiv Z^{d_{BS}}/Z^{d_{AI}}
$$
Elements of this group are representations of topologically non-trivial band structures and can be used as a sufficient, but not necessary, identification of topology. There may be some topological band structures in $Z^{d_{BS}}$ not in $X^{d_{BS}}$, for example, the Chern insulator. Here, we simply state these results; a full description of the quotient group and deriving the topological invariants would be more involved than this report allows.
