import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import * as Location from 'expo-location';

const GeoLocationAsync = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [address, setAddress] = useState([]);

  useEffect(() => {
    
    const handleSearch = async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // Handle permission not granted
        console.log("status", status);
      }

      else{
        console.log("status======", status);

        let searchText = '1600 Amphitheatre Parkway, Mountain View, CA';
        let geocode = await Location.geocodeAsync(searchText);
        console.log("geocode", geocode);
      }
      // if (searchText) {
      //   try {
      //     let geocode = await Location.geocodeAsync(searchText);
      //     setAddress(geocode);
      //     console.log("address", searchText , await Location.geocodeAsync(searchText));
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    };
    handleSearch();
  }, [searchText]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        // onChangeText={setSearchText}
        value={searchText}
        placeholder="Enter location name"
      />
      {address && address[0] && (
        <>
          <Text>Address: {address[0].name}</Text>
          <Text>City: {address[0].city}</Text>
          <Text>Region: {address[0].region}</Text>
          <Text>Country: {address[0].country}</Text>
        </>
      )}
    </View>
  );
}

export default GeoLocationAsync
