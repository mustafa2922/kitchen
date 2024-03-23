import { useState } from 'react';
import {
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
    width: 370,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function MapScreen() {

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const accessLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(()=>{},()=>{},{});
    } else {
      console.log('User Does not Allow Accessing Position ');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            accessLocation();
          }}
          style={{
            zIndex: 10,
            padding: 2,
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '#fff',
            borderRadius: 3,
          }}>
          <Text style={{color: '#000'}}> Get Current Location </Text>
        </TouchableOpacity>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        showsUserLocation={true}></MapView>
    </View>
  );
}
