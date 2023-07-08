import React, {useContext} from 'react';
import {View, Alert, FlatList} from 'react-native';
import users from '../../mock/users';
import {Button, Icon, ListItem} from 'react-native-elements';
import UsersContext from '../../context/UserContext';

export default props => {
  const {state} = useContext(UsersContext);
  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete ' + user.id);
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  function getActions(user) {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserFor,', user)}
          type="clear"
          icon={<Icon mame="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon mame="delete" size={25} color="red" />}
        />
      </>
    );
  }

  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
      />
    );
  }
  console.warn(Object.keys(props));
  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
};
