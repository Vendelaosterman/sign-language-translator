
const Translation = (props) => {

        const receivedValue = props.userInput;

        const displayImages = receivedValue.map((value, index) => {
            value = value.toLowerCase()
            return <img key={index} src={`/img/${value}.png`}></img>
        })

        return(
            <>
                {displayImages}
            </>
        )
}

export default Translation