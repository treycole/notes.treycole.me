---
created: 2020-04-17T15:33:00
modified: 2025-04-06T15:53
tags:
  - Physics
  - Condensed-Matter
---
__References__
- Kittel, "Introduction to Solid State Physics", Chapter 7

### Introduction
The [[Free Electron Fermi Gas|free electron model]] of metals gives us good insight into the heat capacity, thermal conductivity, electrical conductivity, magnetic susceptibility, and electrodynamics of metals. But the model fails to help us with other large questions

- The distinction between metals, semimetals, semiconductors, and insulators
- The occurrence of positive values of the Hall coefficient
- The relation of conduction electrons in the metal to the valence electrons of free atoms
- Many transport properties, particularly magnetotransport. 

Every solid contains electrons. The important question for electrical conductivity is how the electrons respond to an applied electric field. We shall see that electrons in crystals are arranged in __energy bands__ separated by regions in energy for which no wavelike electron orbitals exist. Such forbidden regions are called __energy gaps__ or __band gaps__, and result from the interaction of the conduction electron waves with the ion cores of the crystal.

The crystal behaves as an insulator if the allowed energy bands are either filled or empty, for then no electrons can move in an electric field. The crystal behaves as a metal if one or more bands are partly filled say between 10 and 90 percent filled. The crystal is a semiconductor or a semimetal if one or two bands are slightly filled or slightly empty. 

To understand the difference between insulators and conductors, we must extend the free electron model to take account of the periodic lattice of the solid. The possibility of a band gap is the most important new property that emerges.

We shall encounter other quite remarkable properties of electrons in crystals. For example, they respond to applied electric or magnetic fields as if the electrons were endowed with an effective mass $m^*$, which may be larger or smaller than the free electron mass, or may even be negative. Electrons in crystals respond to applied fields as if endowed with negative or positive charges, -e or +e, and herein lies the explanation of the negative and positive values of the Hall coefficient.

### Nearly Free Electron Model
On the [[Free Electron Fermi Gas|free electron mode]] the allowed energy values are distributed essentially continuously from 0 to infinity. They take the form,
$$
E_k = \frac{\hbar^2}{2m}(k_x^2 + k_y^2 + k_z^2)
$$
where, for periodic boundary conditions over a cube of side L,
$$
k_x,k_y,k_z = 0\ ;\ \ \pm\frac{2\pi}{L};\ \ \pm\frac{4\pi}{L}; \ \ \cdots
$$
The free electron wavefunctions are of the form
$$
\psi_{\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}
$$
they represent running waves and carry momentum $\mathbf{p} = \hbar\mathbf{k}$

The band structure of a crystal can often be explained by the nearly free electron model for which the band electrons are treated as perturbed only weakly by the periodic potential of ion cores. This model answers almost all the qualitative questions about the behavior of electrons in metals.


We explain physically the origin of energy gaps in the simple problem of a linear solid of lattice constant $a$. The low energy portions of the band structure are shown qualitatively for entirely free electrons (continuous parabola) and for electrons that are nearly free, but with an energy gap at $k = \pm \frac{\pi}{a}$. The Bragg condition $(\mathbf{k} + \mathbf{G})^2 = k^2$ for diffraction of a wave of wavevector $\mathbf{k}$ becomes in one dimension
$$
k = \pm \frac{1}{2}G = \pm n\pi/a
$$
where $G=2\pi n/a$ is a reciprocal lattice vector and n is an integer. The first reflections and the first energy gap occur at $k=\pm \pi/a$. The region in $\mathbf{k}$ space between $\pi / a$ and $\pi / a$ is the __first Brillouin zone__ of this lattice. Other energy gaps occur for other values of the integer n.

>[!info]
> We know that _Bragg reflection_ is a characteristic feature of wave propagation in crystals. Bragg reflection of electron waves in crystals is the cause of energy gaps.  At Bragg reflection wavelike solutions of the Schrodinger equation do not exist. These energy gaps are of decisive significance in determining whether a solid is an insulator or a conductor. 


The wavefunctions at $k=\pm \pi/a$ are not the traveling waves $e^{i\pi x/a}$ or $e^{-i\pi x/a}$ of free electrons. At these special values of k the wavefunctions are made up of equal parts of waves traveling to the right and to the left. When the Bragg reflection condition $k=\pm \pi/a$ is satisfied by the wavevector, a wave traveling to the right is Bragg-reflected to travel to the left and vice versa. Each subsequent Bragg reflection will reverse the direction of travel of the wave. A wave that travels neither to the right nor to the left is a standing wave: it doesn't go anywhere.

The time-independent state is represented by standing waves. We can form two different waves from the two traveling waves
$$e^{\pm i \pi x/a}= \cos(\pi x/a)\pm i \sin(\pi x/a)$$
so that the standing waves are

$$
\psi(+) = e^{i \pi x/a} + e^{-i \pi x/a} = 2\cos(\pi x/a)
$$
$$
     \psi(-) = e^{i \pi x/a} - e^{-i \pi x/a} = 2i\sin(\pi x/a)
$$
The standing waves are labeled (+) or (-) according to whether or not they change sign when -x is substituted for x. Both standing waves are composed of equal parts of right- and left-directed traveling waves.

### Origin of the Energy Gap

The two standing waves $\psi(+)$ and $\psi(-)$ pile up electrons at different regions and therefore the two waves have different values of potential energy in the field of the ions of the lattice. This is the origin of the energy gap. The probability density $\rho$ of a particle is $\psi^*\psi=|\psi|^2$. For a pure traveling wave $e^{ikx}$, we have $\rho = 1$, so that the charge density is constant. The charge density is not constant for a linear combination of plane waves. Consider the standing wave $\psi(+)$ in, for this we have
$$
\rho(+) = |\psi(+)|^2 \propto \cos^2(\pi x/a)
$$
This function piles up electrons (negative charge) on the positive ions centered at $x = 0,\ a,\ 2a, \cdots$. where the potential energy is lowest.

For the other standing wave $\psi(-)$ the probability density is
$$
\rho(-) = |\psi(-)|^2\propto \sin^2(\pi x/a)
$$
which concentrates electrons away from the ion cores. 

When we calculate the average or expectation values of the potential energy over these three charge distributions, we find that the potential energy of $\rho(+)$ is lower than that of the traveling wave, whereas the potential energy of $\rho(-)$ is higher than the traveling wave. We have an energy gap of width $E_g$ if the energies of $\rho(-)$ and $\rho(+)$ differ by $E_g$. Just below the energy gap at points at the edge of the 1st BZ, the wavefunction is $\psi(+)$, and just above the gap the wavefunction is $\psi(-)$.

### Magnitude of the Energy Gap
The wavefunctions at the Brillouin zone boundary $k = \pi / a$ are $\sqrt{2}\cos(\pi x/a)$
and $\sqrt{2}\sin(\pi x/a)$, normalized over unit length of line. Let us suppose that the potential energy of an electron in the crystal at point x is 
$$
U(x) = U\cos(2 \pi x/a)
$$
The first order energy difference between the two standing wave states is
$$
E_g = \int_0^1 dx U(x)[|\psi(+)|^2 - |\psi(-)|^2] = U
$$
We see that the gap is equal to the Fourier component of the crystal potential
