/*
 Name: Vanesa Dávila-Luciano
 Date: 08/23/2013
 Course: PWA I 1408 Section 01
 Mid Terms for PWA-1
*/


(function(){

var button = document.querySelector(".buttonred");
var i = 0;

//Create student array of 2 objects
var students = [
    {
        uname: "Vanesa Dávila-Luciano",
        address: {street: "1234 Leanne Way", city: "Ashburn", state: "Virginia"},
        gpa: [2.5, 3.0, 4.0],
        date: new Date()
    },
    {
        uname: "Dwayne Johnson",
        address: {street: "777 Hollywood Blvd.", city: "Los Angeles", state: "California"},
        gpa: [3.0, 3.2, 3.0],
        date: new Date()
    }];

// Create function to print out to console all student objects/info
var consoleData = function(){

    for (var i = 0, j = students.length; i < j; i++){
        console.log("Name: " + students[i].uname);
        console.log("Address: " + students[i].address.street + ", " + students[0].address.city + ", " + students[0].address.state);
        console.log("GPA: " + students[i].gpa);
        console.log("Date: "
            + students[i].date.getMonth() + "/"
            + students[i].date.getDate() + "/"
            + students[i].date.getFullYear()
        );
    };
    return false;
};


// Create function to dynamically add a NEW STUDENT to original array of objects
var addData = function(newname, newstreet, newcity, newstate, newgpa, newdate){

    // Use the .push method to add another student
    students.push({
        uname: newname,
        address: {street: newstreet, city: newcity, state: newstate},
        gpa: newgpa,
        date: newdate
    });
};

// Create function to find "GPA AVERAGE" of all GPAs
var gpaAvg = function(myAry){

    //console.log(myAry.length);
    var gradeAvg = 0;
    for (var i = 0, max = myAry.length; i < max; i++){
        gradeAvg = gradeAvg + myAry[i];
    };

    var num = gradeAvg/max;
    return num.toFixed(2);
};

// Create function to display HTML of all student info
var displayData = function(){

    //Define DOM elements for HTML page
    var innerName = document.getElementById("name");
    var innerAddress = document.getElementById("address");
    var innerGpa = document.getElementById("gpa");
    var innerDate = document.getElementById("date");
    var innerAvgData = document.getElementById("gpaavg");

    //If the number of objects left is not equal to the MAX+1, display another student
    if (i !== max+1){
        innerName.innerHTML = "Name: " + students[i].uname;
        innerAddress.innerHTML = "Address: " + students[i].address.street + ", " + students[i].address.city + ", " + students[i].address.state;
        innerGpa.innerHTML = "GPA: " + students[i].gpa;

        //Only Display this after everything else
        innerDate.innerHTML = "Date: "
            + students[i].date.getMonth() + "/"
            + students[i].date.getDate() + "/"
            + students[i].date.getFullYear();


        // console.log(students[i].gpa);
        var avg = gpaAvg(students[i].gpa);

        innerAvgData.innerHTML = "Average GPA: " + avg;
        console.log(students[i].gpa.length)

    //Else change the button text to DONE
    }else{
      button.onclick = "return false";
      document.querySelector(".buttonred").innerHTML = "DONE!";

    };
    i++ // Increment number of items after each student object is processed
    return false;

};

var max = students.length;


    // Create button for click
    button.onclick = displayData;

    // Print titles to console showing original and new objects
    console.log("********* Below shows the original objects *********")
    consoleData();
    addData("Barack Obama", "1600 Pennsylvania Ave NW", "Washington", "District of Columbia", [4.0, 3.8, 4.0], new Date());
    console.log(" ");
    console.log("********* Below shows the new object added to the original object *********")
    consoleData();
    displayData();

})();


