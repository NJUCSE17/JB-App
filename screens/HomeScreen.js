import React from 'react';
import { StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';
import { 
  Body, 
  Button,
  Card,
  CardItem,
  Container,
  Header, 
  Icon,
  Left, 
  Right, 
  Text, 
  Title, 
} from 'native-base';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Assignments",
  };

  render() {
    return (
      <Container style={{ padding: 10 }}>
        <Card>
          <CardItem header>
            <Text>作业标题</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                作业内容blabla
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Right>
              <Text>
                2019-03-01 20:48
              </Text>
            </Right>
          </CardItem>
        </Card>
      </Container>
    );
  }
}