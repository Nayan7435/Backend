require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const apiData = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Hélmut",
        "last": "Ferreira"
      },
      "location": {
        "street": {
          "number": 5976,
          "name": "Rua Duque de Caxias "
        },
        "city": "Araruama",
        "state": "Pernambuco",
        "country": "Brazil",
        "postcode": 53184,
        "coordinates": {
          "latitude": "-78.9065",
          "longitude": "-154.9584"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "helmut.ferreira@example.com",
      "login": {
        "uuid": "77e95097-6d56-4179-94d9-5a0ef4a751e4",
        "username": "ticklishlion394",
        "password": "credit",
        "salt": "z2uAfDLL",
        "md5": "7ffa99fbc824e4c8383bb05500af438f",
        "sha1": "b3de43cf1a9ae0c927148eeddd52806d344e670f",
        "sha256": "4c2c23fdaf2236686ce691a02a2a57bb175eb0b52cae1cfe192f36c34cc36c71"
      },
      "dob": {
        "date": "1982-04-01T21:56:31.549Z",
        "age": 43
      },
      "registered": {
        "date": "2003-02-09T22:05:49.418Z",
        "age": 22
      },
      "phone": "(92) 6431-8275",
      "cell": "(29) 5634-9480",
      "id": {
        "name": "CPF",
        "value": "021.548.284-45"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/91.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
      },
      "nat": "BR"
    }
  ],
  "info": {
    "seed": "942eb40cc94ff2f4",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res) => {
    res.send('nayangohel31')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login first...</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h1>Welcome to the Priya Nail Art.</h1>')
})

app.get('/github', (req,res) => {
    res.send(apiData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})