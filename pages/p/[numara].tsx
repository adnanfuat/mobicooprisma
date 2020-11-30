import React from 'react'
import { GetServerSideProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Router from 'next/router'
import { PostProps } from '../../components/Post'

async function publish(numara: number): Promise<void> {
  const res = await fetch(`http://localhost:3000/api/publish/${numara}`, {
    method: 'PUT',
  })
  const data = await res.json()
  await Router.push('/')
}

async function destroy(numara: number): Promise<void> {
  const res = await fetch(`http://localhost:3000/api/post/${numara}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  Router.push('/')
}

const Post: React.FC<PostProps> = props => {
  let baslik = props.baslik
  if (!props.aciklama) {
    baslik = `${baslik} (Draft)`
  }

  return (
    <Layout>
      <div>
        <h2>{baslik}</h2>
        {/* <p>By {props?.author?.name || 'Unknown author'}</p> */}
        <p>Author: Kader</p>
        <ReactMarkdown source={props.aciklama} />
        {!props.aktif && (
          <button onClick={()=> publish(props.numara)}>
            Publish
          </button>
        )}
        <button onClick={()=> destroy(props.numara)}>
          Delete
        </button>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/post/${context.params.numara}`)
  const data = await res.json()
  return {props: { ...data }}
}

export default Post
