import WebServer from './web.server'
import config from '../../config/config'

let webServer = new WebServer();

webServer.start()
    .then(() => {
        console.log(`Serveur Web Demaré au Port: ${config.app.port}`)
    })
    .catch(err => {
        console.error(err)
        console.error('écheque du démarae du serveur!')
    });