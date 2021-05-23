import React,{useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import Header from '../Compononents/Header/NavBar'
function UploadData(props) {

    const titleInput = useRef();
    const songurlInput= useRef();
    const imageurlInput = useRef();
    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));

    function submitHandler(event){
        event.preventDefault();

        const submitTitle = titleInput.current.value;
        const submitImgeUrl = imageurlInput.current.value;
        const submitSongUrl = songurlInput.current.value;
       
        
        const SongData = {
            title:submitTitle,
            imageurl:submitImgeUrl,
            songurl:submitSongUrl


        }
        props.onAddSong(SongData);
    }
    const classes = useStyles();
    return (
      <div>
        <Header title="Song Upload" to="Home" page="/home"/>
        <div className="App-header">
          
           <form onSubmit={submitHandler} className={classes.root} noValidate autoComplete="off">
        <div>
         
          <TextField label="Song Title" type='text' required id='title' inputRef={titleInput} />
        </div>
        <div>
                   <TextField label="ImageUrl" type='url' required id='image' inputRef={imageurlInput} />
        </div>
        <div>
         
          <TextField label="SongUrl" type='url' required id='image' inputRef={songurlInput} />
        </div>
        <Button type="submit">Submit</Button>
        </form>
        </div>
        </div>
    )
}

export default UploadData
