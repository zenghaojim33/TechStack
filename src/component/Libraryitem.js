import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions/Action';
 
class ListItem extends Component {

    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const {item ,expanded} = this.props;
        console.log(expanded);
        if (expanded){
            return (
                <Text style={{flex:1,padding:15}}>
                    {item.description}
                </Text>
            );
        }
    }

  render() {

    const {titleStyle} = styles;
    const {id} = this.props.item;

    const shouldExpand = 

    console.log(this.props);
    return (
      <TouchableWithoutFeedback onPress={()=> this.props.SelectLibrary(id)}>
        <View>
        <CardSection>
            <Text style={titleStyle}>{this.props.item.title}</Text>
        </CardSection>
        {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
    }
}

const mapStateToProps = (state,ownProps) => {
    var expanded = state.selectedLibraryId === ownProps.item.id;
    console.log(ownProps);
    return {
        expanded
    };
}
 
export default connect(mapStateToProps,actions)(ListItem);
