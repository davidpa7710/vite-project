import App from './src/components/App'
import Countries from './src/components/contries'
import './src/styles/main.css'



document.querySelector('#app').innerHTML = `${App()} ${Countries()}`
