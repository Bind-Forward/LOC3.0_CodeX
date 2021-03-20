import axios from 'axios';
import React, { useContext, useState }  from 'react';

const url = 'http://localhost:5000/graphql';

const api = {
    authUser: async (email, password) => {
        const data = await axios.post(
            url,
            {
              query: `
              query {
                authUser(email: "${email}", password: "${password}"){
                  _id
                  name
                  phoneNo
                  email
                  password
                  role
                  age
                  sex
                  specialization
                  token
                }
              }
            `,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
        );
        return (data.data.data.authUser);
    },
    registerUser: async (name, phoneNo, email, password, isAdmin, role, sex, age, specialization) => {
        const data = await axios.post(
            url,
            {
                query: `
                mutation{
                  registerUser(userInput: {
                    name: "${name}",
                    password: "${password}",
                    phoneNo: "${phoneNo}",
                    email: "${email}",
                    role: "${role}",
                    sex: "${age}",
                    age: ${age},
                    specialization: "${specialization}"
                  }) {
                    _id
                  name
                  phoneNo
                  email
                  password
                  role
                  age
                  sex
                  specialization
                  token
                  }
                }
                `,
            },
            {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
        );
        return data; 
    },
    getDoctors: async () => {
      const data = await axios.post(
        url,
        {
            query: `
            query{
              getDoctors{
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }
            `,
        },
        {
            headers: {
              'Content-Type': 'application/json',
            },
          },
    );
    console.log(data.data.data.getDoctors);
    return data.data.data.getDoctors;
    },
    searchParticularDoctor: async (docId) => {
      const data = await axios.post(
        url,
        {
            query: `
            query{
              searchParticularDoctor(userId: "${docId}"){
                _id
                name
                phoneNo
                email
                password
                role
                age
                sex
                specialization
                token
                about
                location {
                  latitude
                  longitude
                }
              }
            }            
            `,
        },
        {
            headers: {
              'Content-Type': 'application/json',
            },
          },
    );
    return data.data.data.searchParticularDoctor;
    },
    updateUserProfile: async (ID ,name, phoneNo, email, password, sex, age, about, lat, lng) => {
      const data = await axios.post(
          url,
          {
              query: `
              mutation {
                updateUserProfile(userInput: {
                  _id: "${ID}"
                  name: "${name}",
                  phoneNo: "${phoneNo}",
                  email: "${email}",
                  password: "${password}",
                  age: ${age},
                  sex: "${sex}",
                  about: "${about}",
                  location: {
                    latitude: ${lat}
                    longitude: ${lng}
                  }
                }) {
                  name
                  phoneNo,
                  email,
                  password,
                  age,
                  sex,
                  about,
                  location {
                    latitude
                    longitude
                  }
                }
              }
              `,
          },
          {
              headers: {
                'Content-Type': 'application/json',
              },
            },
      );
      return (data.data.data.updateUserProfile); 
  },
  authUser: async (email, password) => {
    const data = await axios.post(
        url,
        {
          query: `
          query {
            authUser(email: "${email}", password: "${password}"){
              _id
              name
              phoneNo
              email
              password
              role
              age
              sex
              specialization
              token
            }
          }
        `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
    );
    return (data.data.data.authUser);
  },
  getUserById: async (ID) => {
    const data = await axios.post(
        url,
        {
          query: `
          query {
            getUserById(userId: "${ID}") {
              name
              phoneNo
              email
              password
              role
              age
              sex
              about
              location {
                latitude
                longitude
              }
            }
          }
        `,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
    );
    return (data.data.data.getUserById);
  },
};

export default api;