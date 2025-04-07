---
created: 2020-04-17T17:24:00
modified: 2025-04-07T00:36
tags:
  - Physics
  - Condensed-Matter
---

## Thermal Properties

### Phonon Heat Capacity

__References__
- Kittel, "Introduction to Solid State Physics", Chapter 5

Using the more fundamental heat capacity, with respect to constant volume
$$C_V = (\frac{\partial U}{\partial T})_V$$
Contributions of phonons to heat capacity of a crystal is called __lattice heat capacity__.

The total energy of phonons at a temperature $\tau = k_bT$ may be written as a sum of energy over all phonon modes, eg. a superposition of wave modes. Must sum over allowed values of K and polarizations (to define dimensionality).
$$
U_{lat} = \sum_K\sum_p U_{K,p} = \sum_k\sum_p  \langle n_{K,p} \rangle \hbar \omega_{K,p}
$$
$\langle n_{K,p} \rangle$ is  the average occupation number of a certain phonon polarization and k-value in thermal equilibrium. It is given by the Planck distribution
$$
\langle n \rangle = \frac{1}{exp(\hbar \omega / \tau) - 1}
$$
##### Normal Mode Enumeration
$$U_{lat} = \sum_K\sum_p U_{K,p} = \sum_k\sum_p \frac{\hbar \omega_{K,p}}{\exp(\hbar \omega_{K,p} / \tau) - 1}$$
Replace summation over K by integral. Crystal has $D_p(\omega)d\omega$ modes of a given polarization in the frequency range $\omega$ to $\omega + d\omega$.
$$
U_{lat} = \sum_p\int d\omega_p D_p(\omega)\frac{\hbar \omega}{\exp(\hbar \omega / \tau) - 1}
$$
Lattice heat capacity found by differentiating above expression with respect to T. Define $x=\hbar\omega/\tau = \hbar\omega/k_BT$
$$
C_{lat} = k_B\sum_p\int d\omega_p D_p(\omega) \frac{x^2 \exp(x)}{(\exp(x)-1)^2}
$$
$D(\omega)$ is often called __density of states__

##### Density of States in One Dimension
Boundary value problem for vibrations of a one-dimensional line of length $L$ carrying $N+1$ particles of separation $a$. Particles at $s = 0$ and $s = N$, first and last, are fixed in place. Each normal vibrational mode of certain polarization has form of standing wave. 
$$
u_s = u(0)e^{-i\omega_{K,p}t} \sin(Ksa)
$$
Boundary conditions require $sin(Ksa) = 0$ for $s=N$ and $s=0$. The condition is satisfied for $Ksa = n\pi$ so that $K = n\pi/Na$ where $Na = L$. Of the N+1 atoms only N-1 are allowed to move. 
$$
K = \frac{n\pi}{L}\ \  \ ,\ \ n=1 \cdots N-1
$$
In one dimension there is one mode per $\Delta K = \pi/L$ so that the number of modes per unit range of K is,
$$
\text{modes} = L/\pi \  \cdots \ \ \mathrm{for}\ n \le N \ \mathrm{and}\ K \le \pi/a
$$
In one dimension there is 3 polarizations for each K, one longitudinal and two transverse. The number of states in one dimension is
$$ 
D_1(\omega)d\omega = \frac{L}{\pi}\frac{dK}{d\omega}d\omega = \frac{L}{\pi}\frac{d\omega}{d\omega/dK}
$$
