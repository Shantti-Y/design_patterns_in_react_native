import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Dashboard from '@/routes/Dashboard';
import Search from '@/routes/Search';
import Profile from '@/routes/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const DashboardStack = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
  }
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Search
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile
  }
})

const AppNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardStack
  },
  Search: {
    screen: SearchStack
  },
  Profile: {
    screen: ProfileStack
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case 'Dashboard':
          iconName = `ios-home`;
          break;
        case 'Search':
          iconName = `ios-search`;
          break;
        case 'Profile':
          iconName = `ios-person`;
          break;
        default:
          iconName = ''
          break;
      }
      return <Icon name={iconName} size={25} />;
    }
  })
});

export default AppNavigator;