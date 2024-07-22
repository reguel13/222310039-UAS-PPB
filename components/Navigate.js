import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PageLogin from './PageLogin';
import PageRegister from './PageRegister';
import PageMakeTicket from './PageMakeTicket';
import PageMakeTicket2 from './PageMakeTicket2';
import PageCekTicket from './PageCekTicket';
import PageCekBalasan from './PageCekBalasan';
import PageHistory from './PageHistory';
import PageProfile from './PageProfile';
import TicketProvider from './TicketContext';

const Stack = createStackNavigator();

function Navigate() {
  return (
  <TicketProvider>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={PageLogin} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={PageRegister} options={{headerShown:false}}/>
            <Stack.Screen name="MakeTiket" component={PageMakeTicket} options={{headerShown:false}}/>
            <Stack.Screen name="MakeTiket2" component={PageMakeTicket2} options={{headerShown:false}}/>
            <Stack.Screen name="CekTiket" component={PageCekTicket} options={{headerShown:false}}/>
            <Stack.Screen name="CekBalasan" component={PageCekBalasan} options={{headerShown:false}}/>
            <Stack.Screen name="History" component={PageHistory} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={PageProfile} options={{headerShown:false}}/>

        </Stack.Navigator>
    </NavigationContainer>
    </TicketProvider>
  );
}

export default Navigate;