---
tags:
  - Physics
  - Electricity-Magnetism
created: 2019-11-26T16:46:00
modified: 2025-04-06T18:11
---
__References__
- "Modern Physics", Serway

Maxwell's theory of light was developed between 1865 and 1873 and was concerned with the oscillations of electric currents in wires. According to his theory, an alternating current in a wire would set of fluctuating electric and magnetic fields in the region around the original disturbance. These waves were predicted to have the same frequency as the frequency of the current oscillations. These radiated waves, Maxwell predicted, would have properties that behaved in every way like light: refraction in dielectrics, reflection by metal mirrors, polarization and interference and traveled at velocity = c. This theory led to the postulation that light was originated from high frequency Maxwell waves created by electric oscillators in matter, now known to be electrons. 

The high frequency of light at that time was unattainable experimentally, the highest known frequency attainable at that time was around $10^9$ Hz, a million times smaller than light. Heinrich Hertz did the next best thing and showed that Maxwell's theory was correct by demonstrating that electric current oscillations behaved in every way like light except for its wavelength. Using a spark gap oscillator, he applied pulses of high voltage, which caused a spark to jump the gap and produce high frequency oscillations of about $5\times 10^8$ Hz. This oscillation occurs while the air remains conducting and charge surges back and forth to achieve electrical equilibrium. He detected this waves using a loop antenna with a small spark gap as a receiver. He measured the wavelength to be $60$ cm, corresponding to an oscillator frequency of $5\times 10^8$ Hz with $c = \lambda f$. 

## Power, Intensity, and Energy Density

__Power__ is the rate of doing work or of transferring heat, the amount of energy converted per unit time. The unit of power in SI is Joules per second (J/s), known as the Watt. Power = Work/Time.
$$ 
P = \frac{dW}{dt} = \mathbf{F} \cdot \mathbf{v}
$$
The same amount of work is done by a person walking or running up the steps, but running requires more power.

__Intensity__ of radiant energy is the power transferred per unit area, with the area being measured on the plane perpendicular to the direction of the propagation of energy. In SI units it has Watts per square meter ($\mathrm{W/m^2}$). Intensity can be found by taking the energy density (energy per unit volume) at a point in space and multiplying it with velocity at which the energy is moving. The resulting vector has units of Power divided by area.

__Energy density__ is the amount of energy stored in a given system or region of space per unit volume. It has the same physical units as pressure, and in many circumstances is a synonym. Electric and Magnetic field store energy and in a vacuum the energy density is given by
$$
u = \frac{\epsilon_0}{2} \mathbf{E}^2 + \frac{1}{2\mu_0}\mathbf{B}^2
$$


## Light as an Electromagnetic Wave

Maxwell's equations may be used to predict the change in emission frequency when gas atoms are placed in a magnetic field, an effect called the __Zeeman effect__. Consider an electron orbiting in a circle around a proton of positive charge at radius $r$, angular frequency $\omega_0$, and tangential velocity $v$. A magnetic field is applied perpendicular to the plane of rotation. 

__a__
$$ 
\oint \mathbf{E} \cdot d\mathbf{s} = -  \frac{d\Phi_B}{dt} 
$$
$$
\oint E_z \hat{z} \cdot d\phi dr \hat{z} = \int_0^{2\pi}\int_0^r E_{z} d\phi dr = 2\pi r E_z
$$

$$
- \frac{d\Phi_B}{dt} = - \frac{d}{dt} B_z A =  \frac{d}{dt} B_z \pi r^2
$$

$$
2\pi r E_z =  \pi r^2 \frac{d}{dt}B_z 
$$
$$
E_z = \frac{r}{2} \frac{d}{dt}B_z
$$

__b__
$$
F dt = m dv
$$
$$
dv = \frac{F dt}{m_e} = \frac{e E_z dt}{m_e} = \frac{e r \ dB_z}{2 m_e}
$$

