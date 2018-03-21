import React,{Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux'
import ListItem from './Libraryitem'

class LibraryList extends Component {

    
    renderItem ({item}){
        return <ListItem item={item} />;
    }

    render(){
        return (
            <FlatList data={this.props.libraries}
            renderItem = {this.renderItem}
            keyExtractor = {(item)=>item.id.toString()}
            />
        );
    }
}

const mapStateToProps = state =>{
    return {
        libraries:state.libraries
    };
}

export default connect(mapStateToProps)(LibraryList);