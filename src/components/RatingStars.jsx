import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const halfStar = decimal >= 0.25 && decimal < 0.75;

  const starsArray = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsArray.push(<Icon key={i} name="star" size={15} color="gold" />);
    } else if (i === fullStars + 1 && halfStar) {
      starsArray.push(<Icon key={i} name="star-half-full" size={15} color="gold" />);
    } else {
      starsArray.push(<Icon key={i} name="star-o" size={15} color="gold" />);
    }
  }

  return <View style={styles.container}>{starsArray}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',   
  },
});

export default StarRating;
