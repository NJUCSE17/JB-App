import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Text
} from 'native-base';

export default class AssignmentCard extends React.Component {
  render() {
    return (
      <Card style={styles.rounded}>
        <CardItem header bordered style={styles.rounded_top}>
          <Text>作业标题</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              作业内容blabla
            </Text>
          </Body>
        </CardItem>
        <CardItem bordered style={styles.rounded_buttom}>
          <Text style={{ width: "100%", textAlign: "right" }}>
            {`DDL 2019-03-01 20:48\n大概114514小时后`}
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