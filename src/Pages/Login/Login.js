import React, {useState} from 'react';
import {SafeAreaView, Image, AsyncStorage} from 'react-native';
import styles from './Login.styles';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';

const Login = () => {
  const navigation = useNavigation();
  const [signInformation, setSignInformation] = useState({
    userName: '',
    password: '',
  });

  const checkUser = () => {
    if (
      signInformation.userName == 'Liberyus' &&
      signInformation.password == 'Liberyus'
    ) {
      alert('Login Successful');
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
          uri: 'https://www.pngall.com/wp-content/uploads/4/Abstract-Running-Transparent-Background.png',
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
