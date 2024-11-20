import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Position = () => {
  return (
    <View style={styles.wrapper}>
        <Text style={styles.headerText}>HAPPY'SSHOPPING🩷</Text>
        <View style={styles.cartWrapper}>
      {/* Menggunakan require untuk memuat gambar */}
            <Image source={require('../(tabs)/cart.png')} style={styles.iconCart} />
            <Text style={styles.notif}>25</Text>
        </View>
    <Text style={styles.text}>Keranjang</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {padding:100, alignItems: 'center',},
  headerText: {
    fontSize: 30, // Ukuran teks
    fontWeight: 'bold', // Membuat teks tebal
    color: 'black', // Warna teks
    marginBottom: 20, // Jarak di bawah teks
  },
  cartWrapper: {
    borderWidth:5,
    borderColor: 'pink',
    width:93,
    height:93,
    borderRadius:93 / 2,
    justifyContent:'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {fontSize:14, color: '#black', fontWeight:'600', marginTop:6},
  notif: {fontSize:12, color: 'white', backgroundColor:'#6FCF97', padding: 4, borderRadius:25,
        width:24, height:24, position:'absolute',top: 0, right:0,
  }
});
