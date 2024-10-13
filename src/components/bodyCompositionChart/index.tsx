import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { colors } from '@/theme/colors'; // Supondo que você tenha um arquivo de cores

interface BodyCompositionChartProps {
    massLean: number; // Massa magra
    massFat: number; // Massa gorda
}

const BodyCompositionChart: React.FC<BodyCompositionChartProps> = ({ massLean, massFat }) => {
    // Dados do gráfico com os valores recebidos
    const data = [
        {
            name: 'Massa Magra',
            population: massLean, // Porcentagem ou valor da massa magra
            color: "#05ADDC", // Azul
            legendFontColor: '#ffffff',
            legendFontSize: 15,
        },
        {
            name: 'Massa Gorda',
            population: massFat, // Porcentagem ou valor da massa gorda
            color: "red", // Vermelho
            legendFontColor: '#ffffff',
            legendFontSize: 15,
        },
    ];

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                width={180} // Largura do gráfico
                height={150} // Altura do gráfico
                chartConfig={{
                    backgroundColor: '#000',
                    backgroundGradientFrom: '#000',
                    backgroundGradientTo: '#000',
                    decimalPlaces: 0, // Quantidade de casas decimais
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                accessor="population" // Nome do campo que contém os valores
                backgroundColor="transparent" // Cor de fundo do gráfico
                paddingLeft="15" // Espaço à esquerda
                center={[0, 0]} // Centro do gráfico
                absolute // Usado para gráficos de pizza
                hasLegend={false}
            />
            <View style={styles.legendContainer}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.colorDot, { backgroundColor: "#05ADDC" }]} />
                    <Text style={styles.legendText}>{data[0].name}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.colorDot, { backgroundColor: "red" }]} />
                    <Text style={styles.legendText}>{data[1].name}</Text>
                </View>

            </View>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        width: "100%",
    },
    title: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
    },
    legendContainer: {
        marginTop: 10, // Espaço entre o gráfico e a legenda
        alignItems: 'flex-start', // Alinha o texto à esquerda
        flexDirection: 'column',
        flexWrap: 'wrap', // Permite que a legenda quebre em várias linhas, se necessário
    },
    legendText: {
        fontSize: 16,
        color: 'white',
        marginVertical: 2, // Espaçamento entre as linhas da legenda
        marginLeft: 5, // Espaço entre a bolinha e o texto
    },
    colorDot: {
        width: 15,
        height: 15,
        borderRadius: 100, // Torna a bolinha redonda
        marginRight: 5, // Espaço entre a bolinha e o texto
        alignSelf: 'center', // Centraliza a bolinha verticalmente
    },
});

export default BodyCompositionChart;
