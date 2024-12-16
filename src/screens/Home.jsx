import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 

const screenWidth = Dimensions.get('window').width;
// console.log(Icon.getRawGlyphMap());

const categories = [
  { id: 1, name: 'Hoodies', icon: '👕' },
  { id: 2, name: 'Shorts', icon: '🩳' },
  { id: 3, name: 'Shoes', icon: '👟' },
  { id: 4, name: 'Bag', icon: '👜' },
  { id: 5, name: 'Accessories', icon: '🎩' },
];

const products = [
  {
    id: 1,
    name: 'Red Hoodie',
    price: '$40',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6i_orjlehrBcJmqTIqrihCOXcyAn_akCcJg&s',
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: '$60',
    image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    name: 'Leather Bag',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1597892657493-6847b9640bac?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww',
  },
];

const Home = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topRow}>
        {/* Profile Image */}
        <View style={styles.profileContainer}>
          

<Image
                source={require('../assests/images/profile.jpg')}
                style={styles.profilePhoto}
              />
        </View>

        {/* Gender Dropdown */}
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={selectedGender}
            items={items}
            setOpen={setOpen}
            setValue={setSelectedGender}
            setItems={setItems}
            placeholder="Select Gender"
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownBox}
          />
        </View>

        {/* Cart Icon */}
        <TouchableOpacity style={styles.cart}>
          <Text style={styles.cartText}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <View style={styles.categoryCircle}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Selling */}
      <View style={styles.row}>
        <Text style={styles.rowTitle}>Top Selling</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.productBox}>
            <TouchableOpacity style={styles.likeIcon}>
              <Text>
              <Icon name="heart" size={20} color="#888" />

              {/* Gray heart icon wrapped inside Text */}
              </Text>
            </TouchableOpacity>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* New In */}
      <View style={styles.row}>
        <Text style={styles.rowTitleNew}>New In</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product) => (
          <View key={product.id} style={styles.productBox}>
            <TouchableOpacity style={styles.likeIcon}>
              <Text>
                <Icon name="heart" size={20} color="#888" />  {/* Gray heart icon wrapped inside Text */}
              </Text>
            </TouchableOpacity>
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginTop:30
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 25, 
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 75,
    borderRadius:60,
  },
  dropdown: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dropdownBox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cart: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop:10
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#000',
    fontWeight:'bold'
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryIcon: {
    fontSize: 30,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
  },
  likeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  productBox: {
    width: screenWidth * 0.42,
    padding: 10,
    marginRight: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    position: 'relative',
    aspectRatio: 3 / 4,
  },
  productImage: {
    width: '100%',
    height: '70%',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBox: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:5
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 8,
    color: '#888',
  },
  rowTitleNew:{ fontSize: 18,
    color: 'purple',
    fontWeight:'bold'}
});

export default Home;
