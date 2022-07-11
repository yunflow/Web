/* 
 * Main scripts file for the timetable website.
 * Assignment 5, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

/*
 * This code have a part of my own solution in A4, and used with Prof. Raghav Sampangi's permission.
 * This code is used as a starting point for my solution for A5.
 */
//select the main container
let container = document.querySelector(".container");

//set event listener in JS to monitor the button press
let button = document.querySelector("#search-btn");
button.addEventListener("click",readValue);

function readValue(){
    //Container empties each time the button is clicked
    container.innerHTML = "";

    let value = document.querySelector("#search-keywords").value;
    let keywords = value.trim().toLowerCase();
    if(keywords == ""){
        console.log("the search keyword is empty");
        container.innerHTML = "";
    }else{
        appearInfo();
    }

    //When the input is not a space, find the input keyword
    function appearInfo(){
        console.log(keywords);
        
        //Iterate through the array and call the writCourse method when a match is found
        for(let i = 0; i < courseInfo.length; i++){
            if(courseInfo[i].code.toLowerCase().match(keywords) || courseInfo[i].name.toLowerCase().match(keywords)){
                writCourse(courseInfo[i]);
                console.log(courseInfo[i].code + " was found");
            }
        }

        //If the container is still empty after iteration, the course is not found
        if(container.innerHTML == ""){
            container.innerHTML = "<p><i>Sorry! No course exists with this course code or name</i></p>";
            console.log("No course found");
        }
    }
}

//define a method to implement the html content
function writCourse(info){
    let section = document.createElement("section");
    section.className = 'course-info';
    section.innerHTML = 
        "<h3>" + info.code + ": " + info.name + "</h3>" +
        "<h4>" + info.prof + "</h4>" + 
        "<p><i>Current enrollment: " + info.currEnroll + " (max: " + info.maxEnroll + ")</i></p>" +
        "<p><i>Location: " + info.location + " <br>(schedule: " + info.schedule + ")</i></p>" +
        "<p>" + info.info + "</p>" +

        "<input type=\"button\" onclick=\"addCourse('" + info.code + ": " + info.name + "')\" " + 
        "value=\"Sign-up for course\" class=\"course-offering-info\"></input>";  
    container.appendChild(section);
}

//This code is re-use of my own solution in A4, and used with Prof. Raghav Sampangi's permission.
//select the course selection bag
let courseBag = document.querySelector(".course-selection-bag");  

//define a method to add a course to the course selection bag
function addCourse(title){
    courseBag.innerHTML += "<p>" + title + "</p>";
}

