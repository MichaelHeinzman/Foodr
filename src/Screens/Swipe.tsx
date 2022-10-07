import {  StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Logo from '../Components/Logo'
import {getYelp} from "../yelp";
import RestaurantCard from '../Components/RestaurantCard';
import { Restaurant } from "../Components/RestaurantCard"

type Props = {}

type Restaurants = Restaurant[];
type yelpRestaurants = {
  result : Restaurants | null;
  error : object | null;
}

const Swipe = (props: Props) => {
  const [yelpRestaurants, setYelpRestaurants] = useState<yelpRestaurants>({result: null, error: null});
  const [acceptedRestaurants, setAcceptedRestaurants] = useState<Restaurants>([]);
  const [noRestaurantsInAreaLeft, setNoRestaurantsInAreaLeft] = useState<boolean>(false)

  useEffect(() => getYelp("Melbourne",setYelpRestaurants),[])

  const onSwipe = (direction : string, id : string, indexInArray : number) => {
    if (indexInArray === 0)
      setNoRestaurantsInAreaLeft(true)

    if (direction === "right")
      return setAcceptedRestaurants((restaurants : Restaurants) => {
        const restaurant = yelpRestaurants.result?.find((item : Restaurant) => item?.id === id)
        return (restaurant) ? [restaurant, ...restaurants] : restaurants
      })

    if (direction === "left")
     return // Don't add restaurant to list of accepted. 
  }
 
  const listOfRestaurantCards = yelpRestaurants.result?.map((restaurant : any, idx : number) => 
  <RestaurantCard key={restaurant.id} restaurant={restaurant} onSwipe={onSwipe} indexInArray={idx}/>
  )
  
  return (
    <View style={styles.swipe}>
      <Logo style={styles.logo} title={styles.title}/>
      <View style={styles.cardContainer}>
          {listOfRestaurantCards}
          {noRestaurantsInAreaLeft && <Text>No Restaurants in Area Left</Text>}
      </View>
    </View>
  )
}

export default Swipe

const styles = StyleSheet.create({
    swipe: {
        flex: 1,
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    cardContainer: {
      flex: .7,
      width: "100%",
      position: 'relative',
      padding: 10,
    },
    title: {
        fontSize: 50,
    },
    logo: {
        flex: .1,
    },
})