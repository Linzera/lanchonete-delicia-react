import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { observer, inject } from 'mobx-react/native'

@inject('comprasStore')
@observer
export default class DetailsScene extends React.Component{

    static navigationOptions = ({navigation}) => {

        const item = navigation.getParam('data');

        return {
            title: item.nome
        }

    }
    
    constructor(props){
        super(props);

        this.state = {
            isLoading: false
        }

        this.handleAdicionar = this.handleAdicionar.bind(this);
    }

    handleAdicionar(item){

        const { comprasStore } = this.props;
        const { navigation } = this.props; 

        this.setState({
            isLoading: !this.state.isLoading
        })

        comprasStore.adicionarItemCarrinho(item);

        Alert.alert(
            'Adicionado ao carrinho!',
            `${item.nome} foi adicionado ao carrinho.`,
            [
              {text: 'OK', onPress: () => navigation.navigate('MainScene')},
            ],
            { cancelable: false }
          )

    }

    render(){

        const { navigation } = this.props;

        const item = navigation.getParam('data');

        return(
            <View style={styles.container}>
                <Avatar xlarge rounded containerStyle={styles.avatarContainer} source={{uri: item.img}}/>
                <Text style={styles.textTitle}>{item.nome}</Text>
                <Text style={styles.text}>Descricao gigante apenas para teste
                    afinal estou apenas fazendo um handson muito promissor
                    e evangelizando voces em relação ao react native 
                </Text>
                <Button title="Adicionar ao carrinho"
                    titleStyle={{ fontWeight: "700" }}
                    loading = {this.state.isLoading}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        width: 300,
                        height: 45,
                        borderColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 5,
                        marginTop: 80
                    }}
                    onPress={() => this.handleAdicionar(item)}
                    />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    avatarContainer: {
        marginTop: 30
    },
    textTitle: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
    }
})
