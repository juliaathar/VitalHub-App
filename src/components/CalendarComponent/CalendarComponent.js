import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],

    monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov.', 'Dez'],

    dayNames: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],

    dayNamesShort: ['Seg', 'Ter', 'Qua.', 'Quin', 'Sex', 'Sab', 'Dom'],
};


export const CalendarComponent = () => {

    const [selected, setSelected] = useState('')

    return (
        <Calendar
        style={{
            width: 318,
            backgroundColor: 'transparent'
        }}
        onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
        />
    )

    
}