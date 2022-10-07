import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type Props = {
    style?: any,
    title?: any,
}

const Logo = ({style, title}: Props) => {

  return (
    <View style={[styles.default, style]}>
      <Text style={[styles.title, title]}>Foodr</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    title: {
        fontStyle: 'italic',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 90,
        fontWeight: '400',
      },

    default: {
      width: "100%",
      height: "100%",
      alignItems: "center",
    }
})