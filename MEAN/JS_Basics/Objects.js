let student = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' } 
];
let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

// student.forEach(element => {
//     console.log("Name: " + element.name,"Cohort: " + element.cohort);
// });
console.log(users);
console.log(users.employees[0]);
console.log(users.employees[0].first_name);

for (const userRole in users){
    console.log(userRole);
    // console.log(users[userRole]);
    let count = 1;
    users[userRole].forEach(element => {
        let NameLength =(
            element.first_name.length +
            element.last_name.length
        ) ;
        data = (
            count + " - "
            + element.first_name.toUpperCase() + ", "
            + element.last_name.toUpperCase() + " - "
            + NameLength
        );
        // data.toUppercase();
        console.log(data);
        count ++;
    });
}

// for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//         const element = object[key];
        
//     }
// }