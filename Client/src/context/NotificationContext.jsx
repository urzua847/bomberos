import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import {
    createNotificationRequest, 
    getNotificationRequest, 
    deleteNotificationRequest, 
    getOneNotificationRequest, 
    updateNotificationRequest
} from '../api/notification'
import notification from "../../../Server/src/models/notification";

const NotificationContext = createContext();

export const UseNotification = () => {
    const context = useContext(NotificationContext);
    
    if(!context){
        throw new Error('useNotification debe estar dentro del proveedor NotificationContext');
    }

    return context;
}

export function NotificationProvider({children}){

    const [notifications, setNotifications] = useState([]);

    const getNotification = async () => {
        try {
            const res = await getNotificationRequest();
            setNotifications(res.data);
        } catch (error) {
            console.log(error);
        }   
    }

    const createNotification = async (record) => {
        const res = await createNotificationRequest(record);
        console.log(res);
    }

    const deleteNotification = async (id) => {
        try {
            const res = await deleteNotificationRequest(id);
            console.log(res);
            if(res.status === 204) setNotifications(notification.filter((record) => record._id !== id));
        }catch (error) {
            console.log(error);
        }    
    };

    const getOneNotification = async (id) => {
        try{
            const res = await getOneNotificationRequest(id);
            return res.data;
        }catch (error) {
            console.log(error);
        }
    }

    const updateNotification = async (id, record) => {
        try{
            await updateNotificationRequest(id, record);
        }catch (error) {
            console.log(error);
        }   
    }

    return (
        <NotificationContext.Provider 
        value={{
            notifications, 
            createNotification, 
            getNotification,
            deleteNotification, 
            getOneNotification,
            updateNotification
        }}
        >
            {children}
        </NotificationContext.Provider>
    )
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};