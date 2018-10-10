import React from 'react'
import { render } from 'react-dom'

import { App } from './components'
import serviceWorker from './serviceWorker'

render(<App />, document.getElementById('root'))
serviceWorker()