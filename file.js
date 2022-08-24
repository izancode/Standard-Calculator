var inputData = document.querySelector("#input");
var equationData = document.querySelector("#equation");
var historyDiv=document.querySelector(".history");
var mainDiv = document.querySelector(".main")
var ansHistory = [];
var equationHistory=[];
var flag = true;
// var equations=[],answers=[]; //Array can be written 

function getNum(val)
{
    // By Relational operator
        (inputData.value == 0)?inputData.value=val:inputData.value+=val;

    // By If else method
    // if(inputData.value=="0") //(5==0)
    // {
    //     inputData.value = val; //5
    // }
    // else
    // {
    //     inputData.value += val; //55
    // }
}

function ans()
{
    var equation;
    equation = inputData.value+" = ";
    equationData.value = equation;
    // console.log(equation);
    equationHistory.push(equation);
    ansHistory.push(eval(inputData.value));
    // console.log(equationHistory);
    // console.log(ansHistory);
    inputData.value = eval(inputData.value);
    // equations.push(equation);
    // answers.push(eval(inputData.value));
    // console.log(equations);
    // console.log(answers);
    showHistory();
}

function showHistory()
{
    historyDiv.innerHTML="";
    for(var i=0;i<equationHistory.length;i++)
    {
        // console.log(equationHistory[i]); 
        // console.log(ansHistory[i]);
        historyDiv.innerHTML+="<div class='historyDiv'><p>" +equationHistory[i]+ "</p><p>" +ansHistory[i]+ "</p></div><br>"
    }
}

function clearHistory()
{
    var state = confirm(" Are you sure want to Delete History?")
    if(state)
    {
        historyDiv.innerHTML="";
        ansHistory=[];
        equationHistory=[];
    }
}

function backSpace()
{
    if(inputData.value.length>1)
        inputData.value = inputData.value.slice(0,-1);
    else
     inputData.value = 0;
}

function reset()
{
    inputData.value = "0";
    equationData.value = "";
}

function hideShow()
{
    if(flag)
    {
        mainDiv.style.display="block";
    }
    else
    {
        mainDiv.style.display="none";
    }
    flag=!flag;
}
