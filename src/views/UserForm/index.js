import React, {useState, useContext} from 'react';
import {Button, TextInput} from 'react-native';
import {Text, View, StyleSheet} from 'react-native';
import UsersContext from '../../context/UserContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);
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
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
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
