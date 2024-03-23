import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import rncStyles from 'rncstyles';
import { Picker } from '@react-native-picker/picker';

export default function MeasureStep3Cont() {
    const [selectedState, setSelectedState] = useState('');

    const [location, setLocation] = useState([
        { label: 'Main Sink', value: 'mainSink' },
        { label: 'Bar Sink', value: 'barSink' },
        { label: 'Pot Filler', value: 'potFiller' },
        { label: 'Sink 2', value: 'sink2' },
        { label: 'Sink 3', value: 'sink3' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [waterSupplyType, setWaterSupplyType] = useState([
        { label: 'Copper', value: 'copper' },
        { label: 'CPVC', value: 'cpvc' },
        { label: 'Galvanized', value: 'galvanized' },
        { label: 'PEX', value: 'pex' },
        { label: 'Polyethylene', value: 'polyethylene' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [waterSupplySize, setWaterSupplySize] = useState([
        { label: '1/2"', value: '1/2' },
        { label: '3/4"', value: '3/4' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [drainType, setDrainType] = useState([
        { label: 'ABS (Black)', value: 'absBlack' },
        { label: 'Cast Iron', value: 'castIron' },
        { label: 'Copper', value: 'copper' },
        { label: 'Galvanized', value: 'galvanized' },
        { label: 'Drain Waste Vent (DWV)', value: 'dwv' },
        { label: 'Schedule 40', value: 'schedule40' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [drainSize, setDrainSize] = useState([
        { label: '1-1/4"', value: '1-1/4' },
        { label: '1-1/2"', value: '1-1/2' },
        { label: '3"', value: '3' },
        { label: '4"', value: '4' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [sinkDepth, setSinkDepth] = useState([
        { label: '6"', value: '6' },
        { label: '8"', value: '8' },
        { label: '10"', value: '10' },
        { label: '12"', value: '12' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [sinkBaseWidth, setSinkBaseWidth] = useState([
        { label: '12"', value: '12' },
        { label: '18"', value: '18' },
        { label: '24"', value: '24' },
        { label: '30"', value: '30' },
        { label: '33"', value: '33' },
        { label: '36"', value: '36' },
        { label: '48"', value: '48' },
        { label: 'Custom', value: 'custom' },
        { label: 'Other', value: 'other' },
    ]);
    
    const [existingDisposal, setExistingDisposal] = useState([
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Other', value: 'other' },
    ]);
    

    return (
        <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
            <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600", backgroundColor: 'lightgrey', paddingLeft: 3 }}>Step 3 Continue</Text>
            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Plumbing Supply Lines</Text>
            <ScrollView>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Location</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                    {/*  */}
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Water Supply Type</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black' }}>Water Supply Size</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }} // Set the width of the Picker to 100% of its container
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                                {/* Add more states as needed */}
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Drain Type</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black' }}>Drain Size</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Sink Depth</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black' }}>Max Undermount Height</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}>
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Sink Base Width</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}
                            >
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black' }}>Existing Disposal</Text>
                        <View style={[styles.select]}>
                            <Picker
                                selectedValue={selectedState}
                                onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
                                style={{ width: '100%' }}>
                                <Picker.Item label="Select" value="" color='black'/>
                                <Picker.Item label="State 1" value="State 1" color='black'/>
                                <Picker.Item label="State 2" value="State 2" color='black'/>
                            </Picker>
                        </View>
                    </View>
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
                <View style={{ marginBottom: 120 }}>
                    <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
                    <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other"placeholderTextColor="grey" />
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
