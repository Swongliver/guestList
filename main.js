var list=[];
var namesWithoutComma=[];
var displayStudents=[];
var names="";
function submit1(){
    
    
   
    names=document.getElementById("name_of_the_student_1").value;
    list.push(names);  
    list.sort();
    
    
        displayStudents.push("<h4>Name:" + names + "</h4>");
        namesWithoutComma.push("<h4>Name:" + names + "</h4>");
    
    document.getElementById("list").innerHTML=displayStudents.join(" ");
    console.log(displayStudents)
    
}
function sorting(){
    namesWithoutComma.sort();
    
    
       
                 
     document.getElementById("sortList").innerHTML=namesWithoutComma.join(" ");   
}
function show1(){
   
         
       
                 
     document.getElementById("showList").innerHTML=namesWithoutComma.join(" ");

}