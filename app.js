var quizData =  document.getElementById('maincontainer').style.display="none"

i = 60;
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i < 0) {
      alert("Time's Up \n Press OK to Show Result")
    submitt()
  }
  else {
    setTimeout(onTimer, 1000);
  }
}





function startQuiz(){
    // quizData.style.display="inline-block"
    document.getElementById('maincontainer').style.display="inline-block"
    document.getElementById('startquizz').style.display="none"    
    onTimer()
    }



var questions = [
    {
        question: 'HTML Stands for ______________________',
        option:['Hypertext Markup Language', 'Hypertext Market Language', 'Hypertest Measurement Language', 'Hightext Markup Language'],
        correctAnswer:'Hypertext Markup Language'
    },
    {
        question: 'CSS Stands for ______________________',
        option:['Cascading Style Sheet', 'Cascading Sales Sheet', 'Class Style Sheet', 'Call Style Sheet'],
        correctAnswer:'Cascading Style Sheet'
    },{
        question: 'JS Stands for ______________________',
        option:['JavaScript', 'JellyScript', 'JavaStyle', 'JoeScript'],
        correctAnswer:'JavaScript'
    },{
        question: 'JavaScript Made in _________ time period',
        option:['10 Days', '20 Days', '100 Days', '112 Days'],
        correctAnswer:'10 Days'
    },{
        question: 'CSS Colors can be defined in _____ ways',
        option:[3, 4, 5, 7],
        correctAnswer: 3
    }]

var questionnum = 0
var marks = 0


    function displayQuestion(){

// document.getElementById('mycounter').innerHTML = i;
//   i--;
//   if (i < 0) {
//     alert('You lose!');
//   }
//   else {
//     setTimeout(onTimer, 1000);
//   }





        var a = document.getElementById('questionsCom')
        a.innerHTML = questionnum + 1
        var b = document.getElementById('remain')
        b.innerHTML = questions.length
        var questiondis = document.getElementById('question')
        questiondis.innerHTML = questions[questionnum].question

        var optiondiv = document.getElementById('optio')
        optiondiv.innerHTML = ''
        for(var i=0; i<questions[questionnum].option.length; i++){
            var div = document.createElement('div')
            div.setAttribute('class', 'col-md-6 p-3')
            var optionbtn = document.createElement('button')
            optionbtn.setAttribute('class', 'custombtn')
            optionbtn.setAttribute('onClick', 'checkAnswer(this)')
            var optionbtntext = document.createTextNode(questions[questionnum].option[i])
            optionbtn.appendChild(optionbtntext)
            div.appendChild(optionbtn)
            optiondiv.appendChild(div)
        }
        var perc = document.getElementById('percen')
        perc.innerHTML = a.innerHTML/b.innerHTML*100 + "%"

    }

    var mainData =  document.getElementById('maincontainer')

function submitt(){
    mainData.innerHTML = ''
    var ptagforres = document.createElement('p')
    ptagforres.setAttribute('Class', 'ptagshow')
    var markstoshow = document.createTextNode("You have Secured " + marks + " Marks in this Quiz")
    ptagforres.appendChild(markstoshow)
    mainData.appendChild(ptagforres)
    // alert(marks)
}



function nextquestion(){
    if(questionnum < questions.length){
        questionnum++
        if(questionnum === questions.length){
            var nextbtn = document.getElementById('todecrease').style.display = 'none'
            // nextbtn
            // var submitbttn = document.getElementById('submitbtn')
            // submitbttn.style.display = 'none'
            // submitbttn.style.display = 'inline-block'
            resultShow()
        }
    }
    displayQuestion()
    
}
// if(questionnum==questions.length){
//     document.getElementById('todecrease').style.display="none"
// }
displayQuestion()


function checkAnswer(e){
    var userans = e.firstChild.nodeValue
    var correctanswerr = questions[questionnum].correctAnswer
    if(userans === correctanswerr){
        marks++
        // console.log(marks)
    }
}





