---
created: 2020-04-17T15:26:00
modified: 2025-04-06T15:37
tags:
  - Physics
  - Condensed-Matter
---

__References__
- Kittel, "Introduction to Solid State Physics", Chapter 6
## Energy Levels in One Dimension

Consider free electron gas in one dimension, taking account of Pauli exclusion principle. Electron is confined to length L with infinite barriers at each boundary. Electron energy eigenmodes are given by $H\psi = E\psi$ with $H = p^2/2m$ and $p = -i\hbar\ d/dx$
$$
H\psi_n = -\frac{\hbar^2}{2m}\frac{d^2\psi_n}{dx^2} = E_n\psi_n
$$
$E_n$ is the energy of the electron in the __orbital__, for a system with only one electron in its valence shell. Boundary conditions are $\psi_n(0) = 0$, $\psi_n(L) = 0$. So the general solution is 
$$
\psi_n = A\sin(\frac{2\pi}{\lambda_n}x)
$$
With $L = \frac{1}{2}n\lambda_n$ and energies given by
$$
E_n = \frac{\hbar^2}{2m}(\frac{n\pi}{L})^2
$$

According to the Pauli exclusion principle no two electrons may have all the same quantum numbers. The quantum numbers in a linear solid of conduction electrons are $n$ and $m_s$, which is the magnetic quantum number $m_s = \pm \frac{1}{2}$ which is the projection of the spin vector along the z-axis.

Each value of n is two-fold degenerate, and the energies are filled with increasing n. The condition $2n_f = N$, where $n_f$ is the highest filled energy level, determines the $n_f$. The __Fermi energy__ $E_f$ is the energy of the topmost filled energy level in the ground state of the N electron system. 
$$
E_f = \frac{\hbar^2}{2m}(\frac{n_f\pi}{L})^2 = \frac{\hbar^2}{2m}(\frac{N\pi}{2L})^2
$$

### Fermi-Dirac Distribution - Temperature Dependence

The ground state is the state of N electron system at absolute zero temperature. If the temperature is increases the kinetic energy of the electron gas increases. Some of the energy levels that were vacant at absolute zero are now occupied and some that were occupied are now vacant. The _Fermi-Dirac distribution_ gives the probability that an orbital at energy E will be occupied in an ideal electron gas in thermal equilibrium is
$$ 
f(E) = \frac{1}{\exp[(E-\mu)/k_bT] + 1}
$$
$\mu$ is a function of temperature, it is chosen so that the number of particles in a system comes out correctly, that is equal to N. At absolute zero, $\mu = E_f$ because in the limit $T \rightarrow 0$ the function $f(E$ changes discontinuously from 1 (filled) to 0 (empty) at $E =E_f=\mu$. At all temperatures, $f(E) = \frac{1}{2}$ when $E=\mu$. The quantity $\mu$ is the __chemical potential__. The high energy tail of the distribution is that part for which $E-\mu >> k_bT$, here the exponential term is dominant and approximates the Boltzmann or Maxwell distribution. 
$$
f(E) \approx \exp[-(E-\mu)/k_bT]
$$

### Electrical Conductivity and Ohm's Law
The momentum of a free electron is related to the wavevector by $m\mathbf{v} = \hbar \mathbf{k}$. In an electric field $\mathbf{E}$ and magnetic field $\mathbf{B}$ the force $\mathbf{F}$ on an electron of charge -e is 
$$\mathbf{F} = m\frac{d\mathbf{v}}{dt} = \hbar\frac{d\mathbf{k}}{dt} -e[\mathbf{E} + (1/c)\mathbf{v}\times\mathbf{B}]
$$
In the absence of collisions the Fermi sphere moves in $\mathbf{k}$ space at a uniform rate by a constant applied electric field. We integrate (1) with $\mathbf{B} = 0$ to obtain
$$
\mathbf{k}(t) - \mathbf{k}(0) = -e\mathbf{E}t/\hbar
$$
If the force $\mathbf{F} = -e\mathbf{E}$ is applied at time t=0 to an electron gas that fills the Fermi sphere centered at the origin of $\mathbf{k}$ space, then at a later time $t$ the sphere will be displaced to a new center at
$$
\delta\mathbf{k} = -e\mathbf{E}t/\hbar
$$
Notice that the Fermi sphere is displaced as a whole because every electron is displaced by the same $\mathbf{\delta k}$.

Because of collisions of electrons with impurities, lattice imperfections, and phonons, the displaced sphere may be maintained in a steady state in an electric field. If the collision time is $\tau$, the displacement of the Fermi sphere in the steady state is given by $\delta\mathbf{k} = -e\mathbf{E}\tau/\hbar$. The incremental velocity is $\mathbf{v} = \mathbf{\delta k}/m = -e\mathbf{E}\tau/\hbar$. If in a constant electric field $\mathbf{E}$ there are $n$ electrons of charge $q=-e$ per unit volume, the electric current density is
$$
\mathbf{j} = nq\mathbf{v} = ne^2\tau\mathbf{E}/m
$$
This is __Ohm's Law__

The electrical conductivity $\sigma$ is defined by $\mathbf{j} = \sigma\mathbf{E}$, so
$$
\sigma = \frac{ne^2\tau}{m}
$$
The electrical resistivity $\rho$ is defined as the reciprocal of the conductivity so that 
$$
\rho = \frac{m}{ne^2\tau}
$$