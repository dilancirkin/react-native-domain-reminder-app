import {SafeAreaView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import database from '@react-native-firebase/database';
import parseDomainData from '../../utils/parseDomainData';
const DomainAdd = () => {
  const [domainName, setDomainName] = useState();
  const [endDate, setEndDate] = useState();
  const [domainProvider, setDomainProvider] = useState();
  const [domainList, setDomainList] = useState([]);

  useEffect(() => {
    database()
      .ref('domains/')
      .on('value', snapshot => {
        const domainData = snapshot.val();
        const parseData = parseDomainData(domainData);
        setDomainList(parseData);
      });
  });

  function handleSend() {
    const objDomain = {
      domainName: domainName,
      endDate: endDate,
      domainProvider: domainProvider,
    };
    database().ref('domains/').push(objDomain);
  }

  return (
    <SafeAreaView>
      <Input
        label="Domain Name"
        autoCapitalize="none"
        onChangeText={text => setDomainName(text)}
      />
      <Input label="End Date" onChangeText={text => setEndDate(text)} />
      <Input
        label="Domain Provider"
        onChangeText={text => setDomainProvider(text)}
      />
      <Button label="Add" onPress={handleSend} />
    </SafeAreaView>
  );
};

export default DomainAdd;
