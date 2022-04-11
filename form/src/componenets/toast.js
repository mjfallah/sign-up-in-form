import { toast } from 'react-toastify';

export const notice = (type , text) => {
    if (type === "success") {
        toast.success(text)
    }else{
        toast.error(text)
    }
}