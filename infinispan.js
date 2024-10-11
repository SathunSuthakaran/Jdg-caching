const infinispan = require("infinispan");

const connectionOptions = {
    host: 'hostname',
    port: 'portname'
}

infinispan.client(connectionOptions).then(client=> {
    client.connect()
})
