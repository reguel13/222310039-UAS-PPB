import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TextInput, StatusBar } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';


const PageCekTicket = ({navigation}) => {
    const [ticketId, setTicketId] = useState('');
    
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
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginHorizontal: 16}}>kembali</Text>
            </TouchableOpacity>
        <View style={styles.penjelasan}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15,}}>BALASAN</Text>
                <Text style={{fontSize: 13, marginBottom: 10, marginHorizontal: 24, alignItems: 'center', justifyContent: 'center'}}>Cek balasan dari laporan yang telah kamu
                    kirimkan. Jika balasan tidak menyelesaikan masalah harap laporkan kembali. </Text>
        </View>
        <View style={styles.borderOut}>
            <View style={styles.borderIn}>
                <Text style={{
                    fontSize: 15, 
                    fontWeight: 'bold', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    marginTop: 15}}>CEK STATUS TIKET</Text>
            {/* <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30, marginTop: 50}}>Email</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none" />
            </View> */}
            <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30, marginTop: 20}}>ID Tiket</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    value={ticketId}
                    onChangeText={setTicketId} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('CekBalasan', { ticketId })} style={styles.button}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
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
        header:{
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
            borderBottomWidth : 1,
            borderColor: 'grey'
        },
        borderOut: {
            borderTopWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderRadius: 40,
            backgroundColor: '#D9D9D9',
            height: 650,
            marginTop: 80,
            alignItems: 'center',
            
            
        },
        borderIn: {
            borderWidth: 3,
            borderRadius: 40,
            height: 450,
            width: '85%',
            backgroundColor: '#956A96',
            marginTop: 60
        },
        input: {
            width: '85%',
            height: 50,
            backgroundColor: '#FFF',
            borderRadius: 25,
            borderWidth: 3,
            borderColor: '#000',
            paddingHorizontal: 20,
            fontSize: 16,
            marginVertical: 10,
            marginHorizontal: 20
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

})


export default PageCekTicket;
