import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import rncStyles from 'rncstyles';

export default function MeasureStep6() {

    return (
        <View style={[rncStyles.h100, { backgroundColor: 'white', paddingHorizontal: 15 }]}>
            <Text style={{ fontSize: 15, marginTop: 20, color: 'black', fontWeight: "600", backgroundColor: 'lightgrey', paddingLeft: 3 }}>Step 6</Text>
            <Text style={{ fontSize: 19, marginTop: 20, marginBottom: 20, color: 'black', fontWeight: "600" }}>Existing Cabinet Layout.<Text style={{color:'#06bd37'}}>(Import design)</Text></Text>
            <ScrollView>
                <View>
                   <Text style={{color:'black' , fontSize:18}}>Upload Photo or File</Text>
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
                <View style={{ marginBottom: 500}}>
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
    hr: {
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
});
