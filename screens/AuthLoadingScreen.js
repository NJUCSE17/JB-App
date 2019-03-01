import React from 'react';
import {
  Container,
  Text, 
  View
} from 'native-base';

export default class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <Text>AuthLoadingScreen</Text>
        </View>
      </Container>
    )
  }
}