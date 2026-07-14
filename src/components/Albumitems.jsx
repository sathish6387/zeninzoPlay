import React from 'react'
import { useNavigate } from 'react-router-dom'

function Albumitems(song) {
    const albumItems = useNavigate()
    return (
        <div onClick={()=>albumItems(`/album/${song.id}`)} className='min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#18181B]'>
            <img className='rounded' src={song.image} alt="" />
            <p className='font-bold mt-2 mb-1'>{song.name}</p>
            <p className='text-slate-200 text-sm'>{song.desc}</p>
        </div>
    )
}

export default Albumitems