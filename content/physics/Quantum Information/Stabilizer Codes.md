The _Pauli group_ $G_n$ for a single qubit it is defined $$G_1 \equiv\{\pm I, \pm i I, \pm X, \pm i X, \pm Y, \pm i Y, \pm Z, \pm i Z \}$$and for $n$ qubits is all $n$-fold tensor products of Pauli matrices with multiplicative factors $\pm 1$ and $\pm i$ to ensure the elements are closed under multiplication. 

Suppose $S$ is a subgroup of the Pauli group $G_n$, and define $V_S$ to be the set of $n$ qubit states which are fixed by every element of $S$ (eigenvalue 1). $V_S$ is the _vector space stabilized by_ $S$, and $S$ is said to be the _stabilizer of the space_ $V_S$.

A group is described by _generators_. A set of elements $g_1, \cdots, g_l$ in a group $G$ is said to generate the group $G$ if every element of $G$ can be written as a product of elements from the list $g_1, \cdots, g_l$, and we write $G=\langle g_1, \cdots, g_l \rangle$. 

## Unitary gates and the stabilizer formalism

Suppose we apply a unitary $U$ to a vector space $V_S$ stabilized by the group $S$, then for any element $g$ of $S$ $$U|\psi\rangle= Ug|\psi\rangle = UgU^{\dagger}Y|\psi\rangle $$ The state $U|\psi\rangle$ is stabilized by $UgU^{\dagger}$, and the vector space $UV_S$ is stabilized by the group $USU^{\dagger}\equiv \{UgU^{\dagger}|g\in S \}$. If $g_1, \cdots, g_l$ generates $S$, then $Ug_1 ^{\dagger}, \cdots, Ug_l U^{\dagger}$ generates $USU^{\dagger}$. To see how unitary affects stabilizer, we only need to compute how it affects the generators of the stabilizer. 

For special unitary operations $U$, this transformation of the generators takes simple form. Suppose we apply a _Hadamard_ gate to a single qubit. Note $$HXH^{\dagger};\ \ HYH^{\dagger} = -Y; \ \ HZH^{\dagger}=X $$ As a consequence we deduce that after a Hadamard gate is applied to the state stabilized by $Z|0\rangle$, the resulting state will be stabilized by $X|+\rangle$. 

### Clifford Gate
Clifford gates are the elements of the _Clifford group_, a set of transformations which normalize the $n$-qubit Pauli group. Any unitary operations taking elements of $G_n$ to elements of $G_n$ can be composed from the _Hadamard_, _phase_, and _C-NOT_ gates. By definition, the set of $U$ such that $UG_n U^{\dagger} = G_n$ is the _normalizer_ of $G_n$, and is denoted by $N(G_n)$. 

__Theorem__: Suppose $U$ is any unitary operator on $n$ qubits with the property that if $g\in G_n$ , then $UgU^{\dagger}\in G_n$. Then up to a global phase, $U$ may be composed from $\mathcal{O}(n^2)$ Hadamard, phase, and C-NOT gates. 

Each Pauli gate is trivially an element of the Clifford group. 

## Measurement in the stabilizer formalism

Imagine we make a _measurement_ of $g\in G_n$. We assume without loss of generality that $g$ is a product of Pauli matrices with no multiplicative factor of $-1$ or $\pm i$ out front. The system is assumed to be in state $|\psi\rangle$ with stabilizer $\langle g_1, \cdots, g_n \rangle$. The stabilizer of the state transforms under measurement in two ways 
- Measurement $g$ commutes with all generators of the stabilizer
- Measurement $g$ anti-commutes with one or more of the generators of the stabilizer. Suppose $g$ anti-commutes with $g_1$, without loss of generality we may assume $g$ commutes with $g_2, \cdots, g_n$ since if it does not commute with one of these elements say $g_2$ then it will commute with $g_1g_2$, and we simply replace the generator $g_2$ by $g_1g_2$

In _case 1_, either $g$ or $-g$ is an element of the stabilizer since $g_j g |\psi \rangle = gg_j |\psi \rangle = g|\psi\rangle$ , $g|\psi\rangle \in V_s$ and is a multiple of $|\psi\rangle$. If $+g$ is in the stabilizer, then $g|\psi\rangle = |\psi\rangle$ and measurement of $g$ yields $+1$ with probability one, and the measurement does not disturb the state of the system and leaves the stabilizer invariant.

In _case 2_, when $g$ anti-commutes with $g_1$ and commutes with all other generators. $g$ has eigenvalues $\pm 1$ so the projectors for the measurement outcomes $\pm 1$ are given by $(I\pm g)/2$, respectively, and the measurement probabilities are given by $$\begin{align} p(+1) &= \text{Tr}\left(\frac{I+g}{2} |\psi \rangle \langle\psi|\right)  \\ p(-1) &= \text{Tr}\left(\frac{I-g}{2} |\psi \rangle \langle\psi|\right) \end{align}$$ Since $g_1 |\psi\rangle = |\psi\rangle$ and $gg_1 = - g_1 g$ then $$\begin{align}p(+1) &= \text{Tr}\left( \frac{I+g}{2} g_1\right) |\psi \rangle \langle\psi|  \\ &= \text{Tr}\left(g_1 \frac{I-g}{2} \right) |\psi \rangle \langle\psi| \end{align}$$ Applying the cyclic property of the trace, we may take $g_1$ to the right hand end of the trace and absorb it into $\langle \psi |$ using $g_1 = g_1^{\dagger}$, giving $$p(+1) = \text{Tr}\left(\frac{I-g}{2} |\psi \rangle \langle\psi\right) = p(-1)$$ Thus $p(+1) = p(-1) = 1/2$. Suppose the result $+1$ occurs, then the system is in state $|\psi^{+}\rangle \equiv (I+g) |\psi\rangle / \sqrt{2}$ which has stabilizer $\langle g, g_2, \cdots, g_n \rangle$. Similarly, if the result $-1$ occurs the posterior state is stabilized by $\langle -g, g_2, \cdots, g_n\rangle$. 

## The Gottesman-Knill theorem

__Theorem__: Suppose a quantum computation is performed which involves only the following elements: state preparations in the computational basis, Hadamard gates, phase gates, C-NOT gates, Pauli gates, and measurements of observables in the Pauli group, together with the possibility of classical control conditioned on the outcome of such measurements. Such a computation may be efficiently simulated on a classical computer. 

The way a classical computer performs the simulation is simply to keep track of the generators of the stabilizer as the various operations are being performed in the computation. For example, to simulate a Hadamard gate we simply update each of the $n$ generators describing the quantum state. Similarly, simulation of the state preparation, phase gate, C-NOT gate, Pauli gates, and measurements of observables in the Pauli group may all be done using $\mathcal{O}(n^2)$ steps on a classical computer, so that a quantum computation involving $m$ operations from this set can be simulated using $\mathcal{O}(n^2m)$ operations on a classical computer. Some quantum computations involving highly entangles states may be simulated efficiently on classical computers. 

## Fault-tolerant Measurement




