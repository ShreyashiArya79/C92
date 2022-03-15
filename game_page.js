//fetching values from local storage
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

//updating the name and the score on HTML page
document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

//updating question and answer player turn
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ; 

//send button code

function send() {
    get_word = document.getElementById("word").value;
    console.log(get_word);
    //changing the word to lower case
    
    word = get_word.toLowerCase();
    console.log("word in lower case = " + word);
    
    //to fetch the letter from start mid and end

    charAtFirst = word.charAt(1);
    console.log(charAtFirst);

    mid = Math.floor(word.length/2);
    charAtMid = word.charAt(mid);
    console.log(charAtMid);

    end = word.length - 1;
    charAtEnd = word.charAt(end);
    console.log(charAtEnd);

    //replacing letters and storing in respective variables

    remove_charAtFirst = word.replace(charAtFirst , "_"); //replacing the lettter from main word and storing in variable(with one black space at first position)
    
    remove_charAtMid = remove_charAtFirst.replace(charAtMid , "_");//replace function added on the variable above to give the second consecutive 
    
    remove_charAtEnd = remove_charAtMid.replace(charAtEnd, "_");
    
    console.log(remove_charAtFirst);
    console.log(remove_charAtMid);
    console.log(remove_charAtEnd);

    //creating variables to display HTML string along with the variable values on div id ="output"

    question = "<h4 id = 'word_display'> Q. " + remove_charAtEnd + " </h4>";
    inputbox = "<br>Answer : <input type = 'text' id='input_box_check'>";
    checkbutton = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
    
    row = question + inputbox + checkbutton ;
    document.getElementById("output").innerHTML = row ;

    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check(){

    getanswer = document.getElementById("input_box_check").value;
    answer = getanswer.toLowerCase();
    console.log("answer in lower case is : " + answer);
    
    
    if(word == answer){

        if(answer_turn == "player1"){
            player1_score= player1_score+1
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score= player2_score+1
            document.getElementById("player2_score").innerHTML = player2_score;

        }

    }

    if(question_turn == "player1"){
        question_turn = 'player2';
        document.getElementById("player_question").innerHTML= "Question Turn = " + player2_name;
    }
    else{
        question_turn = 'player1';
        document.getElementById("player_question").innerHTML= "Question Turn = " + player1_name;

    }

    if(answer_turn == "player1"){
        answer_turn = 'player2';
        document.getElementById("player_answer").innerHTML= "Answer Turn = " + player2_name;

    }
    else{
        answer_turn = 'player1';
        document.getElementById("player_answer").innerHTML= "Answer Turn = " + player1_name;
    }

    document.getElementById("output").innerHTML = "";

}