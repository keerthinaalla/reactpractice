import { useRef, useState } from "react";

const FormusingUncontrolled = () => {

    let nameref = useRef(null);
    const emailref = useRef(null);
    const passwordref = useRef(null);
    const [display, setDisplay] = useState(false);

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log("email value:" + window.email.value)
    //     console.log("password value:" + window.password.value)

    // }

    const onSubmitHandler1 = (e) => {
        e.preventDefault();
        // console.log("name value:" + window.username.value)

        let name = nameref.current.value;
        setDisplay((name === "") ? alert('please fill the filed') : true)
        // console.log("usename value:" + nameref.current.value)
        // console.log("email value:" + emailref.current.value);
        // console.log("password value :" + passwordref.current.value)
    }
    return (
        <>
            {/* <h1>Using Uncontroleed componets</h1> */}
            {/* <form onSubmit={onSubmitHandler}>
                <input type="email" name="email" id="email" required /><br /><br />
                <input type="password" name="password" id="password" required /><br /><br />
                <input type="submit" value="submit" />
            </form> */}
            <br />
            <h1>Using uncontrolled componet using ref attribute</h1>
            <form onSubmit={onSubmitHandler1}>
                <input type="text" name="uname" ref={nameref} /><br /><br />
                <input type="email" name="email" ref={emailref} /><br /><br />
                <input type="password" name="password" ref={passwordref} /><br /><br />
                <input type="submit" value="submit" />

            </form>
            <p>{display ? `your name is : ${nameref.current.value}` : " "}</p>
            {/* {nameref.current.value} */}


        </>
    )
}
export default FormusingUncontrolled;