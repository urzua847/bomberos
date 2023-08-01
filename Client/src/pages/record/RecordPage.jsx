import {UseRecord} from '../../context/RecordContext'
import { useEffect } from 'react';
import RecordCard from '../../components/RecordCard'
import {Link} from 'react-router-dom'

function RecordPage() {
    const { getRecords, records } = UseRecord();

    useEffect(() => {
        getRecords();
    }, [getRecords]);

    return <div>
        <h1 className="text-2xl text-center text-white font-bold mt-5 mb-5">Registro</h1>
        <Link to='/'>
        <button className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mr-10"
        type="submit">Volver al Menu</button>
        </Link>
        <Link to='/records'>
            <button className="bg-transparent hover:bg-gray-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
        type="submit">Crear registro</button>
        </Link> 
        <br/><br/>
        <div>
            <div className='grid grid-cols-3 gap-2'>
            {
                records.map((record) => (
                    <RecordCard record={record} key={record._id} />
                ))
            }
            </div>
            <br/>
        </div>
    </div>
    
}

export default RecordPage