import sharp from 'sharp'


export const getMetadata = async (filepath: string) => {
    const metadata = await sharp(filepath).metadata()
    return metadata
}