import { getFilePath } from "./src/getFilePath";
import { getMetadata } from "./src/getMetadata";
import { resizeImage } from "./src/resizeImage";
import type { ResizeArgs } from "./src/types/ResizeArgs";

const main = async () => {
    try {
        const filepath = getFilePath() as string

        const metadata = await getMetadata(filepath)
        console.log('File metadata::', metadata)

        // TODO: Get this from cli args 
        const resizeParams: ResizeArgs = {
            width: 150,
            height: 97
        }

        const newImagePath = await resizeImage(filepath, resizeParams)

        console.log("Process complete! Your file is located at", newImagePath)
    } catch (error) {
        console.error(error)
    }
}



await main()