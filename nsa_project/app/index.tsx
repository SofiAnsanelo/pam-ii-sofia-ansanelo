import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter(); // Usa o router do Expo Router

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logo}>
          <Text style={styles.logotext}>NSA</Text>
        </View>

        <Text style={styles.inst}>DADOS DA CLASSE SELECIONADA</Text>
        <View style={styles.box}>
          <Text style={styles.info}>{'RM: 2501000 \nSemestre/Ano: 2025 \nMódulo/Série atual: 3 Série \nTurma: A\nGrupo do Componente: B'}</Text>
        </View>

        <Text style={styles.inst}>DADOS DA HABILITAÇÃO SELECIONADA</Text>
        <View style={styles.box}>
          <Text style={styles.info}>Ensino Médio com Hab. em Desenvolvimento de Sistemas</Text>
        </View>

        <Text style={styles.inst}>MENU DE OPÇÕES</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.push('/frequencia')}>
            <Text style={styles.buttonText}>Frequência</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/declaracoes')}>
            <Text style={styles.buttonText}>Declarações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/boletim')}>
            <Text style={styles.buttonText}>Boletim</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => router.push('/mensagens')}>
            <Text style={styles.buttonText}>Mensagens</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.rodape}>Sistema NSA - RySo 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 70,
    alignItems: 'center',
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
  box: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#D9DCD6',
    borderRadius: 10,
    width: '85%',
  },
  info: {
    color: '#000000',
    fontSize: 16,
  },
  inst: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2F6690',
    padding: 15,
    width: '70%',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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
