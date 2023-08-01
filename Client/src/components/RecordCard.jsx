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
                    <button onClick={()=>{
                        deleteRecord(record._id);
                    }}>delete</button>
                    <Link to={`/records/${record._id}`}>edit</Link>
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