import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';

import {styles} from './style';

import axios from 'axios';

const DriverProfile = ({route}) => {
  const {params} = route;
  const driver = params.MRData.DriverTable.Drivers[0];
  const races = results?.MRData?.RaceTable?.Races;

  const [results, setResults] = useState([]);

  const [year, onChangeYear] = useState('');

  console.log('results 0----->', results);

  console.log('year 0----->', year);

  const showButton = async () => {
    try {
      if (year > 0 && year < 2023) {
        const apiUrl = `http://ergast.com/api/f1/${year}/drivers/${driver.driverId}/results.json`;
        await axios.get(apiUrl).then(resp => {
          const driver = resp.data;
          setResults(driver);
        });
      } else {
        Alert.alert('Error', 'Doesnt Exist', [
          {text: 'Try again', onPress: () => console.log('OK Pressed')},
        ]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const Item = ({races}) => {
    console.log('races inside item --->', races);
    return (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: '#A9A9A9',
            height: 120,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '50%',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Date: 1994-08-28</Text>
            <Text style={{color: 'white', fontSize: 16}}>
              Race name: Belgian Grand Prix
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>Round: 11</Text>
            <Text style={{color: 'white', fontSize: 16}}>Season: 1994</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{color: 'blue', marginLeft: 10, fontSize: 18}}
          onPress={() => Linking.openURL(driver.url)}>
          Wiki about race
        </Text>
        <View style={{width: '100%', height: 3, backgroundColor: 'teal'}} />
      </>
    );
  };

  return (
    <View style={styles.mainViewStyle}>
      <View style={{width: '100%', height: '10%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {driver.familyName} {driver.givenName}
        </Text>
      </View>
      <View style={{width: '100%', height: '40%'}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Date of birth:
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            {driver.dateOfBirth}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Nationality:
          </Text>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            {driver.nationality}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'center',
          }}>
          <Text
            onPress={() => Linking.openURL(driver.url)}
            style={{fontSize: 25, fontWeight: 'bold', color: 'blue'}}>
            Wiki
          </Text>
        </View>
      </View>
      <View style={{width: '100%', height: '50%'}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Race Results
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 20,
            height: 80,
            borderRadius: 30,
          }}>
          <Text
            style={{
              height: 80,
              alignSelf: 'center',
              textAlignVertical: 'center',
              color: 'black',
              fontSize: 18,
            }}>
            Year:
          </Text>
          <TextInput
            style={{color: 'red', fontSize: 18}}
            keyboardType="numeric"
            placeholder="Enter year"
            placeholderTextColor="red"
            onChangeText={onChangeYear}
            onEndEditing={showButton}
          />
        </View>
        {races?.map(item => {
          return <Item races={item} />;
        })}
      </View>
    </View>
  );
};
export default DriverProfile;
