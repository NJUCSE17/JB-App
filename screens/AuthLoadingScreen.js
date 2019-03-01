import React from 'react';
import { ActivityIndicator, AsyncStorage } from 'react-native';
import { Container } from 'native-base';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(accessToken ? 'Main' : 'Auth');
  };

  render() {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    )
  }
}