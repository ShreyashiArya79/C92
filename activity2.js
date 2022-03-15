function back() {
    window.location.replace("activity_1.html"); //using replace function to redirect page
}

function getScore(){

    score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>Score : " + score + "</h1>" //displaying the score in h1 tag inside div
}