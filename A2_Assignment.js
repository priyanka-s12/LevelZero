console.log('A2_Assignment');
console.log('---- ---- ----');

// movie ticket sales report

let movie1TicketsSold = 150;
let movie2TicketsSold = 120;
let movie3TicketsSold = 80;

let movie1TicketPrice = 250;
let movie2TicketPrice = 180;
let movie3TicketPrice = 150;

let movie1Revenue = movie1TicketsSold * movie1TicketPrice;
let movie2Revenue = movie2TicketsSold * movie2TicketPrice;
let movie3Revenue = movie3TicketsSold * movie3TicketPrice;

let isMovie1Super = movie1Revenue > 5000;
let isMovie2Super = movie2Revenue > 5000;
let isMovie3Super = movie3Revenue > 5000;

let totalRevenue = movie1Revenue + movie2Revenue + movie3Revenue;

console.log('Indian Movie Ticket Sales Report');
console.log('----------------------------------');
console.log('Movie 1: Dilwale Dulhania Le Jayenge');
console.log('- Tickets Sold:', movie1TicketsSold);
console.log('- Ticket Price: ₹', movie1TicketPrice);
console.log('- Revenue:₹', movie1Revenue);
console.log('Superhit:', isMovie1Super);

console.log('\nMovie 2: Kabhi Khushi Kabhie Gham');
console.log('- Tickets Sold:', movie2TicketsSold);
console.log('- Ticket Price: ₹', movie2TicketPrice);
console.log('- Revenue:₹', movie2Revenue);
console.log('Superhit:', isMovie2Super);

console.log('\nMovie 3: 3 Idiots');
console.log('- Tickets Sold:', movie3TicketsSold);
console.log('- Ticket Price: ₹', movie3TicketPrice);
console.log('- Revenue: ₹', movie3Revenue);
console.log('Superhit:', isMovie3Super);

console.log('\nTotal Revenue: ₹', totalRevenue);
