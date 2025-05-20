import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CalanderStyles from './styles/CalanderStyles';
import Colors from '../constants/Colors';

const CustomCalender = ({ onSelectDateRange }) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDates, setSelectedDates] = useState({ start: null, end: null });

    const handleDayPress = (day) => {
        let newDates = { ...selectedDates };

        if (!selectedDates.start || (selectedDates.start && selectedDates.end)) {
            newDates = { start: day.dateString, end: null };
        }
        else if (selectedDates.start && !selectedDates.end) {
            if (new Date(day.dateString) < new Date(selectedDates.start)) {
                newDates = { start: day.dateString, end: null };
            } else {
                newDates.end = day.dateString;
            }
        }

        setSelectedDates(newDates);
        onSelectDateRange(newDates);
    };

    const getMarkedDates = () => {
        let markedDates = {};

        // Highlight today with custom styling
        markedDates[today] = {
            customStyles: {
                text: {
                    
                    color: Colors.THEME,
                    fontWeight: 'bold'
                }
            }
        };

        if (selectedDates.start) {
            markedDates[selectedDates.start] = {
                startingDay: true,
                color: Colors.THEME_TRANSPARENT,
                textColor: 'white', // White text for selected start date
                customStyles: {
                    text: {
                        color: 'white' // Ensure white text
                    }
                }
            };

            if (selectedDates.end) {
                let current = new Date(selectedDates.start);
                const end = new Date(selectedDates.end);

                while (current <= end) {
                    const dateString = current.toISOString().split('T')[0];

                    if (dateString === selectedDates.start) {
                        markedDates[dateString] = {
                            startingDay: true,
                            color: Colors.THEME_TRANSPARENT,
                            textColor: 'white',
                            customStyles: {
                                text: {
                                    color: 'white'
                                }
                            }
                        };
                    } else if (dateString === selectedDates.end) {
                        markedDates[dateString] = {
                            endingDay: true,
                            color: Colors.THEME_TRANSPARENT,
                            textColor: 'white',
                            customStyles: {
                                text: {
                                    color: 'white'
                                }
                            }
                        };
                    } else {
                        markedDates[dateString] = {
                            color: 'lightgreen',
                            textColor: 'white' // White text for all selected dates in range
                        };
                    }

                    current.setDate(current.getDate() + 1);
                }
            }
        }

        return markedDates;
    };

    return (
        <View>
            <Calendar
                style={CalanderStyles?.calander}
                onDayPress={handleDayPress}
                hideExtraDays={true}
                minDate={today}
                markingType={'period'}
                markedDates={getMarkedDates()}
                theme={{
                    todayTextColor: Colors.THEME,
                    selectedDayTextColor: 'white',
                    selectedDayBackgroundColor: Colors.THEME_TRANSPARENT,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300'
                }}
            />
        </View>
    );
};

export default CustomCalender;