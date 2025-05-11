const information = document.getElementById('info')
information.innerText = `Este aplicativo está usando Node (v. ${versions.node()}) e Electron (v. ${versions.electron()})`

const vers = async () => {
    const res = await window.versions
}

vers ()