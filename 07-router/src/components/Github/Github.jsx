import React, { useEffect } from 'react'
import {useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //    .then(response => response.json())
    //    .then(data => {
    //     console.log(data)
    //     setData(data)
    //    })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>Github followers: {data.followers}</div>
  )
}

export default Github 

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
    
}