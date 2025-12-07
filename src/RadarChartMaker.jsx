import React from "react";
import StatsBoard from "./StatsBoard";
import { PLAYER, PLAYERS } from './playerData'
import Player from './Player';
import Prediction from './Prediction'
import VsComp from "./VsComp";
function RadarChartMaker() {

  const styles = {

    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: 'column',
      alignItems: 'center',

    }
  }
  return (

    <>
      <div style={styles.container}>
        <Prediction />
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

    </>
  )
}

export default RadarChartMaker;