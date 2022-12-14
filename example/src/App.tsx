import * as React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import {
  getBadgeCount,
  setBadgeCount,
  isBadgeSupported,
} from 'react-native-badge';
import { MyButton } from './MyButton';

export default function App() {
  const [isSupport, setIsSupport] = React.useState<boolean>(false);
  const [badgeCnt, setBadgeCnt] = React.useState<number>(0);
  const [input, setInput] = React.useState<number>(0);

  React.useEffect(() => {
    isBadgeSupported().then(setIsSupport);
    getBadgeCount().then(setBadgeCnt);
  }, []);

  const handlePress = React.useCallback(() => {
    setBadgeCount(input).then(() => {
      setTimeout(() => {
        getBadgeCount().then(setBadgeCnt);
      }, 1000);
    });
  }, [input]);

  return (
    <View style={styles.container}>
      <Text>IS Support Badge: {isSupport ? 'Yes' : 'No'}</Text>
      <Text>Current Badge Count : {badgeCnt}</Text>
      <View style={styles.row}>
        <Text>Set Badge Count</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(n) => setInput(Number(n))}
          value={input.toString()}
        />
      </View>
      <MyButton text="Apply Badge Count" onPress={handlePress} color={'blue'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
