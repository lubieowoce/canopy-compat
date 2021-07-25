Original repo: [jcoglan/canopy](https://github.com/jcoglan/canopy)

This repo is a mirror of https://www.npmjs.com/package/canopy/v/0.3.0,
with the addition of dependency ranges
```
{"mkdirp": "^0.5.0", "nopt": "^5.0.0"}
```

# Why?

Canopy `0.3.0`, the last version published on `npm`, needs an old (pre 1.0.0) version of `mkdirp`,
but it doesn't specify a version range, which makes installing it a pain.

# Installation

```
npm install -g lubieowoce/canopy-compat
```
Unfortunately, I've had issues with `npm 7.19.1` randomly skipping files when installing from github.
If installing or running `canopy` gives you errors like this:
```
Error: Cannot find module '../lib/canopy'
Error: Cannot find module '<...>/canopy/bin/canopy'
```
then try this method instead:
```
npm install -g 'https://github.com/lubieowoce/canopy-compat/archive/refs/tags/0.3.0.tar.gz'
```
