import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type PostProps = {
  // id: number;
  // title: string;
  // author: {
  //   name: string;
  // }
  // content: string;
  // published: boolean;

  numara: number;
  baslik:string;
  aciklama: string;
  aktif: boolean

}

const Post: React.FC<{post: PostProps}> = ({ post }) => {
  
  
  // const authorName = post.author ? post.author.name : 'Unknown author'

  const authorName = "tamercikkkk"

  return (
    <div onClick={() => Router.push('/p/[numara]', `/p/${post.numara}`)}>
        <h2>{post.baslik}</h2>
        <small>By {authorName}</small>
        <ReactMarkdown source={post.aciklama} />
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default Post