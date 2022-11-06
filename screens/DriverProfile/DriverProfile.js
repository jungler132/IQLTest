import React, {useState} from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import {styles} from './style';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getDriversRacesData} from '../../saga/selectors';
import {getDriverProfileData} from './saga/action';

const DriverProfile = ({route}) => {
  const {params} = route;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const driver = params[0];

  const [year, onChangeYear] = useState('');

  const data = useSelector(getDriversRacesData);

  const showButton = async () => {
    dispatch(getDriverProfileData({driverId: driver.driverId, year: year}));
  };

  const Item = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate('RaceProfile', item)}
          style={styles.raceInfoContainer}>
          <View style={styles.infoLabelsContainer}>
            <Text style={styles.textStyle}>Date: {item.date}</Text>
            <Text style={styles.textStyle}>Race name: {item.raceName}</Text>
          </View>
          <View style={styles.infoLabelsContainer}>
            <Text style={styles.textStyle}>Round: {item.round}</Text>
            <Text style={styles.textStyle}>Season: {item.season}</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={styles.wikiLabelStyle}
          onPress={() => Linking.openURL(item.url)}>
          Wiki about race
        </Text>
        <View style={styles.emptyBlock} />
      </>
    );
  };

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.topLabelBlock}>
        <Text style={styles.profileTopLabel}>
          {driver.familyName} {driver.givenName}
        </Text>
      </View>
      <View style={styles.infoBlockStyle}>
        <View style={styles.labelsBlockStyle}>
          <Text style={styles.labelTextStyle}>Date of birth:</Text>
          <Text style={styles.labelTextStyle}>{driver.dateOfBirth}</Text>
        </View>
        <View style={styles.labelsBlockStyle}>
          <Text style={styles.labelTextStyle}>Nationality:</Text>
          <Text style={styles.labelTextStyle}>{driver.nationality}</Text>
        </View>
        <View style={styles.labelsBlockStyle}>
          <Text
            onPress={() => Linking.openURL(driver.url)}
            style={styles.wikiTextStyle}>
            Wiki
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainerStyle}>
        <Text style={styles.raceResultsLabelStyle}>Race Results</Text>
        <View style={styles.textInputBlockStyle}>
          <Text style={styles.yearLabelStyle}>Year:</Text>
          <TextInput
            style={styles.textInputStyle}
            keyboardType="numeric"
            placeholder="Enter year"
            placeholderTextColor="red"
            onChangeText={onChangeYear}
            onEndEditing={showButton}
          />
        </View>
        {Array.isArray(data) ? (
          <ScrollView>
            {data?.map(item => {
              return <Item item={item} />;
            })}
          </ScrollView>
        ) : (
          <Text style={styles.resultsLabelStyle}>
            {typeof data === 'string' && data}
          </Text>
        )}
      </View>
    </View>
  );
};
export default DriverProfile;
