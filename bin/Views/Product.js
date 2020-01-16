import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Product = ({navigation}) => { 
    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <Text style={styles.productsTitle}>{navigation.state.params.product.title}</Text>
                <Text style={styles.productsDescription}>{navigation.state.params.product.description}</Text>
                <Text style={styles.productsDescription}>{navigation.state.params.product.url}</Text>
            </View>
        </View>
    )
}
Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DB7093",
    },
    productsContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1, 
        borderColor: "#DDD",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    productsTitle: {
        padding: 20,
        fontSize: 26,
        fontWeight: "bold",
        color: "#4F2F4F"
    },
    productsDescription: {
        padding: 20,
        fontSize: 20,
        color: "#330033",
        marginTop: 5,
        lineHeight: 24,
    },
})



export default Product;