---
created: 2025-04-23T00:59
modified: 2025-04-23T02:06
---
This was all done on my MacBook running on macOS Sequoia 15.5 with Apple M3 Pro chip

- Go to quantum espresso website and get the latest tar ball file
- Unpack in whatever directory you wish
- Make sure you have `gnn` Fortran compiler installed. I downloaded this with `homebrew`.
- While in the`qe` root directory run
	```
	$ mkdir build
	$ cd build
	$ cmake -DCMAKE_C_COMPILER=mpicc -DCMAKE_Fortran_COMPILER=mpif90 <path to QE source directory>
	$ make [-jN]
	```
	with `..` in place of `<path to QE source directory`
- `cmake` will configure and install all the dependencies and packages. This took round 10 minutes.

Some issues I had initially is using `make`. I kept getting 
```
1 warning generated.

cc: error: no input files

make[1]: *** [laxlib.fh] Error 1

make: *** [libla] Error 1
```
I'm not sure if this is a breaking issue, so I tried `cmake` instead.

- To get the binaries in `~/bin`, you must `cd` into `build` and run `sudo cmake --install . --prefix ../` This copies the binaries from `~/buld/bin` into `~/bin`. The first example I ran looked for the binaries there and couldn't find them
