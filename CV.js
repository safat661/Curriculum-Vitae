function start() {

    /* Arrays to correspond index to abbreviated weekday and month */

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



    /* Get current date and the abbreviated weekday and month strings */

    var currentdate = new Date(document.lastModified);

    var day = days[currentdate.getDay()];

    var month = months[currentdate.getMonth()];



    /* Update the time to present the date and time in the given format:
    Last updated: Tue Sep 20 2016 11:24:06 GMT -0400 (EDT) */

    var now = document.getElementById("now");

    now.innerHTML = "Last updated: " + day + " " + month + " " + currentdate.getDate() + " " + currentdate.getFullYear() + " " + currentdate.toTimeString();

}



function swap() {

    /* Swaps the photo shown on click with another photo */

    var picture = document.getElementById("picture");

    var picture_num = picture.src;

    if (picture_num.includes("1")) {

        picture.src = "Photo2.jpg";

    } else {

        picture.src = "Photo1.jpg";

    }

}