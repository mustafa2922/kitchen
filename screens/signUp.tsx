import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import rncStyles from 'rncstyles';
import CheckBox from 'react-native-check-box';

export default function SignUp({navigation}: any) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[rncStyles.h100, rncStyles.bgWhite]}>
      <View
        style={[rncStyles.h100, rncStyles.p2, rncStyles.justifyContentCenter]}>
        <View style={rncStyles.py5}>
          <Text
            style={[
              rncStyles.fs1,
              rncStyles.textSecondary,
              rncStyles.textBold,
              rncStyles.mb1,
            ]}>
            Sign Up
          </Text>
        </View>
        <ScrollView>
          <View>
            <View style={rncStyles.pb1}>
              <Text
                style={[
                  rncStyles.textSuccess,
                  rncStyles.p1,
                  rncStyles.textBold,
                ]}>
                Email
              </Text>
              <TextInput
                keyboardType="email-address"
                style={[
                  rncStyles.input,
                  rncStyles.bgWhite,
                  rncStyles.rounded,
                  rncStyles.border1,
                  rncStyles.borderSuccess,
                  rncStyles.textSecondary,
                ]}
                placeholder="example@abc.com"
                placeholderTextColor="grey"
              />
            </View>
            <View style={rncStyles.pb1}>
              <Text
                style={[
                  rncStyles.textSuccess,
                  rncStyles.p1,
                  rncStyles.textBold,
                ]}>
                Password
              </Text>
              <TextInput
                secureTextEntry={true}
                style={[
                  rncStyles.input,
                  rncStyles.bgWhite,
                  rncStyles.rounded,
                  rncStyles.border1,
                  rncStyles.borderSuccess,
                  rncStyles.textSecondary,
                ]}
                placeholder="Enter Password atleast 6 characters"
                placeholderTextColor="grey"
              />
            </View>
            <View
              style={[
                rncStyles.flexRow,
                rncStyles.alignItemsCenter,
                rncStyles.m2,
                rncStyles.w75,
              ]}>
              <CheckBox
                style={{marginRight: 10}}
                onClick={() => {
                  setIsChecked(!isChecked);
                }}
                isChecked={isChecked}
              />
              <Text style={{color: 'black'}}>
                I agree to the{' '}
                <Text style={[rncStyles.textSuccess, rncStyles.textBold]}>
                  Terms of Services
                </Text>{' '}
                and{' '}
                <Text style={[rncStyles.textSuccess, rncStyles.textBold]}>
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>
            <View style={rncStyles.py2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                style={[rncStyles.btnSuccess, rncStyles.rounded]}>
                <Text
                  style={[
                    rncStyles.fs5,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                    rncStyles.textBold,
                  ]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              rncStyles.py2,
              rncStyles.flexRow,
              rncStyles.justifyContentCenter,
            ]}>
            <Text
              style={[
                rncStyles.textBold,
                rncStyles.textSecondary,
                rncStyles.fs5,
              ]}>
              Have an Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text
                style={[
                  rncStyles.textBold,
                  rncStyles.fs5,
                  rncStyles.ms1,
                  rncStyles.textSuccess,
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
