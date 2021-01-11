import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
  Switch,
  Modal,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const Screen = ({ backgroundColor, screenNumber, setScreenNumber }) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 0.8,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>The screen is {screenNumber}</Text>
      <Button
        title="Press me"
        onPress={() => setScreenNumber(screenNumber + 1)}
      />
    </View>
  );
};

const IfElseExample = () => {
  const [currentScreen, setScreenNumber] = useState(0);

  let CurrentScreenComponent;
  if (currentScreen === 1) {
    CurrentScreenComponent = (
      <Screen
        backgroundColor="orange"
        screenNumber={1}
        setScreenNumber={setScreenNumber}
      />
    );
  } else {
    CurrentScreenComponent = (
      <Screen
        backgroundColor="yellow"
        screenNumber={0}
        setScreenNumber={setScreenNumber}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text>The screen:</Text>
      {CurrentScreenComponent}
    </View>
  );
};

const SwitchExample = () => {
  const [currentScreen, setScreenNumber] = useState(0);

  switch (currentScreen) {
    case 0:
      return (
        // <Screen
        //   screenNumber={0}
        //   backgroundColor="yellow"
        //   setScreenNumber={setScreenNumber}
        // />
        <Text>This is screen 0</Text>
      );
    case 1:
      return (
        <Screen
          screenNumber={1}
          backgroundColor="orange"
          setScreenNumber={setScreenNumber}
        />
      );
    case 2:
      return (
        <Screen
          screenNumber={2}
          backgroundColor="lightgrey"
          setScreenNumber={setScreenNumber}
        />
      );
    default:
      return (
        <Screen
          screenNumber={'undefined'}
          backgroundColor="yellow"
          setScreenNumber={setScreenNumber}
        />
      );
  }
};

const ConditionalOperatorExample = () => {
  const [isDiscounted, setIsDiscounted] = useState(true);
  const [isMember, setIsMember] = useState(true);
  return (
    <View>
      <Text style={{ backgroundColor: isDiscounted ? 'green' : 'white' }}>
        Item Price:
        {isDiscounted ? (isMember ? '$10' : '$25') : '$50'}
      </Text>
      {/* {isMember ? <Button title="Get free offer" /> : undefined} */}
      {isMember && <Button title="Get free offer" />}
    </View>
  );
};

const TouchableExample = () => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('keyboard dismiss');
        Keyboard.dismiss();
      }}
      // style={{ ...styles.container, backgroundColor: 'orange' }}
    >
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {/* <TextInput placeholder="Enter text" /> */}
        <Button title="Regular button" />
        <TouchableOpacity
          style={{ backgroundColor: 'lightgrey', padding: 5, borderRadius: 10 }}
          onPress={() => console.log('Touchable opacity button was pressed')}
          activeOpacity={0.8}
        >
          <Image
            source={require('./assets/icon.png')}
            style={{ width: 20, height: 20 }}
          />
          <Text>Press me</Text>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor="orange"
          onPress={() => console.log('highlight pressed')}
          style={{ backgroundColor: 'yellow' }}
        >
          <View>
            <Image
              source={require('./assets/icon.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text>Press me</Text>
          </View>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          underlayColor="orange"
          onPress={() => console.log('no feedback pressed')}
          style={{ backgroundColor: 'orange' }}
        >
          <Text>Press me</Text>
        </TouchableWithoutFeedback>
        <Pressable
          onPress={() => console.log('pressable')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? 'orange' : 'yellow',
          })}
          hitSlop={{ bottom: 10 }}
        >
          {({ pressed }) =>
            pressed ? <Text>Is pressed</Text> : <Text>Press me</Text>
          }
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ActivityIndicatorExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <View>
      <ActivityIndicator animating={isLoading} size="large" color="blue" />
      <Button title="Toggle" onPress={() => setIsLoading((prev) => !prev)} />
    </View>
  );
};

const createAlert = () => {
  Alert.alert('Alert!', 'This is what went wrong', [
    {
      text: 'Cancel',
      onPress: () => console.log('cancel was pressed'),
    },
    {
      text: 'OK',
      onPress: () => console.log('ok was pressed'),
    },
  ]);
};

const AlertExample = () => {
  return (
    <View>
      <Button title="Display alert" onPress={createAlert} />
    </View>
  );
};

const SwitchComponentExample = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode ? 'black' : 'white',
        width: '100%',
      }}
    >
      <Switch
        value={isDarkMode}
        onValueChange={(value) => {
          console.log('value: ', value);
          setIsDarkMode(value);
        }}
      />
      <Text style={{ color: isDarkMode ? 'white' : 'black', marginTop: 10 }}>
        This is some text
      </Text>
    </View>
  );
};

const ModalExample = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Button title="Display Modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} transparent>
        <View
          style={{ ...styles.container, backgroundColor: 'rgba(1, 1, 1, 0.2)' }}
        >
          <View
            style={{
              ...styles.container,
              backgroundColor: 'yellow',
              flex: 0.5,
              width: '60%',
            }}
          >
            <Text>This is inside a modal</Text>
            <Button title="Hide Modal" onPress={() => setIsVisible(false)} />
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Image
                source={require('./assets/icon.png')}
                style={{ width: 50, height: 50 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ImageBackgroundExample = () => {
  return (
    <ImageBackground
      source={require('./assets/icon.png')}
      style={{
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={require('./assets/favicon.png')} />
      <Text style={{ textAlign: 'center' }}>Text in an image</Text>
    </ImageBackground>
  );
};

const ScrollViewExample = () => {
  return (
    <ScrollView>
      <View style={{ width: 100, height: 300, backgroundColor: 'yellow' }} />
      <View style={{ width: 100, height: 300, backgroundColor: 'orange' }} />
      <View style={{ width: 100, height: 300, backgroundColor: 'grey' }} />
      <View style={{ width: 100, height: 300, backgroundColor: 'blue' }} />
    </ScrollView>
  );
};

const SafeAreaExample = () => {
  return (
    <SafeAreaView
      style={{
        // backgroundColor: Platform.OS === 'ios' ? 'yellow' : 'orange',
        flex: 1,
        paddingTop: 40,
        padding: 100,
        ...Platform.select({
          ios: { backgroundColor: 'yellow' },
          android: { backgroundColor: 'lightblue' },
        }),
      }}
    >
      <Text>Header on Platform: {Platform.OS}</Text>
      {Platform.OS === 'ios' ? (
        <Text>IOS APP!</Text>
      ) : (
        <Text>ANDROID APP!</Text>
      )}
      {Platform.select({
        ios: <Text>IOS APP!</Text>,
        android: <Text>ANDROID APP!</Text>,
        web: <Text>WEB APP!</Text>,
      })}
    </SafeAreaView>
  );
};

const KeyboardAvoidingExample = () => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 100,
        backgroundColor: 'yellow',
      }}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <TextInput placeholder="Enter text" />
      <TextInput placeholder="Enter text" />
      <TextInput placeholder="Enter text" />
    </KeyboardAvoidingView>
  );
};

const FragmentExample = () => {
  return (
    <>
      <View
        style={{
          flex: 0.3,
          backgroundColor: 'yellow',
          width: 200,
          // height: '30%',
        }}
      />
      <Text>Hello</Text>
      <Text>We are in a fragment</Text>
    </>
  );
};

export default function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: 'white' }}>
      <FragmentExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
