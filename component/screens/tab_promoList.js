import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

class PromoList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Khuyến mãi',
    tabBarIcon: ({ tintColor }) => (
      <Image

      />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.Room}</Text>
      </View>
    );
  }
}
function MapState2Prop(state){
    return { Room: state.Room};
}
export default connect(MapState2Prop)(PromoList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
