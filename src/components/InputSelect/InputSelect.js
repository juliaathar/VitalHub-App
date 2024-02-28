import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons'

export const InputSelect = () => {
    return (
        <RNPickerSelect
            placeholder={{
                label: "Selecionar horário",
                value: null,
                color: '#34898F'
            }}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
                return <AntDesign
                    style={{ padding: 16 }}
                    name='caretdown'
                    size={20}
                    color='#34898F'
                />
            }}
            items= {[
                { label: '16h30m', value: 'hour1' },
                { label: '12h', value: 'hour2' },
                { label: '08h30m', value: 'hour3' }
            ]}
        />
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 350,
        height: 53,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
    },
    inputAndroid: {
        width: 350,
        height: 53,
        borderColor: '#60BFC5',
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'MontserratAlternates_600SemiBold',
        fontSize: 14,
        padding: 16,
    }
});