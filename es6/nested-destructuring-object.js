let object = {data:{username: 'ifat', login: true}};

const { data } = object;
const {data:{username}} = object;


console.log(data) //{ username: 'ifat', login: true }
console.log(username) // ifat


