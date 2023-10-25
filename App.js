import React from 'react';
import NavigationButton from './src/components/NavegationButton';
import {View} from 'react-native';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, []);

  return (
    <View style={{backgroundColor: '#D9D9D9', flex: 1, alignItems: 'center'}}>
      <NavigationButton />
    </View>
  );
};

export default App;
