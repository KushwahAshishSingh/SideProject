

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Login from './Login';
import LandingPage from './LandingPage'
import Register from './Register';
import ImageSlider from './ImageSlider';
import ForgotPassword from './ForgotPassword';
import Tribes from './Tribes';
import ChoosingDays from './ChoosingDays';
import HomePage from './HomePage'

const App: () => Node = () => {
 
  return (
    <SafeAreaView>
      <View>
      <HomePage/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default App;
