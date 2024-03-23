import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  PermissionsAndroid,
} from 'react-native';
import rncStyles from 'rncstyles';
import {Picker} from '@react-native-picker/picker';
import PickerSelect from '../component/picker';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

export default function MeasureStep1() {
  const [selectedState, setSelectedState] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [link, setLink] = useState('');

  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo', quality: 0});
    if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      console.log(uri);
      setLink(uri);
    } else {
      console.log('User closed the image picker without selecting an image.');
    }
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera();
      if (result.assets && result.assets.length > 0) {
        const uri = result.assets[0].uri;
        console.log(uri);
        setLink(uri);
      } else {
        console.log('User closed the Camera without taking an image.');
      }
    } else {
      console.log('User Does not Allow Camera Permission');
    }
  };

  function renderModal() {
    return (
      <Modal visible={openModal} transparent={true}>
        <TouchableOpacity
          onPress={() => {
            setOpenModal(!openModal);
          }}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <Pressable
            style={{width: '100%', backgroundColor: '#fff', height: 100}}>
            <View
              style={{
                flex: 1,
                padding: 20,
                justifyContent: 'center',
                gap: 20,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  openGallery();
                }}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  rncStyles.w40,
                  {backgroundColor: '#06bd37'},
                ]}>
                <Text
                  style={[
                    rncStyles.fs7,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                  ]}>
                  Open Gallery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  openCamera();
                }}
                style={[
                  rncStyles.btn,
                  rncStyles.rounded,
                  rncStyles.w40,
                  {backgroundColor: '#06bd37'},
                ]}>
                <Text
                  style={[
                    rncStyles.fs7,
                    rncStyles.textWhite,
                    rncStyles.textCenter,
                  ]}>
                  Open Camera
                </Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </TouchableOpacity>
      </Modal>
    );
  }

  const [structure, setStructure] = useState([
    {label: 'New', value: 'new'},
    {label: 'Existing', value: 'existing'},
  ]);
  const [foundation, setFoundation] = useState([
    {label: 'Basement', value: 'basement'},
    {label: 'Crawl Space', value: 'crawlSpace'},
    {label: 'Slab', value: 'slab'},
    {label: 'Raised', value: 'raised'},
    {label: 'Other', value: 'other'},
  ]);
  const [electricPanelLocation, setElectricPanelLocation] = useState([
    {label: 'Basement', value: 'basement'},
    {label: 'Garage', value: 'garage'},
    {label: 'Closet', value: 'closet'},
    {label: 'Other', value: 'other'},
  ]);

  const [electricPanelAmperage, setElectricPanelAmperage] = useState([
    {label: '225', value: '225'},
    {label: '200', value: '200'},
    {label: '150', value: '150'},
    {label: '125', value: '125'},
    {label: '100', value: '100'},
    {label: '60', value: '60'},
    {label: 'Other', value: 'other'},
  ]);

  const [exteriorWallMaterial, setExteriorWallMaterial] = useState([
    {label: 'Wood', value: 'wood'},
    {label: 'Vinyl', value: 'vinyl'},
    {label: 'Brick', value: 'brick'},
    {label: 'Stone', value: 'stone'},
    {label: 'Hard Plank', value: 'hardPlank'},
    {label: 'Stucco', value: 'stucco'},
    {label: 'Other', value: 'other'},
  ]);

  const [years, setYears] = useState([]);
  const generateYears = () => {
    const yearsArray = [];
    for (let i = 2000; i <= 2100; i++) {
      yearsArray.push({label: i, value: i});
    }
    return yearsArray;
  };

  useEffect(() => {
    setYears(generateYears());
  }, []);

  return (
    <View
      style={[
        rncStyles.h100,
        {backgroundColor: 'white', paddingHorizontal: 15},
      ]}>
      <Text
        style={{
          fontSize: 15,
          marginTop: 20,
          color: 'black',
          fontWeight: '600',
          backgroundColor: 'lightgrey',
          paddingLeft: 3,
        }}>
        Step 1
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 20,
          color: 'black',
          fontWeight: '600',
        }}>
        Project Detail
      </Text>
      <ScrollView>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Structure</Text>
            <View style={[styles.select]}>
              <PickerSelect
                selectedValue={selectedState}
                onValueChange={(itemValue: any, itemIndex: any) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}
                state={structure}
              />
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Year Build</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                {years.map((x: any, i: any) => (
                  <Picker.Item
                    key={i}
                    label={x.label}
                    value={x.value}
                    color="black"
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '50%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Foundation</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                <Picker.Item label="Select" value="" color="black" />
                <Picker.Item label="Basement" value="basement" color="black" />
                <Picker.Item
                  label="Crawl Space"
                  value="crawlSpace"
                  color="black"
                />
                <Picker.Item label="Slab" value="slab" color="black" />
                <Picker.Item label="Raised" value="raised" color="black" />
                <Picker.Item label="Other" value="other" color="black" />
              </Picker>
            </View>
          </View>
          {/*  */}
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Exterior Wall Material</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                <Picker.Item label="Select" value="" color="black" />
                <Picker.Item label="Wood" value="Wood" color="black" />
                <Picker.Item label="Vinyl" value="vinyl" color="black" />
                <Picker.Item label="Brick" value="brick" color="black" />
                <Picker.Item label="Stone" value="stone" color="black" />
                <Picker.Item
                  label="Hard Plank"
                  value="hard plank"
                  color="black"
                />
                <Picker.Item label="Stucco" value="stucco" color="black" />
                <Picker.Item label="Other" value="other" color="black" />
              </Picker>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Roofing Material</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                <Picker.Item label="Select" value="" color="black" />
                <Picker.Item label="State 1" value="State 1" color="black" />
                <Picker.Item label="State 2" value="State 2" color="black" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{flex: 1, marginRight: 10, marginBottom: 10}}>
            <Text style={{color: 'black'}}>Electrical Panel Location</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                <Picker.Item label="Select" value="" color="black" />
                <Picker.Item label="Basement" value="basement" color="black" />
                <Picker.Item label="Garage" value="garage" color="black" />
                <Picker.Item label="Closet" value="closet" color="black" />
                <Picker.Item label="Other" value="other" color="black" />
              </Picker>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{color: 'black'}}>Electrical Panel Amperage</Text>
            <View style={[styles.select]}>
              <Picker
                selectedValue={selectedState}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedState(itemValue)
                }
                style={{width: '100%'}}>
                <Picker.Item label="Select" value="" color="black" />
                <Picker.Item label="225" value="225" color="black" />
                <Picker.Item label="200" value="200" color="black" />
                <Picker.Item label="150" value="150" color="black" />
                <Picker.Item label="100" value="100" color="black" />
                <Picker.Item label="60" value="60" color="black" />
                <Picker.Item label="Other" value="other" color="black" />
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
            color: 'black',
            fontWeight: '600',
          }}>
          Photos
        </Text>

        {/* Photo Button */}

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setOpenModal(true);
            }}
            style={[
              rncStyles.btn,
              rncStyles.rounded,
              rncStyles.w40,
              {backgroundColor: '#06bd37'},
            ]}>
            <Text
              style={[
                rncStyles.fs7,
                rncStyles.textWhite,
                rncStyles.textCenter,
              ]}>
              Add Photos
            </Text>
          </TouchableOpacity>
          {renderModal()}
        </View>

        <View style={styles.hr} />
        <View style={{paddingBottom: 200}}>
          <Text style={{marginBottom: 5, color: 'black'}}>
            Additional Notes/Comments
          </Text>
          <TextInput
            style={[styles.input, {width: '80%'}]}
            placeholder="Other"
            placeholderTextColor="grey"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
  },
  select: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    width: '100%',
    color: 'black',
  },
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});
