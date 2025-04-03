---
title: Topological Semimetals
tags:
  - Physics
  - Condensed-Matter
  - Topological-Materials
draft: false
created: 2024-03-13T15:14
modified: 2025-03-30T22:37
---

- Insulator
	- Integer filling $\nu$ 
 - Metal
	- Fractional number of e- per unit cell per spin
	- Fermi surface of gapless excitations
	- Can be viewed as intermediate phase between two insulators
- Topological semimetals
	- Bulk (semi)metals, which arise at integer filling $\nu$ as intermediate phase between insulators with different electronic structure topology
	- Magnetic Weyl semimetal
		- intermediate phase between ordinary and integer quantum Hall insulators in 3D
	- Non magnetic Weyl semimetal
		- intermediate phase between ordinary and 3D weak TR-invariant TI
	- Type-I Dirac ..

- Topology of Weyl semimetal
	- positive Weyl $k\cdot \sigma$ ($\sigma$ vector on Bloch sphere) $C= +1$ 
	- negative Weyl $-k\cdot\sigma$, $C=-1$ 
	- Berry curvature monopole $1/k^2$ decay away from Weyl point 
		- $\Omega =$ Area on Bloch sphere/ Area in k space
- Surface Fermi arcs
	- Chern number around closed cylinder (fixed radius around point) around Weyl points
## Dirac semimetals
- $Na_3Bi$ 

## Weyl semimetals
- Separation between Weyl points, Luttinger parameter
- Spontaneous electric polarization $P = \pm V_F/ 8\pi^2$ 
- SOC at Kramer's degenerate $k$ points ($k=0, \pi/a$) 
- Chiral crystals = no inversion, no mirror, no rotoinversion
	- Allow for Chern number at crossing point
### Domain wall network construction
- Single Weyl fermion is anomalous: it may only exist as an edge state of a 4D quantum Hall insulator and can not be localized as long as the insulator is intact
	- This implies localization may only arise from inter-nodal scattering
- Consider only Fourier component of the disorder potential coupling the nodes $\{ \mathcal{K} \}$ 
	- Breaks translational symmetry and opens a gap
- Disorder phase of potential. 
	- Vortex lines of the phase are anomalous
	- Gauge invariance fails on vortex line
		- May be cancelled by 1D chiral metal (Callan-Harvey anomaly inflow)
	- Every vortex line carries 1D chiral mode with chirality of the sign of the vortex
	- Restoration of translational symmetry requires vortex lines to percolate through the whole sample, preventing localization
- Consider Weyl semimetal with short-range disorder $<V(r)V(r')> = \delta(r-r')$ 
	- impurity self-energy (self-consistent Born approximation)
	- self-consistent equation for scattering rate $1/\tau$ from imaginary part
		- solution for some critical disorder strength, above which there is a diffusive metal (nodes destroyed)
		- Below critical strength, disorder irrelevant
### Fermi arcs
- ARPES measurements of surface Fermi arcs
- Cylinder around Weyl point, surface is TI, encloses chiral charge

### Electromagnetic response
- Chiral anomaly $E\cdot B$  
- magnetoresistance negative for certain magnetic field angles
##### Current jetting
- Problem: apply magnetic field, it cannot change the total current, but affect the spatial distribution of current density
- If it makes it narrower, the current density will become bigger in the center
- Hard to rule out
##### Manifestation of Berry curvature
- Anomalous velocity 
- Selection rule 
	- circular selection rule 
	- Opposite Berry curvature
	- optical excitation prefers left handed or right handed
	- Shine circularly polarized light, selective excitation on one side of Weyl point
	- Gives photocurrent
	- Opposite current generated from opposite side excitation
- Pauli Blockade + tilting
	- two sides of Weyl point are not symmetric (tilting)
##### Quantized photocurrent in topological chiral crystals
$$
\frac{dJ^{CPGE}}{dt} = \frac{e^3}{c\epsilon_0\hbar^2}CI_{laser}
$$
- depends on Chern number
- Only measures time derivative of current, so use laser pulses

##### Anomalous Hall effect
- An ideal magnetic Weyl semimetal will have a (semi) quantized AHE.
- Realistic magnetic Weyl semimetals have many Wely points (and trivial Fermi surfaces)
- In nonmagnetic Weyl semimetals, TRS makes total Berry curvature goes to zero
	- Berry curvature dipole 
	- Apply E field, Fermi surface tilts and now can get finite Hall current
	- Hall conductivity is proportional to separation in k space of the Fermi surface crossings
	- nonlinear anomalous Hall in bilayer $WTe_2$ 