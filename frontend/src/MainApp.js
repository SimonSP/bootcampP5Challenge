import React from 'react'
import { ConfigProvider } from 'antd'
import { ThemeProvider } from './context'
import esEs from 'antd/es/locale/es_ES'
import GlobalStyle from './globalStyle'
import 'antd/es/message/style/index.css'
import { Admin } from 'screens'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ConfigProvider locale={esEs}>
        <Admin />
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App
