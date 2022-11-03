import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  FlatList,
} from 'react-native';

import axios from 'axios';

import {styles} from './style';

import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  const [formulaData, setFormulaData] = useState();

  const navigation = useNavigation();

  console.log('formulda data --->', formulaData);

  const doRequest = async () => {
    try {
      const apiUrl = 'http://ergast.com/api/f1/drivers.json?limit=5';
      await axios.get(apiUrl).then(resp => {
        const allRaces = resp.data;
        setFormulaData(allRaces.MRData.DriverTable);
      });
    } catch {
      console.log('ERROR WITH GETTING DATA');
    }
  };

  const toProfile = async driverId => {
    try {
      const apiUrl = `http://ergast.com/api/f1/drivers/${driverId}.json`;
      await axios.get(apiUrl).then(resp => {
        const driver = resp.data;
        navigation.navigate('DriverProfile', driver);
      });
    } catch {
      console.log('ERROR WITH GETTING DATA');
    }
  };

  const renderItem = item => {
    return <Item driver={item.item} />;
  };

  const Item = ({driver}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => toProfile(driver?.driverId)}
          style={styles.mainViewStyle}>
          <View style={styles.infoBlockStyle}>
            <Text style={styles.infoTextStyle}>
              Date of birth: {driver?.dateOfBirth}
            </Text>
            <Text style={styles.infoTextStyle}>
              Nationality: {driver?.nationality}
            </Text>
          </View>
          <View style={styles.infoBlockStyle}>
            <Text style={styles.infoTextStyle}>
              Family name: {driver?.familyName}
            </Text>
            <View>
              <Text style={styles.infoTextStyle}>
                Given Name: {driver?.givenName}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={styles.wikiTextStyle}
          onPress={() => Linking.openURL(driver?.url)}>
          Info about driver in wikipedia
        </Text>
        <View style={styles.separatorStyle} />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <Text style={styles.titleStyle}>Drivers</Text>
      <TouchableOpacity onPress={doRequest} style={styles.requestButtonStyle}>
        <Text style={styles.requestTextStyle}>Get data</Text>
      </TouchableOpacity>
      <FlatList
        data={formulaData?.Drivers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{width: '90%'}}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
