- Approximate ground state energy $$E_g = \text{min}_{\psi} \langle \psi|H|\psi\rangle $$
- Minimize in two steps $$\text{min}_{\psi \rightarrow n(r)} \langle \psi|H|\psi\rangle = \text{min}_{\psi \rightarrow n(r)}  \langle \psi|T + V_{e-e}|\psi\rangle  + \int d^3 r V_{ext}(r) n(r)$$
#### Kohn-Sham 
- Map many-body to independent-particle problem
$$
V_{eff}(r) = V_{ext}(r) + \int\frac{n(r')}{|r-r'|}dr' + V_{xc}
$$
- Local density approximation (LDA)  $$n(r) = \sum_{\nu=1}^N |\psi_{\nu}|^2$$ where $\psi_{\nu}$ are eigenstates of Hamiltonian with $V_{eff}$ as potential
- Successful for many s- and p-electron materials
### Correlated materials
- Can DMFT capture metal-Mott insulator transition? Yes
- Mix DFT and Many Body approach
- Kondo singlet lowers energy. 
- Spectral density evolves as $U/W$ in one band Hubbard model