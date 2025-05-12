const {app, BrowserWindow, ipcMain} = require('electron') // faz a desestruturação do Electron, importando apenas os objetos app, BrowserWindow e ipcMain
const path = require('path') // importa o módulo 'path', que ajuda a lidar com diretórios de forma segura

async function createMainWindow(){ // função assincrona para criar a janela main, que espera o carregamento da janela html
    const mainWindow = new BrowserWindow({ // cria uma nova janela e armazena na constante mainWindow
        webPreferences: { // define o preload
            preload: path.join(__dirname, 'preload.js') // monta o caminho até o preload
        }
    }) // armazena na constante mainWindow o novo objeto da classe BrowserWindow, com o atributo 'webpreferences' setado para consumir o arquivo 'preload.js'
     await mainWindow.loadFile('src/telas/index.html') // chama o método loadFile de mainWindow recém criado executando o arquivo HTML expecificado no caminho
}

app.whenReady().then(createMainWindow) // chama o módulo app, que controla o ciclo de vida da aplicação, para quando estiver 'pronto' chamar a função de criação da janela principal 

app.on('window-all-closed', () => { // instancia app com o evento 'window-all-closed'
    if (process.platform !== 'darwin'){ // condição que verifica o sistema operacional em que está rondando a aplicação. 'darwin' é o identificador pra Mac, ou seja: se não estiver rondando em um mac 
        app.quit() // fecha as janelas, encerra os processos e dispara eventos de saída (se existirem)
    }
})
