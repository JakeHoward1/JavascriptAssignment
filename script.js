let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor (title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayText("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    displayText("Printing all movies....");
    allMovies.forEach(movie => {
        displayText(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
    })
    displayBlankLine();
    displayText("You have " + allMovies.length + " movies in total");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    displayText("printing movie that has a rating higher than " + rating);
    i = 0;
    allMovies.forEach(movie => {
        if (movie.rating > rating) {
            displayText(movie.title + " has a rating of " + movie.rating);
            i++;
        }
    })
    displayBlankLine();
    displayText("In total, there are " + i + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let foundMovie = allMovies.find(movie => {
        return movie.title == title;
    })
    foundMovie.haveWatched = !foundMovie.haveWatched;
    displayText("changing the status of the movie...")
}

let displayText = (text) => {
    let node = document.getElementById("result");
    let newNode = document.createElement("div");
    let newNodeText = document.createTextNode(text);
    newNode.appendChild(newNodeText);
    node.appendChild(newNode);
}
let displayBlankLine = () => {
    let node = document.getElementById("result");
    let newNode = document.createElement("br");
    node.appendChild(newNode);
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayText("----------------");
displayText("running program......");
displayText("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayText("----------------");
addMovie(movie1);
displayText("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayText("----------------");

printMovies();

/*replace console.log with display on web page*/
displayText("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayText("----------------");

printMovies();
/*replace console.log with display on web page*/
displayText("----------------");

highRatings(3.5);