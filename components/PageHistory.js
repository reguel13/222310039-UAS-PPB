import React, { useContext } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TicketContext } from './TicketContext';

const PageHistory = ({ navigation }) => {
    const { ticketHistory } = useContext(TicketContext);

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
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15 }}>RIWAYAT TIKET</Text>
                    <Text style={{ fontSize: 13, marginBottom: 10, marginHorizontal: 24 }}>Berikut adalah tiket yang telah kamu buat</Text>
                </View>

                <View style={styles.ticketList}>
                    {ticketHistory.map(ticket => (
                        <View key={ticket.id} style={styles.ticketItem}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>ID Tiket: {ticket.id}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Divisi: {ticket.divisi}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Priority: {ticket.priority}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Judul: {ticket.judul}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Deskripsi: {ticket.deskripsi}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Attachment: {ticket.attacment}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Tanggal: {ticket.tanggal}</Text>
                            <Text style={{ fontSize: 13, marginBottom: 5 }}>Status: {ticket.status}</Text>
                            <Text style={{ fontSize: 13 }}>{ticket.response}</Text>
                        </View>
                    ))}
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
    penjelasan: {
        borderBottomWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 30,
        paddingTop: 20
    },
    ticketList: {
        marginTop: 20,
        paddingHorizontal: 30
    },
    ticketItem: {
        borderWidth: 3,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    }
});

export default PageHistory;
