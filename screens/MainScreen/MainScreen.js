import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Linking,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {styles} from './style';

import {useNavigation} from '@react-navigation/native';
import ArrowForward from '../../assets/svg/forwardSVG';
import ArrowBack from '../../assets/svg/backSVG';
import {getDriversData} from '../../saga/selectors';
import {getDriversMainScreen} from './saga/action';
import {useDispatch, useSelector} from 'react-redux';
import {toProfileRequest} from '../../services/api/toProfile';

const MainScreen = () => {
  const [page, setPage] = useState(0);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const data = useSelector(getDriversData);

  useEffect(() => {
    dispatch(getDriversMainScreen(page));
  }, [page]);

  const pageForward = () => {
    setPage(page + 1);
  };

  const pageBack = () => {
    setPage(page - 1);
  };

  const toProfile = async driverId => {
    const driver = await toProfileRequest(driverId);
    navigation.navigate('DriverProfile', driver);
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
      {Object.keys(data).length === 0 ? (
        <View style={styles.indicatorStyle}>
          <ActivityIndicator size="large" color="#A9A9A9" />
        </View>
      ) : (
        <>
          <Text style={styles.titleStyle}>Drivers</Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              disabled={page < 1}
              onPress={pageBack}
              style={styles.arrowContainerLeft}>
              {page > 0 && <ArrowBack />}
            </TouchableOpacity>
            <View style={styles.pageContainer}>
              <Text style={styles.pageTextStyle}>{page + 1}</Text>
            </View>
            <TouchableOpacity
              onPress={pageForward}
              style={styles.arrowContainerRight}>
              <ArrowForward />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data?.Drivers}
            renderItem={renderItem}
            style={styles.flatListStyle}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default MainScreen;
