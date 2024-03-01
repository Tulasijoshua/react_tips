import React from 'react'
import Navbar from '../../components/admin-navbar/navbar'
import Sidebar from '../../components/admin-sidebar/sidebar'
import { useParams } from 'react-router-dom'
import { Data } from '../../dates/jummy'
import Main from '../../components/admin-main/main'
import Marketing from '../../components/admin-marketing/marketing'

const AdminDashboard = () => {
    const {category} = useParams()
    let cat = Data.find((categ) => categ.url === parseInt(category))
  return (
    <div className='bg-slate-50'>
        <div>
            <Navbar />
            <div className='main max-w-[2300px] mt-[76px] flex flex-1 justify-between'>
                <Sidebar />
                <div className={`main overflow-auto w-full h-full z-10`}>
                    {
                        category === 'main' && <Main />
                    }
                    {
                        category === 'marketing' && <Marketing />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard