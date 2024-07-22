import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PageProfile = ({ navigation }) => {

    const profileData = {
        nama: 'Muhammad Faadihilah',
        email: '222310021@student.ibik.ac.id',
        npm: '222310021',
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <StatusBar style='' />
            <View style={styles.header}>
                <Image source={require('../assets/logo-ibik-web.png')} style={{ width: 128, height: 128, marginHorizontal: 10 }} resizeMode='contain' />
                    <Image source={require('../assets/account.png')} style={{ width: 50, height: 50, marginHorizontal: 10 }} />
                
            </View>
            <ScrollView>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginHorizontal: 16 }}>kembali</Text>
                </TouchableOpacity>
                <View style={styles.penjelasan}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15 }}>Profil</Text>
                    <Text style={{ marginBottom: 10, marginHorizontal: 24 }}>Informasi profil pengguna</Text>
                </View>
                <View style={styles.gambar}>
                    <Image 
                        source={{ uri: 'https://i.pinimg.com/564x/a9/dd/93/a9dd9332469ecad9d9770985d8e032f0.jpg' }} 
                        style={{ width: 200, height: 200 }} 
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Nama</Text>
                    <Text style={styles.info}>{profileData.nama}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.info}>{profileData.email}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.label}>NPM</Text>
                    <Text style={styles.info}>{profileData.npm}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#672968',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
    },
    penjelasan: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: 30,
    },
    gambar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    infoContainer: {
        width: '90%',
        backgroundColor: '#D6D3D3',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 16,
        marginVertical: 5
    },
    backButton: {
        width: '35%',
        height: 40,
        borderWidth: 2,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 5
    },
    submitText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PageProfile;
