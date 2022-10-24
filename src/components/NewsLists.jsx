import { StyleSheet, Text,FlatList,View } from 'react-native'
import React, { useEffect,useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import NewsItem from './NewsItem'
import useSWR from 'swr'

const url = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
const fetcher= url => fetch(url).then(res=>res.json())
const NewsLists = () => {
  //useSWR
  const {data,error}= useSWR(url,fetcher)
  //customHook
  // const [data, setData] = useState('')
  // const{isLoading, error, responseJSON}=useFetch(url)
  //Hook nomrmal
  // useEffect(() => {
  //   async function getNews (){
  //     fetch(url)
  //     .then(res =>res.json())
  //     .then((res)=> setData(res))
  //   }
  //   getNews()
  // }, [])
  if (!data) return <Text>Loading....</Text>
  if (error) return <Text>Error....</Text>
  return (
    // <View>
    //   <Text>{JSON.stringify(responseJSON)}</Text>
    // </View>
    <FlatList
    data={data.Data}
    renderItem={({item}) => <NewsItem {...item}/>}
    keyExtractor={item=> item.id}
    ItemSeparatorComponent={()=> <View style={{borderBottomWidth: StyleSheet.hairlineWidth}}/>}
    contentContainerStyle={{paddingVertical:50}}
    ListHeaderComponent={()=> <Text style={{fontWeight:'bold', fontSize:32}}>Initial</Text>}
    ListFooterComponent={()=> <Text style={{fontWeight:'bold', fontSize:32}}>The End</Text>}
    inverted={false}
    numColumns={1}
    onEndReached={()=> alert('Final')}
    />
  )
}

export default NewsLists

const styles = StyleSheet.create({})
