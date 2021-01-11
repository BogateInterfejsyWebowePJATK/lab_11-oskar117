import React from "react";

export default function Table({numbers, del = f => f, toBin = f => f, toOct = f => f, toHex = f => f }) {

  return (
     <table>
         <thead>
            <tr>
                <td>LICZBA</td>
                <td>BIN</td>
                <td>OCT</td>
                <td>HEX</td>
            </tr>
        </thead>
        <tbody>
            {numbers.map((i, x) => {
                return (
                    <tr key={x}>
                        <td>{i}</td>
                        <td>{toBin(x)}</td>
                        <td>{toOct(x)}</td>
                        <td>{toHex(x)}</td>
                    </tr>
                )
            })}
        </tbody>
     </table>
  );
}