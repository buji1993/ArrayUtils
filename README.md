# arrayutils
lightweight package for operating Array by javascript

## API
### ArrayUtils.toMap
```js
const array = [1, 2, 3];
const keyGeneratorFn = e => {return e * 2;}
ArrayUtils.toMap(array,keyGeneratorFn);
/*
    {
        2 : 1,
        4 : 2,
        6 : 3
    }
 */

 ArrayUtils.toMap(array);
 /* 
    {
        1 : 1,
        2 : 2,
        3 : 3
    }
 */
```

### ArrayUtils.min
```js
const array = [1, 2, 3];
ArrayUtis.min(array);// 1
ArrayUtils.min(array, (a,b) => {return Math.sign(b-a)});//3
```

### ArrayUtils.max
```js
const array = [1, 2, 3];
ArrayUtils.max(array);//3
ArrayUtils.max(array, (a,b) => {return Math.sign(b-a)});//1
```

### ArrayUtils.isEmpty
```js
const array = [];
const isEmpty = ArrayUtils.isEmpty(array);
//true
```

### ArrayUtils.isNotEmpty
```js
ArrayUtils.isNotEmpty([1]); //true
```

### ArrayUtils.includes
```js
ArrayUtils.includes([1, 2], 1); //true
```

### ArrayUtils.addElement
```js
ArrayUtils.addElement([1, 2], 3); //[1,2,3]
```

### ArrayUtils.addElements
```js
ArrayUtils.addElements([1, 2]，[3, 4]); //[1,2,3,4]
```

### ArrayUtils.addUniqueElement
```js
ArrayUtils.addUniqueElement([1, 2, 3], 1); //[1,2,3];
ArrayUtils.addUniqueElement([1, 2, 3], 4); //[1,2,3,4]
```

### ArrayUtils.addUniqueELements
```js
ArrayUtils.addUniqueElements([1, 2, 3], [2, 4]); //[1, 2, 3, 4]
```

### ArrayUtils.addElementAt
```js
ArrayUtils.addElementAt([1, 2], 3, 0); //[3, 1, 2]
```

### ArrayUtils.addElementsAt
```js
ArrayUtils.addElementsAt([1, 2], [3, 4],0);//[3, 4, 1, 2]
```

### ArrayUtils.removeElement
```js
ArrayUtils.removeElement([1, 2], 1); //[2]
```

### ArrayUtils.removeElements
```js
ArrayUtils.removeElements([1, 2, 3, 4],[1, 4]);//[2, 3]
```

### ArrayUtils.removeElementAt
```js
ArrayUtils.removeElementAt([1, 2, 3], 1);//[1, 3]
```

### ArrayUtils.replaceElementAt
```js
ArrayUtils.replaceElementAt([1, 2, 3], 4, 1);//[1, 4, 3]
```