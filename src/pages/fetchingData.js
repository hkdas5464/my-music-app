import React, { useEffect, useState } from "react";
import Card from "../Compononents/Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import './fetch.css';
import Header from '../Compononents/Header/NavBar';
import Loding from './Loding';


const useStyles = makeStyles((theme) => ({
  gridroot: {
    flexGrow: 1,
    padding: theme.spacing(2),
   
  },
  
  
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function FetchingData() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [lodesSong, setLodesSong] = useState([]);

  useEffect(() => {
    fetch("https://react-music-18cff-default-rtdb.firebaseio.com/songs.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const songs = [];
        for (const key in data) {
          const song = {
            id: key,
            ...data[key],
          };
          songs.push(song);
        }
        setLoading(false);
        setLodesSong(songs);
      });
  }, []);

  if (loading) {
    return <div className="loder">
      <Loding/>
      </div>
  }


  return (
    <div>
      <Header title="Music App" to="Upload" page="/upload"/>
    <Grid
    className={classes.gridroot}
    spacing={0}
    container
   
  >
      {lodesSong &&
        lodesSong.map((e) => {
          if (loading) {
            return <section>Loading.....</section>;
          }else
           return (
            <div >
           
              <Grid item md={12} className={classes.paper} overflow="auto">
                <div className="data-box">
                <Card
                  imageurl={e.imageurl}
                  name={e.title}
                  songurl={e.songurl}
                  />
                  </div>
              </Grid>
            
            </div>
          );
        })}


    </Grid>
  
    </div>
  );
}

export default FetchingData;
