- In `quartz/ContentMeta.tsc`, commented out lines 32-34 showing dates
- Added `nav: QuartzComponent[]` to `FullPageLayout` in `quartz/cfg.ts`
### `darkmode.scss` 

- swapped `display` here 
``` 
:root[saved-theme="dark"] .darkmode {
  & > .dayIcon {
    display: inline;
  }
  & > .nightIcon {
    display: none;
  }
}

:root .darkmode {
  & > .dayIcon {
    display: none;
  }
  & > .nightIcon {
    display: inline;
  }
}
```
So that dark mode shows sun (clicking takes you to bright) and vice versa

- Added 
```.darkmode:hover svg {
  fill: #03f4fb;
}
```
- 