import PropTypes from 'prop-types';
import {UseEvaluation} from '../context/EvaluationContext'

function EvaluationCard({ evaluation }) {

    const {deleteEvaluation} = UseEvaluation();

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
        <h1 className='text-2xl font-bold'>{evaluation.Tipo_de_Incendio}</h1>
                <div className='flex gap-x-2 items-center'>
                    <button onClick={()=>{
                        deleteEvaluation(evaluation._id);
                    }}>delete</button>
                    <button>edit</button>
                </div>  
        </header>
        <p className='text-slate-300'>{evaluation.Clase_de_incendio}</p>
        <p className='text-slate-300'>{evaluation.Tamaño}</p>
    </div>
  );
}

EvaluationCard.propTypes = {
    evaluation: PropTypes.shape({
    Tipo_de_Incendio: PropTypes.string.isRequired,
    Clase_de_incendio: PropTypes.string.isRequired,
    Tamaño: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired,
};

export default EvaluationCard