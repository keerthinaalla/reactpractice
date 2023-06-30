
import { useState } from "react"
import MultiValueState from "./multiValueState";
import { UsingFunctions } from "./UsingFunctions";
import FormusingControlled from "./FormusingControlled";
import FormusingUncontrolled from "./FormusingUncontrolled";
function App(props) {

  // let order="orderpending";

  const [order, updateOrder] = useState('order pending')

  const buy = () => {
    // console.log("order placed")
    updateOrder("order placed")
  }



  return (
    <>
      <button onClick={buy}>Buy Now!</button>
      <p>{order}</p>
      <MultiValueState />
      <hr />
      <UsingFunctions />
      <hr />
      <FormusingControlled />
      <hr />
      <FormusingUncontrolled />

    </>
  )
}

export default App
