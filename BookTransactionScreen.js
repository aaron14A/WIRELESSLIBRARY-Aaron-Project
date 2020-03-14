 import React from 'react';
 import {Text , View , Button , TouchableOpacity , StyleSheet, PermissionsAndroid} from 'react-native';
 import * as Permissions from 'expo-permissions';
 import {BarCodeScanner} from 'expo-barcode-scanner';
 export default class TransactionScreen extends React.Component{
     constructor(){
         super();
         this.state = {
             hasCameraPermissions : null,
             scanned : false,
             scannedData : '',
             buttonState : 'normal',
         }
     }

     handleBarcodeScanned = async({type,data})=>{
         this.setState({
            scanned : true,
            scannedData : data,
            buttonState : 'normal'
         })
     }

     
     getCameraPermissions = async() =>{
         const {status} = await Permissions.askAsync(Permissions.CAMERA);
         this.setState({
           hasCameraPermissions : status === "granted"
         })
     }
     render(){
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        if(buttonState = 'clicked' && hasCameraPermissions){
            return(
                <BarCodeScanner onBarCodeScanned = {scanned ? undefined : this.handleBarcodeScanned}
                 style = {stylesheet.absoluteFillObject}></BarCodeScanner>
            )
        }else if(buttonState === 'normal'){
         return(
             <View style= {styles.container}>
                 <Text styles = {styles.displayText}>{hasCameraPermissions === true ? this.state.scannedData : 'requestCameraPermissions'}</Text>
                 <TouchableOpacity onPress = {this.getCameraPermissions} style = {Styles.scanButton}><Text style = {Styles.buttonText}>SCAN QR CODE</Text></TouchableOpacity>
                 
             </View>
         );
     }
    }
 }
 const Styles = StyleSheet.create({
  container :{
      flex : 1,
      justifyContent : 'center',
      allignItems :'center',
  },
  displayText : {
      fontSize : 15,
      textDecorationLine : "underline",
  },
  scanButton :{
 backgroundColor : 'red',
  padding : 10,
  marging : 10,
  },
  buttonText :{
      fontSize: 20,
  }
 })