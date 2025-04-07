---
draft: 
tags:
  - Physics
  - Condensed-Matter
created: 2024-06-13T11:30
modified: 2025-04-07T02:53
---
__References__
- Cohen and Louie, " Fundamentals of Condensed Matter Physics"

When a dressed electron moves in an ionically bonded crystal, the Coulomb interaction of the positive and negative ions with the electron create lattice distortions. When these distortions are expressed as quantized phonon excitations, the combination of the lattice distortions and the electron create a quasiparticle called the __polaron__. 

__Polarons__ are electrons in a crystal coupled to longitudinal optical phonons in a polar crystal via the Fröhlich interaction. This interaction gives the electron an increased effective mass and lowers the electron energy. It also changes the scattering properties and mobility.

Polarons are sorted into two classes, large and small, determined by its size $l_p$ which can be thought of as the effective radius of the phonon cloud. 

- Large polaron: $l_d$ > $d$ (interatomic distances) and weak electron-phonon coupling
- Small polaron: $l_d$ < $d$ (interatomic distances) and strong electron-phonon coupling

If the interaction is strong enough, the electron may become self-trapped in its own lattice distortion. 

### Small polarons

In the small polaron regime, we may use perturbation theory. Referring to [[Electron-Phonon Interactions]], we may write the interaction Hamiltonian as
$$
H_{e-ph} = \sum_{\mathbf{k}\mathbf{k'}\mathbf{q}} M_{\mathbf{q}}(\mathbf{k}\rightarrow\mathbf{k}') c^{\dagger}_{\mathbf{k'}}c_{\mathbf{k}} (a_{\mathbf{q}} + a^{\dagger}_{-\mathbf{q}})
$$
Since the electron couples to LO phonos, $M$ can be written
$$
M_\mathbf{q} = i \frac{\hbar \omega_{LO}}{|\mathbf{q}|} \left(\frac{\hbar}{2m\omega_{LO}} \right)^{1/4} \left(\frac{4\pi \alpha}{\Omega}\right)^{1/2}
$$
where the dimensionless Fröhlich coupling constant is 
$$
\alpha=\frac{e^2}{\hbar}(\frac{1}{\epsilon_{\infty}} - \frac{1}{\epsilon_0})\sqrt{\frac{m}{2\hbar \omega_{LO}}}
$$
In the weak coupling regime $\alpha < 1$. The self energy at $T=0$ from second order perturbation theory is 
$$
\Sigma_{a} = \Delta E_a = \sum_{b} \frac{|\langle a|H_{e-ph} | b\rangle}{E_{a}-E_{b}}
$$
where $b$ are all of the possible intermediate states. For the initial state $a$, we assume the electron is in the free electron state $|k\rangle$ with no phonons so the total wavefunction is $|k,0\rangle$ and the total energy is $E_a=\hbar^2 k^2 / 2m$. At an intermediate state $b$ the electron is in state $|\mathbf{k}-\mathbf{q}\rangle$ and one phonon is present so the total wavefunction is $a^{\dagger}_{\mathbf{q}}|\mathbf{k}-\mathbf{q}, 0\rangle$ and the energy is 
$$
E_b = \frac{\hbar^2 (\mathbf{k}-\mathbf{q})^2}{2m} + \hbar \omega_{\mathbf{q}} = \frac{\hbar^2 k^2}{2m} + \frac{\hbar^2 q^2}{2m} - \frac{\hbar^2 \mathbf{q}\cdot \mathbf{k}}{m} + \hbar \omega_{LO}
$$
and 
$$
\Delta E_a = -\sum_{\mathbf{q}} \frac{|M_{\mathbf{q}}|^2}{\hbar \omega_{LO}+\hbar^2 q^2/2m - \hbar^2 \mathbf{k}\cdot\mathbf{q}/m}
$$
