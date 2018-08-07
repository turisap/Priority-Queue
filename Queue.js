class PriorityQueue {
    constructor(values, maxHeap) {
        this._init(values, maxHeap);
    }

    _init(values, maxHeap) {
        if(maxHeap) this.strategy = 'max';
        if(!maxHeap) this.strategy = 'min';
        if(!values.length) console.log(`An empty ${this.strategy} Priority Queue has been created`);
        if(values.length) console.log(`A ${this.strategy} Priority Queue has been created`);
    }
}

export default PriorityQueue;