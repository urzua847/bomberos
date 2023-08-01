import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import {createEvaluationRequest, getEvaluationRequest, deleteEvaluationRequest} from '../api/evaluation'

const EvaluationContext = createContext();

export const UseEvaluation = () => {
    const context = useContext(EvaluationContext);
    
    if(!context){
        throw new Error('useEvaluation debe estar dentro del proveedor EvaluationContext');
    }

    return context;
}

export function EvaluationProvider({children}){

    const [Evaluations, setEvaluations] = useState([]);

    const getEvaluations = async () => {
        try {
            const res = await getEvaluationRequest();
            setEvaluations(res.data);
        } catch (error) {
            console.log(error);
        }   
    }

    const createEvaluation = async (Evaluation) => {
        const res = await createEvaluationRequest(Evaluation);
        console.log(res);
    }

    const deleteEvaluation = async (id) => {
        try {
            const res = await deleteEvaluationRequest(id);
            console.log(res);
            if(res.status === 204) setEvaluations(Evaluations.filter((Evaluation) => Evaluation._id !== id));
        }catch (error) {
            console.log(error);
        }    
    };

    return (
        <EvaluationContext.Provider value={{Evaluations, createEvaluation, getEvaluations,deleteEvaluation}}>
            {children}
        </EvaluationContext.Provider>
    )
}

EvaluationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};