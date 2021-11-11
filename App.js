import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

const defaultColor = '#B6B4B4';
const reservedColor = 'red';

export default function App() {
  const [tableSize] = useState(312);

  const [state, setState] = useState({
    s1: false,
    s2: false,
    s3: false,
    s4: false,
    s5: false,
    s6: false,
    s7: false,
    s8: false,
  });

  const onChangeTableStatus = seatNumber => {
    setState(prevState => ({
      ...prevState,
      [seatNumber]: !prevState[seatNumber],
    }));
  };

  const checkSeatStatus = seatNumber => {
    return state[seatNumber] ? reservedColor : defaultColor;
  };

  return (
    <View style={styles.container}>
      <Svg
        width={tableSize}
        height={tableSize}
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          onPress={() => onChangeTableStatus('s1')}
          d="M37.375 8C37.375 3.58172 40.9567 0 45.375 0H58.625C63.0433 0 66.625 3.58172 66.625 8V9.75H37.375V8Z"
          fill={checkSeatStatus('s1')}
        />
        <Path
          onPress={() => onChangeTableStatus('s5')}
          d="M37.375 96C37.375 100.418 40.9567 104 45.375 104H58.625C63.0433 104 66.625 100.418 66.625 96V94.25H37.375V96Z"
          fill={checkSeatStatus('s5')}
        />
        <Path
          onPress={() => onChangeTableStatus('s8')}
          d="M31.215 10.5319C28.0908 7.40766 23.0254 7.40766 19.9013 10.5319L10.5321 19.901C7.40789 23.0252 7.40789 28.0905 10.5321 31.2147L11.7695 32.4522L32.4524 11.7693L31.215 10.5319Z"
          fill={checkSeatStatus('s8')}
        />
        <Path
          onPress={() => onChangeTableStatus('s6')}
          d="M31.215 93.4213C28.0908 96.5455 23.0254 96.5455 19.9013 93.4213L10.5321 84.0521C7.40789 80.9279 7.40789 75.8626 10.5321 72.7384L11.7695 71.501L32.4524 92.1838L31.215 93.4213Z"
          fill={checkSeatStatus('s6')}
        />
        <Path
          onPress={() => onChangeTableStatus('s2')}
          d="M94.2328 31.2154C97.357 28.0913 97.357 23.0259 94.2328 19.9017L84.8636 10.5326C81.7394 7.40838 76.6741 7.40838 73.5499 10.5326L72.3125 11.77L92.9954 32.4529L94.2328 31.2154Z"
          fill={checkSeatStatus('s2')}
        />
        <Path
          onPress={() => onChangeTableStatus('s4')}
          d="M93.4203 72.7377C96.5445 75.8619 96.5445 80.9272 93.4203 84.0514L84.0511 93.4206C80.9269 96.5447 75.8616 96.5447 72.7374 93.4206L71.5 92.1831L92.1829 71.5002L93.4203 72.7377Z"
          fill={checkSeatStatus('s4')}
        />
        <Path
          onPress={() => onChangeTableStatus('s3')}
          d="M96 66.625C100.418 66.625 104 63.0433 104 58.625V45.375C104 40.9567 100.418 37.375 96 37.375H94.25V66.625H96Z"
          fill={checkSeatStatus('s3')}
        />
        <Path
          onPress={() => onChangeTableStatus('s7')}
          d="M8 66.625C3.58172 66.625 0 63.0433 0 58.625L0 45.375C0 40.9567 3.58172 37.375 8 37.375H9.75L9.75 66.625H8Z"
          fill={checkSeatStatus('s7')}
        />
        <Circle
          cx="52"
          cy="52"
          r="48.75"
          fill={
            Object.values(state).every(item => item === true)
              ? '#FF7F7F'
              : '#C4C4C4'
          }
        />
        {/* <Path
          d="M49.5507 55.4277C49.7225 55.4277 49.8885 55.416 50.0487 55.3926C50.2089 55.3652 50.3358 55.3379 50.4296 55.3105V56.0547C50.3241 56.1055 50.1678 56.1465 49.9608 56.1777C49.7577 56.2129 49.5741 56.2305 49.41 56.2305C48.1678 56.2305 47.5468 55.5762 47.5468 54.2676V50.4473H46.6268V49.9785L47.5468 49.5742L47.9569 48.2031H48.5194V49.6914H50.3827V50.4473H48.5194V54.2266C48.5194 54.6133 48.6112 54.9102 48.7948 55.1172C48.9784 55.3242 49.2303 55.4277 49.5507 55.4277ZM56.9042 56.1133H51.2733V55.2754L53.5292 53.0078C54.2167 52.3125 54.6698 51.8164 54.8885 51.5195C55.1073 51.2227 55.2714 50.9336 55.3807 50.6523C55.4901 50.3711 55.5448 50.0684 55.5448 49.7441C55.5448 49.2871 55.4061 48.9258 55.1288 48.6602C54.8514 48.3906 54.4667 48.2559 53.9745 48.2559C53.619 48.2559 53.2811 48.3145 52.9608 48.4316C52.6444 48.5488 52.2909 48.7617 51.9003 49.0703L51.3846 48.4082C52.1737 47.752 53.0331 47.4238 53.9628 47.4238C54.7675 47.4238 55.3983 47.6309 55.8553 48.0449C56.3124 48.4551 56.5409 49.0078 56.5409 49.7031C56.5409 50.2461 56.3885 50.7832 56.0839 51.3145C55.7792 51.8457 55.2089 52.5176 54.3729 53.3301L52.4979 55.1641V55.2109H56.9042V56.1133Z"
          fill="black"
        /> */}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
