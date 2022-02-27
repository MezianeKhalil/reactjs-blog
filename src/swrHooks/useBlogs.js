import useSWR from 'swr'
import axios from 'axios'
import { GET_BLOGS } from '../services/endPoints'

export function useBlogs(){
    const fetcher = ()=>{
        return axios.get(GET_BLOGS)
    }
    const { data, error, mutate } = useSWR('use-blogs', fetcher, {revalidateOnMount:true} )
    
    return {
        mutate,
        error,
        isLoading: !error && !data,
        data
    }
}