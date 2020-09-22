import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class Product extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: '#f5f5fa',
          height: 280,
          width: 160,
          borderRadius: 20,
          marginTop: this.props.marginTop,
          marginRight: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Image
            style={{height: 25, width: 20}}
            source={require('../images/3.png')}
          />
          <Text
            style={{fontSize: 10, fontWeight: 'bold', paddingHorizontal: 16}}>
            290 Calories
          </Text>
        </View>
        <Image
          source={this.props.Image}
          style={{
            height: 105,
            width: 130,
            alignSelf: 'center',
            marginTop: 15,
            marginBottom: 15,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            paddingHorizontal: 10,
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            paddingHorizontal: 10,
            color: '#848385',
          }}>
          Beef burger
        </Text>
      </TouchableOpacity>
    );
  }
}
