---
title: Polar Decomposition
tags:
  - Math
  - Linear-Algebra
draft: false
created: 2025-03-30T23:48
modified: 2025-04-01T02:11
---
The polar decomposition of a square real or complex matrix $A$ is a factorization of the form $A=UP$, where $U$ is a unitary matrix and $P$ is a positive semi-definite Hermitian matrix, both square and of the same size.

If a real $n\times n$ matrix $A$ is interpreted as a linear transformation of $n$-dimensional space $\mathbb{R}^n$, the polar decomposition separates it into a _rotation_ or _reflection_ $U$, and a _scaling_ of the space along a set of $n$ orthogonal axes.

The polar decomposition of a square matrix always exists. If $A$ is _invertible_, the decomposition is _unique_, and the factor $P$ will be positive-definite. In that case, $A$ can be written uniquely in the form $A=Ue^X$, where $U$ is unitary and $X$ is the unique self-adjoint logarithm of the matrix $P$. This decomposition is useful in computing the fundamental group of Lie groups.

The polar decomposition can be seen as the matrix analog of the polar form of a complex number $z=ur$, where $r$ is its absolute value and $u$ is a complex number with unit norm.

The polar form may be extended to _rectangular matrices_, $A\in \mathbb{C}^{m\times n}$, by requiring $U\in\mathbb{C}^{m\times n}$ be a _semi-unitary_ matrix, and $P\in \mathbb{C}^{n\times n}$ be a positive semi-definite Hermitian matrix as before. The decomposition always exists and $P$ is always unique. The matrix $U$ is only unique if $A$ has _full rank_. 

## Relation to SVD
In terms of the SVD of $A=W\Sigma V^*$, one has 
$$
P =V\Sigma V^*
$$
$$
U = WV^*
$$

where $U$, $V$, and $W$ are unitary matrices. The general derivation is as follows 
$$
A=WD^{1/2}V^*=(WD^{1/2}W^*)(WV^*) = PU 
$$
More generally, if $A$ is some rectangular $n\times m$ matrix, its SVD can be written as $A=WD^{1/2}V^*$ where now $W$ and $V$ are _isometries_ with dimensions $n\times r$ and $m\times r$, respectively, were $r\equiv \text{rank}(A)$, and $D$ is again diagonal positive semi-definite square matrix with dimensions $r\times r$. The same reasoning applies, but now $U=WV^*$ is not in general unitary. Nonetheless, $U$ has the same support and range as $A$, and it satisfies $UU^*=WW^*$. This makes $U$ into an isometry when its action is restricted onto the support of $A$, that is, it means $U$ is a _partial isometry_. 

## Partial Isometry
A partial isometry is a linear map between Hilbert spaces such that it is an isometry on the orthogonal complement of its kernel. The orthogonal complement of its kernel is called the initial subspace, and its range is called the final subspace. 