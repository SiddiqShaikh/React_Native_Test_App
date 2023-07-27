import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import RatingStars from '../components/RatingStars';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function BookDetail({route}) {
    const { book } = route.params;
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.category}>Hostogry</Text>
          <Text style={styles.title}>{book.title}</Text>
          <View style={styles.published}>
            <Text>Published from <Text style={styles.publisher}>{book.publisher}</Text></Text>
            <Text>23 Marc, 2019</Text>
          </View>
        </View>
  
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: book.imageUri }}
            imageStyle={{ borderBottomLeftRadius: 40, borderTopLeftRadius: 40 }}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.iconsContainer}>
              <IconWrapper backgroundColor="orange" iconName="info-circle" />
              <IconWrapper backgroundColor="#0c116b" iconName="play-circle" iconText="Audio Book" />
            </View>
          </ImageBackground>
        </View>
  
        <View style={styles.ratingContainer}>
          <View style={styles.ratingWrapper}>
            <Text style={styles.ratingText}>{book.rating}</Text>
            <RatingStars rating={book.rating} />
          </View>
          <Text style={styles.ratingCount}>892 Ratings on Google Play</Text>
          <Text style={styles.description}>
            I failed the first quarter of a class in School, so I made a fake report Card. I did this every quarter that year, I forgot that they mail home the end year cards... Read more
          </Text>
        </View>
      </View>
    );
  };
  
  const IconWrapper = ({ backgroundColor, iconName, iconText }) => (
    <TouchableOpacity style={[styles.iconWrapper, { backgroundColor }]}>
      <Icon name={iconName} size={24} color="white" />
      {iconText && <Text style={styles.iconText}>{iconText}</Text>}
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    headerContainer: {
      paddingHorizontal: 8,
      paddingVertical: 5,
    },
    category: {
      color: 'orange',
      fontWeight: '500',
      marginBottom: 6,
    },
    title: {
      fontSize: 25,
      fontWeight: '500',
      marginBottom: 6,
      color: "#0c116b",
    },
    published: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    publisher: {
      fontWeight: 'bold',
      color: "#0c116b",
    },
    imageContainer: {
      marginTop: 20,
      alignItems:'flex-end'

    },
    image: {
      width: 300,
      height: 200,
    },
    iconsContainer: {
      position: 'absolute',
      bottom: 10,
      right: 10,
      flexDirection: 'row',
    },
    iconWrapper: {
      alignItems: 'center',
      marginLeft: 10,
      flexDirection: 'row',
      padding: 5,
      borderRadius: 10,
    },
    iconText: {
      color: 'white',
      marginLeft: 5,
    },
    ratingContainer: {
      paddingVertical: 5,
      paddingHorizontal: 8,
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    ratingText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: "#0c116b",
    },
    ratingCount: {
      fontWeight: 'bold',
      marginTop: 10,
    },
    description: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      lineHeight: 24,
      color: "#0c116b",
    },
  });