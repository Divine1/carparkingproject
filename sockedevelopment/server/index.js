const configFile = require('../constants/config');
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const router = require("./routes");
const socketFunction = require("./realtime");
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
const host = process.env.HOST || '127.0.0.1'
//const port = process.env.PORT || 3000
const port = configFile.PORT || 3000

app.set('port', port)

var appRouter = express.Router();  
app.use("/back",appRouter);
global.socketObject = null;
socketFunction(io);
router(appRouter,io); 
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  //app.listen(port, host)
  //console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
  http.listen(port,()=>{
    console.log("http server started at port ",port)
  })
  
}
start()
