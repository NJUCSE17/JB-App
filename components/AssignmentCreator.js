import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Content,
  Text,
  Textarea
} from 'native-base';
import Colors from '../constants/Colors';

export default class AssignmentCard extends React.Component {
  render() {
    return (
      <Card style={styles.rounded}>
        <CardItem header bordered 
          style={[styles.rounded_top, {}]}>
          <Text style={{color: 'black'}}>New Assignment</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Textarea bordered placeholder="没做好的内容" style={{width: "100%", height: 80}}></Textarea>
          </Body>
        </CardItem>
        <CardItem bordered style={styles.rounded_buttom}>
          <Text style={{ width: "100%", textAlign: "right" }}>
            DDL （没做好）
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