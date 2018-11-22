# mnr
Run react project by integrate webpack.

## Install

```bash
npm i mnr -D
```

## Add `mnr` to package.json

```json
"mnr": {
  "entrys": [
    "docs/index.tsx"
  ],
  "dlls": [
    "react",
    "react-dom"
  ],
  "production": {
    "path": "built",
    "filename": "bundle.js"
  }
}
```

## Or add `mnr.json` in root dir

```json
{
  "entrys": [
    "docs/index.tsx"
  ],
  "dlls": [
    "react",
    "react-dom"
  ]
}
```

## start dev server

```bash
mnr develop
```

## production build

```bash
mnr production
```

## test

```bash
mnr test
```