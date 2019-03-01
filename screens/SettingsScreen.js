import React from 'react';
import { StyleSheet } from 'react-native';
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
        <Footer>
          <Button style={styles.footer_button}>
            <Text>Logout</Text>
          </Button>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  footer_button: {
    width: "100%",
    height: "100%",
  }
});