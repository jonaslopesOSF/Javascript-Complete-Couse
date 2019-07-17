const a = function() {
    console.log('a', this)
    const b = function() {
        console.log('b', this)
        const c = {
            hi: function() {
                console.log('c', this)
            }
        }
        c.hi()
    }
    b()
}
a() 

//JS is weird:
const obj = {
    name: 'Billy',
    sing: function() {
        console.log('a', this) // in this case, it's a method on an object.
        // var self = this; - using self solve the problem
        var anotherFunc = function() {
            console.log('b', this)// this points to windows!
            // console.log('b', self) solving problem about windows context
        }
        anotherFunc();
    }
}