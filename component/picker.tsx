import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';

export default function PickerSelect({
  selectedValue,
  onValueChange,
  style,
  state
}: any) {

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={style}>
            {state.map((x:any , index:any) => (
                <Picker.Item key={index} label={x.label} value={x.value} color="black" />
            ))}
      </Picker>
    </View>
  );
}
