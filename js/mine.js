function Q1() 
{
    if( isNaN(document.getElementById("Q1").value)   )
    {
        document.getElementById("RQ1").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ1").className= 'bg-danger';
    }
    else
    {
        
        var num1 =   document.getElementById("Q1").value;
        document.getElementById("RQ1").innerHTML= num1;
        document.getElementById("RQ1").className= 'bg-success';
    }
}

/********************************************************************** */

function Q2() 
{
    var num = document.getElementById("Q2").value;
    var result= num % 3;
    var result1= num % 4;

    if(isNaN(num))
    {
        document.getElementById("RQ2").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ2").className= 'bg-danger';
    }
    else if (result == 0 && result1 == 0 )
    {
        document.getElementById("RQ2").innerHTML= "Yes";
        document.getElementById("RQ2").className= 'bg-success';
    }
    else
    {
        document.getElementById("RQ2").innerHTML= "No";
        document.getElementById("RQ2").className= 'bg-danger';
    }
}

/************************************************************************************ */
function Q3() 
{
    var num1= parseInt(document.getElementById("Q3O").value);
    var num2= parseInt(document.getElementById("Q3T").value);
    if( isNaN(num1) || isNaN(num2) )
    {
        document.getElementById("RQ3").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ3").className= 'bg-danger';
    }
    else if( Number.isInteger(num1) == true && Number.isInteger(num2) == true )
    {
        if(num1 > num2)
        {
        document.getElementById("RQ3").innerHTML="The Max Number Is : "+ num1;
        document.getElementById("RQ3").className= 'bg-success';
        }
        else
        {
        document.getElementById("RQ3").innerHTML="The Max Number Is : "+  num2;
        document.getElementById("RQ3").className= 'bg-success';
        }
    }

}
/************************************************************************************ */
function Q4() 
{
    var num1= parseInt(document.getElementById("Q4").value);
    if( isNaN(num1))
    {
        document.getElementById("RQ4").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ4").className= 'bg-danger';
    }

    else if(num1 > 0)
        {
        document.getElementById("RQ4").innerHTML= "Positive";
        document.getElementById("RQ4").className= 'bg-success';
        }
        else if (num1 < 0)
        {
        document.getElementById("RQ4").innerHTML= "Negative";
        document.getElementById("RQ4").className= 'bg-danger';
        }
        else
        {
        document.getElementById("RQ4").innerHTML= "Zeroo";
        document.getElementById("RQ4").className= 'bg-danger';
        }

}
/************************************************************************************ */
function Q5() 
{
    var num1 = parseInt(document.getElementById("Q5O").value);
    var num2 = parseInt(document.getElementById("Q5T").value);
    var num3 = parseInt(document.getElementById("Q5TH").value);
    var maxNum;
    var minNum;

    if(isNaN(num1) || isNaN(num2) || isNaN(num3))
    {
        document.getElementById("RQ5").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ5").className= 'bg-danger';
    }
    else if (num1 > num2 && num1 > num3 )
    {
        maxNum = document.getElementById("RQ5").innerHTML= "Max Number = " + num1 + "<br>";
        document.getElementById("RQ5").className= 'bg-success';
        if(num2 < num3)
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num2 ;
            
        }
        else
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num3;
        }
    }
    else if (num2 > num1 && num2 > num3 )
    {
        maxNum = document.getElementById("RQ5").innerHTML= "Max Number = " + num2 + "<br>";
        document.getElementById("RQ5").className= 'bg-success';
        if(num1 < num3)
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num1 ;
            
        }
        else
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num3;
        }
    }
    else if (num3 > num1 && num3 > num2 )
    {
        maxNum = document.getElementById("RQ5").innerHTML= "Max Number = " + num3 + "<br>";
        document.getElementById("RQ5").className= 'bg-success';
        if(num2 < num1)
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num2 ;
            
        }
        else
        {
            minNum = document.getElementById("RQ5").innerHTML=maxNum + "Min Number = " + num1;
        }
    }
}

/************************************************************************************ */
function Q6() 
{
    var num = parseInt(document.getElementById("Q6").value);
    var result = num % 4;
    if(isNaN(num))
    {
        document.getElementById("RQ6").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ6").className= 'bg-danger';
    }
    else if ( result % 2 == 0)
    {
        document.getElementById("RQ6").innerHTML= "This Number Is Even";
        document.getElementById("RQ6").className= 'bg-success';
    }
    else
    {
        document.getElementById("RQ6").innerHTML= "This Number Is Odd";
        document.getElementById("RQ6").className= 'bg-success';
    }
}
/************************************************************************************ */
function Q7() 
{
    var vowel = document.getElementById("Q7").value;
    var inputLength = parseInt(vowel.length) ;
    if (inputLength > 1 ) 
    {
        document.getElementById("RQ7").innerHTML= "Please Enter 1 Letter Only" ;
        document.getElementById("RQ7").className= 'bg-danger';
        
    }
    else if (isNaN(vowel) == false) {
        document.getElementById("RQ7").innerHTML= "Please Enter Letters Only" ;
        document.getElementById("RQ7").className= 'bg-danger';
    }
    else if (vowel == 'A' || vowel == 'a') 
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ7").className= 'bg-success';
    }
    else if (vowel == 'E' || vowel == 'e') 
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ7").className= 'bg-success';
    }
    else if (vowel == 'I' || vowel == 'i') 
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ7").className= 'bg-success';
    }
    else if (vowel == 'O' || vowel == 'o') 
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ7").className= 'bg-success';
    }
    else if (vowel == 'U' || vowel == 'u') 
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ7").className= 'bg-success';
    }
    else
    {
        document.getElementById("RQ7").innerHTML= "This Letter Is Consonant";
        document.getElementById("RQ7").className= 'bg-success';
    }
}

/************************************************************************************ */
function Q8()
{
    var num = parseInt( document.getElementById("Q8").value);
    if (isNaN(num)) {
        document.getElementById("RQ8").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ8").className= 'bg-danger';
    }
    else {
        var result ='';
        for (var i = 1; i <= num ; i++) {
        result = result + i + "," ;
        document.getElementById("RQ8").innerHTML= "Counter : " + result;
        document.getElementById("RQ8").className= 'bg-success';    
        }
    }
} 

/************************************************************************************ */
function Q9()
{
    var num = parseInt( document.getElementById("Q9").value);
    if(isNaN(num))
    {
        document.getElementById("RQ9").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ9").className= 'bg-danger';
    }
    else
    {
        var result='';
        for (var i = 1; i <= 12 ; i++ )
        {
            var num1;
            num1 = num * i ;
            result = result + num1 + ",";
            document.getElementById("RQ9").innerHTML= "Multiplication : " + result;
            document.getElementById("RQ9").className= 'bg-success';   
        }
    }
}
/************************************************************************************ */
function Q10() 
{
    var num = parseInt(document.getElementById("Q10").value);
    if(isNaN(num))
    {
        document.getElementById("RQ10").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ10").className= 'bg-danger';
    }
    else{
        var even ='';
        for (var i = 1; i <= num; i++) 
        {  
            
            if(i % 2 === 0)
            { 
                even = even + i + "," ;  
                document.getElementById("RQ10").innerHTML= "Numbers Is : " + even ;
                document.getElementById("RQ10").className= 'bg-success';   
            }
        }
    }
    
}
/************************************************************************************ */
function Q11() 
{
    var num1 = parseInt(document.getElementById("Q11O").value);
    var num2 = parseInt(document.getElementById("Q11T").value);
    
    if( isNaN(num1) || isNaN(num2))
    {
        document.getElementById("RQ11").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ11").className= 'bg-danger';
    }
    else
    {

        var result = Math.pow(num1,num2);
            document.getElementById("RQ11").innerHTML= "Number is : " + result;
            document.getElementById("RQ11").className= 'bg-success';
        
    }
}
/************************************************************************************ */
function Q12() 
{
    var num1 = parseInt(document.getElementById("Q12O").value);
    var num2 = parseInt(document.getElementById("Q12T").value);
    var num3 = parseInt(document.getElementById("Q12TH").value);
    var num4 = parseInt(document.getElementById("Q12F").value);
    var num5 = parseInt(document.getElementById("Q12FI").value);
    var total = num1 + num2 + num3 + num4 + num5;
    var avg = total / 5 ;
    var percent = total / 500 * 100;
    if( isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)  || isNaN(num4))
    {
        document.getElementById("RQ12").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ12").className= 'bg-danger';
    }
    else if (num1 > 100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100 )
    {
        document.getElementById("RQ12").innerHTML= "Please Enter Number Between 0 To 100 ";
        document.getElementById("RQ12").className= 'bg-danger';
    }
    else
    {
        document.getElementById("RQ12").innerHTML= "Total : " + total + "<br>" + "Average : " + avg + "<br>" + "Percentage : " + percent + "%";
        document.getElementById("RQ12").className= 'bg-success';

    }
}

/************************************************************************************ */
function Q13() {
    var month = parseInt(document.getElementById("Q13").value);
    if(isNaN(month))
    {
        document.getElementById("RQ13").innerHTML= "Sorry That's Not A Number Of Month";
        document.getElementById("RQ13").className= 'bg-danger';
    }
    else if (month <= 0 || month > 12 )
    {
        document.getElementById("RQ13").innerHTML= "Please Enter Month Between 1 To 12";
        document.getElementById("RQ13").className= 'bg-danger';
    }
    else
    {
        var result = new Date( 2021 ,month , 0).getDate();
        document.getElementById("RQ13").innerHTML= "Day Of This Month Is : " + result;
        document.getElementById("RQ13").className= 'bg-success';

    }
}
/************************************************************************************ */
function Q14() 
{
    var num1 = parseInt(document.getElementById("Q14O").value);
    var num2 = parseInt(document.getElementById("Q14T").value);
    var num3 = parseInt(document.getElementById("Q14TH").value);
    var num4 = parseInt(document.getElementById("Q14F").value);
    var num5 = parseInt(document.getElementById("Q14FI").value);
    var total = num1 + num2 + num3 + num4 + num5;
    var percent = total / 500 * 100;
    if( isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)  || isNaN(num4))
    {
        document.getElementById("RQ14").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ14").className= 'bg-danger';
    }
    else if (num1 > 100 || num2 > 100 || num3 > 100 || num4 > 100 || num5 > 100 )
    {
        document.getElementById("RQ14").innerHTML= "Please Enter Number Between 0 To 100 ";
        document.getElementById("RQ14").className= 'bg-danger';
    }
    else if (percent >=90 && percent <=100 )
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : A " + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-success';
    }
    else if (percent >= 80 && percent < 90)
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : B " + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-success';

    }
    else if (percent >= 70 && percent < 80 )
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : C " + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-success';

    }
    else if (percent >= 60 && percent < 70 )
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : D " + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-success';

    }
    else if (percent >= 50 && percent < 60 )
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : E " + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-success';

    }
    else if (percent < 50)
    {
        document.getElementById("RQ14").innerHTML= "Grade Is : F" + "<br>" + "Percentage : " + percent +"%";
        document.getElementById("RQ14").className= 'bg-danger';

    }
}

/************************************************************************************ */
function Q15()
{
    var month = parseInt(document.getElementById("Q15").value);
    var result = new Date( 2021 ,month , 0).getDate();
    switch (true)
    {
        case isNaN(month):
        document.getElementById("RQ15").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ15").className= 'bg-danger';
        break;
        case month <= 0:
        case month > 12:
        document.getElementById("RQ15").innerHTML= "Please Enter Month Between 1 To 12";
        document.getElementById("RQ15").className= 'bg-danger';
        break;
        default:
            document.getElementById("RQ15").innerHTML= "Day Of This Month Is : " + result;
            document.getElementById("RQ15").className= 'bg-success';
        break;
} 
}
/************************************************************************************ */
function Q16() 
{
    var vowel = document.getElementById("Q16").value;
    var inputLength = parseInt(vowel.length) ;    
    switch (true)
    {
        case inputLength > 1 :
        document.getElementById("RQ16").innerHTML= "Please Enter 1 Letter Only" ;
        document.getElementById("RQ16").className= 'bg-danger';
        break;
        case isNaN(vowel) == false :
        document.getElementById("RQ16").innerHTML= "Please Enter Letters Only" ;
        document.getElementById("RQ16").className= 'bg-danger';
        break;
        case vowel == 'A':
        case vowel == 'a':
        document.getElementById("RQ16").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ16").className= 'bg-success';
        break;
        case vowel == 'E':
        case vowel == 'e':
        document.getElementById("RQ16").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ16").className= 'bg-success';
        break;
        case vowel == 'I':
        case vowel == 'i':
        document.getElementById("RQ16").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ16").className= 'bg-success';
        break;
        case vowel == 'o':
        case vowel == 'O':
        document.getElementById("RQ16").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ16").className= 'bg-success';
        break;
        case vowel == 'U':
        case vowel == 'u':
        document.getElementById("RQ16").innerHTML= "This Letter Is Vowel";
        document.getElementById("RQ16").className= 'bg-success';
        break;
        default:
        document.getElementById("RQ16").innerHTML= "This Letter Is Consonant";
        document.getElementById("RQ16").className= 'bg-success';
        break;
    }
}

/************************************************************************************ */
function Q17()
{
    var num1 = parseInt(document.getElementById("Q17O").value);
    var num2 = parseInt(document.getElementById("Q17T").value);
    switch(true)
    {
        case isNaN(num1):
        case isNaN(num2):
        document.getElementById("RQ17").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ17").className= 'bg-danger';
        break;
        case num1 > num2:
        document.getElementById("RQ17").innerHTML= "The Max Number Is : "+ num1;
        document.getElementById("RQ17").className= 'bg-success';
        break;
        default:
        document.getElementById("RQ17").innerHTML= "The Max Number Is : " +  num2;
        document.getElementById("RQ17").className= 'bg-success';
        break;
    }
} 
/************************************************************************************ */
function Q18()
{
    var num = parseInt(document.getElementById("Q18").value);
    var result = num % 4;
    switch(true)
    {
        case isNaN(num):
        document.getElementById("RQ18").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ18").className= 'bg-danger';
        break;
        case  result % 2 == 0:
        document.getElementById("RQ18").innerHTML= "This Number Is Even";
        document.getElementById("RQ18").className= 'bg-success';
        break;
        default:
        document.getElementById("RQ18").innerHTML= "This Number Is Odd";
        document.getElementById("RQ18").className= 'bg-success';
        break;
    }
}
/************************************************************************************ */
function Q19() 
{
    var num= parseInt(document.getElementById("Q19").value);
    
    switch(true)
    {
        case isNaN(num):
        document.getElementById("RQ19").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ19").className= 'bg-danger';
        break;
        case num > 0 :
        document.getElementById("RQ19").innerHTML= "Positive";
        document.getElementById("RQ19").className= 'bg-success';
        break;
        case num < 0 :
        document.getElementById("RQ19").innerHTML= "Negative";
        document.getElementById("RQ19").className= 'bg-danger';
        break;
        default:
        document.getElementById("RQ19").innerHTML= "Zeroo";
        document.getElementById("RQ19").className= 'bg-danger';
        break;
    }
    
}
/************************************************************************************ */
function Q20(btnradio)
{
    var num1 = parseInt(document.getElementById("Q20O").value);
    var num2 = parseInt(document.getElementById("Q20T").value);
    var operator = document.getElementById("OP");
    var operator1 = operator.options[operator.selectedIndex].value;
    var result;
    switch(true)
    {
        case isNaN(num1):
        case isNaN(num2):
        document.getElementById("RQ20").innerHTML= "Sorry That's Not A Number";
        document.getElementById("RQ20").className= 'bg-danger';
        break;
        case operator1 == "+" :
        result = num1 + num2;
        document.getElementById("RQ20").innerHTML= "Total = " + result;
        document.getElementById("RQ20").className= 'bg-success';
        break;
        case operator1 == "-" :
        result = num1 - num2;
        document.getElementById("RQ20").innerHTML= "Total = " + result;
        document.getElementById("RQ20").className= 'bg-success';
        break;
        case operator1 == "/" :
        result = num1 / num2;
        document.getElementById("RQ20").innerHTML= "Total = " + result;
        document.getElementById("RQ20").className= 'bg-success';
        break;
        case operator1 == "*" :
        result = num1 * num2;
        document.getElementById("RQ20").innerHTML= "Total = " + result;
        document.getElementById("RQ20").className= 'bg-success';
        break;
} 
}