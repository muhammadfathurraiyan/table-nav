import React, { useState } from 'react'

const Table = ({ users }) => {  
  // Mengformat tanggal lahir "YYYY-MM-DD"
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  };
  // menggunakan useState
  const [indexAwal, setindexAwal] = useState(0)
  const [indexAkhir, setindexAkhir] = useState(5)
  
  // next 1 baris
  const next = () => {
    if(indexAwal != 118 && indexAkhir != 123){
      setindexAwal(indexAwal + 1)
      setindexAkhir(indexAkhir + 1)
    }
  }

  // prev 1 baris
  const prev = () => {
    if(indexAwal != 0 && indexAkhir != 5){
      setindexAwal(indexAwal - 1)
      setindexAkhir(indexAkhir - 1)
    }
  }

  // next 5 baris
  const nextPage = () => {
    if(indexAwal != 118 && indexAkhir != 123 && indexAwal <= 114){
      setindexAwal(indexAwal + 5)
      setindexAkhir(indexAkhir + 5)
    }else {
      setindexAwal(118)
      setindexAkhir(123)
    }
  }

  // prev 5 baris
  const prevPage = () => {
    if(indexAwal != 0 && indexAkhir != 5 && indexAkhir >= 10){
      setindexAwal(indexAwal - 5)
      setindexAkhir(indexAkhir - 5)
    }else {
      setindexAwal(0)
      setindexAkhir(5)
    }
  }

  // page pertama
  const firstPage = () => {
      setindexAwal(0);
      setindexAkhir(5);
  }

  // page akhir
  const lastPage = () => {
    if (indexAwal !== 118 && indexAkhir !== 123) {
      setindexAwal(118);
      setindexAkhir(123);
    }
  };
  
  return (
    <div className='max-w-[968px] mx-auto grid gap-6  justify-center gap-x-7'>        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-[860px] text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Id
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Birthday
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                {users.slice(indexAwal, indexAkhir).map((user) => (
                  <tr key={user.index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-6 py-4">
                        { user.index }
                      </td>
                      <td className="px-6 py-4">
                        {user.index < 10 ? `BS-0${ user.index }` : `BS-${ user.index }`}
                      </td>
                      <td className="px-6 py-4">
                        {user.nama}
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(user.tanggalLahir)}
                      </td>
                      <td className="px-6 py-4">
                        {user.umur}
                      </td>
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className="flex flex-col items-center">
            <div className="inline-flex gap-x-1">
                <button onClick={firstPage} className="flex items-center justify-center px-4 h-10 text-base text-white duration-300 bg-gray-800 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="material-icons">first_page</span>
                </button>
                <button onClick={prevPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white duration-300 bg-gray-800 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="material-icons">keyboard_double_arrow_left</span>
                </button>
                <button onClick={prev} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white duration-300 bg-gray-800 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="material-icons">navigate_before</span>
                </button>
                <button onClick={next} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white duration-300 bg-gray-800 border-0 border-l border-gray-700 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span className="material-icons">navigate_next</span>
                </button>
                <button onClick={nextPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white duration-300 bg-gray-800 border-0 border-l border-gray-700 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="material-icons">keyboard_double_arrow_right</span>
                </button>
                <button onClick={lastPage} className="flex items-center justify-center px-4 h-10 text-base font-medium text-white duration-300 bg-gray-800 border-0 border-l border-gray-700 rounded-sm hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="material-icons">last_page</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Table