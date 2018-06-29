import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { observer, Provider } from 'mobx-react';
import stores from './src/stores'
import {MainScene, DetailsScene, CheckoutScene } from './src/scenes';

const RootStack = createStackNavigator({
    MainScene: {
      screen: MainScene
    },
    DetailsScene:{
      screen: DetailsScene
    },
    CheckoutScene:{
      screen: CheckoutScene
    }
},
  {
    initialRouteName: 'MainScene'
  })

@observer
export default class App extends React.Component {

  render() {
    return (
      <Provider {...stores}>
        <RootStack />
      </Provider>
    )
  }
}
