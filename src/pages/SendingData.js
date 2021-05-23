import React from 'react';
import { useHistory } from 'react-router-dom';
import SonfForm from './songForm';


function SendingData() {
    const history =useHistory();
    function addSongHandler(SongData){
        fetch('https://react-music-18cff-default-rtdb.firebaseio.com/songs.json',{
            method:'POST',
            body:JSON.stringify(SongData),
            headers:{
                'Content-TYpe':'application/json'
            }
        }
        ).then(()=>{
            history.replace("/")
        })
    }
    return (
        <div>
            <SonfForm onAddSong={addSongHandler}/>
        </div>
    )
}

export default SendingData
