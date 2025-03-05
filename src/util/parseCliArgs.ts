import { parseArgs } from 'util'

export const parseCliArgs = () => {
    const { values, positionals } = parseArgs({
        args: Bun.argv,
        options: {
            'image-path': {
                type: 'string'
            }
        },
        strict: true,
        allowPositionals: true
    })

    return [values, positionals]
}