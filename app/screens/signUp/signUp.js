import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import actionCreators from '../../actions/index';

const style = StyleSheet.create({
  cancelText: {
    color: 'gray',
  },
});

class LoginScreen extends React.PureComponent {
  static navigationOptions = (props) => {
    const { actions } = actionCreators;
    return {
      headerTitle: 'Sign up',
      headerLeft: (
        <Button
          transparent
          onPress={() => props.navigation.goBack()}
        >
          <Text style={style.cancelText}>Cancel</Text>
        </Button>
      ),
      headerRight: (
        <Button
          transparent
          onPress={() => actions.auth.signUp({ cow: 'cow' })}
        >
          <Text style={style.cancelText}>Done</Text>
        </Button>
      ),
    }
  };

  render() {
    return (
      <View>
        <Form>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input/>
          </Item>
          <Item stackedLabel last>
            <Label>Password</Label>
            <Input/>
          </Item>
        </Form>
      </View>
    );
  }
}

const mapDispatchToProps = () => actionCreators;
const mapStateToProps = state => ({
  store: {
    auth: state.auth,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
