fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((response) => console.log(response)); 

const data =  
{
  "message": "https://images.dog.ceo/breeds/kuvasz/n02104029_3217.jpg",
  "status": "success"
}