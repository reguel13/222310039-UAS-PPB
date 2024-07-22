import React, { useState } from 'react';
import {Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {UserList} from './constData';
import { useNavigation } from '@react-navigation/native';

const PageLogin = ({ route, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        const user = UserList.find(user => user.email === email && user.password === password);
        if (user) {
          navigation.navigate('MakeTiket');
        } else {
          alert("Gagal untuk Login");
        }
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
        <View style={styles.penjelasan}>
            <Text style={{fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15}}>Login</Text>
                <Text style={{marginBottom: 10, marginHorizontal: 24}}>Login untuk melanjutkan ke pusat bantuan 
                Insitut Bisnis dan Informatika Kesatuan</Text>
        </View>
        <View style={styles.gambar}>
            <Image 
            source={{uri:'https://i.pinimg.com/564x/a9/dd/93/a9dd9332469ecad9d9770985d8e032f0.jpg'}} style={{ width: 200, height: 200,}}/>
        </View>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Email</Text>
                <TextInput
                style={styles.inputEmail}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
                autoCapitalize="none" />
        </View>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30, marginTop: 20}}>Password</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                style={[styles.input, {flex: 1}]}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!showPassword} />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={showPassword ? require('../assets/eye-open.png') : require('../assets/eye-slash.png')}
                style={styles.eyeIcon} />
            </TouchableOpacity>
        </View>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 25}}>Tidak punya akun?</Text>
            <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>REGISTER</Text>
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
        marginTop: 50
    },
    inputEmail: {
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
        marginVertical: 15,
        marginHorizontal: 20
      },
      buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
      register: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 25
      },
      registerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#D6D3D3',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
        marginVertical: 10,
        marginHorizontal: 20
      },
      input: {
        fontSize: 16,
      },
      eyeIcon: {
        width: 20,
        height: 20,
        marginRight: 1,
      },
})

export default PageLogin;
