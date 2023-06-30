import { useState } from "react";
const FormusingControlled = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("email:" + email);
        console.log("password:" + password)
    }
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input type="email"
                    value={email}
                    name="email"
                    onChange={(e) => { setEmail(e.target.value) }} required /><br /><br />
                <input type="password"
                    value={password}
                    name="password"
                    onChange={(e) => { setPassword(e.target.value) }} required /><br /><br />
                <input type="submit" value="submit" />

            </form>
            <p>emailid:{email}<br />password:{password}</p>
        </>
    )
}
export default FormusingControlled;