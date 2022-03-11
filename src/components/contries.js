import getFlags from "../services";


const Countries = () => {
    const asyncGetFlags = async () => {
        return await getFlags()
    }
    const data = await asyncGetFlags()

    return `<p>${data[0].name.official}</p>`
}

export default Countries