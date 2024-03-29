# Template
 

## how to run ?
```
docker run -it --rm --net host -p 3000:3000  -p 3001:3001 -v $(pwd):/ap node:18 bash

cd ap
yarn install
yarn dev

```
