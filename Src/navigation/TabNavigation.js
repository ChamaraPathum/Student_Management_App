import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sadd from '../Student/Sadd';
import Uadd from '../User/Uadd';

const Tab = createBottomTabNavigator();

const TabNavigation=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Add Student" component={Sadd} />
      <Tab.Screen name="Add User" component={Uadd} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
