const http =require('http')
const express = require('express')
const {Server: SocketServer} = require('socket.io')
const os = require('os');
const pty = require('node-pty');
const cors = require('cors')
const fs = require('fs/promises')
const path = require('path')

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.INIT_CWD + '/user',
  env: process.env
});

const app = express()
const server = http.createServer(app);
const io = new SocketServer({
    cors: '*'
})
app.use(cors())

io.attach(server);

ptyProcess.onData(data =>{
    io.emit('terminal:data', data)
})

io.on('connection', (socket) =>{
    

    socket.on('terminal:write', (data) => {
        ptyProcess.write(data);
    })
})

app.get('/files', async (req, res) => {
    const fileTree =  await generateFileTree('./user')
    return res.json({tree: fileTree})
})

server.listen(9000, ()=> console.log('hogya chalo server'))

async function generateFileTree(directory){
    const tree = {}

    async function buildTree(currentDir, currenttree) {
        const files = await fs.readdir(currentDir)

        for (const file of files){
            const filePath = path.join(currentDir, file)
            const stat = await fs.stat(filePath)

            if(stat.isDirectory()){
                currenttree[free] = {}
                await buildTree(filePath,currenttree[file])
            } else {
                currenttree[file] = null
            }
        }
        
    }
    await buildTree(directory, tree);
    return tree;
} 