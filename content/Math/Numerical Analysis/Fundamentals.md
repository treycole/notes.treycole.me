---
created: 2020-02-09T15:57:00
modified: 2025-04-06T18:15
tags:
  - Math
  - Numerical-Analysis
---

__References__
- "Numerical Analysis", Timothy Sauer

### Polynomials

What is the best way to evaluate
$$P(x) = 2x^4+3x^3-3x^2+5x-1$$
say, at x = 1/2? Try to minimize the number of additions and multiplications.\\

__Method 1__:
This method requires 10 multiplications and 4 additions
$$
P(\frac{1}{2}) = 2*\frac{1}{2}*\frac{1}{2}*\frac{1}{2}*\frac{1}{2} + 3*\frac{1}{2}*\frac{1}{2}*\frac{1}{2} - 3*\frac{1}{2}*\frac{1}{2} + 5*\frac{1}{2} - 1
$$


### Binary Numbers
Binary numbers are expressed as
$$
\cdots b_2 b_1 b_0. b_{-1}b_{-2}\cdots 
$$
where each binary digit, or __bit__, is 0 or 1. The base 10 equivalent to the number is
$$
\cdots b_2 2^2 + b_1 2^1 + b_0 2^0 + b_{-1} 2^{-1} + b_{-2} 2^{-2} \cdots  
$$
For example the decimal number 4 is expressed as $(100.)_2$ in base 2, and 3/4 is represented as $(0.11)_2$.

##### Decimal to Binary

To convert to binary it is simplest to break the number into integer and fractional parts and convert each part separately. For the number $(53.7)_{10} = (53)_{10} + (0.7)_{10}$ we convert each part to binary and combine.

__Integer part__
Convert decimal integers to binary by dividing by 2 successively and recording the remainders. The remainders, 0 or 1, are recorded by starting at the decimal point (or more accurately, \textbf{radix}) and moving away (to the left). For $(53)_{10}$ we would have
$$
53 \div2 = 26\ R\ 1
$$
$$
26 \div 2 = 13\ R\ 0
$$
$$
13 \div 2 = 7\ R\ 1
$$
$$
6 \div 2 = 3\ R\ 0
$$
$$
3 \div 2 = 1\ R\ 1
$$
$$
2 \div 2 = 0\ R\ 1
$$
Therefore, the base 10 number 53 can be written in bits as $110101$, denoted $(53)_{10} = (110101.)_2$. $110101 = 2^5+2^4+2^2+2^0 = 32 + 16+3+1=53$


__Fractional part__
Convert $(0.7)_{10}$ to binary by reversing the preceding steps. Multiply by 2 successively and record the integer parts, moving away from the decimal point to the right.
$$
.7\times2=.4+1
$$
$$
.4\times2=.8+0
$$
$$
.8\times2=.6+1
$$
$$
.6\times2=.2+1
$$
$$
.2\times2=.4+0
$$
$$
.4\times2=.8+0
$$
$$
\vdots
$$
Notice that the process repeats after four steps and will repeat indefinitely exactly the same way. Therefore, 
$$
(0.7)_{10} = (.1011001100110\cdots)_2 = (.1\overline{0110})_2
$$
Putting the two parts together we get 
$$
(53)_{10} = (110101.1\overline{0110})_2
$$