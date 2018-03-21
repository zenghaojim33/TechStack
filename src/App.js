import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducer';
import {Header} from './component/common'
import LibraryList from './component/LibraryList'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style= {{flex:1}}>
            <Header headerText='Tech'>
            </Header>
            <LibraryList/>
            </View>    
        </Provider>
    );
};



export default App;