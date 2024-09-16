import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

import '@material/web/button/filled-button.js';

render(<App />, document.getElementById('app')!)
