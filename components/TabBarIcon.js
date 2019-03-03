import React from 'react';
import { Icon } from 'native-base';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        type='FontAwesome'
        name={this.props.name}
        size={26}
        style={{ 
          marginBottom: -3, 
          color: (this.props.focused ? 
            this.props.activeColor : this.props.inactiveColor)
        }}
      />
    );
  }
}