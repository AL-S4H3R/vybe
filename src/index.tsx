import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import Landing from './views/Landing'

const App: React.FC = () => (
    <Fragment>
      <Landing/>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)