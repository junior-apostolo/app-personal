import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

// Componente para exibir a tabela
export const MeasurementTable: React.FC<{ measurements: { label: string, right: string, left: string }[] }> = ({ measurements }) => {
    return (
        <View style={styles.table}>
            <View style={styles.header}>
                <Text style={styles.headerText}></Text>
                <Text style={styles.headerText}>Direito</Text>
                <Text style={styles.headerText}>Esquerdo</Text>
            </View>

            {/* Conteúdo da tabela com as medições */}
            {measurements.map((item, index) => (
                <View key={index} style={styles.row}>
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.value}>{item.right}</Text>
                    <Text style={styles.value}>{item.left}</Text>
                </View>
            ))}
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    table: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: colors.blue_750,
        padding: 10,
        borderRadius: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    label: {
        fontSize: 16,
        color: 'white',
        flex: 1,
        textAlign: 'left',
    },
    value: {
        fontSize: 16,
        color: 'white',
        flex: 1,
        textAlign: 'center',
    },
});
