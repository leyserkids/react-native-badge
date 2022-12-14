import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function MyButton({
  text,
  onPress,
  color = '#9ec61b',
}: {
  text: string;
  onPress: () => void;
  color?: string;
}) {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 15,
    padding: 5,
    backgroundColor: '#9ec61b',
  },
  btnText: {
    color: 'white',
  },
});
