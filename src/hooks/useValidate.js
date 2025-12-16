import { useState } from "react";

/**
 * El hook personalizado para validar el texto de la entrada.
 * @returns {Object} objeto con las funciones de validación y el mensaje de error actual.
 * @returns {Function} validateTask - función para validar el título de la tarea.
 * @returns {Function} validateDescription - función para validar la descripción.
 * @returns {string|null} error - mensaje de error de validación actual.
 */
export const useValidate = () => {
    const [errorTask, setErrorTask] = useState(null);
    const [errorDescription, setErrorDescription] = useState(null);

    /**
    * Valida el texto de entrada de la tarea (no vacío, solo letras y espacios).
    * @param {string} tarea - la palabra a validar.
    * @returns {string|null} palabra validada en minúsculas y sin espacios extra, o null si falló.
    */
    const validateTask = (tarea) => {
        setErrorTask(null);
        let message = '';
        const regexp = /^[a-záéíóúÁÉÍÓÚüÜñÑ\s]+$/gi;

        const cleanWord = tarea.trim();

        if (cleanWord.length === 0) {
            message = 'No se ha introducido ninguna palabra.';
        } else if (!regexp.test(cleanWord)) {
            message = 'La palabra no es valida';
        }
        if (message) {
            setErrorTask(message);
            return null;
        } else {
            setErrorTask(null);
            return cleanWord;
        }
    }

    /**
    * Valida la descripción de la tarea (longitud mínima y máxima).
    * @param {string} descripcion - la descripción a validar.
    * @returns {string|null} descripción validada sin espacios extra, o null si falló.
    */
    const validateDescription = (descripcion) => {
        setErrorDescription(null);
        let message = '';
        const cleanDescription = descripcion.trim();
        const minLength = 10;
        const maxLength = 200;

        if (cleanDescription.length === 0) {
            message = 'La descripción no puede estar vacía.';
        } else if (cleanDescription.length < minLength) {
            message = `La descripción debe tener al menos ${minLength} caracteres.`;
        } else if (cleanDescription.length > maxLength) {
            message = `La descripción no puede exceder ${maxLength} caracteres.`;
        }

        if (message) {
            setErrorDescription(message);
            return null;
        } else {
            setErrorDescription(null);
            return cleanDescription;
        }
    }

    return {
        validateTask,
        validateDescription,
        errorTask,
        errorDescription
    }
}