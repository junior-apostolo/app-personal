import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { colors } from '@/theme/colors'; // Certifique-se de que seu arquivo de cores tem 'green_100' e 'bg_color'
import moment from 'moment';

// Configuração de idioma do calendário
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
};
LocaleConfig.defaultLocale = 'pt-br';

interface CalendarProps {
  selectedDays: string[];
  setDaySelect: React.Dispatch<React.SetStateAction<string>>
}

export const CustomCalendar: React.FC<CalendarProps> = ({ selectedDays, setDaySelect }) => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [month, setMonth] = useState(moment().month() + 1);
  const [year, setYear] = useState(moment().year());
  const markedDates = selectedDays.reduce((acc: any, day: string) => {
    acc[day] = { selected: true, selectedColor: colors.green_100 };
    return acc;
  }, {});

  // Adicionar o dia de hoje
  markedDates[selectedDate] = { selected: true, selectedColor: colors.bg_color };

  return (
    <View style={styles.container}>
      <Calendar
        current={`${year}-${month.toString().padStart(2, '0')}-01`}
        markedDates={markedDates}
        onDayPress={(day) => {
            setSelectedDate(day.dateString)
            setDaySelect(day.dateString)
        }}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: colors.green_100, // Itens selecionados em verde claro
          selectedDayTextColor: 'black', // Texto dos dias selecionados em preto
          todayBackgroundColor: colors.bg_color, // Cor de fundo do dia atual
          todayTextColor: 'white', // Texto do dia atual em preto
          arrowColor: 'white',
          monthTextColor: 'white',
          textSectionTitleColor: 'white',  // Dias da semana em branco
          backgroundColor: colors.blue_750,
          calendarBackground: colors.blue_750,
          dayTextColor: 'white', // Cor da fonte dos dias não selecionados
          textDisabledColor: 'grey',
        }}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 10,
  },
  calendar: {
    borderRadius: 20, // Arredondamento mais visível
    overflow: 'hidden',
    height: 300,
    aspectRatio: 1.2,
    paddingBottom: 20,
  },
});
