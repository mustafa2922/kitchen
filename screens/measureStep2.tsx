import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import rncStyles from 'rncstyles';
import proImg from './images/step1.png'

export default function MeasureStep2() {
  return (
    <>
    <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
        <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600" , backgroundColor:'lightgrey' , paddingLeft:3 }}>Step 2</Text>
       <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Soffit construction</Text>
       <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' }}>A. Soffit Depth</Text>
          <Text>Value</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' }}>B. Soffit Height</Text>
          <Text>Value</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' }}>C. Floor to Soffit Clearance</Text>
          <Text>Value</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, marginBottom: 10, marginLeft: 30, marginRight: 30 }}>
          <Text style={{ color: 'black' }}>D. Ceiling Height</Text>
          <Text>Value</Text>
        </View>
        <View
          style={rncStyles.flexCenter}>
          <Image
            resizeMode='contain'
            style={{ width: 300, height: 250 }}
            source={proImg} />
        </View>
        <View style={styles.hr} />
        <Text style={{ fontSize: 20, marginTop: 5, color: 'black', fontWeight: "600" }}>Photos</Text>
        <View
          style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <TouchableOpacity
            style={[
              rncStyles.btn,
              rncStyles.rounded,
              rncStyles.w40,
              { backgroundColor: '#06bd37' }]}>
            <Text
              style={[
                rncStyles.fs7,
                rncStyles.textWhite,
                rncStyles.textCenter
              ]}
            >Add Photos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.hr} />
        <View style={{marginBottom:100}}>
          <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
          <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey" />
        </View>
       </ScrollView>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      color:'black',
    },
    select: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 5,
      width: '100%',
      color:'black'
    },
    hr: {
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
      marginVertical: 20,
    },
  });