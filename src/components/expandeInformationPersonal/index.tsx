import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { colors } from '@/theme/colors';

const screenWidth = Dimensions.get('window').width; // Largura da tela

// Definição das props para parametrizar o array de medidas e componentes extras
interface ExpandeInformationPersonalProps {
    title: string,
    measurements: { label: string, value: string }[];
    children?: React.ReactNode; // Permitir componentes extras como filhos
}

export const ExpandeInformationPersonal: React.FC<ExpandeInformationPersonalProps> = ({ measurements, title, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={[styles.container, !isExpanded && { backgroundColor: colors.blue_750, height: 50}, isExpanded && { borderBottomWidth: 4 }]}>
            {/* Botão para expandir ou colapsar */}
            <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={styles.header}>
                <Text style={[styles.title, isExpanded && { textAlign: 'center' }]}>
                    {title}
                </Text>
                {/* Seta indicadora */}
                <Text style={styles.arrow}>{isExpanded ? '▲' : '▼'}</Text>
            </TouchableOpacity>

            {/* Exibir conteúdo expandido */}
            {isExpanded && (
                <View style={styles.card}>
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                    </View>

                    {/* Exibir medidas parametrizadas */}
                    {measurements.map((measurement, index) => (
                        <View key={index} style={styles.infoContainer}>
                            <Text style={styles.label}>{measurement.label}:</Text>
                            <Text style={styles.value}>{measurement.value}</Text>
                        </View>
                    ))}

                    {/* Exibir componentes extras, se houver */}
                    {children && (
                        <View style={styles.extraContent}>
                            {children}
                        </View>
                    )}
                </View>
            )}
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: colors.blue_750, // Fundo azul quando colapsado
        borderColor: colors.green_100,

        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center', // Alinha o título e seta ao centro
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        flex: 1, // Permite centralizar o título
    },
    arrow: {
        fontSize: 18,
        color: 'white',
        position: 'absolute', // Posiciona a seta à direita
        right: 10,
    },
    card: {
        backgroundColor: colors.blue_750, // Fundo azul do card
        borderRadius: 10,
        padding: 10,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza a linha
    },
    line: {
        height: 2,
        backgroundColor: colors.green_100,
        width: '90%', // Linha menor
        marginBottom: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 20, // Adiciona espaçamento nas laterais
    },
    label: {
        fontSize: 16,
        color: 'white',
    },
    value: {
        fontSize: 16,
        color: 'white',
    },
    extraContent: {
        marginTop: 10, // Espaçamento entre o conteúdo extra e as medidas
    }
});
