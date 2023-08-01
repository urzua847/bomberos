import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import {
    createEvaluationRequest, 
    getEvaluationRequest, 
    deleteEvaluationRequest, 
    getOneEvaluationRequest, 
    updateEvaluationRequest
} from '../api/evaluation'

const EvaluationContext = createContext();

export const UseEvaluation = () => {
    const context = useContext(EvaluationContext);
    
    if(!context){
        throw new Error('useEvaluation debe estar dentro del proveedor EvaluationContext');
    }

    return context;
}

export function EvaluationProvider({children}){

    const [evaluations, setEvaluations] = useState([]);

    const getEvaluations = async () => {
        try {
            const res = await  getEvaluationRequest();
            setEvaluations(res.data);
        } catch (error) {
            console.log(error);
        }   
    }

    const createEvaluation = async (evaluation) => {
        const res = await createEvaluationRequest(evaluation);
        console.log(res);
    }

    const deleteEvaluation = async (id) => {
        try {
            const res = await deleteEvaluationRequest(id);
            console.log(res);
            if(res.status === 204) setEvaluations(evaluations.filter((evaluation) => evaluation._id !== id));
        }catch (error) {
            console.log(error);
        }    
    };

    const getOneEvaluation = async (id) => {
        try{
            const res = await getOneEvaluationRequest(id);
            return res.data;
        }catch (error) {
            console.log(error);
        }
    }

    const updateEvaluation = async (id, evaluation) => {
        try{
            await updateEvaluationRequest(id, evaluation);
        }catch (error) {
            console.log(error);
        }   
    }

    return (
        <EvaluationContext.Provider 
        value={{
            evaluations, 
            createEvaluation, 
            getEvaluations,
            deleteEvaluation, 
            getOneEvaluation,
            updateEvaluation
        }}
        >
            {children}
        </EvaluationContext.Provider>
    )
}

EvaluationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};