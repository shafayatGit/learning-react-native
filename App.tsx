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
    // <SafeAreaProvider>
    //   <SafeAreaView style={styles.container}>
    //     <StatusBar hidden={false} barStyle="dark-content" />

    //     <Text style={styles.text}>Hello React Native!</Text>
    //     <Image
    //       style={styles.image}
    //       source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    //     />

    //     {/* <Button title="Click me">
    //         <Text>Click me</Text>
    //       </Button> */}

    //     {/* <TouchableOpacity
    //         style={{
    //           padding: 10,
    //           backgroundColor: 'green',
    //           width: 100,
    //           borderRadius: 10,
    //         }}
    //         onPress={() => Alert.alert('Button')}
    //       >
    //         <Text>Click Me</Text>
    //       </TouchableOpacity> */}

    //     {/* <TouchableHighlight
    //         style={{
    //           padding: 10,
    //           backgroundColor: 'green',
    //           width: 100,
    //           borderRadius: 10,
    //         }}
    //         onPress={() => Alert.alert('Button')}
    //       >
    //         <Text>Click Me</Text>
    //       </TouchableHighlight> */}

    //     <Pressable
    //       style={styles.pressable}
    //       onPress={() => Alert.alert('Button')}
    //     >
    //       <Text style={styles.btnText}>Click Me</Text>
    //     </Pressable>
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: '#c0a0a0',
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 20,
  // },
  // text: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  // image: {
  //   width: 100,
  //   height: 100,
  // },
  // pressable: {
  //   padding: 10,
  //   backgroundColor: 'green',
  //   width: 100,
  //   borderRadius: 10,
  //   alignItems: 'center',
  // },
  // btnText: {
  //   fontSize: 15,
  //   color: 'white',
  //   fontWeight: 500,
  // },

  container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row', // Arrange children in a row
    // flexWrap: 'wrap', // Allow wrapping to the next line
    // justifyContent: 'flex-start', // Align children to the start of the row
    // alignItems: 'flex-start', // Align children to the start of the column
    // gap: 10, // Space between children
    // alignSelf: 'stretch', // Stretch children to fill the container's height
    // flexGrow: 1, // Allow children to grow and fill available space, same as flex: 1
  },
  box1: {
    flex: 1, // 1/6 of the container height
    backgroundColor: 'red',
  },
  box2: {
    flex: 2, // 2/6 of the container height
    backgroundColor: 'green',
  },
  box3: {
    flex: 3, // 3/6 of the container height
    backgroundColor: 'blue',
  },
});
