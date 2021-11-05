window.onload = async function(){
    document.getElementById("bt1").onclick=async function(){


        var output= document.getElementById("p1");
        output.innerHTML="Getting data";
     

      //  console.log("here ");
      var input = document.getElementById("amount").value;
     // var getttt="http://api.weatherapi.com/v1/current.json?key=87a032acb853430789c162918210211&q="+input;
  
     var fr = document.getElementById("from").value;
     var to = document.getElementById("to").value;


     console.log(fr);
     console.log(to);

     var currId = fr + "_" + to;
     var protocol = window.location.protocol.replace(/:/g,'');

     var link="https://free.currconv.com/api/v7/convert?q="+currId+"&compact=ultra&apiKey=ed7e7d3cb6962c787f40"

   
  const response= await fetch(link);
  const data= await response.json();
   var output= document.getElementById("p1");
   output.innerHTML=(data[currId]*input);

   console.log(data[currId]);

// var currVal;

// currVal.val(numeral(input * data[currId]).format("0,0.00[0]"));
 
//      var output= document.getElementById("p1");
//    output.innerHTML=currVal;
    //  currVal.attr("placeholder", "Converting...");
    //  $.getJSON("https://free.currconv.com/api/v7/convert?q=" + currId + "&compact=y&apiKey=do-not-use-this-api-key-hz-wmUBgKYjgzF-7iS9ky&callback=?",
    //    function(data){
    //      try {
    //       var currFrVal = parseFloat(document.getElementById("CURR_FR_VAL").value);
    //       currVal.val(numeral(currFrVal * data[currId].val).format("0,0.00[0]"));
   
    //     } catch (e) {
    //      alert("Please enter a number in the Amount field.");
    //    }
   
    //    currVal.attr("placeholder", "Press Convert button");
   
    //  });
   







// const response= await fetch(getttt);
// const data= await response.json();

// var  output  =  document.getElementById("p1"); output.innerHTML  =  data.location.name;
// var  output  =  document.getElementById("country"); output.innerHTML  =  data.location.country;
// var  output  =  document.getElementById("time"); output.innerHTML  =  data.location.localtime;

// var  output  =  document.getElementById("weather"); output.innerHTML  =  data.current.condition.text;
// var  output  =  document.getElementById("temp"); output.innerHTML  =  data.current.temp_c;
// var  output  =  document.getElementById("humidity"); output.innerHTML  =  data.current.humidity;
// var  output  =  document.getElementById("feellike"); output.innerHTML  =  data.current.feelslike_c;
// var  output  =  document.getElementById("cloud"); output.innerHTML  =  data.current.cloud;
// console.log(data.location.country);




      
    }
}
