import { useState, useEffect } from "react";
export const PositionColors = {
    "GK": { color: "#DC3545", left: "1px" },

    "RB": { color: "#28A745", left: "10px" },
    "RWB": { color: "#28A745", left: "10px" },
    "CB": { color: "#28A745", left: "10px" },
    "SW": { color: "#28A745", left: "10px" },
    "CB": { color: "#28A745", left: "10px" },
    "LB": { color: "#28A745", left: "10px" },
    "LWB": { color: "#28A745", left: "10px" },

    "CM": { color: "#FFC107", left: "25px" },
    "DM": { color: "#FFC107", left: "25px" },
    "AM": { color: "#FFC107", left: "25px" },
    "LW": { color: "#FFC107", left: "25px" },
    "RW": { color: "#FFC107", left: "25px" },

    "S": { color: "#007BFF", left: "35px" },
    "CF": { color: "#007BFF", left: "35px" },
}

export function PlayerPosition({ POS }) {
    const [posStyle, setPosStyle] = useState({})
    useEffect(() => {
        if (PositionColors[POS] && PositionColors[POS].color) {
            setPosStyle(PositionColors[POS]);
        }
    }, [POS]);
    return (
        <div className="player-field-div">
            <img src="/assets/img/field.png" className="player-info-table-icons" />
            <div className="player-field-point" style={{ backgroundColor: `${posStyle.color}`, left: `${posStyle.left}` }}></div>
        </div >
    )
}