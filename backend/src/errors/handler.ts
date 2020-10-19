import {ErrorRequestHandler} from 'express'
import { ValidationError } from 'yup'

interface ValidationErrors {
    [key: string]: string[]
}

const errorHandler : ErrorRequestHandler = (error, request,response,next) => {
    
    if(error instanceof ValidationError){
        let errors : ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        })

        return response.status(400).json({mssage: 'Validação de erros',errors})
    }
    
    
    console.error(error);
    
    return response.status(500).json({ message: "Ocorreu um erro interno"})

}

export default errorHandler;