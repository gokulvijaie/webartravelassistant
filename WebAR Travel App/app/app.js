// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
import './index.css'

import {obTextureComponent} from './components'
AFRAME.registerComponent('ob-texture', obTextureComponent)
