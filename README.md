Original repo: [jcoglan/canopy](https://github.com/jcoglan/canopy)

This repo is a mirror of https://www.npmjs.com/package/canopy/v/0.3.0,
with the addition of dependency ranges
```
{"mkdirp": "^0.5.0", "nopt": "^5.0.0"}
```

# Why?

Canopy `0.3.0`, the last version published on `npm`, needs an old (pre 1.0.0) version of `mkdirp`,
but it doesn't specify a version range, which makes installing it a pain.
I made this repo so that i can just
```
npm install -g git+https://github.com/lubieowoce/canopy-compat.git
```
