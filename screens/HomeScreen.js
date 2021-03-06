import React from 'react';
import { Alert, AsyncStorage, StyleSheet, RefreshControl } from 'react-native';
import { 
  Container,
  Content,
  List,
  Toast
} from 'native-base';

import * as API from '../services/api';
import AssignmentCard from '../components/AssignmentCard';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      assignments: {}
    }

    this._init();
  }

  static navigationOptions = {
    title: 'Assignments',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.primaryDark,
    },
  };

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={ styles.main_content }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._updateAssignments}
              colors={[Colors.primaryDark, Colors.secondaryDark, Colors.defaultDark]}
            />
          }
        >
          <List 
            dataArray={this.state.assignments}
            renderRow={this._renderAssignment}
          />
        </Content>
      </Container>
    );
  }

  _init = async () => {
    const assignments_string = await AsyncStorage.getItem('assignments');
    if (assignments_string) {
      this.setState({ assignments: JSON.parse(assignments_string) });
    }
    this._updateAssignments();
  }

  _updateAssignments = async () => {
    this.setState({ refreshing: true });
    try {
      const assignments = await API.getAssignments();
      this.setState({assignments});
      
      Toast.show({
        text: "Assignments updated.",
        buttonText: "OK",
        duration: 2000,
        style: [
          styles.rounded,
          {
            marginHorizontal: 10,
            marginBottom: 60,
          }
        ]
      });
    } catch (e) {
      const { status, message } = e;
      Alert.alert("Update assignments failed", 
        "Status: " + (status ? status : "NULL")
        + "\nMessage: " + (message ? message : "NULL")
      );
    }
    this.setState({ refreshing: false });
  }

  _renderAssignment = (assignment) => {
    return (
      <AssignmentCard
        course_name={assignment.course_name}
        assignment_name={assignment.name}
        assignment_content_html={assignment.content_html}
        assignment_due_time={assignment.due_time}
      />
    );
  }
}

const styles = StyleSheet.create({
  main_content: {
    textAlign: "center",
    padding: 10,
  },
  rounded: {
    borderRadius: 10,
  },
  rounded_top: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rounded_buttom: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});