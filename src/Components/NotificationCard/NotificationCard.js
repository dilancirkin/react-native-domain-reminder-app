import {View, Text} from 'react-native';
import React from 'react';
import styles from './NotificationCard.styles';

const NotificationCard = ({domain}) => {
  const calculateDays = () => {
    let currentDate = new Date();
    let finishDate = new Date(domain.date);
    const diffInTime = finishDate.getTime() - currentDate.getTime();
    let days = Math.floor(diffInTime / 1000 / 60 / 60 / 24);
    return days;
  };

  function getDateRange(d) {
    if (15 > d) {
      return domain.domainName;
    } else {
      return null;
    }
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.container}>
            <Text style={styles.user}>{getDateRange(calculateDays())}</Text>
          </View>
          <Text style={styles.date}>The end date is approaching!</Text>
        </View>
        <View style={styles.footer}></View>
      </View>
    </View>
  );
};

export default NotificationCard;
