# sockedevelopment

> My pioneering Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## api endpoint details
### sample endpoints

#### allfloors 
`http://localhost:3000/back/floordata?type=allfloors&floor1=41&floor2=42&floor3=93&floor4=84`

#### floor1
`http://localhost:3000/back/floordata?type=floor1&floor1=30`

#### floor2
`http://localhost:3000/back/floordata?type=floor2&floor2=45`

#### floor3
`http://localhost:3000/back/floordata?type=floor3&floor3=60`

#### floor4
`http://localhost:3000/back/floordata?type=floor4&floor4=75`

#### change below config values in constants/config.js file
```
const PORT = 4000
const SOCKETURL = 'http://localhost:4000';
```
