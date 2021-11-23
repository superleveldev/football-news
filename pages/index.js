import Home from "./Home";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export default function FootballNews({ data }) {
    return <Home NewsData={data.NewsData} GroupsData={data.GroupsData} PlayerData={data.PlayerData} />
}

export async function getServerSideProps({ locale }) {
    const { data } = await client.query({
        query: gql`
         query getData {
            allNews(filter:{lang:{eq:${locale}}, isdeleted:{eq:false}}, orderBy: [groupid_ASC]) {
                id
                groupid
                imageurl
                title
                description
            }

            allScoreboards(orderBy: [name_ASC])
            {
                name
                teams
            }

            allPlayers{
                player 
            }
          }
        `,
    });

    let NewsData = {}, GroupsData = {}, PlayerData = {};
    if (data.allNews && data.allNews.length > 0) {
        NewsData = data.allNews;
    }
    if (data.allScoreboards && data.allScoreboards.length > 0) {
        GroupsData = data.allScoreboards;
    }
    if (data.allPlayers && data.allPlayers.length > 0) {
        PlayerData = data.allPlayers[0].player;
    }
    return { props: { data: { NewsData, GroupsData, PlayerData } } }
}