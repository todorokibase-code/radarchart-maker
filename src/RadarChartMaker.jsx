import { useState } from "react";
import React from "react";
import StatsBoard from "./StatsBoard";
import { PLAYER, PLAYERS } from './playerData'
import Player from './Player';
import Prediction from './Prediction'
import VsComp from "./VsComp";
function RadarChartMaker() {
  const [predictionValue, setPredictionValue] = useState("");

  const styles = {

    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
      alignItems: 'center',
      border: 'solid'

    },
    content_fit_div: {
      display: "inline-block",
      backgroundColor: '#f0f0f0'
    }
  }
  return (

    <>
      <div>

        <Prediction predictionValue={predictionValue} handleChange={setPredictionValue} />
        <div style={styles.container}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>
              勝利者：{predictionValue}
            </p>
          </div>
          <Player player={PLAYERS[0]} pos={0} />
          <VsComp />
          <Player player={PLAYERS[1]} pos={1} />
        </div>
      </div>

    </>
  )
}

export default RadarChartMaker;