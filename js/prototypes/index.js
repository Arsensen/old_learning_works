module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.arr = new Array();
    this.arr.__proto__ = Collection.prototype;
    return this.arr;
}

/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    this.arr = Array.from(arguments);
    this.arr = [...this.arr[0]];
    this.arr.__proto__ = Collection.prototype;
    return this.arr;
};



// Методы коллекции
Collection.prototype.values = function () {
    return this;
};

Collection.prototype.append = function (args) {
    if(typeof(args) != 'object') {Array.prototype.push.call(this, args); return};
    for(let i = 0; i < args.length; i++){
        Array.prototype.push.call(this, args[i]);
    } 
};

Collection.prototype.count = function () {
    return this.length;
};



Collection.prototype.at = function (position) {
    return this[position - 1];
};



Collection.prototype.removeAt = function (position) {
    if(position < 1) return false;
    if(this.length < position) return false;
    Array.prototype.splice.call(this, position - 1, 1);
    return true;
};





