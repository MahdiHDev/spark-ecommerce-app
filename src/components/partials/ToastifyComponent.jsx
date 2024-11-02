import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ToastifyComponent = ({ message, type, clearMessage }) => {
    useEffect(() => {
        if (message) {
            switch (type) {
                case 'success':
                    toast.success(message, {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    break;

                case 'error':
                    toast.error(message, {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    break;

                case 'info':
                    toast.info(message, {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    break;

                case 'warn':
                    toast.warn(message, {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    break;

                default:
                    toast(message, {
                        position: 'bottom-left',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    break;
            }
            clearMessage();
        }
    }, [message, type, clearMessage]);

    return (
        <div>
            <ToastContainer />
        </div>
    );
};

export default ToastifyComponent;
