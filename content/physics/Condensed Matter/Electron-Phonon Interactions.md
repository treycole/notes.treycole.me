---
tags:
  - Physics
  - Condensed-Matter
created: 2025-04-05T19:07
modified: 2025-04-06T15:39
---
#### References
- Cohen and Louie, "Fundamentals of Condensed Matter Physics", chapter 10
## Rigid-ion Model

The idea is that each ion (or atom) is assumed to contribute rigidly to the total potential seen by electrons in the solid. As an ion is moved away from equilibrium position, the potential is no longer periodic and will scatter an electron from on Bloch state to another. 

Let $V(\mathbf{r})$ be the static crystal potential,
$$ 
V(\mathbf{r}) \rightarrow V(\mathbf{r}, t) = \sum_{l, a} V_a \left(\mathbf{r} - \mathbf{R}_{l}^{a}(t)\right)
$$
where 
$$ 
\mathbf{R}_{l}^{a}(t) = \mathbf{R}_{l} + \tau_{a} + \delta \mathbf{R}_{l}^{a}(t)
$$
and $l$ is the cell index, $a$ is the atomic index, and $\mathbf{\tau}_a$ is the vector to atoms in the basis. 

>[!info] 
> We assume the displacement is much less than atomic spacing $d$
> $$ 
> \xi \equiv \delta \mathbf{R}_{l}^{a} << d
> $$
> For typical vibrations it can be shown that 
> $$\frac{\xi}{d} \approx (\frac{m}{M})^{1/4} $$
> and the excitation or phonon energy $E_{ph}$ scales as 
> $$
> \frac{E_{ph}}{E_{el}} \approx(\frac{m}{M})^{1/2} \leq 10^{-2}
> $$
> where $E_{el}$ is a typical electron energy, $m$ is the mass of the electron and $M$ is the atomic mass. Because of this, we can assume the large-scale band structure is unmodified. However, the ion vibrations do affect the dynamics of the electrons. For example, in a metal, electron-phonon interactions can cause a "wrinkle" in the band structure within a few meV of the Fermi energy. 

Assuming a small displacement, at a specific time $t$, we can expand the potential to first order in the displacements
$$
V(\mathbf{r},t) \approx \sum_{l, a} \left[ V_{a}(\mathbf{r}-\mathbf{R}_{l}^{a}) + \delta \mathbf{R}_{l}^{a} \cdot \nabla_{\mathbf{r}} V_{a}(\mathbf{r}-\mathbf{R}_{l}^{a}) \right]
$$
 The total Hamiltonian is 
$$
H_{tot} = H_{el} + H_{ph} + H_{el-ph}
$$

The electron-phonon contribution is
$$
H_{el-ph} = \sum_{l, a}  \delta \mathbf{R}_{l}^{a} \cdot \nabla_{\mathbf{r}} V_{a}(\mathbf{r}-\mathbf{R}_{l}^{a})
$$
Expanding the displacement in [[Phonons|phonon]] coordinates, we have
$$
\mathbf{R}_{l}^{a}  = \sum_{\mathbf{q}\alpha} A_{\mathbf{q\alpha}}^a \hat{\epsilon}_{\mathbf{q}\alpha}^{a} e^{i\mathbf{q}\cdot \mathbf{R}_{l}^{a}}(a_{\mathbf{q}\alpha} + a_{\mathbf{-q}\alpha}^{\dagger})
$$
where
$$
A_{\mathbf{q\alpha}}^a = \sqrt{\frac{\hbar}{2M_a N \omega_{\mathbf{q}\alpha}}}
$$
and $\mathbf{q}$ is the wavevector, $a$ labels the atomic species, $\alpha$ is the phonon branch index, and $\hat{\epsilon}$ is the polarization vector. The phonon destruction and creation operators are $a$ and $a^{\dagger}$ respectively. They are not related to the atomic species. Substituting this into the electron-phonon Hamiltonian, we get
$$
H_{el-ph} = \sum_{a} \sum_{\mathbf{q}\alpha} A_{\mathbf{q\alpha}}^a \hat{\epsilon}_{\mathbf{q}\alpha}^{a} \cdot \left[ e^{i\mathbf{q} \mathbf{R}_{l}^{a}} \nabla_{\mathbf{r}} V_{a}(\mathbf{r}-\mathbf{R}_{l}^{a}) \right] (a_{\mathbf{q}\alpha} + a_{\mathbf{-q}\alpha}^{\dagger}) 
$$

In second quantized formalism, we have
$$
H_{el} = \sum_{n\mathbf{k}} \epsilon_{n\mathbf{k}} c_{n\mathbf{k}}^{\dagger} c_{n\mathbf{k}}
$$
$$
H_{ph} = \sum_{\mathbf{q}\alpha} \left(a_{\mathbf{q}\alpha}^{\dagger} a_{\mathbf{q}\alpha} + \frac{1}{2}\right) \hbar \omega_{\mathbf{q}\alpha}
$$
$$
\begin{align}
H_{el-ph} &= \sum_{nn'\mathbf{k}\mathbf{k'}} \langle n'\mathbf{k'}|H_{el-ph} |n\mathbf{k}\rangle c_{n'\mathbf{k'}}^{\dagger} c_{n\mathbf{k}} \\
&= \sum_{nn'\mathbf{k}\mathbf{k'},\mathbf{q}\alpha} M_{n\mathbf{k}\rightarrow n'\mathbf{k'}}^{\alpha \mathbf{q}}  c_{n'\mathbf{k'}}^{\dagger} c_{n\mathbf{k}} (a_{\mathbf{q}\alpha} + a_{-\mathbf{q}\alpha}^{\dagger})
\end{align}
$$
This defines the _electron-phonon matrix element_ $M\equiv$. We now suppress the band indices by using an extended zone scheme so that $\mathbf{k}$ is not limited to the first Brillouin zone. The electron-phonon Hamiltonian. The matrix elements 