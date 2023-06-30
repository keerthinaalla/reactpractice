import { useState } from "react";
const UsingFunctions = () => {
    const data = (value) => {
        return value = 6 + 7;
    }
    const [score, setScore] = useState(data);
    // console.log('before' + score)
    const scoreUpdate = () => {

        setScore((count) => { return count + 1 });

        setScore((count) => { return count + 1 });
        // console.log('after' + score)
    }
    return (
        <>
            <p>{score}</p>
            <button onClick={scoreUpdate}>Increase</button>
        </>
    )
}
export { UsingFunctions };