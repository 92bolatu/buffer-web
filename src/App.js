import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


import AppTheme from './AppTheme';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(logger));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppTheme>
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={HomeScreen}/>
                            <Route path="/login" component={HomeScreen}/>
                        </div>
                    </BrowserRouter>
                </AppTheme>
            </Provider>
        );
    }
}

export default App;