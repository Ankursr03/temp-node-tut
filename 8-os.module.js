const os = require('os')

//info about current user
const user = os.userInfo()


//system uptime in seconds
const uptime = os.uptime
console.log(`system uptime is ${os.uptime()} seconds`)

const currentos = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
}

console.log(currentos)