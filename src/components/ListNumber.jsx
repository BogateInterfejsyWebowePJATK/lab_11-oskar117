import React from "react";

export default function ListNumber({x, i, del = f => f, toBin = f => f, toOct = f => f, toHex = f => f, refresh}) {

    const [special, setSpecial] = React.useState("")

    React.useEffect(() => {
        setSpecial("")
    }, [refresh]) 

    return (
        <li key={x}>{i} 
            <button onClick={() => del(x)}>Delete</button>
            <button onClick={() => setSpecial(toBin(x))}>Bin</button>
            <button onClick={() => setSpecial(toOct(x))}>Oct</button>
            <button onClick={() => setSpecial(toHex(x))}>Hex</button>
            <b>{special}</b>
        </li>
    )
}