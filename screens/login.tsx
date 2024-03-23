import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native';
import rncStyles from 'rncstyles';
import loginImg from './images/logo.png';

export default function Login({navigation}: any) {
  return (
    <View style={[rncStyles.h100, {backgroundColor: '#06bd37'}]}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={loginImg}
          style={{width: 160, height: 160, borderRadius: 100, marginTop: 10}}
        />
      </View>
      <View style={[rncStyles.p2, rncStyles.justifyContentCenter]}>
        <View style={rncStyles.py1}>
          <Text
            style={[
              rncStyles.fs1,
              rncStyles.textWhite,
              rncStyles.textBold,
              rncStyles.mb1,
            ]}>
            Sign In
          </Text>
          <Text
            style={[
              rncStyles.fs5,
              rncStyles.textSecondary,
              rncStyles.textBold,
            ]}>
            Hello Lets-Measure.
          </Text>
        </View>
        <View>
          <View style={rncStyles.pb1}>
            <Text style={[rncStyles.textWhite, rncStyles.p1]}>Email</Text>
            <TextInput
              style={[
                rncStyles.input,
                rncStyles.bgWhite,
                rncStyles.rounded,
                rncStyles.border1,
                rncStyles.borderWhite,
                rncStyles.textSecondary,
              ]}
              placeholder="example@abc.com"
              placeholderTextColor="grey"
            />
          </View>
          <View style={rncStyles.pb1}>
            <Text style={[rncStyles.textWhite, rncStyles.p1]}>Password</Text>
            <TextInput
              style={[
                rncStyles.input,
                rncStyles.bgWhite,
                rncStyles.rounded,
                rncStyles.border1,
                rncStyles.borderWhite,
                rncStyles.textSecondary,
              ]}
              placeholder="Enter Password atleast 6 characters"
              placeholderTextColor="grey"
            />
          </View>
          <View style={rncStyles.py2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('profile')}
              style={[
                rncStyles.btn,
                rncStyles.rounded,
                {backgroundColor: 'white'},
              ]}>
              <Text
                style={[
                  rncStyles.fs5,
                  rncStyles.textSuccess,
                  rncStyles.textCenter,
                  rncStyles.textBold,
                ]}>
                Login
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
            Not Registered yet?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text
              style={[
                rncStyles.textBold,
                rncStyles.fs5,
                rncStyles.ms1,
                rncStyles.textWhite,
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
