import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  FlatList,
  ActivityIndicator
} from 'react-native';

import { Icon } from 'expo';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Projects',
  //   headerStyle: {
  //     backgroundColor: '#6200E'
  //   },
  // };

  static navigationOptions = ({ navigation }) => {
   return {
      title: 'Projects',
      headerTintColor: '#fff',
      headerStyle: {
         backgroundColor: Colors.primary
      }
   }
}

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }

  componentDidMount(){
    this._getProjects();
  }

  _getProjects = () => {

    let api = 'http://staging.straightarrowbes.com/ACRating/apiAuth.php';
    let operation = "auth";
    let email = "rmdingle@straightarrow.com.ph";
    let password = "rinoayuna12";

    const api_url = api+"?operation="+operation+"&email="+email+"&password="+password;

    fetch(api_url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        dataSource: data,
        isLoading: false
      });
    })
    .catch(error => {
      console.log(error)
    });
  };

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.listItemContainer}>
          <Text style={{fontSize: 12, color: Colors.default}}>
            {item.name}
          </Text>
          <Icon.Ionicons
            name='md-arrow-dropright'
            size={16}
            style={{position: 'absolute', right: 10, top: 16, color: Colors.line}}
          />
      </TouchableOpacity>
    )
  }
  render() {
    return (

      this.state.isLoading
      ?
      <View style={styles.contentContainer}>
        <ActivityIndicator size="large" animating />
      </View>
      :
        <View style={styles.container}>
          <ScrollView style={styles.container}>
              <FlatList
                data={this.state.dataSource}
                renderItem={this._renderItem}
                keyExtractor={(item,index) => item.name}
              />
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
