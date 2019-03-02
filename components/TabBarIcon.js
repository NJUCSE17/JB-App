import React from 'react';
import { Icon } from 'native-base';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        type="FontAwesome"
        name={this.props.name}
        size={26}
        style={{ 
          marginBottom: -3, 
          color: (this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault)
        }}
      />
    );
  }
}