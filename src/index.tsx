import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//views
import Landing from './views/Landing'
import WalletConnect from './views/WalletConnect'
import Auth from './views/Auth'

//context
import AuthContextProvider from './context/AuthContext'
import Dashboard from './views/Dashboard'

const App: React.FC = () => (
    <Fragment>
      <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/wallet" component={WalletConnect} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      </AuthContextProvider>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)