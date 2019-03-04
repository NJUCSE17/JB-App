import React from 'react';
import { Alert, AsyncStorage, StyleSheet, RefreshControl } from 'react-native';
import { 
  Container, 
  Content,
  List,
  Text,
  View
} from 'native-base';

import AssignmentCard from '../components/AssignmentCard';
import AssignmentCreator from '../components/AssignmentCreator';
import Colors from '../constants/Colors';

export default class PersonalScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal_assignments: {}
    }

    this._init();
  }

  static navigationOptions = {
    title: 'Personal',
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.defaultDark,
    },
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={ styles.main_content }>
          <AssignmentCreator />
          <View style = {styles.horizontalLine} />
          { this.state.personal_assignments ? (
            <List 
              dataArray={this.state.personal_assignments}
              renderRow={this._renderAssignment}
            />
          ) : (
            <Text>No personal assignments.</Text>
          )}
        </Content>
      </Container>
    );
  }

  _init = async () => {
    await this._loadPersonalAssignments();
  }

  _loadPersonalAssignments = async () => {
    const assignments_string = await AsyncStorage.getItem('assignments');
    all_assignments = JSON.parse(assignments_string);
    personal_assignments = all_assignments.filter(assignment => (assignment.issuer !== 0));
    this.setState({ personal_assignments });
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
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginHorizontal: 5,
    marginVertical: 10,
  },
});