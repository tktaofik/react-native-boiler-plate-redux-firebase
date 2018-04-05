import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class loginScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <List>
          <ListItem icon onPress={() => this.props.navigation.navigate('Auth')}>
            <Left>
              <Icon name="sign-out"/>
            </Left>
            <Body>
              <Text>Log out</Text>
            </Body>
          </ListItem>
        </List>
      </View>
    );
  }
}
