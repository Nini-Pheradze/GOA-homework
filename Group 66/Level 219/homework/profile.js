import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [language, setLanguage] = useState('');

    const [profile, setProfile] = useState(null);

    const handleSave = () => {
        setProfile({
        fullName: name,
        userAge: age,
        favLanguage: language,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Create Profile</Text>

        <Text style={styles.label}>FullName:</Text>
        <TextInput
            style={styles.input}
            placeholder="..."
            value={name}
            onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Age:</Text>
        <TextInput
            style={styles.input}
            placeholder="..."
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
        />

        <Text style={styles.label}>Favourite Programming Language:</Text>
        <TextInput
            style={styles.input}
            placeholder="..."
            value={language}
            onChangeText={(text) => setLanguage(text)}
        />

        <View style={styles.buttonContainer}>
            <Button title="Save Profile" onPress={handleSave} />
        </View>

        {profile && (
            <View style={styles.profileCard}>
            <Text style={styles.profileHeader}>Saved Profile:</Text>
            <Text style={styles.profileText}>FullName: {profile.fullName}</Text>
            <Text style={styles.profileText}>Age: {profile.userAge}</Text>
            <Text style={styles.profileText}>Favourite Language: {profile.favLanguage}</Text>
            </View>
        )}
        </ScrollView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    buttonContainer: {
        marginVertical: 10,
    },
    profileCard: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#f0f8ff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#b0e0e6',
    },
    profileHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#005b96',
    },
    profileText: {
        fontSize: 16,
        marginBottom: 5,
    },
});
