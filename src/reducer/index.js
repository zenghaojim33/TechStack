import {combineReducers} from 'redux';
import LibraryReducer from './libraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries:LibraryReducer,
    selectedLibraryId: SelectionReducer
});