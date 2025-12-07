import { useState } from "react";
const Prediction = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <div>
                勝利者予想{' '}
                <select value={value} onChange={(e) => setValue(e.target.value)}>
                    <option value=""></option>
                    <option value="井上尚弥">井上尚弥</option>
                    <option value="アラン・ピカソ">アラン・ピカソ</option>
                </select>

                <p>
                    勝利者：{value}
                </p>
            </div>
        </>
    )
}

export default Prediction;