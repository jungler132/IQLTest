import React from 'react';
import {View, Text, Linking} from 'react-native';

import {styles} from './style';

const RaceProfile = ({route}) => {
  const {params} = route;

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.topLabelContainerStyle}>
        <Text style={styles.topLabelTextStyle}>
          {params.Circuit.circuitName}
        </Text>
      </View>
      <View style={styles.middleLabelContainerStyle}>
        <View style={styles.infoLabelsStyle}>
          <Text style={styles.infoLabelsTextStyle}>Country:</Text>
          <Text style={styles.infoLabelsTextStyle}>
            {params.Circuit.Location.country}
          </Text>
        </View>
        <View style={styles.infoLabelsStyle}>
          <Text style={styles.infoLabelsTextStyle}>Lat:</Text>
          <Text style={styles.infoLabelsTextStyle}>
            {params.Circuit.Location.lat}
          </Text>
        </View>
        <View style={styles.infoLabelsStyle}>
          <Text style={styles.infoLabelsTextStyle}>Locality:</Text>
          <Text style={styles.infoLabelsTextStyle}>
            {params.Circuit.Location.locality}
          </Text>
        </View>
        <View style={styles.infoLabelsStyle}>
          <Text style={styles.infoLabelsTextStyle}>Long:</Text>
          <Text style={styles.infoLabelsTextStyle}>
            {params.Circuit.Location.long}
          </Text>
        </View>
        <View style={styles.infoLabelsStyle}>
          <Text
            onPress={() => Linking.openURL(params.Circuit.url)}
            style={styles.wikiLabelTextStyle}>
            Wiki about race
          </Text>
          <Text style={styles.infoLabelsTextStyle}></Text>
        </View>
        <View style={styles.infoLabelsStyle}>
          <Text style={styles.infoLabelsTextStyle}></Text>
        </View>
        <View style={styles.infoLabelsStyle}></View>
      </View>
    </View>
  );
};
export default RaceProfile;
