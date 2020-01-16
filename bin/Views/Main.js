import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../settings/api';

class Main extends Component {
    state = {
        productInfo: [],
        docs: [],
        page: 1
    }
    componentDidMount() {
        this.loadProducts();
    }
    loadProducts = async (page = 1) => {
        
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ 
            docs: [...this.state.docs, ...docs], 
            productInfo,
            page
         })
    }
    loadMore = () => {
        const {page, productInfo} = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }
    renderItem = ({item}) => {
        return (
            <View style={styles.productsContainer}>
                <Text style={styles.productsTitle}>{item.title}</Text>
                <Text style={styles.productsDescription}>{item.description}</Text>
                <TouchableOpacity  style={styles.productsButton} onPress={() => {
                    this.props.navigation.navigate("Product", {product: item})
                }}>
                    <Text  style={styles.productsButtonText}>Leia mais...</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View styles={styles.container}>
                <Text style={styles.welcome}>Olá Ari, seja bem-vinda ao seu espaço gay</Text>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={.1}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        backgroundColor: "#FFF",
        fontSize: 20,
        marginLeft: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#DB7093",
    },
    list: {
        padding: 20,
    },
    productsContainer: {
        backgroundColor: "#DB7093",
        borderWidth: 1, 
        borderColor: "#DDD",
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    productsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4F2F4F"
    },
    productsDescription: {
        fontSize: 16,
        color: "#330033",
        marginTop: 5,
        lineHeight: 24,
    },
    productsButton: {
        height: 40,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#FFF",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    productsButtonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default Main;