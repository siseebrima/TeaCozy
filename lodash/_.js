const _ = {
    clamp(number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end){
        if (end == 'undefined'){
            end = start;
            start = 0;
        }

        if(start > end){
            // start = end;
            // end = start;
            let temp = end;
            end = start;
            start = temp;
        }

        if(start < number || number >= end){
            return false;
        }

        return true;
    },

    words(string){
        return string.split(' ');
    },

    pad(string, leng){
        if(string.length < leng){
            let diff = leng - string.length;
            if(diff%2 === 1){
                diff = diff - 1;
            }
            const space = Math.floor(diff / 2);
            return ' '.repeat(space) + string + ' '.repeat(space);

        }

        return string;
    },

    has(obj, path){

        if(obj.path){
            return true;
        }
        else{
            return false;
        }

    },

    invert(obj){
        let myObj = {};
        for(let [key, value] of Object.entries(obj)){
            let temp = key;
            key = value;
            value = key;

            myObj.key = value;
        }

        return myObj;
    },

    findKey(obj, predicate){
        for (let [key, value] of Object.entries(obj)){
            let value = key;
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue){
                return key;
            }
        }
        return undefined;
    }
};




// Do not write or modify code below this line.
module.exports = _;