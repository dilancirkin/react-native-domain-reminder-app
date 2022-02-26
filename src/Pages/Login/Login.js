import React, {useState, useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import styles from './Login.styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [signInformation, setSignInformation] = useState({
    userName: '',
    password: '',
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    navigation.navigate(
      isLoggedIn !== '1' ? routes.LOGIN : routes.HOMEPAGE_STACK,
    );
  };
  const checkUser = async () => {
    if (
      signInformation.userName == 'Liberyus' &&
      signInformation.password == 'Liberyus'
    ) {
      alert('Login Successful');
      await AsyncStorage.setItem('isLoggedIn', '1');
      navigation.navigate(routes.HOMEPAGE_STACK);
    } else {
      alert('Login failed');
    }
  };

  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{
          uri: 'https://dijitalgen.com/wp-content/uploads/2021/06/Dijital-Gen-1280x800.jpg',
        }}
      />
      <Input
        label="User Name"
        autoCapitalize="none"
        onChangeText={text =>
          setSignInformation({...signInformation, userName: text})
        }
      />
      <Input
        label="Password"
        secureTextEntry
        onChangeText={text =>
          setSignInformation({...signInformation, password: text})
        }
      />
      <Button label="Sign In" onPress={checkUser} />
    </SafeAreaView>
  );
};

export default Login;
