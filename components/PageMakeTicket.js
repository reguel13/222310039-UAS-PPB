import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const PageMakeTicket = ({ navigation }) => {
    const handleLogout = () => {
        Alert.alert(
            'Konfirmasi Logout',
            'Apakah Anda yakin akan Logout',
            [
                {
                    text: 'Batal',
                    onPress: () => console.log('Logout dibatalkan'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        console.log('Logout berhasil');
                        navigation.navigate('Login');
                    },
                },
            ],
            { cancelable: false }
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar style='' />
            <View style={styles.header}>
                <Image source={require('../assets/logo-ibik-web.png')} style={{ width: 128, height: 128, marginHorizontal: 10 }} resizeMode='contain' />
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../assets/account.png')} style={{ width: 50, height: 50, marginHorizontal: 10 }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogout} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <Text style={{ fontSize: 17, fontWeight: 'bold', marginHorizontal: 16 }}>logout</Text>
            </TouchableOpacity>
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 20, marginHorizontal: 85, textAlign: 'center' }}>Selamat Datang di Help Desk Institut Bisnis dan Informatika Kesatuan</Text>
            </View>
            <View style={{ width: 170 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CekTiket')} style={styles.buttonCekTiket}>
                    <FontAwesome5 name="clipboard-check" size={70} color="black" marginHorizontal={20} />
                    <Text style={styles.textTiket}>Cek Tiket</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MakeTiket2')} style={styles.buttonBuatTiket}>
                    <Ionicons name="ticket-sharp" size={80} color="black" marginHorizontal={20} />
                    <Text style={styles.textTiket}>Buat Tiket</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.buttonHistory}>
                    <Ionicons name="chatbox-ellipses-sharp" size={70} color="black" marginHorizontal={20} />
                    <Text style={styles.textHistory}>Cek History</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        backgroundColor: '#672968',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    backButton: {
        width: '35%',
        height: 40,
        borderWidth: 2,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 18,
        marginHorizontal: 5
    },
    buttonCekTiket: {
        width: '230%',
        height: 115,
        backgroundColor: '#956A96',
        borderWidth: 3,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 40,
        marginHorizontal: 15,
        marginTop: 50
    },
    buttonBuatTiket: {
        width: '230%',
        height: 115,
        backgroundColor: '#956A96',
        borderWidth: 3,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 15,
    },
    buttonHistory: {
        width: '230%',
        height: 115,
        backgroundColor: '#956A96',
        borderWidth: 3,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 40,
        marginHorizontal: 15
    },
    textTiket: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 60
    },
    textHistory: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 60
    }
});

export default PageMakeTicket;
