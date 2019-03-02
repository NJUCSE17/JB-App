import React from 'react';
import { Constants } from 'expo';
import { Alert, Image, StyleSheet } from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Icon,
  Input,
  Item,
  Label,
  Text, 
  View
} from 'native-base';

import * as API from './../services/api';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      disableAuthButton: false,
    }
  }

  static navigationOptions = {
    headerTitle: "Login to JB App",
  }

  render() {
    const { manifest } = Constants;

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.view}>
            <Image 
              source={require('./../assets/images/icon.png')} 
              style={styles.icon}
            />
            <Text style={styles.app_name}>{manifest.name}</Text>
          </View>
          <Card style={styles.rounded}>
            <CardItem style={styles.rounded}>
              <Body>
                <Item floatingLabel style={styles.auth_input}>
                  <Icon active type="FontAwesome" name="user" />
                  <Label icon>Username (Student ID)</Label>
                  <Input ref="username" 
                    keyboardType="decimal-pad"
                    onChangeText={(username) => this.setState({username})} 
                  />
                </Item>
                <Item floatingLabel style={styles.auth_input}>
                  <Icon active type="FontAwesome" name="lock" />
                  <Label icon>Password</Label>
                  <Input ref="password" 
                    secureTextEntry={true} 
                    onChangeText={(password) => this.setState({password})} 
                  />
                </Item>
                <Button iconLeft full success
                  disabled={this.state.disableAuthButton}
                  style={[styles.rounded, styles.auth_button]}
                  onPress={this._handleLogin.bind(this)}
                >
                  <Icon type='FontAwesome' name='sign-in' />
                  <Text>Login</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }

  _handleLogin = async () => {
    try {
      this.setState({ disableAuthButton: true });
      let username = this.state.username, password = this.state.password;
      if (!username || !password) {
        Alert.alert("Error", "Username and password must be set.");
      } else {
        await API.login(username, password);
        this.props.navigation.navigate('Main');
      }
    } catch (e) {
      const { status, message } = e;
      Alert.alert("Login failed", 
        "Status: " + (status ? status : "NULL")
        + "\nMessage: " + (message ? message : "NULL")
      );
      this.setState({ disableAuthButton: false });
    }
  }
}

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 8,
  },
  container: {
    paddingTop: "10%",
    paddingHorizontal: 15,
  },
  view: {
    alignItems: 'center',
    margin: 20,
  },
  icon: {
    width: 64,
    height: 64,
  },
  app_name: {
    letterSpacing: 1.2,
    fontSize: 36,
  },
  auth_input: {
    marginVertical: 8,
  },
  auth_button: {
    marginVertical: 10,
  }
});