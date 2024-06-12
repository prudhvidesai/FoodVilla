import React, { useEffect } from 'react'
import { useState } from 'react'

const useOnline = () => {
    const [onlineStat,setStat]=useState(true)

    useEffect(()=>{
        window.addEventListener('offline', function(){
            setStat(false)
           })
           window.addEventListener('online', function(){
               setStat(true)
              })
    },[])
    

  return onlineStat
}

export default useOnline