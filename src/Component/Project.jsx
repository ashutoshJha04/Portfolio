import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import digi from '../assets/prodigi.png';
import vite from '../assets/provite.png';
import gullu from '../assets/progullu.png';
import port from '../assets/proport.png';
import coder from '../assets/procoder.png';
import food from '../assets/profood.png';
 
import './comp/proj.css'

function Project() {
  return (
    <div className="container1">
      <center><div className="cla">Projects</div></center>
      <br />
      <div className="proj_container">
      <div className="b2">
  <a href="/" target={'_blank'}>  <Card sx={{ maxWidth: 345 }} sm={{maxWidth:245}} className="vany1">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={port}
              alt="green iguana"
            />
            <CardContent className="vany">
              <Typography gutterBottom variant="h5" component="div" className="dany">
                Portfolio
              </Typography>
              <Typography variant="body2" className="dany" >
                It is my portfolio and developed by using React js library. 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>
        
       <a href="https://techivite.netlify.app/" target={'_blank'}> <Card sx={{ maxWidth: 345 }} className="vany1">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={vite}
              alt="green iguana"
            />
            <CardContent className="vany">
              <Typography gutterBottom variant="h5" component="div" className="dany">
                Techi-Vite
              </Typography>
              <Typography variant="body2" className="dany">
                This website  created by using basic Express api and very well known Javascript library React.js.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>
        <a onClick={() =>{alert('Code will publish on github')}}  >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={gullu}
              alt="green iguana"
            />
            <CardContent className="vany">
              <Typography gutterBottom variant="h5" component="div" className="dany">
                Gullu-Times
              </Typography>
              <Typography variant="body2" className="dany">
                This website  created by using react and News api.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a></div><br />
       <div className="b2">
       <a href="https://ashu-dev.w3spaces.com/" target={'_blank'}>
      
        <Card sx={{ maxWidth: 345 }} className="vany1">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={coder}
              alt="green iguana"
            />
            <CardContent className="vany">
              <Typography gutterBottom variant="h5" component="div" className="dany">
                Coder
              </Typography>
              <Typography variant="body2" className="dany">
                It is my first website using Bootstrap css framework
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>
        <a href="https://digi-techi.blogspot.com/" target={'_blank'}>

        <Card sx={{ maxWidth: 345 }} className="vany1">
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={digi}
              alt="green iguana"
            />
            <CardContent className="vany">
              <Typography gutterBottom variant="h5" component="div" className="dany">
                Digi-techi
              </Typography>
              <Typography variant="body2" className="dany" >
                This website  created by using pure HTML,CSS,Javascript with some popular library like Swipper.js and Typedjs.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card></a>
        <a onClick={() =>{alert('Code will publish on github')}} target={'_blank'}>

        <Card sx={{ maxWidth: 345 }} className="vany1">
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={food}
            alt="green iguana"
          />
          <CardContent className="vany">
            <Typography gutterBottom variant="h5" component="div" className="dany">
              Food
            </Typography>
            <Typography variant="body2" className="dany">
              Its my first website using  html and css
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card></a>
        </div>
      </div>
    </div>
  );
}

export default Project;
