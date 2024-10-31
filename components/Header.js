import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContent}>
        <Icon name="menu" size={30} color="black" style={styles.footerIcon} />
        <Text style={styles.headerText}>Pakkauslistat</Text>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0daf2',
        width: '100%',
        height: 50,
        padding: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
})