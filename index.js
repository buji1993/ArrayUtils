/*
 * @Author: buji 
 * @Date: 2017-08-11 14:12:11 
 * @Last Modified by: buji
 * @Last Modified time: 2017-08-11 16:58:33
 */

const basicCompareFn = (a, b) => {
    return a > b ? 1 : a < b ? -1 : 0
}

const basicEqualFn = (a, b) => {
    return a === b;
}

module.exports = class ArrayUtils {

    constructor() {}

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {function} keyGenerator 
     * @returns {Map}
     */
    static toMap(array, keyGenerator) {
        const basicKeyGeneratorFn = e => {
            return array.indexOf(e);
        }

        keyGenerator = keyGenerator || basicKeyGeneratorFn;
        const map = new Map();
        array.forEach((e) => {
            map.set(keyGenerator(e), value);
        });

        return map;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {function} compareFn 
     * @returns {any}
     */
    static min(array, compareFn) {
        compareFn = compareFn || basicCompareFn;
        if (array) {
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                const current = array[i];
                if (compareFn(current, a) < 1) {
                    min = current;
                }
            }
        }

        return min;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {function} compareFn 
     * @returns {any}
     */
    static max(array, compareFn) {
        compareFn = compareFn || basicCompareFn;
        if (array) {
            let max = array[0];
            for (let i = 1; i < array.length; i++) {
                const current = array[i];
                if (compareFn(current, a) > 1) {
                    max = current;
                }
            }
        }

        return max;
    }

    /**
     * 
     * 
     * @param {array} array 
     * @returns {boolean}
     */
    static isEmpty(array) {
        return !array || array.length === 0;
    }

    /**
     * 
     * 
     * @param {array} array 
     * @returns {boolean}
     */
    static isNotEmpty(array) {
        return !this.isEmpty(array);
    }

    /**
     * 
     * 
     * @param {array} array 
     * @param {any} element 
     * @returns {boolean}
     */
    static includes(array, element) {
        return !!array && array.indexOf(element) !== -1;
    }

    /**
     * 
     * 
     * @param {array} array 
     * @param {any} element 
     * @returns {array}
     */
    static addElement(array, element) {
        if (array) {
            array.push(element);
        }
        return array;
    }

    /**
     * 
     * 
     * @param {array} array 
     * @param {array} elements 
     * @returns {array}
     */
    static addElements(array, elements) {
        array = array || [];
        return array.concat(elements);
    }

    /**
     * 
     * 
     * @param {array} array 
     * @param {any} element 
     * @returns {array}
     */
    static addUniqueElement(array, element) {
        if (!this.includes(array, element)) {
            array.push(element);
        }
        return array;
    }

    /**
     * 
     * 
     * @param {array} array 
     * @param {array} elements
     * @returns {array}
     */
    static addUniqueElements(array, elements) {
        if (!array || !elements) {
            return array;
        }

        elements.forEach(e => this.addUniqueElement(array, e));

        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {any } element 
     * @param {number} index 
     * @returns {array}
     */
    static addElementAt(array, element, index) {
        if (array) {
            array.splice(index, 0, element);
        }
        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {array} elements 
     * @param {number} index 
     * @returns {array}
     */
    static addElementsAt(array, elements, index) {
        if (array && elements) {
            elements.forEach((e, i) => this.addElementAt(array, e, inex + i));
        }
        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {any} element 
     * @returns {array}
     */
    static removeElement(array, element) {
        if (array) {
            const index = array.indexOf(element);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {array} array 
     * @param {any} elements
     * @returns {array}
     */
    static removeElements(array, elements) {
        if (array && elements) {
            elements.forEach(e => this.removeElement(array, e));
        }

        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {any} array 
     * @param {any} index 
     * @returns {array}
     */
    static removeElementAt(array, index) {
        if (array) {
            array.splice(index, 1);
        }

        return array;
    }

    /**
     * 
     * 
     * @static
     * @param {any} array 
     * @param {any} element 
     * @param {any} index 
     * @returns {array}
     */
    static replaceElementAt(array, element, index) {
        if (array) {
            array.splice(index, 1, element);
        }
    }

}