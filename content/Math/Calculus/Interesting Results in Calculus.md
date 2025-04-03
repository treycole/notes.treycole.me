---
title: Random Calculus Results
draft: false
tags:
  - Math
  - Calculus
created: 2024-03-02T00:07
modified: 2025-03-30T21:27
---

These are some useful results that are not easily found on the web. 

## Integral over a sphere 

With unit vectors defined in spherical Cartesian coordinates
$$
\begin{align}
n_1 &= \sin{\theta} \cos{\phi}\\
n_2 &= \sin{\theta} \sin{\phi}\\
n_3 &= \cos{\theta} 
\end{align}
$$
The integral of a tensor product of unit vectors over the surface of a unit sphere
$$
\frac{1}{4 \pi} \int d\Omega\ N_{A_{2l+1}} = 0
$$
$$
\frac{1}{4 \pi} \int d\Omega\ N_{A_{2l+1}} = \frac{1}{(2l+1)(2l+1)!!}\sum_{j_2, j_4, \cdots, j_{2k}}\delta_{a1, aj_2}\delta_{aj_3, aj_4} \cdots \delta_{aj_{2l-1}, aj_{2l}}
$$

where $N_{A_l} = n_{a_1}n_{a_2} \cdots n_{a_l}$, $j_2$ is summed from $2$ to $2l$, $j_3$ is the smallest integer not equal to $1$ or $j_2$, $j_4$ is summed over all integers $2$ to $2l$ not equal to $j_2$ or $j_3$, $j_5$ is the smallest integer not equal to 1 or $j_2$ or $j_3$ or $j_4$ ....

Ref: Kip S. Thorne, "Multipole Exapansions of gravitational radiation", Rev. of Mod. Phys., Vol. 52, No.2, Apr. 1980.

## Leibniz integral rule

Let $f(x, t)$ be a function such that both $f(x, t)$ and its partial derivative $f_x(x,t)$ are continuous in $t$ and $x$ in some region of the $xt$-plane, including $a(x) \leq t \leq b(x)$, $x_0 \leq x \leq x_1$. Also suppose that the functions $a(x)$ and $b(x)$ are both continuous and both have continuous derivatives for $x_0 \leq x \leq x_1$, then
$$
\frac{d}{dx} \left( \int_{a(x)}^{b(x)} f(x,t) dt \right)= f(x, b(x)) \cdot \frac{d}{dx}b(x) - f(x, a(x)) \cdot \frac{d}{dx}a(x) + \int_{a(x)}^{b(x)} \frac{\partial}{\partial x}f(x, t) dt
$$
##### Three-dimensional, time-dependent case
Integral rule for a two dimensional surface moving in three dimensional space
$$
\frac{d}{dt}\int\int_{\Sigma(t)} \vec{F}(\vec{r}, t) \cdot d\vec{A} = \int\int_{\Sigma(t)} \left(\frac{\partial}{\partial t} \vec{F}(\vec{r}, t) + \left[ \nabla \cdot \vec{F}(\vec{r}, t) \right] \vec{v} \right) \cdot d\vec{A} - \oint_{\partial\Sigma(t)} \left[ \vec{v} \times \vec{F}(\vec{r}, t\right]\cdot d\vec{s}

$$
where $\vec{F}$ is a vector field, $\Sigma$ is a surface bounded by the closed curve $\partial \Sigma$, $d\vec{A}$ is a vector element of the surface $\Sigma$, $d\vec{s}$ is a vector element of the curve $\partial \Sigma$, $\vec{v}$ is the velocity of the surface.