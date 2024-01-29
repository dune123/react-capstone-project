import React from 'react'
import styles from './MovieBox.module.css'

const MovieBox = ({data,setSelectMovies,selectedMovies}) => {
    const handleclick=()=>{
        if(selectedMovies.includes(data.id)){
            setSelectMovies((prev)=>prev.filter((item)=>item!==data.id))
        }else{
            setSelectMovies((prev)=>[...prev,data.id])
        }
    }
  return (
    <div className={styles.container} 
    style={{
        background:data.color,
        border:`${selectedMovies.includes(data.id)?"4px solid green":"4px solid black"}`}} 
    onClick={handleclick}>
        <h1>{data.id}</h1>
        {data.image}
    </div>
  )
}

export default MovieBox