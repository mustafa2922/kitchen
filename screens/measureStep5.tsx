import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import rncStyles from 'rncstyles';
import { Picker } from '@react-native-picker/picker';

export default function MeasureStep5() {
    const [selectedState, setSelectedState] = useState('');

    // Fridge
const [fridgeType, setFridgeType] = useState([
    { label: 'Left Hand Swing', value: 'leftHandSwing' },
    { label: 'Right Hand Swing', value: 'rightHandSwing' },
    { label: 'Double Door', value: 'doubleDoor' },
]);

const [fridgeSize, setFridgeSize] = useState({
    width: [
        { label: '28"', value: '28' },
        { label: '30"', value: '30' },
        { label: '32"', value: '32' },
        { label: '36"', value: '36' },
        { label: '42"', value: '42' },
        { label: '48"', value: '48' },
        { label: '60"', value: '60' },
        { label: '72"', value: '72' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: '48"', value: '48' },
        { label: '60"', value: '60' },
        { label: '62"', value: '62' },
        { label: '64"', value: '64' },
        { label: '65"', value: '65' },
        { label: '66"', value: '66' },
        { label: '67"', value: '67' },
        { label: '68"', value: '68' },
        { label: '69"', value: '69' },
        { label: '70"', value: '70' },
        { label: '71"', value: '71' },
        { label: '72"', value: '72' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '22"', value: '22' },
        { label: '24"', value: '24' },
        { label: '26"', value: '26' },
        { label: '28"', value: '28' },
        { label: '30"', value: '30' },
        { label: '32"', value: '32' },
        { label: '34"', value: '34' },
        { label: 'Other', value: 'other' },
    ],
});

const [fridgeWaterLine, setFridgeWaterLine] = useState([
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
    { label: 'Other', value: 'other' },
]);

const [fridgeBrand, setFridgeBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    { label: 'General Electric (GE)', value: 'ge' },
    { label: 'Hotpoint', value: 'hotpoint' },
    { label: 'Kenmore', value: 'kenmore' },
    { label: 'Kitchen Aid', value: 'kitchenAid' },
    { label: 'LG', value: 'lg' },
    { label: 'MayTag', value: 'maytag' },
    { label: 'Samsung', value: 'samsung' },
    { label: 'Sharp', value: 'sharp' },
    { label: 'Sub-Zero', value: 'subZero' },
    { label: 'Viking', value: 'viking' },
    { label: 'Whirlpool', value: 'whirlpool' },
    { label: 'Other', value: 'other' },
]);

// Range
const [rangeSource, setRangeSource] = useState([
    { label: 'Electric', value: 'electric' },
    { label: 'Gas', value: 'gas' },
    { label: 'Propane', value: 'propane' },
    { label: 'Other', value: 'other' },
]);

const [rangeType, setRangeType] = useState([
    { label: 'Free Standing', value: 'freeStanding' },
    { label: 'Built In', value: 'builtIn' },
    { label: 'Other', value: 'other' },
]);

const [rangeSize, setRangeSize] = useState({
    width: [
        { label: '24"', value: '24' },
        { label: '30"', value: '30' },
        { label: '36"', value: '36' },
        { label: '60"', value: '60' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: '36"', value: '36' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '22"', value: '22' },
        { label: '24"', value: '24' },
        { label: '26"', value: '26' },
        { label: '28"', value: '28' },
        { label: '30"', value: '30' },
        { label: '32"', value: '32' },
        { label: '34"', value: '34' },
        { label: 'Other', value: 'other' },
    ],
});

const [rangeBrand, setRangeBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);
// Dishwasher
const [dishwasherType, setDishwasherType] = useState([
    { label: 'Rolling', value: 'rolling' },
    { label: 'Under Counter', value: 'underCounter' },
    { label: 'Built In', value: 'builtIn' },
    { label: 'Other', value: 'other' },
]);

const [dishwasherSize, setDishwasherSize] = useState({
    width: [
        { label: '18"', value: '18' },
        { label: '24"', value: '24' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: 'Standard', value: 'standard' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: 'Counter Depth', value: 'counterDepth' },
        { label: 'Other', value: 'other' },
    ],
});

const [dishwasherBrand, setDishwasherBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);

// Microwave
const [microwaveType, setMicrowaveType] = useState([
    { label: 'Built-in', value: 'builtIn' },
    { label: 'Countertop', value: 'countertop' },
    { label: 'Over the Range', value: 'overTheRange' },
    { label: 'Other', value: 'other' },
]);

const [microwaveSize, setMicrowaveSize] = useState({
    width: [
        { label: '15"', value: '15' },
        { label: '16"', value: '16' },
        // Add other width options here
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: '10"', value: '10' },
        { label: '11"', value: '11' },
        // Add other height options here
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '10"', value: '10' },
        { label: '11"', value: '11' },
        // Add other depth options here
        { label: 'Other', value: 'other' },
    ],
});

const [microwaveBrand, setMicrowaveBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);

// Exhaust
const [exhaustType, setExhaustType] = useState([
    { label: 'Hood', value: 'hood' },
    { label: 'Microwave Over the Range', value: 'microwaveOverTheRange' },
    { label: 'Down Draft', value: 'downDraft' },
    { label: 'Other', value: 'other' },
]);

const [exhaustInstallation, setExhaustInstallation] = useState([
    { label: 'Carbon Filter', value: 'carbonFilter' },
    { label: 'Vented to Exterior', value: 'ventedToExterior' },
    { label: 'Other', value: 'other' },
]);

// Cooktop
const [cooktopSource, setCooktopSource] = useState([
    { label: 'Electric', value: 'electric' },
    { label: 'Gas', value: 'gas' },
    { label: 'Propane', value: 'propane' },
    { label: 'Other', value: 'other' },
]);

const [cooktopSize, setCooktopSize] = useState({
    width: [
        { label: '15"', value: '15' },
        { label: '16"', value: '16' },
        // Add other width options here
        { label: 'Other', value: 'other' },
    ],
    builtInDowndraft: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
        { label: 'Other', value: 'other' },
    ],
});

const [cooktopBrand, setCooktopBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);
// Disposal
const [disposalSize, setDisposalSize] = useState([
    { label: '1/4hp', value: '1/4hp' },
    { label: '1/3hp', value: '1/3hp' },
    { label: '1/2hp', value: '1/2hp' },
    { label: '3/4hp', value: '3/4hp' },
    { label: 'Other', value: 'other' },
]);

const [disposalBrand, setDisposalBrand] = useState([
    { label: 'American Standard', value: 'americanStandard' },
    { label: 'Bosch', value: 'bosch' },
    { label: 'Evolution', value: 'evolution' },
    { label: 'InSinkErator', value: 'insinkerator' },
    { label: 'Kohler', value: 'kohler' },
    { label: 'Kraus', value: 'kraus' },
    { label: 'Moen', value: 'moen' },
    { label: 'Waste Maid', value: 'wasteMaid' },
    { label: 'Waste King', value: 'wasteKing' },
    { label: 'Other', value: 'other' },
]);

const [disposalElectric, setDisposalElectric] = useState([
    { label: 'Hardware', value: 'hardware' },
    { label: 'Receptacle', value: 'receptacle' },
    { label: 'Other', value: 'other' },
]);

// Compactor
const [compactorSize, setCompactorSize] = useState({
    width: [
        { label: '12” - 15”', value: '12-15' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: 'Under Counter', value: 'underCounter' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '22-27”', value: '22-27' },
        { label: 'Other', value: 'other' },
    ],
});

const [compactorBrand, setCompactorBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);

// Washer
const [washerType, setWasherType] = useState([
    { label: 'Side by Side', value: 'sideBySide' },
    { label: 'Stackable', value: 'stackable' },
    { label: 'Other', value: 'other' },
]);

const [washerLoad, setWasherLoad] = useState([
    { label: 'Top', value: 'top' },
    { label: 'Side', value: 'side' },
    { label: 'Other', value: 'other' },
]);

const [washerSize, setWasherSize] = useState({
    width: [
        { label: '27”', value: '27' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: '39”', value: '39' },
        { label: '42-44”', value: '42-44' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '32-34” deep', value: '32-34' },
        { label: 'Other', value: 'other' },
    ],
});

const [washerBrand, setWasherBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);

// Dryer
const [dryerType, setDryerType] = useState([
    { label: 'Side by Side', value: 'sideBySide' },
    { label: 'Stackable', value: 'stackable' },
    { label: 'Other', value: 'other' },
]);

const [dryerSource, setDryerSource] = useState([
    { label: 'Electric', value: 'electric' },
    { label: 'Gas', value: 'gas' },
    { label: 'Propane', value: 'propane' },
    { label: 'Other', value: 'other' },
]);

const [dryerSize, setDryerSize] = useState({
    width: [
        { label: '27”', value: '27' },
        { label: 'Other', value: 'other' },
    ],
    height: [
        { label: '39”', value: '39' },
        { label: '42-44”', value: '42-44' },
        { label: 'Other', value: 'other' },
    ],
    depth: [
        { label: '32-34” deep', value: '32-34' },
        { label: 'Other', value: 'other' },
    ],
});

const [dryerBrand, setDryerBrand] = useState([
    { label: 'Bosch', value: 'bosch' },
    { label: 'Frigidaire', value: 'frigidaire' },
    // Add other brand options here
    { label: 'Other', value: 'other' },
]);

    return (
        <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 14 }]}>
            <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600", backgroundColor: 'lightgrey', paddingLeft: 3 }}>Step 5</Text>
            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Appliances<Text style={{color:'grey'}}>(if Keeping or New)</Text></Text>
            <ScrollView>
                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <View style={{ flex: 1, marginRight: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Fridge</Text>
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
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <Text style={{ color: 'black' }}>Range</Text>
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
                        <Text style={{ color: 'black' }}>Dishwasher</Text>
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
                        <Text style={{ color: 'black' }}>Microwave</Text>
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
                        <Text style={{ color: 'black' }}>Exhaust</Text>
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
                        <Text style={{ color: 'black' }}>Cooktop</Text>
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
                        <Text style={{ color: 'black' }}>Wall Oven</Text>
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
                        <Text style={{ color: 'black' }}>Compactor</Text>
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
                        <Text style={{ color: 'black' }}>Washer</Text>
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
                        <Text style={{ color: 'black' }}>Dryer</Text>
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
                <View >
                    <Text style={{ marginBottom: 5, color: 'black' }}>Other</Text>
                    <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey"/>
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
                        >Add Photo's</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hr} />
                <View style={{ marginBottom:100 }}>
                    <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
                    <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey"/>
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
