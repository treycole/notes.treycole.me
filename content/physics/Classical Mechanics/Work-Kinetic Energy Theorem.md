---
created: 2020-01-26T16:28:00
modified: 2025-04-06T16:35
tags:
  - Physics
  - Classical-Mechanics
---

## Derivations
$$
W = m\int_{r_1}^{r_2} \frac{\vec{dv}}{dt}\cdot{\vec{dr}}
$$
$$
W = m\int_{x_1}^{x_2} \frac{dv_x}{dx}\frac{dx}{dt}dx +  \int_{y_1}^{y_2} \frac{dv_y}{dy}\frac{dy}{dt}dy + \int_{z_1}^{z_2} \frac{dv_z}{dz}\frac{dz}{dt} dz
$$
$$
W = m\int_{v_{x,1}}^{v_{x,2}} \frac{dx}{dt}dv_x +  \int_{v_{y,1}}^{v_{y,2}} \frac{dy}{dt}dv_y + \int_{v_{z,1}}^{v_{z,2}} \frac{dz}{dt}dv_z
$$
$$
W = m\int_{v_{x,1}}^{v_{x,2}} v_x dv_x +  \int_{v_{y,1}}^{v_{y2}} v_y dv_y + \int_{v_{z,1}}^{v_{z,2}} v_z dv_z
$$
$$
W = m\ [\frac{1}{2}(v_{x,2}^2 - v_{x,1}^2) + \frac{1}{2}(v_{y,2}^2 - v_{y,1}^2) + \frac{1}{2}(v_{z,2}^2 - v_{z,1}^2) ]
$$
$$
W = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2
$$
$$
W = T_2 - T_1
$$
$$
\rightarrow W = \Delta T
$$

Another derivation

$$
T = \frac{1}{2}mv^2
$$
$$
\frac{dT}{dt} = \frac{1}{2}m\frac{d}{dt}(\vec{v}\cdot\vec{v}) = \frac{1}{2} m (\dot{\vec{v}}\cdot\vec{v} + \vec{v}\cdot\dot{\vec{v}}) = m \dot{\mathbf{v}}\cdot\mathbf{v}
$$
$$
\frac{dT}{dt} = \mathbf{F}\cdot\mathbf{v}
$$
$$
dT = \mathbf{F}\cdot\mathbf{dr}
$$
$$
dT = dW
$$
$$
\int_{v_1}^{v_2}dT = \int_1^2dW
$$
$$
T_2 - T_1 = \int_1^2\mathbf{F}\cdot d\mathbf{r}
$$
$$
\rightarrow W = \Delta T 
$$

## Work Example


![[pathint_work.png]]

Evaluate line integral for the work done by the 2-dimensional force $\mathbf{F} = (y, 2x)$ going from the origin _O_ to the point $P = (1,1)$ along each of the three paths in the figure. Path $a$ goes from $O$ to $Q=(1,0$ along the x axis and then from $Q$ straight up to $P$, path $b$ goes straight from $O$ to $P$ along the line $y=x$, and path $c$ goes round a quarter circle center on $Q$.
$$
W_a = \int_a \mathbf{F}\cdot d\mathbf{r} = \int_O^{Q} \mathbf{F} \cdot d\mathbf{r} + \int_Q^P \mathbf{F}\cdot d\mathbf{r} = \int_0^1 F_x(x,0)dx + \int_0^1 F_y(1,y)dy = 0 + 2\int_0^1 dy = 2
$$
On the path $b$, $x=y$, so that $dx = dy$, and
$$
W_b = \int_b\mathbf{F}\cdot d\mathbf{r} = \int_b(F_x dx+F_y dy) = \int_0^1 (x+2x) dx = 1.5
$$
Path $c$ is conveniently expressed parametrically as $\mathbf{r}=(x,y)=(1-\cos\theta,\sin\theta)$, where $\theta$ is the angle between  $OQ$ and the line from $Q$ to the point $(x,y)$, with $0 \leq \theta \leq \pi/2$. Thus on path $c$, $d\mathbf{r} = (dx,dy) = (\sin\theta,\cos\theta)d\theta$. 
$$W_c = \int_c \mathbf{F}\cdot d\mathbf{r} = \int_c (F_x dx + F_y dy)$$
$$= \int_0^{\pi/2}[\sin^2\theta + 2(1-\cos\theta)\cos\theta)]d\theta = 2 - \pi/4 = 1.21$$