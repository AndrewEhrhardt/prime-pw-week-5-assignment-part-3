console.log('***** Music Collection *****')
let collection = [];

//The funtion below takes in 3 arguments; title, arist and yearPublished
//Those values are then put into an object contained within the function
//called newAlbum. The arguments are paired with values that have the same
//name as the arguements. This object is then added to the global collection
//array and the object is returned.

function addToCollection(title, artist, yearPublished,tracks){
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  }
  collection.push(newAlbum);
  return newAlbum;
}

//Adding albums to the array collection

addToCollection("Nilsson Schmillson", "Harry Nilsson", "1971", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"], ["Test song 1", "3:00"]]);
addToCollection("This is Happening", "LCD Soundsystem", "2010", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("Self-Titled", "The Modern Lovers", "1972", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("No Regerts", "Chastity Bely", "2013", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("Ladies & Gentlemen We Are Floating in Space", "Spritiualized", "1997", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("Metamodern Sounds in Country Music", "Sturgill Simpson", "2010", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("Self-Titled", "LCD Soundsystem", "2005", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);
addToCollection("Sound of Silver", "LCD Soundsystem", "2007", [["Gotta Get Up", "2:24"], ["Driving Along","4:45"], ["Early in the Morning", "2:50"], ["The Moonbeam", "4:55"], ["Coconut", "3:51"]]);

console.log(collection);

//Function below takes in an array of objects and accesses each object and the
//values within, within the array. First a for loop is created to iterate through
//the array. Within the for loop a console.log accesses each value within the "i"
//index of the array. Within each object being accessed in the array is another
//array with the key of "tracks". In order to access each track within the array,
//another for loop was needed to iterate through the "tracks" array. By containing
//this for loop within the previous for loop, and conbining the index used to
//iterate through the objects, with the index used to iterate through the "tracks"
//array, each item in each array in each object can be accessed and logged on the
//console.


//Question: is an array within an object within an array still a nested array?

function showCollection(array){
  console.log(array.length, "Albums in the Collection");
  for (let i in array){
    console.log(array[i].title, "by", array[i].artist + ", published in", array[i].yearPublished + ":")
    for (let x in array[i].tracks){
      console.log(x.toString() + ". " + array[i].tracks[x][0] + ":" , array[i].tracks[x][1]);
    }
  }
}

//Testing showCollection
console.log(showCollection(collection));

//The function below takes in an argument that contains the name of an artist
//and returns an array containing that arists name if it is within the collection.
//The function first declares a variable "searchResult" and assigns it the value
//of an empty array. Then a for loop is used to iterate through the collection
//array. An if statement checks if the value assigned to the key of "artist", in
//any of the objects in the collection, equal the value that was passed into the
//function. If the value is equal, it is pushed into the searchResult variable.
//Then the value of searhResult is returned.

function findByArtist(artist){
  let searchResult = [];
  for (let i in collection){
    if (artist === collection[i].artist){
      searchResult.push(collection[i]);
    }
  }
  return searchResult;
}

console.log(findByArtist("LCD Soundsystem"));
console.log(findByArtist("Kero Kero Bonito"));

//The search function below can search by two different combination of keys. Either
//artist and year, or artist year and song. If the function searches by artist
//and year, and both have a match within one of the objects in the collection,
//those two values plus the album title will be returned. If
//the function searches by artist, year and song, all the same values will be
//returned except the song that matches will be returned as well.
//The function takes in an aobject as an arguemnet. Then a results variable
//is created and assigned the value of an empty array. Next, two for loops are used
//in the same way they are used in the show collection function, where one loops
//through the collection array and the other loops through the tracks array within
//the objects in the array. Then an if statement is used to see if both title,
//year and song match values within an object. If so, the results are pushed the
//values of the arist, title, year and specific song that matches within the object.
//If not, another if statement checks if just the artist and year match. If so,
//the object is pushed the artist, title and year.
//Finally an if else statement checks if the results value has a length of greater
//than one, meaning something was pushed into if from the first set of if statements.
//If so, the results array is returned. If not, the whole collection is retuened.

function search(obj){
  let results = [];
  for (let i in collection){
    for (let x in collection[i].tracks){
      if(collection[i].artist===obj.artist && collection[i].yearPublished===obj.year && collection[i].tracks[x][0] === obj.track){
        results.push(collection[i].artist + " " + collection[i].title + " " + collection[i].yearPublished + " " + collection[i].tracks[x][0])
      } else if (collection[i].artist===obj.artist && collection[i].yearPublished===obj.year){
        results.push(collection[i].artist + " " + collection[i].title + " " + collection[i].yearPublished)
      }
    }
  }
  if (results.length > 0){
    return results[0];
  } else {
    return collection;
  }
}

console.log(search({artist: "LCD Soundsystem", year: "2005", track: "Gotta Get Up"}))
console.log(search({artist: "LCD Soundsystem", year: "2005"}))
console.log(search({artist: "LCD Soundsystem", year: "2004"}))
console.log(search({ artist: 'Ray Charles', year: 1957 }));
