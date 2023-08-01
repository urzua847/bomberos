import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import {createRecordRequest, getRecordRequest, deleteRecordRequest} from '../api/record'

const RecordContext = createContext();

export const UseRecord = () => {
    const context = useContext(RecordContext);
    
    if(!context){
        throw new Error('useRecord debe estar dentro del proveedor RecordContext');
    }

    return context;
}

export function RecordProvider({children}){

    const [records, setRecords] = useState([]);

    const getRecords = async () => {
        try {
            const res = await getRecordRequest();
            setRecords(res.data);
        } catch (error) {
            console.log(error);
        }   
    }

    const createRecord = async (record) => {
        const res = await createRecordRequest(record);
        console.log(res);
    }

    const deleteRecord = async (id) => {
        try {
            const res = await deleteRecordRequest(id);
            console.log(res);
            if(res.status === 204) setRecords(records.filter((record) => record._id !== id));
        }catch (error) {
            console.log(error);
        }    
    };

    return (
        <RecordContext.Provider value={{records, createRecord, getRecords,deleteRecord}}>
            {children}
        </RecordContext.Provider>
    )
}

RecordProvider.propTypes = {
  children: PropTypes.node.isRequired,
};