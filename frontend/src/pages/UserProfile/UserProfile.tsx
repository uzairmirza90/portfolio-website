import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

    const [userInfo, setUserInfo] = React.useState<string>('')
    const navigate = useNavigate()

    React.useEffect(() => {
        if(localStorage.getItem('userInfo')){
            setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "").name)
        }
    }, [])

    React.useEffect(() => {
        if(!localStorage.getItem('userInfo')){
            navigate('/login')
        }
    }, [navigate])
  return (
    <h1>Welcome! {userInfo}</h1>
  )
}

export default UserProfile