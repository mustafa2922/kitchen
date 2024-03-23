import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import rncStyles from 'rncstyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import MapScreen from '../component/maps';

export default function NewMeasure({navigation}:any) {
  const [selectedState, setSelectedState] = useState('');

  return (
    <>
    <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
      <View >
        <TouchableOpacity onPress={() => navigation.navigate(`profile`)}>
        <Icon name='login' size={40} color='#06bd37'/>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, marginTop: 10, marginBottom: 20, color: 'black' }}>NEW MEASURE</Text>      
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 5, color: 'black' }}>Enter New Client Name</Text>
        <TextInput style={[styles.input, { width: '70%' }]} placeholder="Name" placeholderTextColor="grey"/>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={[styles.input, { width: '50%', marginRight: 10 }]} placeholder="Cell#" placeholderTextColor="grey"/>
        <TextInput style={[styles.input, { width: '48%' }]} placeholder="Email" placeholderTextColor="grey"/>
      </View>
      <View style={styles.hr}/>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 5, color: 'black' }}>Measure address</Text>
        <TextInput style={[styles.input, { width: '100%' }]} placeholder="Street Address" placeholderTextColor="grey"/>
        <TextInput style={[styles.input, { width: '100%', marginTop: 10 }]} placeholder="Street Address 2" placeholderTextColor="grey"/>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={[styles.input, { width: '50%', marginRight: 10, marginBottom: 10 }]} placeholder="City" placeholderTextColor="grey"/>
        <View style={[styles.select,{ width: '48%' }]}>
          <Picker
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
          >
            <Picker.Item label="Select State" value="" color='black'/>
            <Picker.Item label="State 1" value="State 1" color='black'/>
            <Picker.Item label="State 2" value="State 2" color='black'/>
          </Picker>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={[styles.input, { width: '50%', marginBottom:20 }]} placeholder="Postal Code" />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <MapScreen/>
      </View>
      <View style={{flexDirection:'row-reverse',marginBottom:10}}>
      <TouchableOpacity
              onPress={() => navigation.navigate(`MainScreen`) }
              style={[rncStyles.btn, rncStyles.rounded, rncStyles.w30, { backgroundColor: '#06bd37' }]}>
              <Text style={[rncStyles.fs7, rncStyles.textWhite, rncStyles.textCenter]}>Done</Text>
            </TouchableOpacity>
      </View>
    </View>
    </>
  );
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
  },
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
