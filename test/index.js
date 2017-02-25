/**
 * Created by moyu on 2017/2/25.
 */

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

function bindMethod(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        return oldValue.apply(target, arguments);
    };

    return descriptor;
}


class Math {
    static plus(a, b) {
        return a+b;
    }

    @log
    add(a, b) {
        return a+b;
    }

    getSelf() {
        return this;
    }
}

console.log(Math.plus(1, 2));
console.log(new Math().add(1, 2));

//
// const a = [1,2,3];
// console.log(...a);
// const b = {foo: 'foo', bar: 'bar'};
// console.log(...b);

const math = new Math();
math._v = 123;
console.log(math.getSelf()._v);
