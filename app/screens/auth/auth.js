import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { Row, Grid } from 'react-native-easy-grid';
import actionCreators from '../../actions/index';

const style = StyleSheet.create({
  signInSignUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signInButton: {},
  signUpButton: {
    width: 180,
    marginRight: 20,
  },
});

class AuthScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Grid>
        <Row size={4}/>
        <Row size={1}>
          <Grid style={style.signInSignUpContainer}>
            <Button
              block
              success
              style={style.signUpButton}
              onPress={() => this.props.navigation.navigate('SignUp')}
            >
              <Text>Sign up</Text>
            </Button>
            <Button
              style={style.signInButton}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text>Sign in</Text>
            </Button>
          </Grid>
        </Row>
        <Row size={1} style={style.signInSignUpContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text>Continue as admin user</Text>
          </TouchableOpacity>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => actionCreators(dispatch);
const mapStateToProps = state => ({
  store: {
    auth: state.auth,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
