import useSWR from 'swr'
import axios from 'axios'
import setAuthHeader from '../services/setAuthHeader'
import { GET_PROFILE } from '../services/endPoints'

export function useProfile(){
    const fetcher = ()=>{
        const token = localStorage.getItem("TOKEN")
        setAuthHeader(token)
        if(token){
            return axios.get(GET_PROFILE)
        }
        return false;
    }
    const { data, error, mutate } = useSWR('use-profile', fetcher, {revalidateOnMount:true} )
    
    return {
        mutate,
        error,
        isLoadingProfile: !error && !data,
        user : data
    }
}