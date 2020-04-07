import React, { Component } from 'react'
import './style.css'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      numero: 0,
      botao: 'INICIAR',
    }
  
    this.timer = null
    this.iniciar = this.iniciar.bind(this)
    this.apagar = this.apagar.bind(this)
  }

  iniciar() {
    let state = this.state

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
      state.botao = 'INICIAR'
    } else {
      this.timer = setInterval(() => {
      let state = this.state
      state.numero += 0.01
      state.botao = 'PAUSAR'
      this.setState(state)
    }, 100)
  }
  
  this.setState(state)
}

      
  apagar() {

    if(this.timer !== null){
      clearInterval(this.timer)
      this.timer = null
     
    }

    let state = this.state
    state.numero = 0
    state.botao = 'INICIAR'
    this.setState(state)
  }

  render() {
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt='Cronometro' className="img"/>
        <p className="timer">{ this.state.numero.toFixed(2) }</p>

        <div className="areaBtn">
          <p className="botao" onClick={this.iniciar}>{ this.state.botao }</p>
          <p className="botao" onClick={this.apagar}>APAGAR</p>
        </div>
      </div>
    )
  }
}

export default App
