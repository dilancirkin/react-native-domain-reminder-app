import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.styles';

export default function Input({label, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          placeholderTextColor={'black'}
          style={styles.input_container}
          {...otherProps}
        />
      </View>
    </View>
  );
}
