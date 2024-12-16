import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './Home.styles';

const ProductSection = ({ title, products, rowTitleStyle }) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={rowTitleStyle || styles.rowTitle}>{title}</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer} 
      >
        {products.map((product) => (
          <View key={product.id} style={styles.productBox}>
            <TouchableOpacity style={styles.likeIcon}>
              <Fontisto name="heart-alt" size={15} color="#000" />
            </TouchableOpacity>

            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default ProductSection;
