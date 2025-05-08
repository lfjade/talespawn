const {app, BrowserWindow, icpMain} = require('electron') // importa os módulos do Electron app, BrowserWindow e icpMain e armazena em constantes com os nomes respectivos 
const path = require('path') // importa o módlo 'path' e adiciona à constante de mesmo nome

function createMainWindow(){ // função para criar a janela main
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    }) // armazena na constante mainWindow o novo objeto da classe BrowserWindow, com o atributo 'webpreferences' setado para consumir o arquivo 'preload.js'
    mainWindow.loadFile('src/telas/index.html') // chama o método loadFile de mainWindow recém criado executando o arquivo HTML expecificado no caminho
}

app.whenReady().then(createMainWindow) // chama o módulo app, que controla o ciclo de vida da aplicação, para quando estiver 'pronto' chamar a função de criação da janela principal 

app.on('window-all-closed', () => { // instancia app com o evento 'window-all-closed'
    if (process.platform !== 'darwin'){ // condição que verifica o sistema operacional em que está rondando a aplicação. 'darwin' é o identificador pra Mac, ou seja: se não estiver rondando em um mac 
        app.quit() // fecha as janelas, encerra os processos e dispara eventos de saída (se existirem)
    }
})

// implementar o preload