import { useState, useEffect } from "react";
import { PlayerPosition, PositionColors } from "./PlayerPosition";
import useTranslation from 'next-translate/useTranslation'
import ErrorComponent from "./Error";

export default function Players({ Data }) {
    const { t, lang } = useTranslation('common')
    const [selected, setSelected] = useState({ index: 0, data: {} });

    useEffect(() => {
        if (Data && Data[0]) { setSelected({ index: 0, data: Data[0] }) }
    }, []);

    try {
        return (
            <>
                <div id="oyuncular" className="section-header">
                    <div>{t('oyuncuIstatistikleri')}</div>
                    <div className="all">{t('tumu')}</div>
                </div>

                <div className="player-stats-main">
                    <div className="player-stats-list">
                        {
                            Data && Data.map((item, index) => {
                                return <div key={index} className={`player-stats-list-item ${index == selected.index ? "active" : ""}`} onClick={() => { setSelected({ index: index, data: Data[index] }); }}>
                                    <img className="image" src={item.avatarImg} />
                                    <div className="info">
                                        <div className="name">{item.name}</div>
                                        <div>
                                            <img className="flag" src={`/assets/img/flags/${item.country}.png`} />
                                            <span className="country">{t(`country:${item.country}`)}</span>
                                        </div>
                                        <div className="position" style={{ backgroundColor: `${PositionColors[item.position].color}` }}>{item.position}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    {
                        <div className="player-stats-player">
                            <div className="info">
                                <div>
                                    <img src={`/assets/img/flags/${selected.data.country}.png`} className="flag" />
                                    <span className="player-name">{selected.data.name}</span>
                                </div>
                                <table cellSpacing="0" cellPadding="0" className="player-info-table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <PlayerPosition POS={selected.data.position} />
                                            </td>
                                            <td><img src="assets/img/calendar.png" className="player-info-table-icons" /></td>
                                            <td><img src="assets/img/height.png" className="player-info-table-icons" /></td>
                                            <td><img src="assets/img/foot.png" className="player-info-table-icons" /></td>
                                        </tr>
                                        <tr>
                                            <td>{t(`position:${selected.data.position}`)}</td>
                                            <td>{t('common:yas')} {selected.data.age}</td>
                                            <td>{selected.data.height} CM</td>
                                            <td>{t(`common:${selected.data.foot}`)} {t('common:ayak')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="player-info-stats-table">
                                    <tbody>
                                        <tr>
                                            <td className="info-stats-table-col"><img src="assets/img/whistle.png" className="info-stats-table-col-img" /></td>
                                            <td>{t('common:oynadigiMac')}</td>
                                            <td className="info-stats-table-col"><span className="number">{selected.data.matchPlayed}</span></td>
                                            <td className="info-stats-table-col"><img src="assets/img/cards.png" className="info-stats-table-col-img" /></td>
                                            <td>{t('common:sariKart')}</td>
                                            <td className="info-stats-table-col"><span className="number">{selected.data.yellowCard}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="info-stats-table-col"><img src="assets/img/ball.png" className="info-stats-table-col-img" /></td>
                                            <td>{t('common:gol')}</td>
                                            <td className="info-stats-table-col"><span className="number">{selected.data.goal}</span></td>
                                            <td className="info-stats-table-col"><img src="assets/img/cards.png" className="info-stats-table-col-img" /></td>
                                            <td>{t('common:kirmiziKart')}</td>
                                            <td className="info-stats-table-col"><span className="number">{selected.data.redCard}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="info-stats-table-col"><img src="assets/img/ball.png" className="info-stats-table-col-img" /></td>
                                            <td>{t('common:asist')}</td>
                                            <td className="info-stats-table-col"><span className="number">{selected.data.asist}</span></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="image">
                                <img src={selected.data.fullImg} className="info-stats-player-img" />
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }
    catch (e) {
        return <ErrorComponent />
    }

}