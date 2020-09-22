// APP Class of Bino
// import React, { Component } from 'react';
// import {View , Text,TouchableOpacity} from 'react-native'
// import Main_of_Bino from './projects/Bino/Main';
// import {strings} from './projects/Localization';

// export default class App extends Component {
//   overLang(){
//     strings.setLanguage('it');
//     this.setState({});
//   }
//   render() {
//     return (
//          <Main_of_Bino />
//     //  <View>
//     //    <TouchableOpacity
//     //    onPress={()=>{this.overLang()}}
//     //    >
//     //       <Text>Localization in React native</Text>
//     //    </TouchableOpacity>
//     //    <Text>{strings.how}</Text>
//     //  </View>
//     );
//   }
// }

///////////////////////////////////////

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigations/navigator';

const App=()=>{
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}
export default App;