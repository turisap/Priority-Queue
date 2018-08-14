import ValidationError from './Validation Error';


/**
 * This class validates values which users passes to Priority Queue constructor and throws errors if the input
 * is invalid
 */
class Validator {

    constructor(input, config) {
        this.input = input;
        this.config = config;
        this.init();
    }


    /**
     * Checks whether or not there is a base property specified in the config object
     * @private
     */
    _checkIfConfigIsLegal() {
        if(!this.config) throw new ValidationError('You should pass config object to initialize a queue');
        if(!this.config.baseProperty) throw new ValidationError('Illegal config object. You must specify baseProperty to run the queue');
    }



    /**
     * Checks whether or not the base property from config file is present in all members of the binary heap
     * @private
     */
    _checkIfBasePropertyPresent() {
        if(this.input.length) {
            this.input.forEach(el => {
                if(!el[this.config.baseProperty]) {
                    throw new ValidationError('Base property which has been specified' +
                        ' in config should be present in all members of the data structure.');
                }
            });
        }
    }


    /**
     * Console.logs a message on successful Priority Queue creation if no error thrown
     * @private
     */
    _notifyOnQueueCreation() {
        if(!this.input.length) console.log('An empty Priority Queue has been created');
        if(this.input.length) console.log('A Priority Queue has been created');
    }


    /**
     * Validator initializer
     */
    init() {
        this._checkIfConfigIsLegal();
        this._checkIfBasePropertyPresent();
        this._notifyOnQueueCreation();
    }
}


export default Validator;