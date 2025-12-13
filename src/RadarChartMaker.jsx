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
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p>
                勝利者：{predictionValue}
              </p>
            </div>
            {PLAYERS.map((player, index) => {
              const isFirst = index == 0;
              return (
                <React.Fragment key={index} >
                  <Player player={player} pos={index} />
                  {isFirst && <VsComp />}
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>

    </>
  )
}

export default RadarChartMaker;