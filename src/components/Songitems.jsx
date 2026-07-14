import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext';

function Songitems(song) {
    const { playWithId } = useContext(PlayerContext);
    return (
        <div onClick={() => playWithId(song.id)} className='max-w-[200px] min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#18181B]'>
            <img className='rounded min-w-[155px] max-h-[189px] ' src={song.image} alt="" />
            <p className='font-bold mt-2 mb-1'>{song.name}</p>
            <p className='text-slate-200 text-sm'>{song.desc}</p>
        </div>
    )
}

export default Songitems