import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './Views/Main';
import Product from './Views/Product';

const NavStack = createStackNavigator({
    Main,
    Product
},{
    defaultNavigationOptions: {
        title: "Minimichelle",
        headerStyle: {
            backgroundColor: "#FF6EC7",
        },
        headerTintColor: "#FFF",
    }
});

const App = createAppContainer(NavStack);

export default App;