import React from 'react'
import MovieBox from '../../components/moviebox/MovieBox';
import styles from './index.module.css';
import { useState } from 'react';
import Chip from '../../components/chip/Chip';
import {useNavigate} from 'react-router-dom';

const genres=[
    {
      id:"Action",
      color:"#FF5209",
      image:<img src="action.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Drama",
      color:"#D7A4FF",
      image:<img src="drama.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Romance",
      color:"#148A08",
      image:<img src="romance.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Thriller",
      color:"#84C2FF",
      image:<img src="thriller.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"western",
      color:"#902500",
      image:<img src="western.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Horror",
      color:"#7358FF",
      image:<img src="horror.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Fantasy",
      color:"#FF4ADE",
      image:<img src="fantasy.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Music",
      color:"#E61E32",
      image:<img src="music.png" style={{width:"160px",height:"120px"}}/>
    },
    {
      id:"Fiction",
      color:"#6CD061",
      image:<img src="fiction.png" style={{width:"160px",height:"120px"}}/>
    }
]
function Register() {
  const [selectedMovies,setSelectMovies] =useState([]);
  const navigate=useNavigate();
  console.log(selectedMovies);
  return (
    <div>
      <div className={styles.container}>
        {
          genres.map((genre)=>(
            <MovieBox key={genre.id} data={genre} selectedMovies={selectedMovies} setSelectMovies={setSelectMovies}/>
          ))
        }
      </div>
      <div 
      style={{
        display:"flex",
        gap:"12px",
        flexWrap:"wrap",
        marginTop:"12px"
      }}>
      {selectedMovies.map((movie)=>(
        <Chip 
          key={movie}
          data={movie}
          selectedMovies={selectedMovies}
          setSelectMovies={setSelectMovies}
        />
      ))}
      </div>
      {
        selectedMovies.length<3?(<p style={{color:"red"}}>Minimum 3 categories are required</p>):(
          <>
          </>
          )
        }
        <button style={{background:"green", padding:"12px", borderRadius:"12px",cursor:"pointer",border:"none",marginTop:"12px"}} onClick={()=>{
          navigate("/showcase")
        }}
        disabled={selectedMovies.length<3}
        > 
          Next
        </button> 
    </div>
  )
}

export default Register;