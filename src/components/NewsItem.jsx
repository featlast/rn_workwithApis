import { StyleSheet, Text, View,Image,Pressable } from 'react-native'
import React from 'react'

const NewsItem = ({title,imageurl,body,source_info,url,published_on}) => {
  return (
    <Pressable style={styles.container} onPress={()=> alert('Hello')}>
      <Text style={styles.title}>{source_info.name}</Text>
      <Text style={styles.body}>{new Date(published_on).toString().slice(0,11)}</Text>
      <Image source={{uri:imageurl}} style={{width:'98%', height:250, borderRadius:20}}/>
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={2} style={styles.body}>{body}</Text>
    </Pressable>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  container:{
    marginVertical:20,
    paddingHorizontal:15
  },
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  body:{
    fontSize:16,
    color:'gray'
  }
})
