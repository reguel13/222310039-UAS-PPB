import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PageRegister = ({ navigation}) => {
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
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginHorizontal: 16}}>kembali</Text>
            </TouchableOpacity>
        <View style={styles.penjelasan}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15}}>Register</Text>
                <Text style={{marginBottom: 10, marginHorizontal: 24}}>Register untuk melanjutkan login ke pusat bantuan Insitut Bisnis
                 dan Informatika Kesatuan</Text>
        </View>
        <View style={styles.gambar}>
                <Image 
                source={{uri:'https://i.pinimg.com/564x/a9/dd/93/a9dd9332469ecad9d9770985d8e032f0.jpg'}} style={{ width: 200, height: 200,}}/>
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Nama</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none" />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Email</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none" />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>NPM</Text>
                    <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    autoCapitalize="none" />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30, marginTop: 10}}>Password</Text>
                    <TextInput
                    style={styles.input}
                    secureTextEntry />
        </View>
        <View>
    
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                    <Text style={styles.submitText}>SUBMIT</Text>
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
    header:{
        backgroundColor: '#672968',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    text:{
        fontSize: 20,
    },
    penjelasan: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginTop: 70,
        
    },
    gambar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#D6D3D3',
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
        marginHorizontal: 20,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
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
      register: {
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 25
      },
      submitText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
})

export default PageRegister;
