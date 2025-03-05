import { parseCliArgs } from "./util/parseCliArgs";


export const getFilePath = () => {
    const [values] = parseCliArgs()

    if ('image-path' in values) return values["image-path"]

    throw new Error('Please provide a file path.')
}