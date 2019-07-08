import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
<Text style={styles.child}> Child One </Text>
<Text style={styles.child}> Child Two </Text>
<Text style={styles.child}> Child Three </Text>
</View>
    );
  }
}

const styles = StyleSheet.create({
parent: {
flex: 1,
flexDirection: "row",
alignItems: "flex-start",
backgroundColor: "#F5FCFF",
borderColor: "#0099AA",
borderWidth: 5,
marginTop: 30
},
child: {
flex: 1,
borderColor: "#AA0099",
borderWidth: 2,
textAlign: "center",
fontSize: 24,
}
});
