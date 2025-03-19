import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ConsultaSolicitacao() {
  const { protocol } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
          <View style={styles.logo}>
            <Text style={styles.logotext}>NSA</Text>
          </View>

      <View style={styles.containerSolic}>
        <Text style={styles.inst}>Consulta de Solicitação</Text>
        <Text style={styles.text}>Protocolo informado:</Text>
        <Text style={styles.protocol}>{protocol}</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Tela Inicial</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.footer}>
          <Text style={styles.rodape}>Sistema NSA - RySo 2025</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSolic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  protocol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16425B',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3A7CA5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
