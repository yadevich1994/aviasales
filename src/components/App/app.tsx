import React from 'react'

import './app.scss'
import logo from '../../img/Logo.svg'
import { ContentBlock } from '../Content-block/content-block'

function App() {
  return (
    <div className="App">
      <div className="logo-wrapper">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <ContentBlock />
    </div>
  )
}

export default App
