import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient as ExpoGradient } from 'expo-linear-gradient'
type Props = {
    children: any,
    style?: any,
    colors?: any,
}

const LinearGradient = ({children, style, colors}: Props) => {
  return (
    <View style={style || styles.container}>
      <ExpoGradient 
        colors={colors ? colors : ['#FFC700', '#E97F04']}
        style={styles.background}
      >      
        {children}
      </ExpoGradient>
    </View>
  )
}

export default LinearGradient

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    background: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderRadius: 10,
      },
})