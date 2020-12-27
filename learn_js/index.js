console.log('HI');

// Object literals

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2,
    },
    draw(){
        console.log('Draw method calling.');
    }
}

circle.draw();

// Factory Functions

function createCircle(radius){
    return {
        radius,
        draws : function() {
            console.log('Hi');
        }
    };
}

const circleFoctory = createCircle(1);

// Constructor Functions

function ConstructorObject(radius){
    
    let redius = { x:50, y: 100};

    // abstraction - hide implementation - prive members and properties
    // now this a property can not access by object.

    let a = 10;

    let sayHi = function (argument) {
        console.log('Hi');
    }

    this.drawcircle = function(){
        sayHi();
        console.log('constructor method');
    }

    // with this we can acccess private properties with objects.
    Object.defineProperty(this, 'defaulLocation',{
        get: function(){
            return redius
        },
        set: function(value){
            if(!value.x || !value.y){
                throw new Error('Invalid Error location');
            }
        }

    })


}

const circleObe = new ConstructorObject(1);

// ConstructorObject.name  
// ConstructorObject.lenght = 1

// Adding or removing properties of objects

ConstructorObject.location = { x : 10, y: 20 };
// or assigne dynamic properties
ConstructorObject['location_1'] = { x : 10, y: 20 };

// deleting objects
delete ConstructorObject.location;

for (let key in ConstructorObject){
    if (typeof ConstructorObject[key] !== 'function')
        console.log(key, ConstructorObject[key]);
}

// to check keys in objects
if ('radius' in ConstructorObject)
    console.log('ConstructorObject has radius key');


// getting all keys
const keys = Object.keys(ConstructorObject);
console.log(keys);

// Primitives are copied by there names
let prmitive_type = 10;

function increament(prmitive_type){
    prmitive_type++;
}

increament(prmitive_type);
console.log(prmitive_type);



// Objects are copud by there referece..    


let obj = { value : 10};

function increament(obj){
    obj.value ++;
}

increament(obj);
console.log(obj);

