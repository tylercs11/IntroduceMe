import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Scheduler extends Component {



  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Scheduler Screen</Text>
        <Button
            onPress={this.props.navigator.navigate('Matching')}
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
