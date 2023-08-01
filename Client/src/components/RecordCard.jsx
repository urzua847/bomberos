import PropTypes from 'prop-types';
import {UseRecord} from '../context/RecordContext'
import {Link} from 'react-router-dom'

function RecordCard({ record }) {

    const {deleteRecord} = UseRecord();

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-2xl font-bold'>{record.name}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button 
                     className="bg-transparent hover:bg-red-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded"
                    onClick={()=>{
                        deleteRecord(record._id);
                    }}>Borrar</button>
                    <Link to={`/records/${record._id}`}>
                        <button className="bg-transparent hover:bg-blue-700 text-white font-semibold hover:text-white py-1 px-2 border border-white hover:border-transparent rounded">
                        Editar
                        </button></Link>
                </div>  
        </header>
        <p className='text-slate-300'>{record.lastname}</p>
        <p className='text-slate-300'>{record.phone}</p>
    </div>
  );
}

RecordCard.propTypes = {
    record: PropTypes.shape({
      name: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default RecordCard