import React from "react";
import List from "./List"
import Table from "./Table"

export default function RandomNumbers() {

  const [numbers, setNumbers] = React.useState([])
  const [table, setTable] = React.useState(false)
  const [refresh, setRefresh] = React.useState(false)

  React.useEffect(() => {
    randomNumbers()
  }, [])

  const randomNumbers = () => {
    setNumbers(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 20) - 10))
    setRefresh(!refresh)
  }

  const del = (x) => {
    let n = [...numbers];
    n.splice(x, 1)
    setNumbers(n)
  }

  const toBin = (x) => {
    return parseInt(numbers[x]).toString(2) 
  }

  const toOct = (x) => {
    return parseInt(numbers[x]).toString(8)
  }

  const toHex = (x) => {
   return parseInt(numbers[x]).toString(16)
  }

  return (
    <>
        <button onClick={randomNumbers}>Losuj</button>
        <button onClick={() => setTable(!table)}>{!table ? "Tabelka" : "Lista"}</button>
        {!table
          ? <List numbers={numbers} del={del} toBin={toBin} toOct={toOct} toHex={toHex} refresh={refresh}></List>
          : <Table numbers={numbers} del={del} toBin={toBin} toOct={toOct} toHex={toHex}></Table>
        }
    </>
  );
}