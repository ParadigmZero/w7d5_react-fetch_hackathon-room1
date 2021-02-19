import React from "react";

function StatsTable({ stats }) {
  return (


    <table>
    <tbody>
      <tr>
        <td>HP</td>
        <td> {stats && stats[0].base_stat}</td>
      </tr>
      <tr>
        <td>Attack</td>
        <td> {stats && stats[1].base_stat}</td>
      </tr>
      <tr>
        <td>Defense</td>
        <td> {stats && stats[2].base_stat}</td>
      </tr>
      <tr>
        <td>Special Attack</td>
        <td> {stats && stats[3].base_stat}</td>
      </tr>
      <tr>
        <td>Special Defense</td>
        <td> {stats && stats[4].base_stat}</td>
      </tr>
      <tr>
        <td>Speed</td>
        <td> {stats && stats[5].base_stat}</td>
      </tr>
      </tbody>
    </table>
  );
}
export default StatsTable;
