import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitems from './Albumitems'
import Songitems from './Songitems'

function Displayhome() {
    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Your Top Playlist</h1>
                <div className='flex overflow-auto'>
                    {
                        albumsData.map((item, index) => (<Albumitems key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                    }
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Recently Played</h1>
                <div className='flex overflow-auto'>
                    {
                        songsData.map((item, index) => (<Songitems key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                    }
                </div>
            </div>
        </>
    )
}

export default Displayhome