import { StyleSheet, Image, View, FlatList, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const BookListing = () => {
  const navigation = useNavigation();
  const books = [

    {
      id: '1',
      imageUri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357128997i/5759.jpg",
      title: 'Book 1',
      author: 'Author 1',
      publisher: 'iStudio',
      rating: 4.5,
      isbn: 'ISBN 1',
    },
    {
      id: '2',
      imageUri: "https://marketplace.canva.com/EAFA7N_NLQs/1/0/1003w/canva-cute-colorful-watercolor-simple-illustrated-young-adult-romance-book-cover-ooKN90UU-H0.jpg",
      title: 'Book 2',
      author: 'Author 2',
      publisher: 'iStudio',
      rating: 2,
      isbn: 'ISBN 2',
    },
    {
      id: '3',
      imageUri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357128997i/5759.jpg",
      title: 'Book 3',
      author: 'Author 3',
      publisher: 'iStudio',
      rating: 4,
      isbn: 'ISBN 3',
    },
    {
      id: '4',
      imageUri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564'",
      title: 'Book 4',
      author: 'Author 4',
      publisher: 'iStudio',
      rating: 3,
      isbn: 'ISBN 4',
    },

    {
      id: '6',
      imageUri: "https://www.libertybooks.com/image/cache/catalog/9780141345659-2-640x996.jpg?q6",
      title: 'The Fault in our Stars',
      author: 'John Green',
      publisher: 'iStudio',
      rating: 5,
      isbn: 'ISBN 6',
    },
    {
      id: '7',
      imageUri: "https://www.linkshop.pk/image/cache/english/the-alchemist-1000x1532.jpg",
      title: 'Alchemist',
      author: 'Paulo Coelho',
      publisher: 'iStudio',
      rating: 5,
      isbn: 'ISBN 6',
    },


    // Add more books here

  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Image source={{ uri: item.imageUri }} style={styles.bookImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>All Books</Text>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // To display two books in each row
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#0c116b",
    marginBottom: 10,
    textAlign:'center'
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  bookItem: {
    flex: 1,
    aspectRatio: 0.6, // Adjust this aspect ratio to match your book images
    marginBottom: 10,
    marginHorizontal:5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bookImage: {
    flex: 1,
    resizeMode: 'cover',

  },
});

export default BookListing


