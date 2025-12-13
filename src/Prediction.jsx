import { useState } from "react";
const Prediction = ({ predictionValue, handleChange }) => {

    return (
        <>
            <div>
                勝利者予想{' '}
                <select value={predictionValue} onChange={(e) => handleChange(e.target.value)}>
                    <option value=""></option>
                    <option value="井上尚弥">井上尚弥</option>
                    <option value="アラン・ピカソ">アラン・ピカソ</option>
                </select>

            </div>
        </>
    )
}

export default Prediction;