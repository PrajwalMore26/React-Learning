import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
  return (
    <div className='bg-orange-400 text-black text-3xl text-center py-5 '>User</div>
  )
}

export default User