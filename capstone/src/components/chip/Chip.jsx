import React from 'react'

const Chip = ({data,setSelectMovies,selectedMovies}) => {
    const removemovie=()=>{
        if(selectedMovies.includes(data)){
            setSelectMovies((prev)=>prev.filter((item)=>item!==data))
        }else{
            setSelectMovies((prev)=>[...prev,data])
        }
    }
  return (
    <div style={{background:"green", padding:"12px", borderRadius:"12px",cursor:"pointer"}}>
        {data} <span onClick={removemovie}>⨯</span>
    </div>
  )
}

export default Chip