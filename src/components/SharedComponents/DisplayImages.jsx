
const DisplayImages = (translation) => {

    const generateAlphabet = () => {
        const alphabet = [];
        for (let i = 97; i <= 122; i++) {
          alphabet.push(String.fromCharCode(i));
        }
        return alphabet;
      };

    const alphabet = generateAlphabet();

    const imageItem = translation.replace(/ /g, '').split('').map((value, index) => {
        return alphabet.includes(value) ? <img key={index} src={`/img/${value}.png`}></img> : null
    })


    return (
        <>
            {imageItem}
        </>
    )
}

export default DisplayImages