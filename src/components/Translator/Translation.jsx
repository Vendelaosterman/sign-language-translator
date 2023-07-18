import { useLocation } from "react-router-dom";

const Translation = (props) => {
        const receivedValue = props.userInput

        // const currentPath = useLocation().pathname
        // {(currentPath === "/profile") && <p>{receivedValue}</p>}

        const displayImages = receivedValue.map((value, index) => {
            value = value.toLowerCase()
            return <img key={index} src={`/img/${value}.png`}></img>
        })

        return(
            <>
            <div>
            {displayImages}
            </div>
            </>
        )
}

export default Translation