import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './assets/components/Header'
import Table from './assets/components/Table'

const App = () => {
  // menggyna
  const [users, setUsers] = useState([]);

  // menggunakan usetate
  useEffect(() => {
    // mendapatkan akses data dari api random user
    axios.get('https://randomuser.me/api/?results=123')
      .then(response => {
        // mengambil data yang diperlukan
        const userData = response.data.results.map((user, index) => ({
          nama: `${user.name.first} ${user.name.last}`,
          tanggalLahir: user.dob.date,
          umur: user.dob.age,
          index: index + 1
        }));
        // menyimpan data user
          setUsers(userData)
        })
        .catch(error => {
          console.error(error)
        })
  }, [])
  
  
  if (users.length === 0) {
    return(
      <div className='pt-24 '>
        <h2 className='text-4xl text-gray-900 text-center font-semibold'>Loading</h2>
      </div>
    )
  }

  return (
    <>
    <Header />
    <Table users={users} />
    </>
  )
}

export default App