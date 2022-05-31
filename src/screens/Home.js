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

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/Media.png')}
            resizeMode='cover'
            style={{ flex: 1, height: 300 }}
          ></ImageBackground>
          <View style={styles.main}>
            <View>
              <Text style={styles.mainText}>Boston Lettuce</Text>
            </View>
            <View style={styles.price}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#2D0C57',
                }}
              >
                1.10
              </Text>
              <Text style={{ color: '#9586A8', paddingLeft: 4 }}>
                € / piece
              </Text>
            </View>
            <View style={styles.margin}>
              <Text style={{ color: '#06BE77' }}>~ 150 gr / piece</Text>
            </View>
            <View style={styles.margin}>
              <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 20 }}>
                Spain
              </Text>
              <Text
                style={{ lineHeight: 18, paddingTop: 20, color: '#9586A8' }}
              >
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </Text>
              <View
                style={{
                  marginTop: 60,
                  paddingBottom: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <View style={styles.besideBtn}>
                  <Image source={require('../../assets/Vector.png')} />
                </View>
                <Pressable
                  onPress={() => navigation.navigate('Details')}
                  style={styles.btn}
                >
                  <Image source={require('../../assets/shopping-cart.png')} />
                  <Text
                    style={{
                      textTransform: 'uppercase',
                      color: 'white',
                      paddingLeft: 15,
                      fontWeight: '700',
                    }}
                  >
                    add to cart
                  </Text>
                </Pressable>
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
  mainText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 20,
    letterSpacing: 1,
    color: '#2D0C57',
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  margin: {
    marginLeft: 20,
    marginTop: 10,
  },
  besideBtn: {
    height: 50,
    width: 70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#D9D0E3',
    borderWidth: 1,
  },
  btn: {
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#0BCE83',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
