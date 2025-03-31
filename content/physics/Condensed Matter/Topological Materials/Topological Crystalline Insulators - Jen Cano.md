[link](https://www.youtube.com/watch?v=Dj-aRe5d2Hk&ab_channel=TopologicalMatterSchool)

## Tenfold Way
- Classification of topological insulators that depends on the dimension you are in and the symmetry you have
- _Class A dimension 2_: $\mathbb{Z}$ 
	- No symmetry
	- Integer quantum Hall / Chern insulator
- _Class AII dimension 2 and 3_: $\mathbb{Z}_2$ 
	- Has time reversal symmetry for spin 1/2 fermions
	- Topological insulator in 2d and 3d
	- Weak indices not captured
- This table only captures _internal symmetries_
	- Weak indices captured by translation symmetry, not an internal symmetry
## Crystal Symmetries
- Point groups: Leave at least one point invariant
	- _Rotation_: Leaves entire axis invariant
	- _Mirror_: Leaves entire plane invariant
	- _Inversion_: Leaves the origin invariant
	- _Roto-inversion_: rotation plus inversion
- $T_d$ point group
	- $C_4$ x inversion, but not either one separately
- Translation symmetry
	- Doesn't leave any point invariant
	- 14 different Bravais lattices in 3D
- 230 space groups in 3D
	- combining all options
	- classify all different types of crystals
	- doesn't include magnetic symmetries
## Hamiltonian 
- symmetries commute with Hamiltonian
- in k-space, we block diagonalize Hamiltonian
	- crystal symmetries can mix different blocks
	- crystal symmetries don't commute with the Bloch Hamiltonian at each k
- Matrix representation of symmetry operation $\Delta(G)$ $$\Delta(G) H(k) \Delta(G) = H(Gk) $$
- Little group of $k_0$: $Gk_0 = k_0$ 
	- Bands at that point can be classified as representations of that little group
	- Eigenstates of each band at $k_0$ can be given a label corresponding to representations of the little group of that $k_0$ 
	- Going from any point along a high-symmetry line, the symmetry of the line is generically lower than the symmetry of the point, and will be a subgroup
		- Knowing the symmetry of a point, you can uniquely figure out the representation along the line by taking the representation of the little group at $k_0$ and decomposing it into representations of the little group along the line
- Compatibility relations
	- Tell you how the points and lines can connect with each other

## Chern insulator
- In 2D, Berry phase winds along BZ in one k direction ($k_x$) as a function of the other  ($k_y$)
- Or make slab and see surface states crossing the band gap from valence to conduction band

## Quantum Spin Hall
- Crossing guaranteed by Kramers degeneracy in presence of TRS
- Crystal symmetries can also protect the crossings

