---
created: 2020-04-17T15:53:00
modified: 2025-04-06T15:56
tags:
  - Physics
  - Condensed-Matter
---


### Introduction
The _Fermi-surface_ is the surface of constant energy $\mathbf{\epsilon_F}$ in  $k$- space. The Fermi surface separates the unfilled orbitals from the filled orbitals, at a temperature of absolute zero. The electrical properties of the metal are determined by the volume and shape of the Fermi surface, because the current is due to changes in the occupancy of states near the Fermi surface. 

The Fermi-surface for a free electron begins as a sphere with radius $k_F$ determined by the valence electron concentration in the zone. Interactions with the lattice causes deformation of the surface. 

### Reduced Zone Scheme
It is always possible to chose $k$ of any [[Bloch functions|Bloch function]] to lie in the first Brollouin zone. The procedure is known as mapping the band in the reduced zone scheme. 

If we encounter a Bloch function written as 
$$
\psi_{\mathbf{k^{'}}}(\mathbf{r}) =e^{i\mathbf{k^{'}}\cdot \mathbf{r}} u_{\mathbf{k^{'}}}(\mathbf{r})
$$with $\mathbf{k^{'}}$ outside the first zone, we may always find a suitable reciprocal lattice vector $\mathbf{G}$ such that $\mathbf{k} = \mathbf{k^{'}} + \mathbf{G}$ lies within the first Brillouin zone. Then
$$
\psi_{\mathbf{k^{'}}}(\mathbf{r}) = e^{i\mathbf{k^{'}}\cdot \mathbf{r}} u_{\mathbf{k^{'}}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}(e^{-i\mathbf{G}\cdot\mathbf{r}}u_{\mathbf{k^{'}}}(\mathbf{r})) = e^{i\mathbf{k}\cdot\mathbf{r}}u_{\mathbf{k}}(\mathbf{r}) = \psi_{\mathbf{k}}(\mathbf{r})
$$

and the energies are periodic $E_{\mathbf{k^{'}}} = E_{\mathbf{k}}$.

