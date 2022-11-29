# Start dev

`yarn dev`

# Build app - one bundle

`yarn build` # outDir: dist/index.js

# Steps to integrate

## Create a div with '3shop-app' as #id

```html
<div id="3shop-app"></div>
```

## Add html ressources on head tag

```html
<script crossorigin type="module" src="https://tbw.s3.eu-west-3.amazonaws.com/index.js"></script>
<link rel="stylesheet" href="https://tbw.s3.eu-west-3.amazonaws.com/index.css" />
```
