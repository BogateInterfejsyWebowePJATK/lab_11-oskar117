import React from "react";

export default function RandomNumbers() {

  const [numbers, setNumbers] = React.useState([])

  React.useEffect(() => {
    randomNumbers()
  }, [])

  const randomNumbers = () => {
    setNumbers(Array.apply(0, Array(10)).map(() => Math.floor(Math.random() * 20) - 10))
  }

  return (
    <>
        <button onClick={randomNumbers}>Losuj</button>
        <ul>
            {numbers.map((i, x) => {
                return <li key={x}>{i}</li>
            })}
        </ul>   
    </>
  );
}