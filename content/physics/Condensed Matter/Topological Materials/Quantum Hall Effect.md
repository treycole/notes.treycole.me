---
tags:
  - Topological-Materials
  - Condensed-Matter
created: 2025-04-06T17:45
modified: 2025-04-06T17:49
---
The classification of matter into distinct topological classes is an idea rooted in the discovery of the integer quantum Hall effect (IQHE) in [[Topological Materials#Integer Quantum Hall Effect Observed|1980 by Klaus von Klitzing]], an achievement that earned von Klitzing the Nobel Prize in 1985. In a two-dimensional electron gas (2DEG) subjected to large magnetic fields, he found that at certain values of the magnetic field, the Hall conductance becomes quantized in units of a fundamental constant, 
$$
    \sigma_{xy} = \frac{e^2}{h}\nu
$$
where $\nu$ is exactly an integer at low temperatures. Curiously, these measurements were invariant from sample to sample, regardless of impurities or defects, hinting at some unifying principle connecting the devices he measured.

In [[Topological Materials#TKNN Invariant Introduced|1982, Thouless, Kohmoto, Nightingale, and den Nijs]], aiming to explain these peculiar results, related the Hall conductance to the band structure of the 2DEG using the Kubo formula,
$$
    \sigma_{xy} = \frac{e^2}{h} \sum_{n}^{\rm occ} \frac{i}{2\pi} \int_{\rm BZ} d^2k \ \langle \partial_{k_1} u_{n\mathbf{k}} |\partial_{k_2} u_{n\mathbf{k}} \rangle - \langle \partial_{k_2} u_{n\mathbf{k}} |\partial_{k_1} u_{n\mathbf{k}}  \rangle.
$$
where $u_{n\mathbf{k}}$ are the cell-periodic part of the Bloch energy eigenstates. Since the Brillouin zone (BZ) forms a closed torus, they reasoned that this quantity be an integer multiple of $2\pi$ through phase matching conditions, explaining the quantized nature of the Hall conductance. This equation has become known as the TKNN formula and, in part, won Thouless the Nobel Prize in 2016 for its use of topology in explaining physical phenomena. 

![[IQHE.jpg]]

Only a year later, in 1983, Michael Berry published his seminal paper proving the existence of a geometrical phase accompanying adiabatically transported quantum states, now known as the Berry phase. A short six months after Berry's publication, the mathematical physicist Barry Simon drew the connection between Berry's curvature and the TKNN formula by relating the quantum Hall conductance to the Chern number of the vector bundle formed by the occupied eigenstates. The relation between the Chern number and the quantum Hall conductance is,
$$
    \sigma_{xy} = \frac{e^2}{h} \sum_{n}^{\rm occ} C_n

$$
where $C_n$ is an integer value representing the Chern number of the $n$'th band, and is related to the Berry curvature as 
$$
C_n =\frac{1}{2\pi} \int_{\rm BZ} d^2k\ \Omega_n(\mathbf{k})
$$
where $\Omega_n(\mathbf{k})$ is the Berry curvature of the $n$'th band. 

This insight from Simon provided the link between topology and the IQHE. In fact, the Chern number is intimately similar to the famous Gauss-Bonet theorem from topology, which states that the total curvature of a closed two-dimensional manifold $M$ is quantized in units of $2\pi$,
$$
\frac{1}{2\pi}\int_M K dA = 2(1-g_M)
$$
where $K$ is the local Gaussian curvature and $g_M$ is the genus marking the number of handles on the surface $M$. The genus is a topological invariant of the surface, and analogously, the Chern number is a type of topological invariant of the manifold formed by quantum states defined over a closed surface. Topological invariants are global quantities that do not change due to smooth local changes of the underlying surface. Thus, a smooth local change in the band structure can change the Berry curvature but does not change the Chern number. This gives an elegant explanation for why Von-Klitzing found that the IQHE persisted across samples of differing purity. 