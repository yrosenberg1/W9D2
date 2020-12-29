const Util = function inherits(childClass, parentClass) {
    surrograte.prototype = parentClass.prototype
    childClass.prototype = new surrograte()
    childClass.prototype.constructor = childClass 

}

module.exports = {
    Util
}