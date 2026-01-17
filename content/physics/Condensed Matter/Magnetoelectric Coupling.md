---
tags:
  - Physics
  - Condensed-Matter
created: 2025-04-09T14:10
modified: 2025-04-15T02:17
---
__References__
- _Berry Phases in Electronic Structure Theory_, David Vanderbilt

# Magnetoelectric Polarizability

An insulating material shows _magnetoelectric_ (ME) behavior if an applied electric field induces changes in the magnetism, or if a magnetic field induces changes in the electric polarization. It may happen in materials with low enough symmetry that this cross term occurs at _linear_ order. The linear ME coupling relates closely to Berry phases and topological insulators.

The __linear ME effect__ is defined by a $3\times 3$ matrix,
$$
\alpha_{\mu \nu} =  \left(\frac{\partial P_\mu}{\partial B_\nu} \right)_{\mathbf{\mathcal{E}}} = \left( \frac{\partial M_\nu}{\partial \mathcal{E}_\mu}\right)_{\mathbf{B}} 
$$
The equality follows from a Maxwell-type relation, involving commuting derivatives of free energy. The polarization and electric field are inversion-odd and time-reversal-even, while the magnetization and magnetic field are inversion-even and time-reversal-odd. This means the ME coupling is odd under either $\mathcal{P}$ or $\mathcal{T}$. Ordinarily, this would mean it should vanish in crystals with either symmetry. Some ferromagnets such as Cr$_2$O$_3$ for which neither $\mathcal{I}$ or $\mathcal{T}$ are symmetries by themselves, but $\mathcal{P} *\mathcal{T}$ _is_. 

There are several physical origins of the ME coupling

- __Frozen-lattice__: The atomic coordinates are fixed in place
- __Lattice-mediated__: First order $\mathcal{E}$ induces changes to atomic coordinates, inducing change to magnetization. In crystals that are both piezoelectric and the piezomagnetic, the coupling can be mediated in a similar way but with induced lattice strain replacing internal atomic displacements as the intermediate variable. The computational treatment of these responses is discussed by Íñiguez (2008) and  Wojdeł and Íñiguez (2009).

On the other hand

- __Spin response__: Corresponding to the change of spin magnetization
- __Orbital response__: Corresponding to changes in the [[Orbital Magnetization]]

In most magnetic materials, the spin magnetization dominates over the orbital part, especially in systems whose magnetism arises on $3d$ transition-metal ions for which SOC is weak. Experimentally it is not easy to distinguish between the frozen-lattice and lattice-mediated responses. 

>[!hint] Computational Methods
> Recent developments in first-principles methodologies now allow for calculation of all contributions, as has been done for Cr$_2$O$_3$ by Malashevich et al. (2012)

The frozen-lattice orbital ME, sometimes called __orbital magnetoelectric polarizability__ is the one with topological properties and is linked to [[Axion Insulators]] and 3D [[Topological Insulators]]. This piece is only well defined modulo a quantum, while lattice-mediated and spin contributions are all uniquely defined in the usual way.  

### ME coupling and Surface AHC

Consider an insulating block of material with insulating surfaces, and with an isotropic linear ME coupling. 