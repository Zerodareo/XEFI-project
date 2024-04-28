import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ContactFormulaire = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateInputs = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Ce champ est requis');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!subject) {
      setSubjectError('Ce champ est requis');
      isValid = false;
    } else {
      setSubjectError('');
    }
    if (!message) {
      setMessageError('Ce champ est requis');
      isValid = false;
    } else {
      setMessageError('');
    }
    return isValid;
  };

  const MessageEnvoi = () => {
    if (validateInputs()) {
      Alert.alert('Message envoyé !');
    } else {
      Alert.alert('Veuillez remplir tous les champs requis.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire de contact {'\n'}{'\n'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Votre email*"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Sujet*"
        value={subject}
        onChangeText={text => setSubject(text)}
      />
      {subjectError ? <Text style={styles.error}>{subjectError}</Text> : null}
      <TextInput
        style={[styles.input, { height: 200 }]}
        placeholder="Votre message*"
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={text => setMessage(text)}
      />
      {messageError ? <Text style={styles.error}>{messageError}</Text> : null}
      <Button title="Envoyer" onPress={MessageEnvoi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#3B5998',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
});

export default ContactFormulaire;
