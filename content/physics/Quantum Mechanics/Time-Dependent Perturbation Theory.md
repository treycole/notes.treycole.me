Suppose we have a separable Hamiltonian
$$
H = H_0 + V(t)
$$
where $H_0$ is assumed to represent a time-independent Hamiltonian whose energy eigenstates and eigenvalues are known. 
$$
H_0 |n\rangle = E_n |n\rangle
$$
We no longer expect that a state initially populated in one of these eigenstates to remain there for all times. There will generally be transitions to other states with some finite probability due to $V(t)$. 

Suppose we have an arbitrary state at time $t=0$ represented as
$$
|\alpha\rangle = \sum_n c_n(0)|n\rangle
$$
At a later time, the state will be 
$$
|\alpha, t_0=0; t\rangle = \sum_{n}c_n(t) e^{-iE_n t/\hbar}|n\rangle
$$
where the notation indicated that at time $t_0=0$ the state was in $|\alpha\rangle$. The time dependence that would have been there in a time-independent Hamiltonian is factored out. 
## Interaction (Dirac) Picture
We _define_ 
$$
|\alpha, t_0;t\rangle_I = e^{iH_0 t/\hbar}|\alpha, t_0;t \rangle_S
$$
where $|\alpha, t_0;t \rangle_S$ is the state ket in the Schrodinger picture at some later time. We can similarly define observables in the interaction picture
$$
V_I = e^{iH_0 t/\hbar} V e^{-iH_0 t/\hbar}
$$
where $V$ is understood as the time dependent potential in the Schrodinger picture. There is a similarity to the Heisenberg picture, the difference being that there is only $H_0$ occurring in the exponential. We see since
$$
i\hbar\frac{\partial}{\partial t} |\alpha, t_0;t\rangle_S = (H_0 + V)  |\alpha, t_0;t\rangle_S
$$
$$
i\hbar\frac{\partial}{\partial t} |\alpha, t_0;t\rangle_I = e^{iH_0 t/\hbar}  V e^{-iH_0 t/\hbar}e^{iH_0 t/\hbar} |\alpha, t_0;t \rangle_S
$$
therefore
$$
i\hbar\frac{\partial}{\partial t} |\alpha, t_0;t\rangle_I = V_I  |\alpha, t_0;t\rangle_I
$$
which is a Schrodinger equation in the interaction picture. Expanding the interaction ket in terms of the original base kets,
$$
|\alpha, t_0; t\rangle_I = \sum_n c_n(t)|n\rangle
$$
and acting from the left with $\langle n|$ on the interaction Schrodinger equation we get
$$
i\hbar \frac{\partial}{\partial t}\langle n | \alpha, t_0;t \rangle_I = \sum_m \langle n| V_I |m\rangle \langle m | \alpha, t_0;t\rangle
$$
$$
\rightarrow \ \  i\hbar \frac{d}{dt}c_n(t) = \sum_m V_{nm} e^{i \omega_{nm}t}c_m(t)
$$
These coefficients provide the exact solution for the time evolution of the state ket.
#### Rabii Oscillations
Most problems are unsolvable exactly. However a sinusoidally varying potential is exactly solvable. The problem is defined by
$$
H_0 = E_1 |1\rangle \langle 1| + E_2 |2\rangle \langle 2|
$$
$$
V(t) = \gamma e^{i\omega t} |1 \rangle \langle2 | + \gamma e^{-i\omega t} |2 \rangle\langle 1|
$$
Using the interaction picture,
$$
\begin{align}
\dot{c}_1 &= -i \frac{\gamma}{\hbar} e^{i(\omega - \omega_{21})t}c_2 \\
\dot{c_2} &= -i \frac{\gamma}{\hbar} e^{-i(\omega - \omega_{21})t}c_1
\end{align}
$$
To solve for $c_2$ we can isolate $c_1$ in the second equation and differentiate,
$$
\dot{c}_1 = \frac{i \hbar}{\gamma}e^{i(\omega - \omega_{21})t}(i(\omega-\omega_{21})\dot{c_2} + \ddot{c_2})
$$
Plugging into the first equation, and rearranging, we get
$$
\ddot{c}_2 + i(\omega - \omega_{21})\dot{c_2} + \frac{\gamma^2}{\hbar^2} c_2 = 0
$$
To solve this homogeneous second order ODE, we use the solution form $c_2 = e^{rt}$ 
$$
r^2 + i(\omega - \omega_{21}) r + \frac{\gamma^2}{\hbar^2} = 0
$$
$$
r = i\left(-\frac{\omega-\omega_{21}}{2} \pm \sqrt{\frac{(\omega-
\omega_{21})^2}{4}+ \frac{\gamma^2}{\hbar^2}} \right)
$$
$$
\begin{align}
c_2(t) = &A_+ \exp \left[\ i\left(-\frac{\omega-\omega_{21}}{2} + \sqrt{\frac{(\omega-
\omega_{21})^2}{4}+ \frac{\gamma^2}{\hbar^2}}\ \right)\ t\ \right] \\
+ &A_- \exp \left[\ i\left(-\frac{\omega-\omega_{21}}{2} - \sqrt{\frac{(\omega-
\omega_{21})^2}{4}+ \frac{\gamma^2}{\hbar^2}}\ \right)\ t\  \right]
\end{align}
$$

We must define some initial condi



