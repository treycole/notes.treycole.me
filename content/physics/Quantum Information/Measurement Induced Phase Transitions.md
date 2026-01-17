---
created: 2025-04-24T02:33
modified: 2025-04-24T14:08
---
For low measurement rate $p$ the system is in volume law. There is a critical measurement rate $p_c$ after which the system is in an area law phase. In the volume law entanglement, entropy scales as $S \propto L^d$ while for area law it scales as $S\propto L^{d-1}$. At the phase transition $S \propto \log L$.

| **Diagnostic**               | **Indicator of Transition**        |
| ---------------------------- | ---------------------------------- |
| $S(p)$ vs $L$                | Curve crossing or slope sharpening |
| $S(L/2)$ vs $L$ at fixed $p$ | Switch from volume to area law     |
| $\text{std}[S(p)]$           | Sharp peak near $p_c$              |
| $I(i:j)$                     | Decay to zero in area law          |
| $S(t)$                       | Linear growth vs early saturation  |

### Quantum Trajectories

A **quantum trajectory** is one possible sequence of measurement outcomes, and the resulting pure state of the system after those measurements and unitaries. Think of it like a _single history_ of how the system evolved with randomness in measurement.

To simulate MIPTs:
- You simulate **many** such trajectories (say, 1000)
- Each one corresponds to a random pattern of which qubits were measured (and what outcomes you got)
- For each trajectory, the system evolves as a **pure** state, and you compute entanglement entropy on that state.

Then, you **average** the entropy over all trajectories.
### Post Selection Problem

After performing a measurement, you only keep the outcomes you want, and throw away all the others. For example, if you measure a qubit, you may get 0 half of the time and 1 the other half. In post-selection, you choose only the trajectories where the outcome was 1. This leads to a _conditional state_ -- the state of a system given a particular outcome. Averaging over all the trajectories results in a _mixed state_.

To measure MIPT of a particular trajectory, you have to post-select a particular measurement record, so that the output is a _pure state_. That way, the entanglement entropy is well-defined.

### Circuit Implementation

__Qiskit__
Limitations
- Mid-circuit measurements in Qiskit **collapse the wavefunction**, and you can’t directly access the post-measurement **pure state** for entanglement.
- You can simulate measurements **or** statevectors — not both meaningfully together.
- You **don’t get post-selected pure trajectories** automatically.

__QuTip__
QuTiP lets you
- Evolve a **pure state**
- Explicitly **collapse it** by projectors like $|0\rangle\langle0|, |1\rangle\langle1|$ 
- **Manually apply post-selection** (i.e., you keep the collapsed state)
- Track the trajectory **as a pure quantum state**, allowing:
	- Reduced density matrices
    - Entanglement entropy
    - Mutual information
    - Time-dependent entanglement $S(t)$






