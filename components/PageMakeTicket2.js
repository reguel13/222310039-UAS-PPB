import React, { useContext, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { TicketContext } from './TicketContext';


const PageMakeTicket2 = ({navigation}) => {
    const {addTicket} =useContext(TicketContext)
    const [data, setData] = useState([]);
    const [divisi, setDivisi] = useState('');
    const [attachment, setAttachment] = useState('');
    const [priority, setPriority] = useState('Low');
    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    const showAlert = (id) => {
        Alert.alert(
          'Data Submitted',
          `ID: ${id}`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false }
        );
      };

      const handleSubmit = () => {
        if (divisi.trim() !== '' && attachment.trim() !== '' && priority.trim() !== '' && judul.trim() !== '' && deskripsi.trim() !== '') {
            const newEntry = {
                id: data.length + 1,
                divisi,
                attachment,
                priority,
                judul,
                deskripsi,
                tanggal: new Date().toISOString(),
                status: 'Pending',
                response: ''
              };
              addTicket(newEntry);
              showAlert(newEntry.id);
              
        //   setData([...data, newEntry]);
        //   showAlert(newEntry.id);
          // Clear input fields after submission
          setDivisi('');
          setAttachment('');
          setPriority('');
          setJudul('');
          setDeskripsi('');
          
        } else {
          Alert.alert(
            'Input Error',
            'Please fill all fields before submitting.',
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
            { cancelable: false }
          );
        }
      };
    

    return (
        <View style={styles.container}>
             <StatusBar style='' />
        <View style={styles.header}>
        <Image source={require('../assets/logo-ibik-web.png')} style={{ width: 128, height: 128, marginHorizontal:10}} resizeMode='contain'/>
                <Image source={require('../assets/account.png')} style={{width: 50, height: 50, marginHorizontal: 10}} />
                
        </View>
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('MakeTiket')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginHorizontal: 16}}>kembali</Text>
            </TouchableOpacity>
        <View style={styles.penjelasan}>
                <Text style={{fontSize: 20, fontWeight: "bold", marginHorizontal: 24, marginBottom: 15,}}>BUAT TIKET</Text>
                <Text style={{marginBottom: 10, marginHorizontal: 24, alignItems: 'center', justifyContent: 'center'}}>Tiket untuk mahasiswa dalam melaporkan masalah</Text>
        </View>
        <View style={styles.gambar}>
        <Ionicons name="ticket-sharp" size={100} color="black" marginHorizontal={20} marginVertical={30} />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Pilih Divisi</Text>
                <View style={styles.pickerContainer}>
        <Picker 
          selectedValue={divisi}
          onValueChange={(itemValue, itemIndex) => setDivisi(itemValue)}
          style={styles.picker} >

                    <Picker.Item label="General" value="general" />
                    <Picker.Item label="Akademik" value="akademik" />
                    <Picker.Item label="Keuangan" value="keuangan" />
                    <Picker.Item label="Layanan TI" value="layanan ti" />
                    <Picker.Item label="Perpustakaan" value="perpustakaan" />
                    <Picker.Item label="Laboratorium" value="laboratorium" />
                    <Picker.Item label="CDC" value="cdc" />
                    <Picker.Item label="Pendaftaran" value="pendaftaran" />
                    <Picker.Item label="HRD" value="hrd" />

          </Picker>
          </View>
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Judul</Text>
                    <TextInput
                    style={styles.input}
                    value={judul}
                    onChangeText={setJudul}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none" />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Prioritas</Text>
                <View style={styles.pickerContainer}>
                    
        <Picker 
                    selectedValue={priority}
                    onValueChange={(itemValue, itemIndex) => setPriority(itemValue)}
                    style={styles.picker} >

                    <Picker.Item label="Low" value="low" />
                    <Picker.Item label="Medium" value="medium" />
                    <Picker.Item label="High" value="high" />
        </Picker>
        </View>
        </View>
        <View>
        {/* <Button title="Pilih Foto" onPress={pickImage} />
        {imageUri && <Image source={{ uri: imageUri }} style={{ width: 200, height:200}} /> } */}
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30}}>Bukti</Text>
                    <TextInput
                    style={styles.input}
                    value={attachment}
                    onChangeText={setAttachment}
                    keyboardType="name-phone-pad"
                    autoCapitalize="none" />
        </View>
        <View>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 30,}}>Deskripsi</Text>
                    <TextInput
                    style={styles.inputDes}
                    multiline
                    value={deskripsi}
                    onChangeText={setDeskripsi}
                    placeholder="Ketik deskripsi"
                    keyboardType="name-phone-pad"
                    autoCapitalize="none" />
        </View>
        <View>
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
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
        marginTop: 50,
        
    },
    gambar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
        
    },
    input: {
        width: '90%',
        height: 45,
        backgroundColor: '#D6D3D3',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 20,
        fontSize: 16,
        marginVertical: 10,
        marginHorizontal: 20

    },
    inputDes:{
        width: '90%',
        height: 150,
        backgroundColor: '#D6D3D3',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        textAlignVertical: 'top',
        marginVertical: 10,
        marginHorizontal: 20,

    },
    pickerContainer: {
        width: '90%',
        height: 45,
        backgroundColor: '#D6D3D3',
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 25,
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 20,
        justifyContent : 'center',
        alignItems : 'center'
        
    },
    picker: {
        height: 50,
        width: '100%',
        
    
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: '#672968',
        borderRadius: 25,
        borderWidth: 3,
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

export default PageMakeTicket2;