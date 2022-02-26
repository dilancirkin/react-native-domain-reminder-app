import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

import styles from './DomainAdd.styles';

const DomainAdd = () => {
  const [domainName, setDomainName] = useState();
  const [domainProvider, setDomainProvider] = useState();
  const [text, setText] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  function handleSend() {
    console.log('text' + text);
    const objDomain = {
      id: uuid.v4(),
      domainName: domainName,
      date: text,
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
      <View style={styles.container}>
        <Text style={styles.label}>End Date</Text>
        <View style={styles.innerContainer}>
          <View style={styles.datePickerContainer}>
            <Text></Text>
          </View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Icon name="calendar" color="black" size={35} />
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setText(new Date(date).toString());
            console.log(new Date(date));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <Input
        label="Domain Provider"
        onChangeText={text => setDomainProvider(text)}
      />
      <Button label="Add" onPress={handleSend} />
    </SafeAreaView>
  );
};

export default DomainAdd;
