import {FlatList, SafeAreaView, Text} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import DomainCard from '../../Components/DomainCard';

const DomainDisplay = domainList => {
  const renderDomain = ({item}) => <DomainCard domain={item} />;
  return (
    <SafeAreaView>
      <FlatList data={domainList} renderItem={renderDomain} />
    </SafeAreaView>
  );
};

export default DomainDisplay;
