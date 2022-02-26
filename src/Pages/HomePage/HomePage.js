import {SafeAreaView, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../Components/Button';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';
import styles from '../HomePage/HomePage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationCard from '../../Components/NotificationCard/NotificationCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import parseDomainData from '../../utils/parseDomainData';
import database from '@react-native-firebase/database';

const HomePage = () => {
  const navigation = useNavigation();
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    database()
      .ref('domains/')
      .on('value', snapshot => {
        const domainData = snapshot.val();
        const parseData = parseDomainData(domainData);
        setNotificationList(parseData);
      });
  }, []);

  function handleDomainAdd() {
    navigation.navigate(routes.DOMAIN_ADD);
  }

  function handleDomainDisplay() {
    navigation.navigate(routes.DOMAIN_DISPLAY);
  }
  const singOut = async () => {
    await AsyncStorage.clear();
    navigation.navigate(routes.LOGIN);
  };

  const renderDomain = ({item}) => <NotificationCard domain={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          style={styles.logoutIcon}
          name="logout"
          size={35}
          onPress={() => singOut()}
        />
      </View>

      <FlatList data={notificationList} renderItem={renderDomain} />
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
