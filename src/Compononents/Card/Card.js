import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Audioplayer from './Audioplayer';
import './Card.css'



const useStyles = makeStyles((theme) => ({
    gridroot:{
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    root: {
    maxWidth: 312,
    minWidth:312
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
  header: {
    backgroundColor: '#282c34',
    maxHeight:10
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const music = props.songurl
 



  return (
    
    <Card className={classes.root}>
      <CardHeader
      className={classes.header} 
      title={props.name}/>

      <CardMedia
        className={classes.media}
        image={props.imageurl}
        title="songs"
      />

      <CardContent></CardContent>
      <CardActions disableSpacing>
        
       
        <Audioplayer music={music}/>
        
      </CardActions>
    </Card>
  
  );
}
