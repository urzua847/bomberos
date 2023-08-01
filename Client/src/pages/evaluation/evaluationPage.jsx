import {UseEvaluation} from '../../context/EvaluationContext'
import { useEffect } from 'react';
import EvaluationCard from '../../components/EvaluationCard'

function EvaluationPage() {
  
    const { getEvaluations, evaluations } = UseEvaluation();

    useEffect(() => {
        getEvaluations();
    }, [getEvaluations]);

    if(evaluations.length === 0) return (<h1>No hay registros</h1>);

    return <div className='grid grid-cols-3 gap-2'>
        {
            evaluations.map((evaluation) => (
                <EvaluationCard evaluation={evaluation} key={evaluation._id} />
            ))
        };
    </div>
    
}

export default EvaluationPage