import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper'
import { SearchBar } from 'react-native-elements';

const GeoLocation = ({ navigation }) => {

const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    // fetch('https://geo.p.rapidapi.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
        //   backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <View style={{ flex: 4 }}>
                    <SearchBar
                        round
                        showCancel
                        lightTheme
                        cancelIcon
                        clearIcon
                        containerStyle={{backgroundColor: 'white', border: 'none !important',}}
                        inputContainerStyle={{backgroundColor:'#dcdcdc'}}
                        inputStyle={{border: 'none', color: 'black', fontSize: 17}}
                        placeholderTextColor='blcak'
                        searchIcon={{ size: 24, color: 'black', fontWeight: 600, }}
                        onChangeText={(text) => searchFilterFunction(text)}
                        onClear={(text) => searchFilterFunction('')}
                        placeholder="Type Here..."
                        value={search}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button 
                        style={{fontSize: 17}} 
                        onPress={() => navigation.navigate('newPost')}>Cancel</Button>
                </View>
            </View>
           
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
        </View>
  </SafeAreaView>
  )
}

export default GeoLocation

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      border: 'none'
    },
    searchBar: {
        flexDirection: 'row', 
        backgroundColor: 'white', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        paddingBottom: 15,
        marginTop: 40, 
        border: 'none'
    },
    itemStyle: {
      padding: 10,
    },
   
  });
  