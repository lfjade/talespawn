const { contextBridge, ipcRenderer } = require('electron'); // desestrutura o Electron e 'pega' apenas os métodos contextBridge (expõe apis seguras sem dar acesso ao Node.js ) e icpRenderer (envia e recebe mensagens entre a interface e o main)


contextBridge.exposeInMainWorld('versions', { // permite acesso à window.versions no renderer
    node: () => process.versions.node, // retorna versão do node
    electron: () => process.versions.electron // retorna versão do electron 
}) // 'process' é um objeto global do Node.js.