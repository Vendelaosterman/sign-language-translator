
const Translation = (props) => {

        const receivedValue = props.toChild;

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