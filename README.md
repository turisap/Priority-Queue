# Priority-Queue
A JavaScript implementation of priority queue data structure which accepts an array of objects and can sort them in accordance with a specified property.

## Installation
Clone this repo and run `npm install` in the root directory.

## Usage
To compile a production build run `npm run build` in the root directory. It creates `build.js` in `dist` directory. You can import it as follows:

`const Queue = require('./build.js');`

then you would need to set configuration object for your data structure:

```
const config = {
    baseProperty: 'id',
    minHeap : true
}
```

`baseProperty` sets a property which the data structure will use to sort your data. For instance, if you have objects like

```
const example = {
    id : 12345,
    name : 'Kirill',
    age  : 18
}
```

you can specify `id` or `age` as a base property and your data will be sorted accordingly. It should be an integer.

`minHeap` sets the type of a binary tree. If set to `true`, it will create a min-heap queue (members with the lowest priority first out). If set to `false`, it will create
a max-heap queue, so, consequently, will take members with the highest priority out first.

You can create a new instance now:

```
const q = new Queue(initialValues, config);
```
where `initialValues` is an array of objects and can be empty.

## API
There are six point at public API:

```
enqueue(values)
```

Adds new value(s) to the data structure and sorts it in accordance with their priorities. `Values` can be a single objects or an array of objects.

```
dequeue()
```

Removes the member with the highest/lowest priority from the data structure, resorts it and returns the element.

```
peek()
```

Returns the member with the highest/lowest priority without removing it from the data structure.

```
clear()
```

Sets the data structure to an empty array

```
size()
```

Returns the number of members in the data structure.

```
isEmpty()
```

Returns `true` if there is no members in the data structure and `false` otherwise


## Testing
Stress-testing code feeds heap-based and naive implementations with random data, runs several operations like `enqueue()`, `dequeue()`, `size()`, etc and compares
results from the both after. If they vary, it stops code running and logs error message. If you can  see continuous messages logged from console
during stress testing during a couple of minutes, then it means that it passes stress-testing. To run the testing, run `npm run watch` (it treats `index.js`
as entry point, which in turn  imports the `generator()` function which runs stress-testing), then `cd` to `dist`, and run `node bundle` from console.
You should see fast logging messages now. If it stops, it means that something went wrong and there is an error.

