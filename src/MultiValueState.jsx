import { useState } from "react";
const MultiValueState = () => {

    const [itemDetails, setItemDetails] = useState({
        id: 1,
        productName: 'iphone',
        memory: '512GB',
        price: 89000,
        color: "green"

    })
    const offerDetails = () => {
        console.log('befor:' + itemDetails.memory)
        setItemDetails({
            ...itemDetails, productName: 'apple', price: 49000, color: "red"
        })
        // setItemDetails((item) => {

        //     console.log(item);
        //     return { ...item, memory: "1tb", productName: 'apple' }

        // })

        console.log('after:' + itemDetails.memory)
    }


    return (
        <>

            <h3>ProductName:{itemDetails.productName}</h3>
            <h3>Memory:{itemDetails.memory}</h3>
            <h3>Price:{itemDetails.price}</h3>
            <h3>Color:{itemDetails.color}</h3>
            <button onClick={offerDetails}>Discount Offers</button>

        </>
    )
}
export default MultiValueState;
