import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route, useHistory} from 'react-router-dom'

//views
import Landing from './views/Landing'
import WalletConnect from './views/WalletConnect'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Signup from './views/Signup'
import AddFigmaFile from './views/AddFigmaFile'
import CreateNFT from './views/CreateNFT'

//private route
import PrivateRoute from './routes/PrivateRoute'

//context
import AuthContextProvider from './context/AuthContext'
import FigmaContextProvider from './context/FigmaContext'


const App: React.FC = () => (
    <Fragment>
      <AuthContextProvider>
      <FigmaContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/wallet" component={WalletConnect} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute component={Dashboard} path="/dashboard"/>
          <PrivateRoute component={AddFigmaFile} path="/add"/>
          <PrivateRoute component={CreateNFT} path="/create"/>
        </Switch>
      </BrowserRouter>
      </FigmaContextProvider>
      </AuthContextProvider>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)