import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logotext}>NSA</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.box}>
          <Text style={styles.materia}>PROGRAMAÇÃO WEB III</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>PROGRAMAÇÃO DE APLICATIVOS MOBILE II</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>INTERNET, PROTOCOLOS E SEGURANÇA DE SISTEMAS DA INFORMAÇÃO</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>PLANEJAMENTO E DESENVOLVIMENTO DO TRABALHO DE CONCLUSÃO DE CURSO (TCC) EM DESENVOLVIMENTO DE SISTEMAS</Text>
          <Text style={styles.info}>CH:120   Aulas:15    Faltas:0   Limite:30   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>QUALIDADE E TESTE DE SOFTWARE</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.materia}>SISTEMAS EMBARCADOS</Text>
          <Text style={styles.info}>CH:80   Aulas:10    Faltas:0   Limite:20   </Text>
          <Text style={styles.info}>Freq. Atual100%:    Freq. Total:100%    </Text>
        </View>

        <View style={styles.boxTotal}>
          <Text style={styles.materia}>TOTAL:</Text>
          <Text style={styles.info}>Aulas:520    Faltas:0   Limite:130   </Text>
          <Text style={styles.info}>Freq. Atual:100%    Freq. Total:100%    </Text>
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
  box: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D9DCD6',
    borderRadius: 10,
    width: '85%',
  },
  boxTotal: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#81C3D7',
    borderRadius: 10,
    width: '85%',
  },
  materia: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: '#000000',
    fontSize: 14,
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 70,
    alignItems: 'center',
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
