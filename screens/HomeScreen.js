import React from 'react';
import { StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';
import { 
  Body, 
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header, 
  Icon,
  Left, 
  Right, 
  Text, 
  Title, 
} from 'native-base';

import AssignmentCard from './../components/AssignmentCard';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: "Assignments",
  };

  render() {
    return (
      <Container>
        <Content style={{ paddingHorizontal: 10 }}>
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
          <AssignmentCard />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  rounded: {
    borderRadius: 8,
  },
  rounded_top: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  rounded_buttom: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  }
});