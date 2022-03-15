function addUser() {
//getting the value from the text input and storing on variable
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

    //storing name on Local Storage

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    //page redirection
    
    window.location = "game_page.html";


}