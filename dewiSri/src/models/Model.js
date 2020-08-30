import {API_ADDRESS} from '../system/Strings'
export var responseData = null;

    //get function
export function getDataFunction (route) {  
    return new Promise((resolve,reject)=>{
        fetch(API_ADDRESS+route,
        {
            method : 'GET',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                "access-control-allow-origin" : "*",
        }
      }).then((response)=> response.json())
      .then((responseJson)=>{
        responseData = responseJson;
        console.log(responseJson);
        
        console.log(API_ADDRESS+route);
      
        resolve(true);
      }).catch((error) => {

          reject(true);

      });

    });  
}
    //post function

export function postFunction(data,route) {
  return new Promise((resolve, reject) => {

      fetch( API_ADDRESS + route, {
          method: 'post',
          headers: {
              'Accept' : 'application/json',
            //   'Content-Type' : 'multipart/form-data',
              "access-control-allow-origin" : "*"
          },
          body : data
      })
      .then((response) => response.json())
      .then((responseJson) => {

          responseData = responseJson
          resolve(true)

      }).catch((error) => {
          console.error(error);

          reject(true)
      });
      console.log(data);
  })
}

export function addtocart() {
    return new Promise((resolve, reject) => {
  
        fetch( API_ADDRESS + 'postToCart', {
            method: 'POST',
            headers: {
                'Accept' : 'applications/json',
                'Content-Type' : 'applications/json',
                "access-control-allow-origin" : "*"
            },
            body : JSON.stringify({
                'postId' : 'akow',
                'userId' : 0,
                'orderAmmount' : 0
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
  
            responseData = responseJson
            resolve(true)
            console.log(API_ADDRESS+'postToCart','API_ADDRESS');
            
        }).catch((error) => {
            console.error(error);
  
            reject(true)
        });
    })
  }