import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import sharedStyle from '../../style/shared'

export default class loginScreen extends React.PureComponent {

  static navigationOptions = (props) => {
    return {
      headerRight: (
        <Button
          transparent
          iconLeft
          style={sharedStyle.rightHeaderButton}
          onPress={() => props.navigation.navigate('LeadForm')}
        >
          <Icon name="plus" size={20}/>
        </Button>
      ),
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Leads page!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}
