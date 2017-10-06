import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ItemList_Adapter from './ItemList_adapter.js';


class ItemList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Cửa hàng',
    tabBarIcon: ({ tintColor }) => (
      <Image

      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.ItemList}
          renderItem={({ item }) => <ItemList_Adapter myItem={item} />}
          keyExtractor={item => item.id}
          
        />
      </View>
    );
  }
}
function MapState2Prop(state) {
  return { ItemList: state.ItemList };
}
export default connect(MapState2Prop)(ItemList);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
