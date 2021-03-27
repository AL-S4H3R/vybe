import React, { Fragment } from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './views/Landing'

const App: React.FC = () => (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Fragment>
)

const rootHtml = document.getElementById('root')
render(<App />, rootHtml)