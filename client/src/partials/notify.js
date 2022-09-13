import { toast } from 'react-toastify';
let body = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export const notify = {
    info: (message) => {
        toast.warn(message, body);
    },
    success: (message) => {
        toast.success(message, body);
    },
    warn: (message) => {
        toast.warn(message, body);
    },
    error: (message) => {
        toast.error(message, body);
    },
    error: (message) => {
        toast(message, body);
    }

}