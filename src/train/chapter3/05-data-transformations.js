console.log('------------------------------------------FILTER--------------------------------------------------------');

const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
];

console.log(schools.join(','));

const wSchools = schools.filter(school => school[0] === 'W');
console.log('schools: ' + schools);
console.log('wSchools: ' + wSchools);

//is a pure function
const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log('cutSchool: ' + cutSchool('Yorktown', schools));
console.log('schools: ' + schools);

console.log('---------------------------------------------MAP--------------------------------------------------------');

const highSchools = schools.map(school => `${school} High School`);

console.log('highSchools: ' + highSchools);
console.log('schools: ' + schools);

const schoolsToObj = schools.map(school => ({name: school}));
console.log(schoolsToObj);
console.log('schools: ' + schools);

console.log('---------------------------------------------MAP--------------------------------------------------------');

let schoolsObjList = [
    {name: "Yorktown"},
    {name: "Stratford"},
    {name: "Washington & Lee"},
    {name: "Wakefield"}
];

const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            }
        } else {
            return item
        }
    });

let updatedSchools = editName("Yorktown", "HB Woodlawn", schoolsObjList);
console.log(updatedSchools[0]); // { name: "HB Woodlawn" }
console.log(schoolsObjList[0]); // { name: "Yorktown" },

const editName2 = (oldName, name, arr) =>
    arr.map(item => (item.name === oldName) ? ({...item, name}) : item);

let updatedSchools2 = editName2("Yorktown", "HB Woodlawn", schoolsObjList);
console.log(updatedSchools2[0]); // { name: "HB Woodlawn" }
console.log(schoolsObjList[0]); // { name: "Yorktown" },

console.log('--------------------------------------------Object.keys-------------------------------------------------');

const schoolsNew = {
    "Yorktown": 10,
    "Washington & Lee": 2,
    "Wakefield": 5
};

const schoolNewArray = Object.keys(schoolsNew).map(key =>
    ({
        name: key,
        wins: schoolsNew[key]
    })
);

console.log(schoolNewArray);

console.log('----------------------------------------------REDUCE----------------------------------------------------');

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
    if (age > max) {
        console.log(`${max} < ${age} -> max = ${age}`);
        return age;
    } else {
        console.log(`${max} > ${age} -> max = ${max}`);
        return max;
    }
}, 0);

console.log(`maxAge is ${maxAge}`);

const maxAge2 = ages.reduce((max, age) => (max > age) ? max : age);
console.log(`maxAge2 is ${maxAge2}`);
