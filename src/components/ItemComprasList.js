import React from 'react';
import { View, Text, StyleSheet , TouchableHighlight} from 'react-native';
import { Avatar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import {observer,inject} from 'mobx-react';


@inject('comprasStore')
@observer
export default class ItemList extends React.Component{

    constructor(){
        super();

        this._handlePress = this._handlePress.bind(this);
    }

    _handlePress(){

        const {data, _onPress } = this.props;

        _onPress(data);

    }



    render(){

        const { data } = this.props;
        const {nome, preco, img} = data;

        let swipeBtns = [{
            text:'Remover',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {this._handlePress()}
        }]

        return(
            <Swipeout right={swipeBtns}
                autoClose
                backgroundColor='transparent'>
            <TouchableHighlight onPress={this._handlePress}> 
                <View style={styles.itemListContainer}>
                    <View style={styles.overview}>
                        <Text style={styles.header}>{nome}</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail'
                            style={styles.text}>
                            Preço: R${preco}
                        </Text>
                    </View>
                    <Avatar large rounded activeOpacity={0.7} containerStyle={{justifyContent: 'flex-end', margin: 30}} source={{uri: img}}/>
                    
                </View>
            </TouchableHighlight>
            </Swipeout>
        )
    }

}

const styles = StyleSheet.create({

    itemListContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#d3d3d3',
        borderBottomWidth: 0.5,
    },
    overview:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold',
    }
  

})