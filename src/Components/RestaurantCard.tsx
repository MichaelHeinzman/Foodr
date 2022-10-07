import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TinderCard from 'react-tinder-card'
import LinearGradient from './LinearGradient'




type RestaurantLoaded = {
    id: string;
    image_url: any;
    name: string;
    price: string;
}

type RestaurantNotLoaded = null
export type Restaurant = RestaurantLoaded | RestaurantNotLoaded

type Props = {
    restaurant: RestaurantLoaded;
    onSwipe: Function;
    indexInArray: Number;
}

const RestaurantCard = ({restaurant, onSwipe, indexInArray}: Props) => {
  const linearGradientColor = ['rgba(0,0,0,0)', 'rgba(0,0,0,0)','rgba(0,0,0,.9)']
  return (
    <TinderCard onSwipe={(direction) => onSwipe(direction, restaurant.id, indexInArray)}>
        <View style={styles.card}>
            <ImageBackground style={styles.backgroundImage} source={restaurant.image_url && {uri: restaurant.image_url}} resizeMode="cover">
                <LinearGradient colors={linearGradientColor}>
                    <View style={styles.restaurantDetailsContainer}>
                        <Text style={styles.restaurantName}>{restaurant.name}</Text>
                        <Text style={styles.restaurantName}>{restaurant.price}</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
  </TinderCard>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
card: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 500,
    overflow: 'hidden',
    backgroundColor: "#FFFFFF",
    cursor: 'grab',
    borderwidth: 0,
    borderRadius: 20,
},
backgroundImage:{
    flex: 1,
    width: '100%',
},
restaurantDetailsContainer: {
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: 10,
  background: "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)",
},
restaurantName: {
  flex: 1,
  fontSize: 50,
  color: "#FFFFFF",
}})