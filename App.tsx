import React from 'react';
import {
  Image,
  StatusBar,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  //-> Dont use this
  // const style = {
  //   container: {
  //     backgroundColor: '#c0a0a0',
  //     width: '100%',
  //     height: '100%',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  // };

  //Theme------->>
  const theme = useColorScheme();
  const isDarkMode = theme == 'dark';
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} barStyle="dark-content" />

        <Text style={styles.text}>Hello React Native!</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        {/* <Button title="Click me">
            <Text>Click me</Text>
          </Button> */}

        {/* <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'green',
              width: 100,
              borderRadius: 10,
            }}
            onPress={() => Alert.alert('Button')}
          >
            <Text>Click Me</Text>
          </TouchableOpacity> */}

        {/* <TouchableHighlight
            style={{
              padding: 10,
              backgroundColor: 'green',
              width: 100,
              borderRadius: 10,
            }}
            onPress={() => Alert.alert('Button')} 
          >
            <Text>Click Me</Text>
          </TouchableHighlight> */}

        <Pressable
          style={styles.pressable}
          onPress={() => Alert.alert('Button')}
        >
          <Text style={styles.btnText}>Click Me</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0a0a0',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  pressable: {
    padding: 10,
    backgroundColor: 'green',
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 500,
  },
});
