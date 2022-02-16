const http = require('http')
const app = http.createServer(handler)
                .listen(3000, () => console.log('app listeining in', 3000))