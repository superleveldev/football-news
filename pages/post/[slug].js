import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { gql } from "@apollo/client";
import client from "../../lib/apollo-client";
import slug from 'slug'
import Header from "../../components/Header"
import BlogHeader from "../../components/BlogHeader";
import Content from "../../components/Content"
import { VerticalAd, HorizontalAd } from "../../components/Advertisement"
import Footer from "../../components/Footer"
import Comment from '../../components/Comment';
import CommentList from '../../components/CommentList';

function Post({ data }) {
    const [refresh, setRefresh] = useState(0);

    return <>
        <Header />
        <BlogHeader />
        <VerticalAd />
        <Content style={{ top: 90 }}>
            <img className="mySlides active" src={data.imageurl}></img>
            <HorizontalAd />
            <div className="blog-header">{data.title}</div>
            <ReactMarkdown>{data.content}</ReactMarkdown>
            <hr />
            <Comment onSuccess={() => setRefresh(prev => prev + 1)} contentId={data.groupid} />
            <CommentList contentId={data.groupid} RefreshList={refresh} />
        </Content>
        <Footer />
    </>
}

export async function getStaticPaths() {

    const { data } = await client.query({
        query: gql`
         query getData {
            allNews {
                id
                title
                lang
            }
          }
        `,
    });

    return {
        paths: data.allNews.map(item => {
            return {
                params:
                {
                    slug: `${slug(item.title)}-${item.id}`
                },
                locale: item.lang
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const id = params.slug.split("-").slice(-1)[0];
    const { data } = await client.query({
        query: gql`
         query getData {
            allNews(filter:{id:{eq:${id}}}) {
                id
                groupid
                imageurl
                title
                description
                content
                lang
            }
          }
        `,
    });
    let postData = data?.allNews ? data.allNews[0] : {}
    return { props: { data: postData } }
}

export default Post;