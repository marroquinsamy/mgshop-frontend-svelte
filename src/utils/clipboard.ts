import { write } from 'clipboardy'

interface ICopy {
  textToCopy: string
}

/**
 * Function to copy anything to the clipboard asynchronously
 * @param { ICopy } param Object containing options
 */
const copy = async ({ textToCopy }: ICopy): Promise<void> => {
  await write(textToCopy)
}

interface IClipboard {
  copy(options: ICopy): Promise<void>
}

const clipboard: IClipboard = {
  copy,
}

export default clipboard
