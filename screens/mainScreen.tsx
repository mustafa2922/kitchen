import React, {useState} from 'react';
import {
  Text,
  Pressable,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '../component/progressBar';
import MeasureStep1 from './measureStep1';
import MeasureStep2 from './measureStep2';
import MeasureStep3 from './measureStep3';
import MeasureStep3Cont from './measureStep3Cont';
import MeasureStep3Cont2 from './measureStep3Cont2';
import MeasureStep4 from './measureStep4';
import MeasureStep4Cont from './measureStep4Cont';
import MeasureStep5 from './measureStep5';
import MeasureStep6 from './measureStep6';
import MeasureStep1Cont from './measureStep1Cont';

export default function MainScreen({navigation}: any) {
  const [data, setdata] = useState({});

  const [screen, setScreen] = useState(0);

  const handleBackPress = () => {
    console.log('Back button pressed. Current screen:', screen);
    setScreen(currScreen => currScreen - 1);
  };

  const handleNextPress = () => {
    console.log('Next button pressed. Current screen:', screen);
    setScreen(currScreen => currScreen + 1);
  };
  const screenHandle = () => {
    if (screen == 0) {
      return <MeasureStep1 />;
    } else if (screen == 1) {
      return <MeasureStep1Cont />;
    } else if (screen == 2) {
      return <MeasureStep2 />;
    } else if (screen == 3) {
      return <MeasureStep3 />;
    } else if (screen == 4) {
      return <MeasureStep3Cont />;
    } else if (screen == 5) {
      return <MeasureStep3Cont2 />;
    } else if (screen == 6) {
      return <MeasureStep4 />;
    } else if (screen == 7) {
      return <MeasureStep4Cont />;
    } else if (screen == 8) {
      return <MeasureStep5 />;
    } else if (screen == 9) {
      return <MeasureStep6 />;
    }
  };

  return (
    <ScrollView>
      <View>
        <ProgressBar screen={screen} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          {screen == 0 ? (
            <Pressable onPress={() => navigation.navigate(`newMeasure`)}>
              <Text style={{color: '#06bd37', fontSize: 20}}>Back</Text>
            </Pressable>
          ) : (
            <Pressable disabled={screen == 0} onPress={handleBackPress}>
              <Text style={{color: '#06bd37', fontSize: 20}}>Back</Text>
            </Pressable>
          )}
          <Pressable disabled={screen == 9} onPress={handleNextPress}>
            {screen == 9 ? (
              <TouchableOpacity
                onPress={() => navigation.navigate(`saveMeasure`)}>
                <Text style={{color: '#06bd37', fontSize: 20}}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{color: '#06bd37', fontSize: 20}}>Next</Text>
            )}
          </Pressable>
        </View>
        <View>{screenHandle()}</View>
      </View>
    </ScrollView>
  );
}
