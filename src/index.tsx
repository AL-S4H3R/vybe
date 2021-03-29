import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './views/Landing'
import WalletConnect from './views/WalletConnect'
import Auth from './views/Auth'

const App: React.FC = () => (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/wallet" component={WalletConnect} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </BrowserRouter>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)