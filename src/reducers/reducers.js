import { combineReducers } from 'redux'

import { loader } from './loader'
import { recipes } from './recipes'

export default combineReducers({ loader, recipes })
