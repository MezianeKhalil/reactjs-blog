import useSWR from 'swr'
import axios from 'axios'
import { GET_BLOG } from '../services/endPoints'

export function useBlog(id){
    const fetcher = ()=>{
        return axios.get(`${GET_BLOG}/${id}`)
    }
    const { data, error, mutate } = useSWR('use-blog', fetcher, {revalidateOnMount:true} )
    return {
        mutate,
        error,
        isLoading: !error && !data,
        data
    }
}