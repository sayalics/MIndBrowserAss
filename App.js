import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import ItemList from './Views/ItemList';
import DetailView from './Views/DetailView';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    ItemList: { 
      screen: ItemList //screen one
    }, 
    DetailView: {
       screen: DetailView //screen two
      }, 
  },
  {
    initialRouteName: 'ItemList', //initial screen
  }
);
export default createAppContainer(App);