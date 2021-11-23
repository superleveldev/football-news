export default function SelectBox({ Data, onSelectChanged }) {
    return (
        <select className="minimal" onChange={(e) => onSelectChanged(e.target.value)}>
            {
                Data && Data.map(item => {
                    return <option key={item.key}>{item.title}</option>
                })
            }
        </select>
    )
}