import React,{useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const GET_API = 'https://dummy.restapiexample.com/api/v1/employee/1';
const POST_API = 'https://dummy.restapiexample.com/api/v1/create';
const PUT_API = 'https://dummy.restapiexample.com/api/v1/update/21';
const DELETE_API = 'https://dummy.restapiexample.com/api/v1/delete/2';

const RequestScreen = () => {
  const [getResponse,setGetResponse]= useState()
  const [postResponse,setPostResponse]= useState()
  const [putResponse,setPutResponse]= useState()
  const [deleteResponse,setDeleteResponse]= useState()

  //Get Data
  const getRequets = async ()=> {
    try {
      const response = await fetch(GET_API)
      const json = await response.json()
      setGetResponse(json)
    } catch (error) {
      console.log(error)
    }
  }
  //Post Data
  const postRequest = async ()=> {
    try {
      const response = await  fetch (POST_API,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Jose",
          salary: 'test',
          age: 'test',
        }),
      });
      const json = await response.json()
      setPostResponse(json)
    } catch (error) {
      console.log(error)
    }
  }

  //put Data
  const putRequest = async () => {
    try {
        const response = await fetch(PUT_API, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name: 'Carolina',
                salary: 'test',
                age: 'test',
            }),
        });
        const json = await response.json();
        setPutResponse(json);
    } catch (e) {
        console.log(e);
    }
}
//delete Request
const deleteRequest = async () => {
  try {
      const response = await fetch(DELETE_API, {
          method: "DELETE",
          headers: {
              "Content-Type" : "application/json",
          },
      });
      const json = await response.json();
      setDeleteResponse(json);
  } catch (e) {
      console.log(e);
  }
}
  return (
    <View style={styles.container}>
      <Text style={{fontSize:22, fontWeight:'bold'}}>Request Screen</Text>
      {/*GET REQUEST */}
      <Text>getResponse: {JSON.stringify(getResponse)}</Text>
      <Button title='GET' onPress={getRequets}/>
      {/*POST REQUEST */}
      <Text>postResponse: {JSON.stringify(postResponse)}</Text>
      <Button title='POST' onPress={postRequest}/>
      {/*PUT REQUEST */}
      <Text>putResponse: {JSON.stringify(putResponse)}</Text>
      <Button title='PUT' onPress={putRequest}/>
      {/*PUT REQUEST */}
      <Text>deleteResponse: {JSON.stringify(deleteResponse)}</Text>
      <Button title='DELETE' onPress={deleteRequest}/>
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 40,
  },
});
