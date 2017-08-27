import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './routes';
import MenuView from './routes/SideMenu/MenuView';
import LoginView from './routes/Login/loginView';

const App = () => (
    <Provider store={createStore(Reducers)}>
        <LoginView />
    </Provider>
);

export default App;