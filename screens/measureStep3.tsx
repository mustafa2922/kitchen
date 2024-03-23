import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import rncStyles from 'rncstyles';
import proImg from './images/step3.png';

interface RowData {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
}

export default function MeasureStep3() {
  const [rowCount, setRowCount] = useState<number>(3);
  const [rowData, setRowData] = useState<RowData[]>(Array.from({ length: rowCount }, () => ({ field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '' })));

  const addRow = () => {
    setRowCount(rowCount + 1);
    setRowData([...rowData, { field1: '', field2: '', field3: '', field4: '', field5: '', field6: '', field7: '' }]);
  };

  const handleFieldChange = ({ text, rowIndex, fieldName }: { text: string; rowIndex: number; fieldName: keyof RowData }) => {
    const updatedRowData = [...rowData];
    updatedRowData[rowIndex][fieldName] = text;
    setRowData(updatedRowData);
  };

  return (
    <>
      <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 20 }]}>
        <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600", backgroundColor: 'lightgrey', paddingLeft: 3 }}>Step 3</Text>
        <Text style={{ fontSize: 20, marginTop: 10, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Gas Line Locations</Text>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.column}></View>
              <View style={styles.column}><Text style={styles.cellText}>A</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>B</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>C</Text></View>
              <View style={styles.column}><Text style={styles.cellText}>D</Text></View>
            </View>
            {rowData.map((row, index) => (
              <View style={styles.row} key={index}>
                <View style={styles.column}><Text style={styles.cellText}>{index + 1}</Text></View>
                <View style={styles.column}><TextInput style={styles.input} value={row.field1} onChangeText={(text) => handleFieldChange({ text, rowIndex: index, fieldName: 'field1' })} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={row.field2} onChangeText={(text) => handleFieldChange({ text, rowIndex: index, fieldName: 'field2' })} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={row.field3} onChangeText={(text) => handleFieldChange({ text, rowIndex: index, fieldName: 'field3' })} keyboardType="number-pad" maxLength={3} /></View>
                <View style={styles.column}><TextInput style={styles.input} value={row.field4} onChangeText={(text) => handleFieldChange({ text, rowIndex: index, fieldName: 'field4' })} keyboardType="number-pad" maxLength={3} /></View>
              </View>
            ))}
          </View>
          <View style={rncStyles.flexCenter}>
            <Image resizeMode='contain' style={{ width: 400, height: 250 }} source={proImg} />
          </View>
          <View style={styles.hr} />
          <Text style={{ fontSize: 20, marginTop: 5, color: 'black', fontWeight: "600" }}>Photos</Text>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <TouchableOpacity
              onPress={addRow}
              style={[rncStyles.btn, rncStyles.rounded, rncStyles.w40, { backgroundColor: '#06bd37' }]}>
              <Text style={[rncStyles.fs7, rncStyles.textWhite, rncStyles.textCenter]}>Add Photo's</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.hr} />
          <View style={{ marginBottom: 100 }}>
            <Text style={{ marginBottom: 5, color: 'black' }}>Additional Notes/Comments</Text>
            <TextInput style={[styles.input, { width: '80%' }]} placeholder="Other" placeholderTextColor="grey"/>
          </View>
        </ScrollView>
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
  hr: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
  },
  tableColumn: {
    backgroundColor: 'lightgrey',
    height: '100%',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    color: 'black'
  },
  cellText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black'
  }
});
