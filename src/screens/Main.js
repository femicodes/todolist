import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { primaryGradientArray } from '../utils/colors';
import Header from '../components/Header';
import Input from '../components/Input';
const headerTitle = 'Todolist';

export const Main = () => {
  const [inputValue, setInputValue] = useState('');

  const newInputValue = (value) => {
    setInputValue(value);
  }

  return (
    <LinearGradient colors={primaryGradientArray} style={styles.container}>
      <StatusBar />
      <View style={styles.centered}>
        <Header title={headerTitle} />
      </View>
      <View style={styles.inputContainer}>
        <Input inputValue={inputValue} onChangeText={newInputValue} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 40,
    paddingLeft: 15,
  },
});
