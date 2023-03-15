// array cardio 1
// Ex1
const inventors = [
    {first: "Albert1", last: "Einstein1", year: 1560, passed: 1660},
    {first: "Albert2", last: "Einstein2", year: 1660, passed: 1760},
    {first: "Albert3", last: "Einstein3", year: 1760, passed: 1840},
    {first: "Albert4", last: "Einstein4", year: 1530, passed: 1600},
    {first: "Albert5", last: "Einstein5", year: 1860, passed: 1910},
    {first: "Albert6", last: "Einstein6", year: 1562, passed: 1603},
    {first: "Albert7", last: "Einstein7", year: 1563, passed: 1610},
    {first: "Albert8", last: "Einstein8", year: 1564, passed: 1620}
];



const filtering = inventors.filter(function(inventor) {

    if(inventor.year >= 1500 && inventor.year <= 1600 ){
        return true;
    }
})

console.table(filtering);

// Ex2
const fullName = inventors.map(inventor => inventor.first + " " +  inventor.last);

console.log(fullName);

// Ex3
const sortage = inventors.sort(function(first, second) {
    
    if(first.year > second.year){
        
        return 1;
    } else{

        return -1;
    }
});

console.table(sortage);

// Ex4
const age = inventors.reduce(function(total, inventor) {

    return total + (inventor.passed - inventor.year)
},0);

console.table(age);

// Ex5
const oldest = inventors.sort(function(a, b){

    const firstguy = a.passed - a.year;
    const lastguy = b.passed - b.year;

    return firstguy > lastguy ? -1 : 1
});

console.table(oldest);