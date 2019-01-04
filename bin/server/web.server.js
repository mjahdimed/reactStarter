import express from 'express'
import config from '../../config/config'


class WebServer {
    constructor () {
        this.app = express()
        this.app.use(express.static('dist/public'))
    }
    start () {
        return new Promise((resolve, reject) => {
            try {
                this.server = this.app.listen(config.app.port, ()=> {
                    resolve()
                })
            } catch (e) {
                console.error(e)
                reject(e)
            }
        })
    }
    stop () {
        return new Promise((resolve, reject) => {
            try {
                this.server.close(() => {
                    resolve()
                })
            } catch (e) {
                console.error(e.message)
                reject(e)
            }
        })
    }
}

export default  WebServer