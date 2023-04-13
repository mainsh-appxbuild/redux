import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import HomeScreen from './HomeScreen';
import {useDispatch} from 'react-redux';
import setUser from '../redux/Action-Creator/creator';
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({username: username}));
    navigation.navigate('HomeScreen');
  };

  const [username, setUsername] = useState('');

  return (
    <View style={{flex: 1}}>
      <View style={styles.mainView}>
        <Text style={styles.mainText}> Login Screen </Text>
        <View style={styles.input}>
          <TextInput
            style={styles.input}
            placeholder={'username'}
            placeholderTextColor={'#003f5c'}
            onChangeText={(value)=>{
              setUsername(value);
            }}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder={'password'}
            placeholderTextColor={'black'}
            secureTextEntry={true}
          />
        </View>
        <Button onPress={handleLogin} title={'Login'} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ccb94',
  },

  mainText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    paddingBottom: 30,
  },

  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: 300,
    alignItems: 'center',
    marginBottom: 20,
  },
});
