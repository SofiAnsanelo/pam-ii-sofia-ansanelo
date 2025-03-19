import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  return (
<View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logotext}>NSA</Text>
      </View>
    
    <Text style={styles.inst}>Nenhuma mensagem a ser exibida.</Text>
      <View style={styles.footer}>
        <Text style={styles.rodape}>Sistema NSA - RySo 2025</Text>
      </View>
</View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      paddingBottom: 70,
    },
    logo: {
      backgroundColor: '#16425B',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    logotext: {
      color: '#fff',
      fontSize: 50,
      fontWeight: 'bold',
    },
    inst: {
        color: '#000000',
        fontSize: 14,
        fontWeight: 'bold',
      },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#16425B',
        padding: 10,
        alignItems: 'center',
    },
    rodape: {
        color: '#fff',
        fontSize: 14,
      }
    });
