import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from '../components/HomeComponents/Home.styles';
import ProductSection from '../components/HomeComponents/HomeProducts';


const screenWidth = Dimensions.get('window').width;

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
    image: require('../assests/images/profile.jpg'),
  },
  {
    id: 2,
    name: 'Running Shoes',
    price: '$60',
    image: require('../assests/images/red.jpeg'),
  },
  {
    id: 3,
    name: 'Leather Bag',
    price: '$120',
    image: require('../assests/images/bag.jpeg'),
  },
];

const newProducts = [
  {
    id: 4,
    name: 'New T-Shirt',
    price: '$30',
    image: require('../assests/images/red.jpeg'),
  },
  {
    id: 5,
    name: 'Stylish Hat',
    price: '$25',
    image: require('../assests/images/red.jpeg'),
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
          <Icon name="bag-handle-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={25} color="#000" />

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

    

<ProductSection title="Top Selling" products={products} />

<ProductSection title="New In" products={newProducts} rowTitleStyle={styles.rowTitleNew} />
    </ScrollView>
  );
};



export default Home;
