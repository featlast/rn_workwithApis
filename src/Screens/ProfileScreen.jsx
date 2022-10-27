import { Button, Platform, StyleSheet, Text, View , PermissionsAndroid, Image} from 'react-native'
import React,{useState} from 'react'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker'

const ProfileScreen = () => {
const [cameraPhoto, setCameraPhoto] = useState()
const [galleryPhoto, setGalleryPhoto] = useState()  
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  }

  const openCamera = async () => {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        );
      if(granted === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera(options);
        setCameraPhoto(result.assets[0].uri)
      }
  }

  const openGallery = async () => {
    const result = await launchImageLibrary(options)
    setGalleryPhoto(result.assets[0].uri)
  }
  return (
    <>
      <Text>ProfileScreen</Text>
      <Button title='Open Image Library' onPress={openCamera}/>
      <Image style={{width:200 , height:200, borderRadius:15}} source={{uri:cameraPhoto}}/>
      <Button title='Open Gallery' onPress={openGallery}/>
      <Text>Gallery Photo</Text>
      <Image style={{width:200 , height:200, borderRadius:15}} source={{uri:galleryPhoto}}/>
    </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
