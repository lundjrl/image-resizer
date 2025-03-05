import sharp from 'sharp'
import type { ResizeArgs } from './types/ResizeArgs'
import { OUTPUT_DIR } from './util/constants'

type FN = (filepath: string, resizeParams: ResizeArgs) => Promise<string>

export const resizeImage: FN = async (filepath, resizeParams) => {
    const str = filepath.split('/')
    const filename = str[str.length - 1]

    const resultPath = `${OUTPUT_DIR}/${filename}`

    await Bun.write(resultPath, 'temp')

    await sharp(filepath).resize(resizeParams).toFile(resultPath)

    return resultPath
}