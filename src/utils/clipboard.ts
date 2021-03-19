import clipboardy from 'clipboardy'

interface ICopy {
  textToCopy: string
}

/**
 * Function to copy anything to the clipboard asynchronously
 * @param { ICopy } param Object containing options
 */
const copy = async ({ textToCopy }: ICopy): Promise<void> => {
  try {
    await clipboardy.write(textToCopy)
  } catch (error) {
    console.log(error)
    throw new Error('Hubo un error al copiar al portapapeles.')
  }
}

interface IClipboard {
  copy(arg0: ICopy): Promise<void>
}

const clipboard: IClipboard = {
  copy,
}

export default clipboard
