import React from 'react'
import { ArticleHeader, BlogContent } from './../blocs/_index'
import { useBlog } from './../../swrHooks/useBlog'
import { useParams } from 'react-router-dom'

export default function ArticleLayout() {
  const {id} = useParams()
  const {data, error, isLoading} = useBlog(id)
  return (
    <>
      {
        !isLoading && data && (
          <React.Fragment key={Math.random()*1000}>
            <ArticleHeader article={data.data}/>
            <BlogContent article={data.data}/>
          </React.Fragment>
        )
      }
        
    </>
  )
}
