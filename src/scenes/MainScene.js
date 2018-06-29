import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Icon, Avatar } from 'react-native-elements';
import { ItemList, HeaderButton } from '../components';
import logo from '../Assets/logo.png';
import { observer, inject } from 'mobx-react/native';

@inject('comprasStore')
@inject('produtosStore')
@observer
export default class MainScene extends React.Component{

    static navigationOptions = ({navigation}) =>{

        return {
            headerTitle: 'Lanchonete Delicia',
            headerRight: (
                <HeaderButton navigation={navigation} buttonStyle={{marginRight: 15, flexDirection: 'row'}} buttonUnderColor={'#fff'} iconType={'font-awesome'} iconName={'shopping-cart'}/>
            )
        }

    }

    constructor(props){
        super(props);

        let { produtos } = props.produtosStore;

        this.state = {
            produtos: produtos 
        }

        this.handlePressItem = this.handlePressItem.bind(this);
    }


    handlePressItem(item){

        this.props.navigation.navigate('DetailsScene', {data: item})

    }

    render(){

        return(
            
            <View style={styles.container}>
                <Avatar xlarge source={logo} containerStyle={styles.logo}/>
                <FlatList
                    data={this.state.produtos}
                    keyExtractor={(item) => item.nome}
                    renderItem={(data) => <ItemList data={data.item} _onPress={this.handlePressItem}/>}
                    />
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    logo: {
        margin: 20,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    }
  });

