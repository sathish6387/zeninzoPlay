import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import play_logo from "../assets/play_logo_bg.png"
import { BiLike } from "react-icons/bi";
import { PlayerContext } from '../context/PlayerContext';

function Displayalbum() {
    const { id } = useParams();
    const albumdata = albumsData[id];
    let duration = 0;
    for(let i=0; i < songsData.length; i++){
        duration += Number(songsData[i].duration);
    }
    const { playWithId } = useContext(PlayerContext);
    return (
        <>
            <Navbar />
            <div className='mt-10 flex flex-col gap-8 md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumdata.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
                        {albumdata.name}
                    </h2>
                    <h4>{albumdata.desc}</h4>
                    <p className='mt-2 flex items-center gap-1'>
                        <div>
                            <img className='inline-block w-8' src={play_logo} alt="" />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <b> Zeninzo Play</b> 3,400 <BiLike /> likes |
                            <b>{songsData.length + " Songs"}</b> | {"About " + Math.floor(duration) + " Mins"}
                        </div>
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#F8FAFC]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden md:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item,index)=>(
                    <div onClick={() => playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#F8FAFC] hover:bg-[#18181B] cursor-pointer'>
                        <p className='text-[#F8FAFC]'>
                            <b className='mr-4 text-[#F8FAFC]'>{index+1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px]'>{albumdata.name}</p>
                        <p className='text-[15px]'>2 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Displayalbum