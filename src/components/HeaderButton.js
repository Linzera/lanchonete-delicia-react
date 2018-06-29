import React from 'react'
import {TouchableHighlight, View} from 'react-native'
import { Icon, Badge } from 'react-native-elements'
import { observer, inject } from 'mobx-react'

@inject('comprasStore')
@observer
export default class HeaderButton extends React.Component{

    handlePress(navigation){

        navigation.push('CheckoutScene')

    }

    render(){

        const { navigation, iconType, iconName, buttonStyle, buttonUnderColor, comprasStore } = this.props;

        let { compras } = comprasStore;

        return(
            <View style={{flexDirection: 'row', padding: 10}}>
                <TouchableHighlight style={buttonStyle} onPress={() => this.handlePress(navigation)} underlayColor={buttonUnderColor}>
                    <Icon type={iconType} name={iconName}/>
                </TouchableHighlight>
                <Badge value={compras.length}/>
            </View>
        )

    }

}