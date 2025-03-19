import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import Modal from 'react-modal';  // Importando o react-modal

// Certifique-se de que o Modal seja acessível em ambiente web
Modal.setAppElement('#root');  // Defina a raiz do seu app

export default function HomeScreen() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState('');
  const [reason, setReason] = useState('');
  const [protocolNumber, setProtocolNumber] = useState('');
  const [searchProtocol, setSearchProtocol] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);  // Estado para controlar a visibilidade do modal

  // Função para gerar número de protocolo e mostrar o modal
  const handleSubmit = () => {
    if (!selectedValue || !reason) return;

    const generatedProtocol = `${Math.floor(100000 + Math.random() * 900000)}`;
    setProtocolNumber(generatedProtocol);

    // Abrir o modal com a notificação
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para consultar o protocolo
  const handleSearch = () => {
    if (!searchProtocol) return;

    // Redirecionar para a página de detalhes da solicitação
    router.push(`/solicitacoesConsulta?protocol=${searchProtocol}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logotext}>NSA</Text>
      </View>

      <Text style={styles.inst}>SOLICITAÇÃO DE DECLARAÇÃO PARA RETIRADA</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Toque aqui para selecionar uma declaração..." value="" />
          <Picker.Item label="Declaração de Matrícula - Ensino Médio" value="matricula-em" />
          <Picker.Item label="Declaração de Matrícula - Ensino Técnico" value="matricula-et" />
          <Picker.Item label="Declaração de Escolaridade Pública (Cursando)" value="escpub-cur" />
          <Picker.Item label="Declaração de Escolaridade Ensino Médio" value="ensmedio" />
          <Picker.Item label="Declaração de Escolaridade - Ensino Técnico" value="noturno" />
          <Picker.Item label="Declaração de Frequência" value="freq" />
          <Picker.Item label="Histórico Escolar" value="historico" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite o motivo da solicitação..."
        placeholderTextColor="#888"
        value={reason}
        onChangeText={setReason}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Solicitação</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Digite o número do protocolo..."
        placeholderTextColor="#888"
        value={searchProtocol}
        onChangeText={setSearchProtocol}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Consultar Solicitação</Text>
      </TouchableOpacity>

      {/* Modal para mostrar a notificação */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Solicitação Enviada</Text>
          <Text style={styles.modalBody}>Seu protocolo gerado é: {protocolNumber}</Text>
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
    marginBottom: 10,
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D9DCD6',
    borderRadius: 10,
    width: '85%',
    alignSelf: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  dropdown: {
    height: 50,
    color: '#16425B',
  },
  input: {
    width: '85%',
    height: 50,
    borderWidth: 2,
    borderColor: '#D9DCD6',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#3A7CA5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
    marginBottom: 10,
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
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxWidth: 300,
    alignSelf: 'center',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    fontSize: 16,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#16425B',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
