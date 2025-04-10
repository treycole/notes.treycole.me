---
title: Axion Insulators
tags:
  - Physics
  - Condensed-Matter
  - Topological-Materials
modified: 2025-04-07T03:04
created: 2025-03-30T22:51
---
__References__
- _Berry Phases in Electronic Structure Theory_, David Vanderbilt
# Orbital Magnetization
The Polarization $\mathbf{P}$ and magnetization $\mathbf{M}$ are electric and magnetic order parameters that couple to external electric and magnetic fields
   
The spontaneous magnetization (in absence of external magnetic field) has two components, one coming from spin, and the other the orbital motion of the electrons
- $\mathbf{M} = \mathbf{M}_{spin} + \mathbf{M}_{orb}$

In most ferromagnetic materials, $\mathbf{M}_{spin}$ is typically dominant. This is because of the excess spin up or spin down electrons in the valence bands.

 The orbital contribution $\mathbf{M_{orb}}$ arises from circulating currents from the orbital motion of the electrons on the atoms in the crystal. This is typically induced by a spin-orbit coupling term in the Hamiltonian on a given atomic site $H_{SOC} = \xi \mathbf{L} \cdot \mathbf{S}$  (largest for heavier atoms).
 
 ![[Pasted image 20250329150039.png]]

## Finite Systems

The orbital magnetization gives rise to surface current $\mathbf{K}_{surf} = c \mathbf{M}_{orb} \times \hat{n}$ on the edges of the sample. For a finite system such as an atom or molecule, the orbital magnetic dipole moment is calculated as 
$$\mathbf{m} = \frac{1}{2c} \int \mathbf{r} \times \mathbf{j}(\mathbf{r}) d^3r $$ where $\mathbf{j}$ is the local current density. 
## Bulk systems

In bulk systems, the modern theory of polarization tells us that $\mathbf{P}$ is only defined as a bulk quantity modulo a quantum. This is because an adiabatic change to the surface can change the occupancy of the surface states, changes the bound charge, and consequently, the bulk polarization.

The orbital magnetization, $\mathbf{M}_{orb}$, on the other hand, is uniquely defined in the conventional sense. Conservation of charge requires the edge current to be constant, otherwise this is not a stationary state since charge accumulates. We can't change the surface current by any local changes to surface.

 Naively, the bulk orbital magnetization in a magnetic crystal could be, $$\mathbf{M} = \frac{1}{2cV_{cell}} \int_{cell} \mathbf{r} \times \mathbf{j}(\mathbf{r}) d^3r$$where the integral in over the interior of the unit cell. However, this will depend on the choice of unit cell. Even perfect knowledge of the periodic bulk $\mathbf{j}$ is insufficient for determining the orbital magnetization (Hirst, 1997).
 
 In almost all ferromagnetic materials, the orbital current are associated with partially filled $d$ or $f$ shells of magnetic atoms. These are localized, and can construct set of non-overlapping atomic spheres around magnetic ions and approximate $\mathbf{M}$ as the sum over their contributions.
 
We would like a proper definition of orbital magnetization that applies to time-reversal broken systems where orbital currents extend into bonding regions between atoms, or even flowing along paths between atoms. 
#### Quantum Expression

We need a quantum mechanical expression. For a finite system like an atom or molecule, the expression is $$\mathbf{m} = \frac{-e}{2c} \sum_{n\in occ} \langle \psi_n | \mathbf{r} \times \mathbf{v} |\psi_n \rangle $$ where $\mathbf{v}$ is the velocity operator. For a crystal, the position operator is ill defined in Bloch representation. Analogous to the modern theory of polarization, we can hope to express it in terms of a Berry connection. 

An approach based on Wannier representation put forth by Thonhauser (2005) and Ceresoli (2006). A semiclassical theory proposed by Xiao (2005). A long-wave perturbation analysis Shi (2007). They all arrive at  $$M = \frac{e}{\hbar c} \frac{1}{(2\pi)^2} \sum_n \int_{BZ} \text{Im} \langle \partial_x u_{n\mathbf{k}} | H_{\mathbf{k}} + E_{n\mathbf{k}} - 2E_F | \partial_y u_{n\mathbf{k}} \rangle f_{n\mathbf{k}} d^2k$$where $\partial_u = \partial/\partial k_{\mu}$. The term involving $E_F$ is proportional to the total Chern number for an insulator, and can be dropped for trivial insulators. 

>[!hint] For a review see Thonhauser (2011) and Hanke et al. (2016)

# Magnetoelectric Polarizability
Orbital magnetoelectric coupling measures a change in $\mathbf{M}_{orb}$ induced by an electric field.
This coupling includes a "Chern-Simons" contribution which connects to topological insulators and contributes to the isotropic or "axion" magnetoelectric response.
$$\alpha_{ij} = \frac{\partial M_j}{\partial E_i}|_{\mathbf{B}=0} =  \frac{\partial P_i}{\partial B_j}|_{\mathbf{E}=0}$$
Equality follows from commuting derivatives of free energy. Has 9 independent components and can be decomposed as 
$$
\alpha_{ij} = \tilde{\alpha}_{ij} + \frac{\theta e^2}{2\pi h}\delta_{ij}
$$where first term is traceless and second term is the _pseudoscalar_ part of the coupling, and $\theta$ is called the _axion angle_ ($\theta$ changes sign under inversion)

# Axion Angle

Electrodynamics is invariant under $\theta \rightarrow \theta + 2\pi$. Can alternatively be described in terms of surface Hall conductivity $\sigma_H = \theta e^2/2\pi h$ which is determined by bulk properties only modulo the quantum $e^2/h$ corresponding to adsorbing a surface layer of non-zero Chern number $C$.

When time-reversal ($\mathcal{T}$) is present, TKNN invariants vanish, but other invariants arise such as $\mathbb{Z}_2$ invariant in 2D, distinguishing ordinary from quantum spin Hall states. In 3D, a similar invariant can be computed from 2D invariant on certain planes or from Fu-Kane parity criterion, classifying strong and weak topological insulators.

- T maps $\theta \rightarrow -\theta$ and the ambiguity mod $2\pi$ allows $\theta = 0,\pi$, with the latter corresponding to the strong [[Topological Insulators|topological insulators]]
- If T extends to surfaces, these become metallic by virtue of topologically protected edge modes. If T-breaking perturbation, then $\sigma_H = e^2/2h$ mod $e^2/h$ at surface of STI. 

Here focus of magnetoelectric coupling resulting from _orbital_ (frozen lattice) magnetization and polarization, referred to as the _orbital magnetoelectric polarizability_ (OMP)

# Dynamical Axions

When _axion field_ $\theta(\mathbf{r}, t)$ is _constant_, it plays _no role_ in electrodynamics. However can have profound consequences at _surfaces and interfaces_, where _gradients_ in $\theta(\mathbf{r})$ appear.
#### Kavli IPMU and ISSP
- [Story](https://www.ipmu.jp/en/story/7788) titled "Instability in magnetic materials with dynamical axion field"
- Joint research effort in Tokyo between elementary particle physics and condensed matter physics
- Axion is hypothetical elementary particle postulated to resolve the strong CP problem in quantum chromodynamics
	- To detect axion, experimental proposals such as applying a strong magnetic field to convert the axion to a photon in a crystal of germanium
- Similar axions excitations exist in topological insulators
- Magnetic fluctuations plays a role in the dynamical axion field