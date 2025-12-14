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

    },
    content_fit_div: {
      display: "inline-block",
      backgroundColor: '#f0f0f0'
    }
  }
  return (

    <>
      <div style={styles.container}>
        <div>
          <Prediction predictionValue={predictionValue} handleChange={setPredictionValue} />
          <div style={{ backgroundColor: '#f0f0f0', border: 'solid' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <h2>
                勝利者：{predictionValue}
              </h2>
            </div>

            <Player player={PLAYERS[0]} pos={0} />
            <VsComp />
            <Player player={PLAYERS[1]} pos={1} />

          </div>

          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="みんなで戦力分析をしよう！" data-hashtags="井上尚弥,リヤド・シーズン" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>

    </>
  )
}

export default RadarChartMaker;