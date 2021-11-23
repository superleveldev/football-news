import useTranslation from 'next-translate/useTranslation'
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading"
import ErrorComponent from "./Error"


const ALL_MATCHES = gql`query Matches{
    allMatches {
     match
    }
  }`;

export default function Matches() {
    const { t, lang } = useTranslation('common')
    const { data, loading, error } = useQuery(ALL_MATCHES);
    if (loading || error) {
        return <Loading />
    }

    try {
        return (
            <div id="maclar" className="fixture">
                {
                    data?.allMatches && data.allMatches[0].match.map((item, index) => {
                        return <div key={index} className="fixture-card">
                            <div className="fixture-card-text">{item.date}</div>
                            <div className={`fixture-card-scoreboard ${item.sc1 && item.sc1 != "" ? "completed" : "next"}`}>
                                <div className="fixture-card-team1">
                                    <img src={"/assets/img/flags/" + item.tm1 + ".png"} className="fixture-team-flag" />
                                    <br />
                                    <span title={t(`country:${item.tm1}`)} className="fixture-team-name">{t(`country:${item.tm1}`)}</span>
                                    <br />
                                    <span className="fixture-team-score">{item.sc1}</span>
                                </div>
                                <div className="fixture-card-team2">
                                    <img src={"/assets/img/flags/" + item.tm2 + ".png"} className="fixture-team-flag" />
                                    <br />
                                    <span title={t(`country:${item.tm2}`)} className="fixture-team-name">{t(`country:${item.tm2}`)}</span>
                                    <br />
                                    <span className="fixture-team-score">{item.sc2}</span>
                                </div>
                            </div>
                            {
                                item.sc1 == "" && <div className="fixture-card-text">{item.time}</div>
                            }
                        </div>
                    })
                }
            </div>
        )
    }
    catch (e) {
        return <ErrorComponent />
    }
}