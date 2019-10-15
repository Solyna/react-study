import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';
import AppRouter from './AppRouter';
/* 提供器 */
const APP=(
    <Provider store={store}>
        <AppRouter/>
        <TodoList/>
    </Provider>
)

ReactDOM.render(APP, document.getElementById('root'));