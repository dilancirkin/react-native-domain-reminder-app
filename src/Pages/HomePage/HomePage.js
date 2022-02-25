import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';
import styles from '../HomePage/HomePage.styles';
const HomePage = () => {
  const navigation = useNavigation();

  function handleDomainAdd() {
    navigation.navigate(routes.DOMAIN_ADD);
  }

  function handleDomainDisplay() {
    navigation.navigate(routes.DOMAIN_DISPLAY);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Button theme="circle" label="Add Domain" onPress={handleDomainAdd} />
        <Button
          theme="circle"
          label="Display Domain"
          onPress={handleDomainDisplay}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
