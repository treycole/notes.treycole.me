---
created: 2025-04-23T02:06
modified: 2025-04-23T02:10
---

- `.scf` file -> self consistent
- `.nscf` file -> non-scf on dense k-mesh
- `.bands` file -> bands along high-symmetry path

Run

```
# 1) SCF
pw.x < MnBi2Te4.scf.in  > MnBi2Te4.scf.out

# 2) NSCF on a finer k-mesh (for density of states / Wannier90)
cat > MnBi2Te4.nscf.in << 'EOF'
&control
  calculation = 'nscf',
  prefix      = 'MnBi2Te4',
  outdir      = './tmp/',
  wf_collect  = .true.
/
&system
  ibrav   = 0, nat=7, ntyp=3,
  ecutwfc = 60.0, nbnd=100  ! set nbnd high enough
/
ATOMIC_SPECIES
...
CELL_PARAMETERS angstrom
...
ATOMIC_POSITIONS crystal
...
K_POINTS automatic
 12 12 4 0 0 0
EOF

pw.x < MnBi2Te4.nscf.in > MnBi2Te4.nscf.out
```