---
tags:
  - Physics
  - Classical-Mechanics
created: 2020-01-26T16:37:00
modified: 2025-04-06T16:40
---
Starting with the [[Ideal Gas Law]]
$$
P = nkT
$$
Why does pressure change as you go up a mountain? Because $n$ goes down, this is due to gravity pulling the molecules down. So it would be relevant to know how the number density depends on gravity and height. Generally $n(z) \neq n(0)$ and $\frac{n(z)}{n(0)} < 1$. We can look at an infinitesimally small portion of volume $dV$ where the number density becomes
$$
n = \frac{dN}{dV}
$$
with $dV = Adz$, where A is the area of the column of volume being analyzed. Assume the gas is at rest macroscopically, the net force is zero. If the force on each molecule was only $\mathbf{F} = -mg\hat{z}$ then the molecules would all fall down, there must be some force in the $\hat{z}$ direction. The gas below the column is providing some pressure upwards. The mechanical equilibrium condition, 
$$
(F_z)_{net} = 0
$$
The force pressing down from the molecules above the column is $F = PA = P(z+dz)A$ in the $-\hat{z}$ direction and the force pressing up from the molecules below the column is $F = P(z)A$ in the $+\hat{z}$ direction.
$$
0 = (F_z)_{net} = -mg\cdot dN + P(z)A - P(z+dz)A
$$
The number of molecules $dN$ is $dN = n(z) dV = nAdz$. The expression becomes,
$$
0 = -mg\cdot n(z)dz + (P(z)-P(z+dz))
$$
dividing by $dz$,
$$
0 = -mg\cdot n(z)+\frac{P(z)-P(z+dz)}{dz}
$$
$$
0 = -mg\cdot n(z)-\frac{P(z+dz)-P(z)}{dz}
$$
The second term is just the definition of the derivative in the limit that $dz$ goes to zero
$$
0 = -mg\cdot n(z) - \frac{dP(z)}{dz}
$$
Using the ideal gas law
$$
0 = -mg\cdot n(z) - \frac{d}{dz}(n(z)\cdot kT)
$$
$$
0 = -\frac{mg}{kT}\cdot n(z) - \frac{d}{dz} n(z)
$$
$$
\frac{dn(z)}{dz}= -\frac{mg}{kT}\cdot n(z)
$$
$$
\int \frac{1}{n(z)} dn(z) = \int\frac{mg}{kT}dz
$$
$$
\mathrm{ln}(n(z))=-\frac{mgz}{kT}+C
$$
$$
n(z) = e^{-mgz/kT}e^{C}=Ce^{-mgz/kT}
$$
Determining integration constant by setting $z=0$
$$
n(0) = C
$$
$$
n(z) = n(0)e^{-mgz/kT}
$$
The ratio becomes
$$
\frac{n(z)}{n(0)} = e^{-mgz/kT}
$$
Notice that the pressure has the same ratio
$$
\frac{n(z)}{n(0)}=\frac{p(z)}{p(0)}=e^{-mgz/kT}
$$
