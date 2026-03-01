import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
          <Text style={tw `text-red-500 p-10`}>I am the HomeScreen</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{ 
        color: 'blue'
    }
})