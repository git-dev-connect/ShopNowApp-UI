import React, { useEffect } from 'react'
import { apiService } from '../globalUtils/ApiHandler'
const Test = () => {
const Auth = useAuth();
    const user = Auth.getUser();
    useEffect(()=>{
        const hello = () =>{
            const response = apiService.test(user);
            console.log(response.data);
        }
    })
  return (
    <div>Test</div>
  )
}

export default Test