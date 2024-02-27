import RNPickerSelect from 'react-native-picker-select';

export const InputSelect = () => {
    return(
        <RNPickerSelect
            items={[
                {label: 'Football', value: 'football'}
            ]}
        />
    )
}