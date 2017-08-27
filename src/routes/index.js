import { combineReducers } from 'redux';
import contador from './Contador/reducer/contadorReducer';

export default combineReducers({
    contador: contador,
});