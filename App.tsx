/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text, TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Animated, {interpolate, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const expanded = useSharedValue(0);
  const toggle = () => {
    expanded.value = expanded.value > 0 ? 0 : 1;
  };

  const style = useAnimatedStyle(() => {
    const h = interpolate(expanded.value, [0, 1], [40, 80]);
    return {
      height: h,
      backgroundColor: 'red',
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
      width: '100%',
    };
  }, []);
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <Animated.View style={[style]}>
        <TouchableOpacity onPress={() => toggle()}>
          <Text style={{ color: 'white' }}>Test</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default App;
