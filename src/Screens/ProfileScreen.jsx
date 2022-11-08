import { Button, Platform, StyleSheet, Text, View , PermissionsAndroid, Image, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker'

const ProfileScreen = () => {
const [cameraPhoto, setCameraPhoto] = useState()
const [galleryPhoto, setGalleryPhoto] = useState('https://via.placeholder.com/200')  

const selectImage = async () => {
  const options = {
    title: 'Selecciona una Imagen',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    saveToPhotos: true,
    mediaType: 'photo',
    
  }

  await launchImageLibrary(options,response =>{
    if(response.errorCode){
      alert(response.errorMessage)
    }else if (response.didCancel){
      alert('Usuario Cancelo Option!!!')
    } else {
      const path =response.assets[0].uri
      setGalleryPhoto(path)
    }
  })}


  const takePicture = async () => {
    const options = {
      title: 'Tomar una Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      
      presentationStyle: 'popover',
      includeBase64: true,
      saveToPhotos: true,
      mediaType: 'photo',
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if(granted === PermissionsAndroid.RESULTS.GRANTED){
      await launchCamera(options, response => {
        if(response.errorCode){
          alert(response.errorMessage)
        }else if (response.didCancel){
          alert('Usuario Cancelo Option!!!')
        } else {
          const path =response.assets[0].uri
          setCameraPhoto(path)
        }
      })
    }

  }

  return (
    <>
      <Text>ProfileScreen</Text>
      <Button title='Capture Photo' onPress={takePicture}/>
      <Image style={{width:200 , height:200, borderRadius:15}} source={{uri:cameraPhoto}}/>
      {/* <Button title='Open Gallery' /> */}
      <Text>Gallery Photo</Text>
      <TouchableOpacity onPress={selectImage}>
      <Image style={{width:200 , height:200, borderRadius:15}} source={{uri:galleryPhoto}}/>
      </TouchableOpacity>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
