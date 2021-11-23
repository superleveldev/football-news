import Header from "../components/Header"
import NavBar from "../components/Navbar"
import Content from "../components/Content"
import Slider from "../components/Slider"
import TimeCounter from "../components/Counter"
import Matches from "../components/Matches"
import { VerticalAd, HorizontalAd } from "../components/Advertisement"
import GroupTable from "../components/GroupTable"
import NewsCard from "../components/NewsCard"
import Players from "../components/Players"
import Footer from "../components/Footer"

export default function Home({ NewsData, GroupsData, MatchesData, PlayerData }) {
    return (
        <>
            <Header />
            <NavBar />
            <VerticalAd />
            <Content>
                <Slider Data={NewsData} />
                <TimeCounter TargetDate={new Date(2022, 10, 21, 13, 0, 0, 0)} />
                <Matches Data={MatchesData} />
                <HorizontalAd />
                <GroupTable Data={GroupsData} />
                <NewsCard Data={NewsData} />
                <Players Data={PlayerData} />
            </Content>
            <Footer />
        </>
    )
}

