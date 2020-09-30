import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth117218Navigator from '../features/EmailAuth117218/navigator';
import ArticleList117216Navigator from '../features/ArticleList117216/navigator';
import BlankScreen0117215Navigator from '../features/BlankScreen0117215/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth117218: { screen: EmailAuth117218Navigator },
ArticleList117216: { screen: ArticleList117216Navigator },
BlankScreen0117215: { screen: BlankScreen0117215Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
