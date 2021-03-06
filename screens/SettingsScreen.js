import React from 'react';
import { Alert, AsyncStorage, StyleSheet } from 'react-native';
import SettingsView from '../components/SettingsView';
import { 
  Button, 
  Container, 
  Footer, 
  Text 
} from 'native-base';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.secondaryDark,
    },
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

  _handleLogout = async () => {
    Alert.alert(
      'Logout', 'Are you sure you want to logout?', 
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Logout',
          onPress: async () => {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('username');
            this.props.navigation.navigate('Init');
          },
        },
      ]
    );
  }
}

const styles = StyleSheet.create({
  footer_rounded: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  footer_button: {
    width: "100%",
    height: "100%",
  },
});