import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './views/Landing'
import Web3ContextProvider from './context/Web3Context'
import WalletConnect from './views/WalletConnect'

const App: React.FC = () => (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/wallet" component={WalletConnect} />
        </Switch>
      </BrowserRouter>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)