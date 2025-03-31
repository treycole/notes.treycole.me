---
title: Axion Insulators
tags:
  - Physics
  - Condensed-Matter
  - Topological-Materials
---
## Orbital Magnetization
- Polarization $\mathbf{P}$ and magnetization $\mathbf{M}$ are electric and magnetic order parameters that couple to external electric and magnetic fields
- Spontaneous magnetization in magnetic materials has two components $\mathbf{M} = \mathbf{M}_{spin} + \mathbf{M}_{orb}$
- In most FM materials $\mathbf{M}_{spin}$ is dominant: excess spin up over spin down e-
- $\mathbf{M_{orb}}$ arises from circulating currents on atoms in crystal, typically induced by SOC $H_{SOC} = \xi \mathbf{L} \cdot \mathbf{S}$ on a given atomic site (largest for heavier atoms) 
- ![[Pasted image 20250329150039.png]]
### Finite Systems
- Orbital magnetization gives rise to surface current $\mathbf{K}_{surf} = c \mathbf{M}_{orb} \times \hat{n}$ 
- For a finite system such as an atom or molecule, the orbital magnetic dipole moment is $$\mathbf{m} = \frac{1}{2c} \int \mathbf{r} \times \mathbf{j}(\mathbf{r}) d^3r $$ where $\mathbf{j}$ is the local current density. 
### Bulk systems
- $\mathbf{P}$ is only defined as a bulk quantity modulo a quantum. 
- $\mathbf{M}_{orb}$ is uniquely defined in the conventional sense. Conservation of charge requires the edge current to be constant, otherwise this is not a stationary state since charge accumulates. Can't change surface current my local change in surface.

- Naively, the bulk orbital magnetization in a magnetic crystal could be, $$\mathbf{M} = \frac{1}{2cV_{cell}} \int_{cell} \mathbf{r} \times \mathbf{j}(\mathbf{r}) d^3r$$where the integral in over the interior of the unit cell. However, this will depend on the choice of unit cell. Even perfect knowledge of the periodic bulk $\mathbf{j}$ is insufficient for determining the orbital magnetization (Hirst, 1997).
- In almost all ferromagnetic materials, the orbital current are associated with partially filled $d$ or $f$ shells of magnetic atoms. These are localized, and can construct set of non-overlapping atomic spheres around magnetic ions and approximate $\mathbf{M}$ as the sum over their contributions.
- Would like a proper definition of orbital magnetization that applies to time-reversal broken systems where orbital currents extend into bonding regions between atoms, or even flowing along paths between atoms. 
- We need a quantum mechanical expression. For a finite system like an atom or molecule, the expression is $$\mathbf{m} = \frac{-e}{2c} \sum_{n\in occ} \langle \psi_n | \mathbf{r} \times \mathbf{v} |\psi_n \rangle $$ where $\mathbf{v}$ is the velocity operator. For a crystal, the position operator is ill defined in Bloch representation. Analogous to the modern theory of polarization, we can hope to express it in terms of a Berry connection. 
- Approach based on Wannier representation put forth by Thonhauser (2005) and Ceresoli (2006). Semiclassical theory proposed by Xiao (2005). Long-wave perturbation analysis Shi (2007). All arrive at  $$M = \frac{e}{\hbar c} \frac{1}{(2\pi)^2} \sum_n \int_{BZ} \text{Im} \langle \partial_x u_{n\mathbf{k}} | H_{\mathbf{k}} + E_{n\mathbf{k}} - 2E_F | \partial_y u_{n\mathbf{k}} \rangle f_{n\mathbf{k}} d^2k$$where $\partial_u = \partial/\partial k_{\mu}$. The term involving $E_F$ is proportional to the total Chern number for an insulator, and can be dropped for trivial insulators. 
- For review see Thonhauser (2011) and Hanke et al. (2016)

## Orbital Magnetoelectric Response
- Orbital magnetoelectric coupling measures change in $\mathbf{M}_{orb}$ induced by an electric field.
	- Includes a "Chern-Simons" contribution which connects to topological insulators and contributes to the isotropic or "axion" magnetoelectric response.

## Dynamical Axions
### Early Frameworks (2012-2017)

#### Kavli IPMU and ISSP
- [Story](https://www.ipmu.jp/en/story/7788) titled "Instability in magnetic materials with dynamical axion field"
- Joint research effort in Tokyo between elementary particle physics and condensed matter physics
- Axion is hypothetical elementary particle postulated to resolve the strong CP problem in quantum chromodynamics
	- To detect axion, experimental proposals such as applying a strong magnetic field to convert the axion to a photon in a crystal of germanium
- Similar axions excitations exist in topological insulators
- Magnetic fluctuations plays a role in the dynamical axion field