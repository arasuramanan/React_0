// const data = [
//     {id: '1',title: "Car"},
//     {id: '2',title: "bus"},
//     {id: '3',title: "Plane"},
//     {id: '4',title: "Train"},
//     {id: '5',title: "Ship"},
//     {id: '6',title: "Car1"},
//     {id: '7',title: "bus1"},
//     {id: '8',title: "Plane1"},
//     {id: '9',title: "Train1"},
//     {id: '10',title: "Ship1"},
//     {id: '11',title: "Car1"},
//     {id: '12',title: "bus1"},
//     {id: '13',title: "Plane1"},
//     {id: '14',title: "Train1"},
//     {id: '15',title: "Ship1"},
// ];

// const upperData = data.map((e)=>{
//     return e.title.toUpperCase();
// })
//  console.log(upperData);

// const FilteredData = data.filter((e)=>{
//     return e.id % 2 == 0;
// })
// console.log(FilteredData);

// const train = [
//     'Howrah Express',
//     'Cheran Express',
//     'Vivek Express',
//     'Intercity Express',
//     'Pandian Express',
//     'Vande Bharath Express',
//     'Nagercoil Express',
//     'Pearl City Express',
//     'Duronto Express'

// ];
// const result = train.splice(5, 2);
// console.log(result);

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const array3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// const result = array1.concat(array2).concat(array3);

// console.log(result);

// const data = [
//     { id: 1, title: "first" },
//     { id: 2, title: "second" },
//     { id: 3, title: "third" },
//     { id: 4, title: "fourth" },
// ];

// const result = data.find((e)=>{
//     return e.title=="first";
// })
// console.log(result);


// Destructuring
// const name = ["Arasu", "Ramanan"];

// const [firstName, lastName] = name;

// console.log(lastName);

// const data = {
//     id: 1,
//     name: "Raghav Kumar",
//     loveMusic: true,
//     species: "human",
// };

// const { name:fullname,species } = data;
//  console.log(fullname);

// Spread Operator 
// const introduction = ["my", "name", "is", "jack"];

// const result = [...introduction];

// console.log(result);


const fetchData = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    } catch (e) {
        console.log(e);
    }
}

fetchData().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('Request finished');
})

