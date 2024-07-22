import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TextInput, StatusBar, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PageCekBalasan = ({ route, navigation }) => {
    const { ticketId } = route.params;
    const [ticketData, setTicketData] = useState(null);
    const [response, setResponse] = useState("");

    useEffect(() => {
        
        const mockData = {
            '1': { ticketId: '1', response: 'Laporan telah kami terima' },
            '2': { ticketId: '2', response: 'Laporan telah kami terima' },
            '3': { ticketId: '3', response: 'Laporan telah kami terima' },
            '4': { ticketId: '4', response: 'Laporan telah kami terima' }
        };

        // Set ticket data sesuai dengan ticketId yang diberikan
        const data = mockData[ticketId];
        setTicketData(data);
    }, [ticketId]);

    const handleSubmit = () => {
        // Logika untuk submit balasan
        Alert.alert("Balasan Telah Terkirim");
        setResponse("");
    };

    return (
        <View style={styles.container}>
             <StatusBar style='' />
        <View style={styles.header}>
            <Image source={require('../assets/logo-ibik-web.png')} style={{ width: 128, height: 128, marginHorizontal: 10 }} resizeMode='contain' />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/account.png')} style={{ width: 50, height: 50, marginHorizontal: 10 }} />
            </TouchableOpacity>
        </View>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('MakeTiket')} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginHorizontal: 16 }}>kembali</Text>
                </TouchableOpacity>
                <View style={styles.penjelasan}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15 }}>BALASAN</Text>
                    <Text style={{ fontSize: 13, marginBottom: 10, marginHorizontal: 24, alignItems: 'center', justifyContent: 'center' }}>
                        Cek balasan dari laporan yang telah kamu kirimkan. Jika balasan tidak menyelesaikan masalah harap laporkan kembali.
                    </Text>
                </View>
                <View style={styles.borderOut}>
                    <View style={styles.borderIn}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'justify',
                            textAlignVertical: 'center',
                            justifyContent: 'flex-start',
                            marginHorizontal: 10,
                            marginVertical: 15,
                        }}>ID Tiket :</Text>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'justify',
                            textAlignVertical: 'center',
                            justifyContent: 'flex-start',
                            marginHorizontal: 10,
                            marginVertical: 5,
                        }}>{ticketId}</Text>
                        <View style={{
                            borderWidth: 1,
                            marginVertical: 20,
                        }}></View>
                        <Text style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'justify',
                            textAlignVertical: 'center',
                            justifyContent: 'flex-start',
                            marginHorizontal: 10,
                            marginVertical: 5,
                        }}>Balasan:</Text>
                        {ticketData ? (
                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                                marginHorizontal: 10,
                                marginVertical: 5,
                            }}>{ticketData.response}</Text>
                        ) : (
                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                                marginHorizontal: 10,
                                marginVertical: 5,
                            }}>Memuat data tiket...</Text>
                        )}
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', marginHorizontal: 30, marginTop: 50 }}>Tambah Balasan</Text>
                    <TextInput
                        style={styles.input}
                        multiline
                        placeholder="Ketik balasan"
                        keyboardType="default"
                        autoCapitalize="none"
                        value={response}
                        onChangeText={setResponse}
                    />
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>SUBMIT</Text>
                    </TouchableOpacity>
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
    borderOut: {
        borderTopWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderRadius: 40,
        backgroundColor: '#D9D9D9',
        height: 900,
        marginTop: 80,
        alignItems: 'center',
    },
    borderIn: {
        borderWidth: 3,
        borderRadius: 40,
        height: 400,
        width: '85%',
        backgroundColor: '#956A96',
        marginTop: 60,
    },
    input: {
        width: '85%',
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        marginVertical: 10,
        marginHorizontal: 20,
        textAlignVertical: 'top',
        alignItems: 'flex-start'
    },
    button: {
        width: '90%',
        height: 50,
        borderWidth: 3,
        backgroundColor: '#672968',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50,
        marginHorizontal: 20
    },
    penjelasan: {
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
});

export default PageCekBalasan;
