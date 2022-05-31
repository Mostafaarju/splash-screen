import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Details() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            resizeMode='cover'
            style={{ flex: 1, height: 300, backgroundColor: '#A259FF' }}
          >
            <Image
              style={{ marginTop: 50 }}
              source={require('../../assets/LOGO.png')}
            />
          </ImageBackground>
          <View style={styles.main}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.mainBox}>
                <Image source={require('../../assets/logo2.png')} />
              </View>
            </View>
            <View style={styles.margin}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.mainText}>Non-Contact Deliveries</Text>
                <Text style={styles.mainTDes}>
                  When placing an order, select the option “Contactless
                  delivery” and the courier will leave your order at the door.
                </Text>
                <Pressable style={styles.btn}>
                  <Text style={styles.btnTexOne}>order now</Text>
                </Pressable>
                <Text style={styles.btnTexTwo}>dismiss</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    flex: 1,
    // backgroundColor: 'light',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  main: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#F6F5F5',
    marginTop: -30,
  },
  mainBox: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2D0C57',
  },
  mainTDes: {
    marginTop: 20,
    color: '#9586A8',
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  margin: {
    marginTop: 10,
  },
  btn: {
    height: 60,
    width: 320,
    borderRadius: 10,
    backgroundColor: '#0BCE83',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnTexOne: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnTexTwo: {
    textTransform: 'uppercase',
    marginTop: 20,
  },
});
