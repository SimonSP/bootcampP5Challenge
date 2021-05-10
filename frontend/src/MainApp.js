import React from 'react'
import './MainApp.css'
import logo from 'logo.svg'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from './context'
import esEs from 'antd/es/locale/es_ES'
import GlobalStyle from './globalStyle'
import 'antd/es/message/style/index.css'

function App() {
  return (
    <ThemeProvider>
      <ConfigProvider locale={esEs}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React TESTING
            </a>
          </header>
        </div>
      </ConfigProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
