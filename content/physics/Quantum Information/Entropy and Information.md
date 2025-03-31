_Entropy_ measures how much uncertainty there is in the state of a physical system. 
## Shannon Entropy
Key concept in classical information theory is _Shannon entropy_. Suppose we learn the value of a random variable $X$. The Shannon entropy of $X$ quantifies how much information we gain, on average, after we learn the value of $X$. Alternatively, the entropy of $X$ measures the amount of uncertainty about $X$ before we learn its value. 

The entropy is a function of the probabilities of the different possible values of the random variable takes $p_1, \cdots, p_n$. The Shannon entropy associated with this probability distribution is defined by $$H(X)\equiv H(p_1, \cdots, p_n) \equiv-\sum_{x} p_x\log p_x $$ Where $\log$ is base $2$, meaning the entropy is measured in 'bits'. 

### Conditional Entropy and Mutual Information
The _joint entropy_ of a pair of random variables $X$ and $Y$ is defined $$H(X, Y) = -\sum_{x,y} p(x,y) \log p(x,y)$$ The joint entropy measures the total uncertainty about the pair $(X,Y)$ . Suppose we know the value of $Y$, so we have acquired $H(Y)$ bits of information about the pair. The remaining uncertainty about the pair is associated with the remaining lack of knowledge about $X$, therefore the entropy of $X$ _conditional_ on knowing $Y$ is $$H(X|Y)\equiv H(X, Y) - H(Y)$$
The _mutual information content_ of $X$ and $Y$ measures how much information $X$ and $Y$ have in common. Suppose we add the information content of $X$, $H(X)$, to the information content of $Y$. Information which is common to $X$ and $Y$ will have been counted twice in this sum, while information not common will have been counted once. Subtracting off the joint information of the pair $(X, Y)$, $H(X,Y)$, we obtain the mutual information of $X$ and $Y$ $$H(X:Y) \equiv H(X) + H(Y) - H(X, Y)$$Note the useful equality $H(X:Y) = H(X) - H(X|Y)$ relating the conditional entropy and mutual information. 

## Von Neumann Entropy
Quantum states are described in a similar fashion, with density operators replacing probability distributions. Von Neumann defined the _entropy_ of a quantum state $\rho$ by the formula $$S(\rho) \equiv-\text{Tr}(\rho\log\rho) $$where the $\log$ is again base $2$. If $\lambda_x$ are the eigenvalues of $\rho$, then the Von Neumann definition is also $$S(\rho) = - \sum_{x} \lambda_x \log\lambda_x $$
### Quantum Relative Entropy
Suppose we have $\rho$ and $\sigma$ as two density operators, the _relative entropy_ of $\rho$ and $\sigma$ is defined by $$S(\rho || \sigma) \equiv \text{Tr}(\rho \log\rho) - \text{Tr}(\rho\log\sigma) $$
#### Klein's Inequality 
__Theorem__: 
The quantum relative entropy is non-negative $$S(\rho||\sigma)\geq 0$$with equality iff $\rho = \sigma$ 
### Measurements and Entropy
The effect of measurements on the entropy depends on the type of measurements we make. Suppose for example a projective measurements described by the projectors $P_i$ is performed on a quantum system, but we never learn the result of the measurement. If the state of the system before the measurement was $\rho$ then the state after is given by $$\rho' = \sum_i P_i \rho P_i$$
__Theorem__: Projective measurements increase entropy
Suppose $P_i$ is a complete set of orthogonal projectors and $\rho$ is the density operator. Then the entropy of the state $\rho' = \sum_i P_i \rho P_i$ of the system after the measurement  is at least as great as the original entropy $$S(\rho') \geq S(\rho) $$ with equality iff $\rho = \rho'$. 
