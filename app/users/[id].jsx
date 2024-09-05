import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function SectionScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUserData();
    }, [id]);

    const fetchUserData = async () => {
        try {
            // Replace this URL with your actual API endpoint
            const response = await fetch(`https://fake-json-api.mock.beeceptor.com/users/${id}`);
            const data = await response.json();
            console.log(data);
            setUserData(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user data:', error);
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
        <View style={styles.container}>
            {userData && (
                <>
                    <Text style={styles.title}>{userData.name}</Text>
                    <View style={styles.userInfo}>
                        <Text style={styles.infoItem}>Company: {userData.company}</Text>
                        <Text style={styles.infoItem}>Username: {userData.username}</Text>
                        <Text style={styles.infoItem}>Email: {userData.email}</Text>
                        <Text style={styles.infoItem}>Address: {userData.address}</Text>
                        <Text style={styles.infoItem}>Zip: {userData.zip}</Text>
                        <Text style={styles.infoItem}>State: {userData.state}</Text>
                        <Text style={styles.infoItem}>Country: {userData.country}</Text>
                        <Text style={styles.infoItem}>Phone: {userData.phone}</Text>
                    </View>
                    {userData.photo && (
                        <View style={styles.photoContainer}>
                            <Image source={{ uri: userData.photo }} style={styles.photo} />
                        </View>
                    )}
                </>
            )}
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Go Back to Main Page</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#666',
    },
    userInfo: {
        width: '100%',
        marginBottom: 20,
    },
    infoItem: {
        fontSize: 16,
        marginBottom: 5,
    },
    photoContainer: {
        marginBottom: 20,
    },
    photo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});