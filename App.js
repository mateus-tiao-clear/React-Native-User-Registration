import React from 'react';
import {Button, Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';
import {UsersProvider} from './src/context/UserContext';

const Stack = createStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => {
              return {
                title: 'User List',
                headerRight: () => (
                  <Button
                    type="clear"
                    onPress={() => navigation.navigate('UserForm')}
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                ),
              };
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'User Form',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
