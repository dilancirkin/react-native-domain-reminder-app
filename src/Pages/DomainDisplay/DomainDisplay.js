import {FlatList, SafeAreaView, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';
import DomainCard from '../../Components/DomainCard';
import parseDomainData from '../../utils/parseDomainData';

const DomainDisplay = () => {
  const [domainList, setDomainList] = useState([]);

  useEffect(() => {
    database()
      .ref('domains/')
      .on('value', snapshot => {
        const domainData = snapshot.val();
        const parseData = parseDomainData(domainData);
        setDomainList(parseData);
      });
  }, []);

  const renderDomain = ({item}) => <DomainCard domain={item} />;
  return (
    <SafeAreaView>
      <FlatList data={domainList} renderItem={renderDomain} />
    </SafeAreaView>
  );
};

export default DomainDisplay;
