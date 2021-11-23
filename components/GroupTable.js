import SelectBox from "./SelectBox"
import { useEffect, useState } from "react";
import useTranslation from 'next-translate/useTranslation'
import ErrorComponent from "./Error";

export default function GroupTable({ Data }) {
    try {
        const { t, lang } = useTranslation("common")
        const [groups, setGroups] = useState([]);
        const [selectedGroup, setSelectedGroup] = useState({});

        const onGroupChanged = (e) => {
            let selected = Data.filter(item => item.name == e);
            selected.length > 0 && setSelectedGroup(selected[0]);
        }

        useEffect(() => {
            try {
                let groupData = [];
                Data && Data.map(item => {
                    groupData.push({ key: item.name, title: item.name });
                })
                setGroups(groupData);
                groupData.length > 0 && setSelectedGroup(Data[0]);
            }
            catch (e) { }
        }, []);

        return (
            <>
                <div id="puandurumu">
                    <SelectBox Data={groups} onSelectChanged={onGroupChanged} />

                    <table cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td className="tdStats"></td>
                                <td>{t('common:takim')}</td>
                                <td className="tdStats">{t('common:t_om')}</td>
                                <td className="tdStats">{t('common:t_g')}</td>
                                <td className="tdStats">{t('common:t_b')}</td>
                                <td className="tdStats">{t('common:t_m')}</td>
                                <td className="tdStats">{t('common:t_ag')}</td>
                                <td className="tdStats">{t('common:t_yg')}</td>
                                <td className="tdStats">{t('common:t_a')}</td>
                                <td className="tdStats">{t('common:t_p')}</td>
                            </tr>
                            {
                                selectedGroup.teams && selectedGroup.teams.map(item => {
                                    return <tr key={item.name}>
                                        <td className="tdStats"><img className="tableflag" src={"/assets/img/flags/" + item.name + ".png"} /></td>
                                        <td>{t(`country:${item.name}`)}</td>
                                        <td className="tdStats">{item.om}</td>
                                        <td className="tdStats">{item.g}</td>
                                        <td className="tdStats">{item.b}</td>
                                        <td className="tdStats">{item.m}</td>
                                        <td className="tdStats">{item.ag}</td>
                                        <td className="tdStats">{item.yg}</td>
                                        <td className="tdStats">{item.a}</td>
                                        <td className="tdStats">{item.p}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
    catch (e) {
        return <ErrorComponent />
    }


}