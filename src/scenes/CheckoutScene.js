import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { ItemComprasList } from '../components'

@inject('comprasStore')
@observer
export default class CheckoutScene extends React.Component{

    static navigationOptions = ({navigation}) => {

        return {
            title: 'Carrinho'
        }

    }

    constructor(props){
        super(props);

        let { compras } = props.comprasStore;

        this.state = {
            compras: compras 
        }

        this.handleDeletar = this.handleDeletar.bind(this);

    }

    handleDeletar(item){
        
        let { comprasStore } = this.props;
        comprasStore.removerItemCarrinho(item);

    }

    renderListaCompras(){

        return(
            this.state.compras.length > 0 ? (
                <View>
                <FlatList
                    data={this.state.compras}
                    keyExtractor={(item) => item.nome}
                    renderItem={(data) => <ItemComprasList data={data.item} _onPress={this.handleDeletar}/>}
                    />
                </View>
            )
            : (
                <View style={style.container}>
                    <Text style={style.text}>Ainda não há produtos no Carrinho :(</Text>
                </View>
            )
        )

    }

    render(){
        return(
            this.renderListaCompras()
        )
    }

}

const style = StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})