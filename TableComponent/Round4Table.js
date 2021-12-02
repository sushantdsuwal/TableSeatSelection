import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Rect, G, Defs, Circle} from 'react-native-svg';
const defaultColor = '#B6B4B4';

export default function Round4Table() {
  return (
    <View style={styles.container}>
      <Svg
        width="200"
        height="200"
        viewBox="0 0 48.079753 47.806851"
        version="1.1"
        fill="#dfdfdf"
        id="svg5">
        <Defs id="defs2" />
        <G id="layer1" transform="translate(-57.596486,-99.75206)">
          <Rect
            id="rect77"
            width="22.324219"
            height="13.229167"
            x="70.486656"
            y="99.75206"
            ry="3.6747684"
            fill={defaultColor}
            onPress={() => alert('hello')}
          />
          <Rect
            id="rect311"
            width="22.324219"
            height="13.229167"
            x="70.486656"
            y="134.32974"
            ry="3.6747684"
            fill={defaultColor}
          />
          <Rect
            id="rect320"
            width="22.324219"
            height="13.229167"
            x="112.44791"
            y="-70.825653"
            ry="3.6747684"
            transform="rotate(90)"
            fill={defaultColor}
          />
          <Rect
            id="rect446"
            width="22.324219"
            height="13.229167"
            x="112.44791"
            y="-105.67624"
            ry="3.6747684"
            transform="rotate(90)"
            fill={defaultColor}
          />
          <Circle
            id="path53"
            cx="81.648766"
            cy="123.61002"
            r="21.910807"
            fill={'#C4C4C4'}
          />
        </G>
      </Svg>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>No.2</Text>
        <Text>reserver</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 500,
    // width: 500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
});
