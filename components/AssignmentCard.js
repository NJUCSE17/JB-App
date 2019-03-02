import React from 'react';
import { StyleSheet, WebView } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Content,
  Text
} from 'native-base';
import HTMLView from 'react-native-htmlview';

export default class AssignmentCard extends React.Component {
  render() {
    return (
      <Card style={styles.rounded}>
        <CardItem header bordered style={styles.rounded_top}>
          <Text>{this.props.course_name} - {this.props.assignment_name}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Content>
              <HTMLView value={this.props.assignment_content_html}/>
            </Content>
          </Body>
        </CardItem>
        <CardItem bordered style={styles.rounded_buttom}>
          <Text style={{ width: "100%", textAlign: "right" }}>
            DDL {this.props.assignment_due_time}
          </Text>
        </CardItem>
      </Card>
    )
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