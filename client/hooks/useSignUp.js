import { useState } from 'react';
//import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null);

    const signup = async(username,firstName,lastName,password,email,role ) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({username,firstName,lastName,password,isVerfied:false,email,role})
        })
        const json = await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(true);
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json));

            dispatchEvent({type:'LOGIN', payload:json})

            setIsLoading(false)
        }
    }
    return {signup, isLoading, error};
}