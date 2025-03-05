import { getFilePath } from "./src/getFilePath";
import { getMetadata } from "./src/getMetadata";

const main = async () => {
    try {
        const filepath = getFilePath() as string

        console.log(filepath)
        const metadata = await getMetadata(filepath)
        console.log(metadata)

    } catch (error) {
        console.error(error)
    }
}



await main()