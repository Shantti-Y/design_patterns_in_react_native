import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import DesignPatternList from '@routes/DesignPatternList';
import Introduction from '@routes/Introduction';
import Icon from 'react-native-vector-icons/Ionicons';

const DesignPatternListStack = createStackNavigator({
  DesignPatternList: {
    screen: DesignPatternList,
  }
})

const IntroductionStack = createStackNavigator({
  Introduction: {
    screen: Introduction
  }
})

const AppNavigator = createBottomTabNavigator({
  DesignPatternList: {
    screen: DesignPatternListStack
  },
  Introduction: {
    screen: IntroductionStack
  }
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case 'DesignPatternList':
          iconName = `ios-list-box`;
          break;
        case 'Introduction':
          iconName = `ios-contact`;
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