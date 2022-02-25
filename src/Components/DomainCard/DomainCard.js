import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './DomainCard.styles';

const DomainCard = domain => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.user}>{domain.domainName}</Text>
        <Text style={styles.date}>{domain.endDate}</Text>
      </View>
      <Text style={styles.title}>{domain.domainProvider}</Text>
      <View style={styles.footer}></View>
    </View>
  );
};

export default DomainCard;
