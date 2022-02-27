import useSWR from 'swr'
import axios from 'axios'
import setAuthHeader from '../services/setAuthHeader'
import { GET_BLOGS_AUTHOR } from '../services/endPoints'

export function useBlogsAuthor(){
    const fetcher = ()=>{
        const token = localStorage.getItem("TOKEN")
        setAuthHeader(token)
        return axios.get(GET_BLOGS_AUTHOR)
    }
    const { data, error, mutate } = useSWR('use-blogsAuthor', fetcher, {revalidateOnMount:true} )
    
    return {
        mutate,
        error,
        isLoading: !error && !data,
        data
    }
}