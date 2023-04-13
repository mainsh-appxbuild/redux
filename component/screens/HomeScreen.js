import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const username = useSelector(store => store.login.username);

  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>
        Welcome <Text> {username} </Text>{' '}
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  mainText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
  },
});
