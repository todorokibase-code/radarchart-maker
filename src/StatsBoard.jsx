// スタッツスコアコンポーネント
const StatsScore = ({ stats, onScoreTextChange }) => {
    const scoreItem = ["議論力", "盤面整理力", "洞察力", "論理的思考能力", "オリジナル性", "直感力"]
    const handleChange = (e) => {
        const item = e.target.id;
        const value = e.target.value;
        const newStats = {
            ...stats,
            [item]: value,
        }
        onScoreTextChange(newStats);
    }
    const scoreRows = Object.keys(stats).map((key, id) => {
        return (
            <tr key={id}>
                <th>{SCORE_ITEM[id]}</th>
                <td><input id={key} type="number" value={stats[key]} onChange={handleChange} /></td>
            </tr>

        )
    })
    return (

        <table>
            <caption>
                ※数値を変更できます
            </caption>
            <tbody>
                {scoreRows}
            </tbody>
        </table>
    )
}
// RadarChartコンポーネント
const RadarChart = ({ stats }) => {
    const { Impact, Structure, Insight, Logic, Originality, Instinct } = stats;

    const coordinate = []
    // 各項目の頂点の座標を配列に追加
    coordinate.push({ x: 100, y: (100 - Impact) }); // 真上の頂点
    coordinate.push({ x: (100 + (Structure * (MS_3_2))), y: 100 - (Structure / 2) }) // 右上の頂点
    coordinate.push({ x: (100 + (Insight * (MS_3_2))), y: 100 + (Insight / 2) }) // 右下の頂点
    coordinate.push({ x: 100, y: (100 + Number(Logic)) }); // 真下の頂点
    coordinate.push({ x: (100 - (Originality * (MS_3_2))), y: 100 + (Originality / 2) }) // 左下の頂点
    coordinate.push({ x: (100 - (Instinct * (MS_3_2))), y: 100 - (Instinct / 2) })// 左上の頂点

    // レーダーチャートのパスを作成
    let rPath = ""
    for (let i = 0; i < coordinate.length + 1; i++) {
        if (i == 0) {
            rPath += `M ${coordinate[i]['x']} ${coordinate[i]['y']} `

        } else if (i < coordinate.length) {
            rPath += `L ${coordinate[i]['x']} ${coordinate[i]['y']} `
        } else if (coordinate.length == i) {
            rPath += `L ${coordinate[0]['x']} ${coordinate[0]['y']}`
        }
    }

    // レーダーチャートの頂点を描画
    const circles = [];
    coordinate.forEach((e, id) => {
        circles.push(
            <circle key={id} cx={e['x']} cy={e['y']} r="3" />
        )
    })
    let j = 0;
    return (
        /**class radar-chart-3にpadding 35px指定してある。 */
        <div className="radar-chart-3" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ overflow: "visible" }}>

                {/**中央から広がる直線 */}
                <g stroke="#dce5eb">
                    <path d="M 100 100 L 100.0 0.0" />
                    <path d="M 100 100 L 186.6 50.0" />
                    <path d="M 100 100 L 186.6 150.0" />
                    <path d="M 100 100 L 100.0 200.0" />
                    <path d="M 100 100 L 13.4 150.0" />
                    <path d="M 100 100 L 13.4 50.0" />
                </g>
                {/**　内側の枠線*/}
                <g stroke="#dce5eb" fill="none">
                    <path d="M 100.0 0.0 L 186.6 50.0 L 186.6 150.0 L 100.0 200.0 L 13.4 150.0 L 13.4 50.0 L 100.0 0.0" />
                    <path d="M 100.0 16.7 L 172.2 58.3 L 172.2 141.7 L 100.0 183.3 L 27.8 141.7 L 27.8 58.3 L 100.0 16.7" />
                    <path d="M 100.0 33.3 L 157.7 66.7 L 157.7 133.3 L 100.0 166.7 L 42.3 133.3 L 42.3 66.7 L 100.0 33.3" />
                    <path d="M 100.0 50.0 L 143.3 75.0 L 143.3 125.0 L 100.0 150.0 L 56.7 125.0 L 56.7 75.0 L 100.0 50.0" />
                    <path d="M 100.0 66.7 L 128.9 83.3 L 128.9 116.7 L 100.0 133.3 L 71.1 116.7 L 71.1 83.3 L 100.0 66.7" />
                    <path d="M 100.0 83.3 L 114.4 91.7 L 114.4 108.3 L 100.0 116.7 L 85.6 108.3 L 85.6 91.7 L 100.0 83.3" />
                </g>
                {/**レーダーチャート 本体　fill 塗りつぶし色　最後の２桁が透明度　stroke 枠線色 　（x, y）*/}
                <path d={rPath}
                    fill="#1bd5ee4e"
                    stroke="#1bd5ee" />

                {/**頂点 描画 */}
                <g fill="#2589d0">
                    {circles}
                </g>
            </svg>
            <dl>
                {SCORE_ITEM.map((e, id) => {
                    return (
                        <div key={id}>
                            <dt>{e}</dt>
                        </div>
                    )
                })}
            </dl>
        </div>
    )
}

// スタッツボードコンポーネント
const StatsBoard = ({ stats, onStatsChange }) => {
    let total = 0;
    for (let o in stats) {
        total += Number(stats[o]);
    }
    return (
        <>
            <div style={{ alignmentBaseline: "flex-start", marginTop: "auto", marginBottom: "auto" }}>
                <StatsScore stats={stats} onScoreTextChange={onStatsChange} />
            </div>
            <div style={{ alignmentBaseline: "flex-start", }}>
                <p>TOTAL:{total}</p>
                <RadarChart stats={stats} />
            </div>
        </>
    )
}

export default StatsBoard;