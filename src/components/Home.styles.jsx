import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 30,
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
    borderRadius: 60,
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
    backgroundColor: '#896ce7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 15,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 16,
    color: '#000',
    fontWeight: '400',
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
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBox: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  rowTitleNew: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bold',
  },
});

export default HomeStyles;
