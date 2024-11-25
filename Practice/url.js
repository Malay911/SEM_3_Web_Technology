const url=require('url');

const adr='https://www.darshan.ac.in/abcd.js?FirstName=Malay&LastName=Panara';
const q=url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
