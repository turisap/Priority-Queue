

class PriorityQueueValidationError extends Error {
    constructor(params) {
        super(params);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, PriorityQueueValidationError);
        }
    }

}

export default PriorityQueueValidationError;