class PriorityQueue {
    constructor(values) {
        this._init(values);
    }

    size() {
        return this.queue.length;
    }

    buildMaxHeap(values) {
        this.queue = values;
    }

    _init(values) {
        if(!values.length) console.log('An empty Priority Queue has been created');
        if(values.length) console.log('A Priority Queue has been created');
        this.buildMaxHeap(values);
    }
}

export default PriorityQueue;