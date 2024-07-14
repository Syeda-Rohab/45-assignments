//Q2
//let personName = "Rohab";
//console.log('hello',personName,"would you like to learn some typescript today");


//Q3
//let personName = "Rohab";
//console.log(personName.toLowerCase());
//console.log(personName.toUpperCase());
//console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());


//Q4
//console.log("Audery Hypburn once said", '"WORD IMPOSSIBLE itself says I AM possible"');


//Q5
//let famousPerson="Audrey Hypburn";
//let message="once said,'word IMPOSSIBLE ITSELF SAYS i AM POSSIBLE";
//console.log(famousPerson,message);


//Q6
//Let whiteSpace = "\n\t Rohab Ali\t\n";
//console.log(whiteSpace);
//let without whiteSpace =whiteSpace.trim();
//console.log(withoutwhiteSpace);


//Q7,8
//console.log(4+4);
//console.log(10-2);
//console.log(2*4);
//console.log(16/2);


//Q9
//let favouriteNumber = 13;
//console.log("my favourite number is" , favouriteNumber);


//Q10
//date:"18-5-2024"
//let whiteSpace = "\n\t rohab ali \t\n";//n is used for new line /t is used for whitespace
//console.log(whiteSpace);
//let withoutwhiteSpace = whiteSpace.trim();
//console.log(withoutwhiteSpace);


//Qno11
//let freindName = ["hadia", "abiha", "fiza", "umaima", "tabeer"];
//console.log(freindName[0]);
//console.log(freindName[1]);
//console.log(freindName[2]);
//console.log(freindName[3])
//console.log(freindName[4]);


//Q12
//let freindName = ["hadia","abiha","fiza","umaima","tabeer"];
//let message = "welcome to my page";
//console.log("hello", freindName[0],message);
//console.log("hello", freindName[1],message);
//console.log("hello", freindName[2],message);
//console.log("hello", freindName[3],message);
//console.log("hello", freindName[4],message);


//Qno13
//let transportationMode = ["hondacivic","hilux","prado"];
//transportationMode.forEach((Mode)=>
    //console.log(`I would like to buy a ${Mode}`)
//);
//console.log(`But ${transportationMode[1]} is my Dream car`);


//Qno14
//let GuestList = ["hadia","abiha","fiza"];
//GuestList.forEach((invitation)=>
    //console.log(`"Hey ${invitation}, I'd love to catch up over dinner!
//How about joining me for a delicious meal this"saturday"at 8pm at "kabalist". let me kow if you're free!`)
//);


//Qno15
//let newGuestList = ["hadia","abiha", "fiza"];
//console.log(` ${newGuestList[1]}is not coming`);
//newGuestList.splice(1,1,"umaima");
//newGuestList.forEach((newinvitation)=>
    //console.log(`"Hey ${newinvitation},I'd love to catch up over dinne!
//How about joining me for a delicious meal this "satueday"at 8pm at "kabalist".let me know if you're free!`)
//);


//Qno16
//let moreGueestList = ["hadia","abiha","fiza"];
//console.log(`${moreGueestList[1]}is not coming`);
//moreGueestList.splice(1,1,"tabeer");
//console.log(`hey everyone, we found a bigger dinner table.lets call some more guests`);
//moreGueestList.unshift("umaima");
//moreGueestList.push("amna");
//let middleGuest: number=Math.floor(moreGueestList.length/2);
//moreGueestList.splice(middleGuest,0,"ayesha");
//moreGueestList.forEach((moreinvitation)=>
    //console.log(`hey ${moreinvitation},I'd love to catch up over dinner!
//how about joining me for a delicious meal this "saturday"at 8pm at "kabalist".let me know if you're free!`)
//);


//Qno17
//let shrinkGuestList = ["hadia","abiha","fiza"];
//console.log(`${shrinkGuestList[1]}is not coming`);
//shrinkGuestList.splice(1,1,"tabeer");
//console.log(`hey everyone! we found a bigger dinner table.lets csll some more guests`);
//shrinkGuestList.unshift("umaima");
//shrinkGuestList.push("ayesha");
//let middleGuest: number = Math.floor(shrinkGuestList.length/2);
//shrinkGuestList.splice(middleGuest,0,"tehmeena");
//shrinkGuestList.forEach((shrinkinvitation)=>
    //console.log(`hey ${shrinkinvitation},I'd love to catch up over dinner!
//How about joining me for a delicious meal this "saturday"at 8pm at "kabalist".let me know if you're free!`)
//);

//console.log("unfortunately,new dinner table wont arrive in time for the dinner, so I have space for only 2 guest for dinner")
//while(shrinkGuestList.length > 2){
    //let removeGuest= shrinkGuestList.pop();
    //console.log(`sorry, ${removeGuest}I cant invite you to dinner`);
//}
//console.log("invitation to the last 2 guests");

//shrinkGuestList.forEach(guestinvitation => console.log(`hey ${guestinvitation}you are still invuted for dinner`))


//shrinkGuestList.pop();

//shrinkGuestList.pop();

//console.log(shrinkGuestList,"emptylist");



//(18)
//let placeToVisit: string[] = ["paris","italy","suadia","turkey","japan"]
 //print in original order
//console.log("Original order:" , placeToVisit);
//
// print  array in alphabetical order
//console.log("Alphabetical order:",placeToVisit.slice().sort());


//;

//array is still in its original order
//console.log("Original order after sorting:" , placeToVisit);
//;
//print your array in reverse alphabetical order without changing the order of the original list

//console.log(" reverse alphabetical order:",placeToVisit.slice().sort().reverse());

//;

//array is still in its original order
//console.log("Original order after reverse sorting:" , placeToVisit);

//;

//reverse the order of  list
//placeToVisit.reverse();
//console.log("reverse order:", placeToVisit);

//;

//reverse the order of your list again
//placeToVisit.reverse();
//console.log("back original order:", placeToVisit);

//;

//sort your array so its stored in alphabetical order
//console.log("sorted in alphabetical ordere:",placeToVisit.slice().sort());


//;

//sort to change array so its stored in reverse alphabetical order
//console.log("stored in reverse alphabetical order:",placeToVisit.slice().sort().reverse());

//
//Q19);
//let guestList :  string[] = ["hadia","fiza","abiha"];

//guestList.forEach(guest => {console.log(`Dear ${guest}, you are invited to dinner.`)});

//let lenghtGuest: number = guestList.length
//console.log(`we are inviting total ${lenghtGuest}guests.`);

//
//Q20);
//let countries: string[] = ["usa","canadda","germany","ffrance","japan"]
//   print list of countries
//countries.forEach(country => {
    //console.log(country)
//});

//

//21);

//interface itCourse {
    //name: string;
    //location: string;
    //onsiteStudents: number;
//}


//let itCourse = {
    //name: "Typescript and Javascript",
    //location: "Governor House Sindh",
    //onsiteStudents: 50000,
//};


//console.log(itCourse);


//


//Q22);
//
//let errorArray: string[] = ["A","B","C","D"]

//producing error by accessing invalid index of array

//console.log(errorArray[5]);

//error removed
//console.log(errorArray[3]);

//
//Q23);
//let five =5;
//let ten = 10;

//test
//console.log("test 1: five is equal to 5")
//console.log(five == 5)

//console.log("test 2: ten is equal to 10")
//console.log(ten == 10)

//test 3
//console.log("test 3: five is not  equal to 10")
//console.log(five !== 10)

//test 4
//console.log("test 4: ten is greater than 5")
//console.log(ten > 5)

//
//test 5
//console.log("test 5: ten is less than 10")
//console.log(five < 10)

//test6
//console.log("test 6: ten is less than 5")
//console.log(ten < 5)

//test7
//console.log("test 7: five is equal to 10")
//console.log(five == 10)

//test8
//console.log("test 8: ten is not equal to 10")
//console.log(ten  !== 10)

//test9
//console.log("test 9: five is greater than 10")
//console.log(five > 10)

//test10
//console.log("test five is not equal to 5")
//console.log(five !== 5)



//
//Q24)
//let apple = "apple";

//test for equality

//console.log("apple is equal to apple")
//console.log(apple == "apple")

//test for inequality

//console.log("apple is not equal to apple")
//console.log(apple !== "apple")

//test using the lowercase function

//let upperCaseApple = "APPLE"
//equal to
//console.log("APPLE is equal to the apple after converting to lowercase")
//console.log(upperCaseApple.toLowerCase() == "apple");
//not equal to
//console.log("APPLE is not equal to the apple after converting to lowercase")
//console.log(upperCaseApple.toLowerCase() != "apple");





// 
//let ten = 10;
//let twenty = 20;

//equal to
//console.log("ten is equal to twenty")
//console.log(ten == twenty)

//not equal to
//console.log("ten is not equal to 20")
//console.log(ten !== twenty)


//greater than
//console.log("twenty is greater than 10")
//console.log(twenty > ten)

//less than

//console.log("twenty is less than 10")
//console.log(twenty < ten)

//greater than or equal to

//console.log("twenty is greater than or equal to ten")
//console.log(twenty >= ten)

//less than or equal to
//console.log("twenty is less than or equal to ten")
//console.log(twenty <= ten);

//console.log("twenty is not equal to ten and twenty is greater than ten");
//console.log(twenty != ten && twenty > ten);




//console.log("twenty is not equal to ten and ten is greater than twenty");
//console.log(twenty != ten && ten > twenty);


//
//using || (or)
//console.log("twenty is greater than ten or twenty is  not equal to twenty");
//console.log(twenty > ten || twenty != twenty);


//console.log("twenty is less than ten or twenty is  not equal to twenty");
//console.log(ten > twenty || twenty != twenty);


//test whether an item is in a array

//let fruits = ["kiwi","pomegranate","watermelon"]
//console.log("kiwi is include in my fruits array")
//console.log(fruits.includes("kiwi"));

//

//TEST WHETHER AN ITEM IS NOT IN A ARRAY

//console.log("kiwi is not include in my fruits array")
//console.log(!fruits.includes("kiwi"));




//

//Q25)
//let alien_colour = "green"

//if (alien_colour === "green") {
    //console.log("player just earned 5 points.")
//}
//if (alien_colour === "white") {
    //console.log("alien colour is white.")
//}

//
//Q26)
//let alien_colour = "green"
//if (alien_colour === "green") {
    //console.log("alien colour is green, player earned just 5 points for shooting the alien.")
//} else {
    //console.log("alien colour is not green , player earned 10 points.")
//}

// second version

//let alien_colour = "red"
//if (alien_colour === "green") {
    //console.log("alien colour is green, player earned just 5 points for shooting the alien.")
//} else {
    //console.log("alien colour is not green , player earned 10 points.")
//}

//

//Q27)

// first version 

//let alien_colour = "green"
//if (alien_colour === "green") {
    //console.log("(version 01) alien colour is green,  player earned 5 points.)")


//} else if(alien_colour === "yellow") {
    //console.log("(version 01) alien colour is yellow , player earned 10 points")



//} else if (alien_colour === "red") {
    //console.log("(version 01) alien colour is red , player earned 15 points")
//}



//version 2 
//let alien_colour = "yellow"
//if (alien_colour === "green") {
    //console.log("(version 02) alien colour is green,  player earned 5 points.)")


//} else if(alien_colour === "yellow") {
    //console.log("(version 02) alien colour is yellow , player earned 10 points")



//} else if (alien_colour === "red") {
    //console.log("(version 02) alien colour is red , player earned 15 points")
//}


//let alien_colour = "red"
//if (alien_colour === "green") {
    //console.log("(version 03) alien colour is green,  player earned 5 points.)")


//} else if(alien_colour === "yellow") {
   // console.log("(version 03) alien colour is yellow , player earned 10 points")



//} else if (alien_colour === "red") {
   // console.log("(version 03) alien colour is red , player earned 15 points")
//}


//;
//Q28);


//creating a variable

//let age = 15;


//if the person is less than 2 years old, print a message that the person is a baby.

//if (age < 2) {
    //console.log("you are a baby.");
//} 

//if the person is at least 2 years old but less than 4, print a message that that the person is a toddler

//else if (age  >= 2 && age < 4) {
    //console.log("you are a toddler");
//}

//if the person is at least 13 years old but less than 13, print a message that the person is a kid .

//else if (age >= 4 && age < 13) {
    //console.log("you are a kid")
//}

//if the person is at least 13 years old but less than 20, print a message that that the person is a kid.

//else if (age >= 13 && age < 20) {
    //console.log("you are a teenager")
//}

//if the person is at least 20 tears old but less than 65, print a message that the person is an adult.

//else if (age >= 20 && age < 65) {
    //console.log("you are an adult")
//}

//if the person is age 65 or older,print a message that the person is an elder

//else if (age >= 65 ) {
    //console.log("you are an elder")
//}

//;


//Q29);


//let favourite_fruits = ["mango","kiwi","watermelon"]

//if (favourite_fruits.includes("mango")) {
    //console.log("i am really like mango.");
//}

//if (favourite_fruits.includes("kiwi")) {
    //console.log("i am really like kiwi.");
//}

//if (favourite_fruits.includes("pomegranate")) {
    //console.log("i am really like pomegranate.");
//}

//if (favourite_fruits.includes("watermelon")) {
    //console.log("i am really like watermelon.");
//}

//if (favourite_fruits.includes("orange")) {
    //console.log("i am really like orange.");
//}



//
//Q30);

//let userNames = ["rohab", "anumta", "anus", "owais", "admin"]

//userNames.forEach(oneUser => {
    //if (oneUser === "admin") {
        //console.log(`hello ${oneUser},would you like to see a status report?`)
    //} else {
        //console.log(`hello ${oneUser},thank you for logging in again.`);
    //};

//});


//

//Q31);


//let userNames = ["rohab", "anumta", "anus", "owais", "admin"];

//userNames = []

//if  ( userNames.length === 0 ) {
    //console.log("we need to find some users!");

//} else {
   // userNames.forEach(oneUser => {
        //if (oneUser === "admin") {
           // console.log(`hello ${oneUser},would you like to see a status report?`)
        //} else {
            //console.log(`hello ${oneUser},thank you for logging in again.`);
        //};
//});

//}

//

//Q32)

//let current_Users = ["Rashid","Faisal","Waqas","arsalan","roshan"]

//let new_users = ["Anila","Anum","Faisal","Sidra","Waqas"]

//new_users.forEach(new_one_user => {
    
//let our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //if(our_condition){
       // console.log(`sorry ${new_one_user} is already taken!`);
    //} else {
       // console.log(`this userName ${new_one_user} is available`);
    //}
//});

//Q33)



//


//ordinal numbers example = 1st (st ,example of ordinal number)2nd example


//let numbers = [1,2,3,4,5,6,7,8,9,10]

//for (let oneNumber of numbers) {
    //let ordinalEnding : string;
    //if (oneNumber === 1) {
       // ordinalEnding = "st"
    //} else if (oneNumber === 2) {
        // ordinalEnding = "nd"
    //} else if (oneNumber === 3) {
       // ordinalEnding = "rd"
    //} else {ordinalEnding = "th"}
    
    
    //console.log(`${oneNumber}${ordinalEnding}`);

//}

//


//Q34)

//let pizza = ["tikka","BBQ","fagita"]
//for (let onePizza of pizza) {
    //console.log(`I like ${onePizza} pizza`)
//}

//console.log("pizza is love");

//

//Q35)

//let petAnimals = ["Cat", "Rabbit", "Dog"]

//for (let onePet of petAnimals) {
   // console.log(`a ${onePet} would make a great pet!`)
//}

//console.log("Any of these animals would make a great pet!")


//

//Q36)



//function make_shirt(size: string, printMessage:string) {
    //console.log(`you selected ${size} size shirt with ${printMessage} prints on shirt`)
//}

//make_shirt("Medium" , "Be happy")


//


//Q37)


//function make_shirt(size:string = "large",printMessage:string = "I love typescript") {

    //console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);

//}

//make_shirt()
//make_shirt("Medium")
//make_shirt("small" , "I love javascript")



//Q38)




//function describe_city (city : string , country : string = "Pakistan") {
    //console.log(`${city} is in ${country}`);
//}

//describe_city("Karachi")
//describe_city("Japan")
//describe_city("Suadia , Tokiyo")



//Q39)


//function city_country(city:string, country:string): string {
    //return`${city}, ${country}`
//}


//console.log(city_country("Karachi","Pakistan"));
//console.log(city_country("Japan","Tokyo"));
//console.log(city_country("Germany","suadia"));


//Q40)

//function make_album (artist_name: string, album_title: string, tracks?: number ) {
    //let album: {artist: string, title: string, tracks?: number} = {
        //artist: artist_name,
        //title: album_title,

    //};
    //if (tracks !== undefined) {
       // album.tracks = tracks
    //}
    //return album;

//}
//let album1 = make_album("Rohab", "Album title 1") 
//let album2 = make_album("Anus", "Album title 2") 
//let album3 = make_album("Owais", "Album title 3",20) 
//console.log(album1)
//console.log(album2)
//console.log(album3)


//Q41)

//function show_magicians(magicians: string[]) {
    //magicians.forEach(name => console.log(name)
//);
//}

//let magicians_names = ["Rohab","Hadia","Abiha"]
//show_magicians(magicians_names)


//


//Q42)


//function show_magicians(magicians: string[]) {
    //magicians.forEach(name => console.log(name)
//);
//}
//function make_great(magicians: string[]) {
    //return magicians.map(name => `The Great ${name}`)
//}

//let magicians_names = ["Rohab","Hadia","Abiha"]

//let great_magicians = make_great(magicians_names)

//show_magicians(great_magicians)



//


//Q43)

//function show_magicians(magicians: string[]) {
   // magicians.forEach(name => console.log(name)
//);
//}
//function make_great(magicians: string[]) {
   // return magicians.map(name => `The Great ${name}`)
//}

//let magicians_names = ["Rohab","Hadia","Abiha"]

//let copy_magicians_names = magicians_names.slice()

//let copy_great_magicians = make_great(copy_magicians_names)

//console.log("\nOriginal Array\n");
//show_magicians(magicians_names)
//console.log("\nCopied Array\n");
//show_magicians(copy_great_magicians)

//Q44)

//function make_sandwich (...items:string[]) {
   // console.log("\nMaking a sandwich with the following items.. \n");
    //items.forEach(singleitem =>
       // console.log(singleitem)

   // )

   // console.log("Now Enjoy Sandwich");

//}

//make_sandwich("Bread","Butter")
//make_sandwich("Chicken","Ketchep","Mayo")
//make_sandwich("Tomato","Egg","Onion","Chutni")


//




//Q45)




//function create_car (manufacturer , model , ...options) {
    //let car = {
      //  manufacturer: manufacturer,
      //  model: model
    //}

    //options.forEach(option => {
        //let [key,value] = option.split(" : ")
       // car [key.trim()] = value.trim()
    //})
//return car;
//}

//let my_car = create_car("hilux","prado","colour:white","sunroof:track")
//console.log(my_car)


//45 Assignments complete!