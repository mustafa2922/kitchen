import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import rncStyles from 'rncstyles';
import { Picker } from '@react-native-picker/picker';

export default function MeasureStep1Cont() {
  const [selectedState, setSelectedState] = useState('');

  const [interiorWallConstruction, setInteriorWallConstruction] = useState([
    { label: 'Drywall', value: 'drywall' },
    { label: 'Plaster', value: 'plaster' },
    { label: 'Other', value: 'other' },
]);

const [interiorWallCovering, setInteriorWallCovering] = useState([
    { label: 'Paint', value: 'paint' },
    { label: 'Wallpaper', value: 'wallpaper' },
    { label: 'Paneling', value: 'paneling' },
    { label: 'Other', value: 'other' },
]);

const [existingFloorMaterial, setExistingFloorMaterial] = useState([
    { label: 'Wood', value: 'wood' },
    { label: 'Ceramic', value: 'ceramic' },
    { label: 'Vinyl Sheet', value: 'vinylSheet' },
    { label: 'VCT', value: 'vct' },
    { label: 'Vinyl Plank', value: 'vinylPlank' },
    { label: 'Laminate', value: 'laminate' },
    { label: 'Other', value: 'other' },
]);

const [existingBaseCabinetDepth, setExistingBaseCabinetDepth] = useState([
    { label: '24"', value: '24' },
    { label: '18"', value: '18' },
    { label: '15"', value: '15' },
    { label: '12"', value: '12' },
    { label: 'Other', value: 'other' },
]);

const [existingBaseCabinetToeKick, setExistingBaseCabinetToeKick] = useState([
    { label: '3” d x 3.5-4” h', value: '3x35' },
    { label: 'None', value: 'none' },
    { label: 'Other', value: 'other' },
]);

const [floorLevel, setFloorLevel] = useState([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Other', value: 'other' },
]);

const [ceilingLevel, setCeilingLevel] = useState([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Other', value: 'other' },
]);

const [wallsPlumb, setWallsPlumb] = useState([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Other', value: 'other' },
]);

const [wallsSquare, setWallsSquare] = useState([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Other', value: 'other' },
]);


  return (
    <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 15 }]}>
      <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600" , backgroundColor:'lightgrey' , paddingLeft:3 }}>Step 1 Continue</Text>
      <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, color: 'black', fontWeight: "600" }}>Project Detail</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
            <Text style={{ color: 'black' }}>Structure</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Select" value="" color='black'/>
                <Picker.Item label="New" value="new" color='black'/>
                <Picker.Item label="Existing" value="existing" color='black'/>
              </Picker>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'black' }}>Year Build</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }} 
              >               
                  <Picker.Item label='select' value=''  color='black'/>
                  <Picker.Item label='' value=''  color='black'/>
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '50%' }}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
            <Text style={{ color: 'black' }}>Foundation</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Select" value=""  color='black'/>
                <Picker.Item label="Basement" value="basement" color='black' />
                <Picker.Item label="Crawl Space" value="crawlSpace" color='black' />
                <Picker.Item label="Slab" value="slab" color='black' />
                <Picker.Item label="Raised" value="raised" color='black' />
                <Picker.Item label="Other" value="other" color='black' />
              </Picker>
            </View>
          </View>
          {/*  */}
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
            <Text style={{ color: 'black' }}>Exterior Wall Material</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Select" value=""  color='black'/>
                <Picker.Item label="Wood" value="Wood" color='black' />
                <Picker.Item label="Vinyl" value="vinyl" color='black' />
                <Picker.Item label="Brick" value="brick" color='black' />
                <Picker.Item label="Stone" value="stone" color='black' />
                <Picker.Item label="Hard Plank" value="hard plank" color='black' />
                <Picker.Item label="Stucco" value="stucco" color='black' />
                <Picker.Item label="Other" value="other" color='black' />
              </Picker>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'black' }}>Roofing Material</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Select" value=""  color='black'/>
                <Picker.Item label="State 1" value="State 1" color='black' />
                <Picker.Item label="State 2" value="State 2" color='black' />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
            <Text style={{ color: 'black' }}>Electrical Panel Location</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}
              >
                <Picker.Item label="Select" value=""  color='black'/>
                <Picker.Item label="Basement" value="basement" color='black' />
                <Picker.Item label="Garage" value="garage" color='black' />
                <Picker.Item label="Closet" value="closet" color='black' />
                <Picker.Item label="Other" value="other" color='black' />
              </Picker>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'black' }}>Electrical Panel Amperage</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                style={{ width: '100%' }}>
                <Picker.Item label="Select" value="" color='black' />
                <Picker.Item label="225" value="225" color='black' />
                <Picker.Item label="200" value="200" color='black' />
                <Picker.Item label="150" value="150" color='black' />
                <Picker.Item label="100" value="100" color='black' />
                <Picker.Item label="60" value="60" color='black' />
                <Picker.Item label="Other" value="other" color='black' />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
        <Text style={{ fontSize: 20, marginTop: 5,  color: 'black', fontWeight: "600" }}>Photos</Text>
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
        <View style={{paddingBottom:200}}>
          <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
          <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey"
 />
        </View>
      </ScrollView>
    </View>
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
