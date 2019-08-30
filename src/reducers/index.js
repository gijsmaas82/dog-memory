import { combineReducers } from 'redux'
import dogs from './dogs'
import login from './login'
import points from './points'
import streak from './streak'


export default combineReducers({
  dogs,
  login,
  points,
  streak
})