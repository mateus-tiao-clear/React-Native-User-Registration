import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={styles.form}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        value={user.name}
        placeholder="Inform to Name"
        onChangeText={name => setUser({...user, name})}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        value={user.email}
        placeholder="Inform to E-mail"
        onChangeText={email => setUser({...user, email})}
      />
      <Text>URL Avatar</Text>
      <TextInput
        style={styles.input}
        value={user.avatarUrl}
        placeholder="Inform the URL Avatar"
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
      />
      <Button
        title="Save"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});
