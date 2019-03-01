import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import SettingsView from '../components/SettingsView';
import { 
  Button, 
  Container, 
  Footer, 
  Text 
} from 'native-base';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Container>
        <SettingsView />
        <Footer style={styles.footer_rounded}>
          <Button full danger
            style={[styles.footer_rounded, styles.footer_button]}
            onPress={this._handleLogout.bind(this)}  
          >
            <Text>Logout</Text>
          </Button>
        </Footer>
      </Container>
    )
  }

  _handleLogout = () => {
    Alert.alert(
      'Logout', 'Are you sure you want to logout?', 
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Logout',
          onPress: () => {
            Alert.alert('TODO', 'Logout not implemented.');
            // TODO: implement revoke tokens
            this.props.navigation.navigate('Init');
          },
        },
      ]
    );
  }
}

const styles = StyleSheet.create({
  footer_rounded: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  footer_button: {
    width: "100%",
    height: "100%",
  },
});