import {UseRecord} from '../../context/RecordContext'
import { useEffect } from 'react';
import RecordCard from '../../components/RecordCard'

function RecordPage() {
  
    const { getRecords, records } = UseRecord();

    useEffect(() => {
        getRecords();
    }, [getRecords]);

    if(records.length === 0) return (<h1>No hay registros</h1>);

    return <div className='grid grid-cols-3 gap-2'>
        {
            records.map((record) => (
                <RecordCard record={record} key={record._id} />
            ))
        };
    </div>
    
}

export default RecordPage