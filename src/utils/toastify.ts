import Toastify from 'toastify-js'

interface IProps {
  text: string
  status?: 'information' | 'success' | 'error' | 'warning'
}

/**
 * Show anything as a toastify with status colors
 * @param { IProps } param0 Object containing options
 */
const toastify = ({ text, status }: IProps) => {
  Toastify({
    text,
    className: `toastify-${status || ''}`,
    duration: 5000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
  }).showToast()
}

export default toastify
