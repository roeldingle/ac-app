import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  FlatList,
  ActivityIndicator
} from 'react-native';

import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class TestScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Projects',
  //   headerStyle: {
  //     backgroundColor: '#6200E'
  //   },
  // };

  static navigationOptions = ({ navigation }) => {
   return {
      title: 'Test',
      headerTintColor: '#fff',
      headerStyle: {
         backgroundColor: Colors.default
      }
   }
}


  render() {
    return (
        <View style={styles.container}>
          <ScrollView style={styles.container}>
              <Text>Testing</Text>
            </ScrollView>
        </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  listItemContainer:{
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: Colors.line,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row'
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
