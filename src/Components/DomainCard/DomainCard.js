import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './DomainCard.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';
const DomainCard = ({domain}) => {
  const navigation = useNavigation;
  const deleteUser = () => {
    database()
      .ref('domains/' + domain.id)
      .remove()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };
  console.log(domain);

  const updateUser = () => {
    database()
      .ref('/domains' + domain.id)
      .update({})
      .then(() => console.log('Data updated.'));
  };

  const calculateDays = () => {
    let currentDate = new Date();
    let finishDate = new Date(domain.date);
    console.log('1.' + finishDate);
    const diffInTime = finishDate.getTime() - currentDate.getTime();
    let days = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
    console.log('3.' + days);
    return days;
  };

  function getDateRange(d) {
    console.log(d);
    if (d == 11) {
      return 1;
    } else if (60 > d >= 15) {
      return 2;
    } else if (100 > d >= 60) {
      return 3;
    } else {
      return 4;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text
          style={[
            getDateRange(calculateDays()) === 1 ? styles.red : styles.white,
            getDateRange(calculateDays()) === 2 ? styles.orange : styles.white,
            getDateRange(calculateDays()) === 3 ? styles.green : styles.white,
            getDateRange(calculateDays()) === 4 ? styles.green : styles.red,
          ]}>
          {domain.domainName}
        </Text>
        <Text style={styles.date}>{domain.date}</Text>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{domain.domainProvider}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.button} onPress={() => deleteUser()}>
            <Icon name="delete" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => updateUser()}>
            <Icon name="update" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

export default DomainCard;
