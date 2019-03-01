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

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Login to JB App",
  }

  render() {
    const { manifest } = Constants;

    return (
      <Container style={styles.container}>
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
                <Input/>
              </Item>
              <Item floatingLabel style={styles.auth_input}>
                <Icon active type="FontAwesome" name="lock" />
                <Label icon>Password</Label>
                <Input />
              </Item>
              <Button iconLeft full bordered 
                style={[styles.rounded, styles.auth_button]}
                onPress={this._handleLogin.bind(this)}
              >
                <Icon type='FontAwesome' name='sign-in' />
                <Text>Login</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
  }

  _handleLogin = () => {
    Alert.alert('TODO', 'API Login not implemented.');
    this.props.navigation.navigate('Main');
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