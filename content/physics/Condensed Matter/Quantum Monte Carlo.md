---
tags:
  - Physics
  - Condensed-Matter
created: 2024-05-07T15:17
modified: 2025-04-02T15:04
---

Famous sign problem
### Central limit Theorem
$$ \langle O \rangle_{P} = \int_{\Omega} dx P(x) O(x) \quad \int_{\Omega} dx P(x) = 1$$ Generate set of configurations $x_i$, distributed according to $P(x)$ and that $O(x_i)$ are statistically independent, then
$$ \langle O\rangle_P \approx \frac{1}{N} \sum_{i=1}^N O(x_i) = X$$ $$ \mathcal{P}(X) = \frac{1}{2\pi} e^{(X-)^2/2\sigma}$$
### Markov Chains
Transition probability $T_{y,x}$ where 
$$
\sum_{y\in \Omega} T_{y,x} =1
$$
$T$ has to satisfy
- Ergodicity $$ \forall x,y \in \Omega \ \exists \ s|(T^s)_{y,x} \gt 0$$
- Stationary $$\sum_x T_{y,x} P(x) = P(y)$$
- Then $$ \lim_{n\rightarrow \infty}\frac{1}{n} \sum_{t=1}^n [ T^t ]_{x, x_1} = P(X)$$

### For fermions
$$
Z = \text{Tr}e^{-\beta \hat{H}} = \int D\{ \Phi(i, \tau) \}e^{-S \{ \Phi \} }
$$
- Trotter decomposition
- Grassman variable

 