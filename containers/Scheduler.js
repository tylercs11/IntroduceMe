import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Scheduler extends Component {

  toMatching = () => {
    //reset the stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Matching' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
    //this.props.navigation.navigate('Matching');
  };

  render() {

    return (
      <View style={styles.container}>
        <Text>This is the Scheduler Screen</Text>
        <Button
            onPress={this.toMatching}
            title="To Matching"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    }
});
