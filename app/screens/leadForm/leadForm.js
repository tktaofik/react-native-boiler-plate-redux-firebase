import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';

const style = StyleSheet.create({
  cancelText: {
    color: 'black',
  },
});

export default class leadForm extends React.PureComponent {
  static navigationOptions = (props) => {
    return {
      headerLeft: (
        <Button
          transparent
          dark
          onPress={() => props.navigation.goBack()}
        >
          <Text style={style.cancelText}>Cancel</Text>
        </Button>
      ),
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Lead form page!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
