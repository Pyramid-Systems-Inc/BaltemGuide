import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            // Replace this URL with your actual API endpoint
            const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
            const data = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Ionicons name="menu" size={24} color="black" />
                <Text style={styles.appName}>App Name</Text>
                <View style={styles.headerRight}>
                    <Ionicons name="bookmark-outline" size={24} color="black" style={styles.icon} />
                    <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
                    <Ionicons name="settings-outline" size={24} color="black" style={styles.icon} />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="search"
                    placeholderTextColor="gray"
                />
            </View>
            <ScrollView contentContainerStyle={styles.userGrid}>
                {users.map((user, index) => (
                    <Link key={index} href={{
                        pathname: "/users/[id]",
                        params: { id: user.id, name: user.name }
                    }} asChild>
                        <TouchableOpacity style={styles.userCard}>
                            <Image source={{ uri: user.photo }} style={styles.avatar} />
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.userCompany}>{user.company}</Text>
                        </TouchableOpacity>
                    </Link>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    appName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 5,
        padding: 10,
    },
    buttonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 80,

    },
    button: {
        width: '30%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    userGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 80,
    },
    userCard: {
        width: '48%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    avatar: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    userCard: {
        width: '48%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    avatar: {
        width: '80%',
        aspectRatio: 1,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    userCompany: {
        fontSize: 12,
        color: 'gray',
        textAlign: 'center',
    },
});