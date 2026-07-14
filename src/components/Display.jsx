import React, { useEffect, useRef } from 'react'
import Displayhome from './Displayhome'
import { Route, Routes, useLocation } from 'react-router-dom'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets';

function Display() {
    const displayref = useRef();
    const loc = useLocation();
    const isAlbum = loc.pathname.includes("album");
    const albumId = isAlbum ? loc.pathname.slice(-1) : "" ;
    const bgclr = albumsData[Number(albumId)].bgColor;

    useEffect(()=>{
        if(isAlbum){
            displayref.current.style.background = `linear-gradient(${bgclr},#09090B)`;
        }
        else{
            displayref.current.style.background = '#09090B'
        }
    })
    return (
        <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#09090B] text-[#F8FAFC] overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<Displayhome />}></Route>
                <Route path='/album/:id' element={<Displayalbum />}></Route>
            </Routes>
        </div>
    )
}

export default Display