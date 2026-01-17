---
tags:
  - Physics
  - Condensed-Matter
  - Topological-Materials
modified: 2025-04-15T13:31
created: 2025-03-30T22:51
---
__References__
1.  _Berry Phases in Electronic Structure Theory_, David Vanderbilt
2.  Essin, Moore, Vanderbilt, "Magnetoelectric Polarizability and Axion Electrodynamics in Crystalline Insulators", PRL 102, 146805 (2009)
3. Li et al. "Dynamical axion field in topological magnetic insulators", Nature physics, 6 (2010)

To recap, the [[Magnetoelectric Coupling|linear ME effect ]] is defined by a $3\times 3$ matrix,
$$
\alpha_{\mu \nu} =  \left(\frac{\partial P_\mu}{\partial B_\nu} \right)_{\mathbf{\mathcal{E}}} = \left( \frac{\partial M_\nu}{\partial \mathcal{E}_\mu}\right)_{\mathbf{B}} 
$$
This coupling includes a "Chern-Simons" contribution which connects to topological insulators and contributes to the isotropic or "axion" ME response. The tensor $\alpha$ has 9 independent components and can be decomposed as 
$$
\alpha_{ij} = \tilde{\alpha}_{ij} + \frac{\theta e^2}{2\pi h}\delta_{ij}
	$$where first term is traceless and second term is the _pseudoscalar_ part of the coupling. The $\theta$ term is called the _axion angle_. $\theta$ changes sign under TR or inversion.

# Chern Simons Coupling
Electrodynamics is invariant under $\theta \rightarrow \theta + 2\pi$. Can alternatively be described in terms of surface Hall conductivity $\sigma_H = \theta e^2/2\pi h$ which is determined by bulk properties only modulo the quantum $e^2/h$ corresponding to adsorbing a surface layer of non-zero Chern number $C$.

When time-reversal ($\mathcal{T}$) is present, TKNN invariants vanish, but other invariants arise such as $\mathbb{Z}_2$ invariant in 2D, distinguishing ordinary from quantum spin Hall states. In 3D, a similar invariant can be computed from 2D invariant on certain planes or from Fu-Kane parity criterion, classifying strong and weak topological insulators.

- T maps $\theta \rightarrow -\theta$ and the ambiguity mod $2\pi$ allows $\theta = 0,\pi$, with the latter corresponding to the strong [[Topological Insulators|topological insulators]]
- If T extends to surfaces, these become metallic by virtue of topologically protected edge modes. If T-breaking perturbation, then $\sigma_H = e^2/2h$ mod $e^2/h$ at surface of STI. 

Here focus of magnetoelectric coupling resulting from _orbital_ (frozen lattice) magnetization and polarization, referred to as the _orbital magnetoelectric polarizability_ (OMP

# Computational Methodologies

The calculation of $\theta_{CS}$ is somewhat problematic. Most methods require a two-step procedure in which a smooth gauge is first constructed on a given $\mathbf{k}$-mesh, and then the Berry connections $\mathbf{A}(\mathbf{k})$ and its derivatives are evaluated using finite differences. The Chern-Simons angle is then calculated by numerical integration on the mesh.

The problem of finding a smooth gauge is the same as finding well-localized Wannier functions. However, there are situations where it is necessary to break symmetry in the gauge to construct a smooth gauge (Soluyanov and Vanderbilt 20??). For strong and weak TIs, TR must be broken in the gauge. As a result, if one uses this method for computing $\theta_{CS}$ for a strong TI, the TR breaking in the gauge propagates into $\theta_{CS}$ such that it is only approximately equal to $\pi$. The Chern-Simons angle does converge in the limit of a fine $\mathbf{k}$-point mesh, but the convergence is rather slow (Coh and Vanderbilt, 2013).

# Axion Electrodynamics



# Dynamical Axions

When _axion field_ $\theta(\mathbf{r}, t)$ is _constant_, it plays _no role_ in electrodynamics. However can have profound consequences at _surfaces and interfaces_, where _gradients_ in $\theta(\mathbf{r})$ appear.
#### Kavli IPMU and ISSP
- [Story](https://www.ipmu.jp/en/story/7788) titled "Instability in magnetic materials with dynamical axion field"
- Joint research effort in Tokyo between elementary particle physics and condensed matter physics
- Axion is hypothetical elementary particle postulated to resolve the strong CP problem in quantum chromodynamics
	- To detect axion, experimental proposals such as applying a strong magnetic field to convert the axion to a photon in a crystal of germanium
- Similar axions excitations exist in topological insulators
- Magnetic fluctuations plays a role in the dynamical axion field