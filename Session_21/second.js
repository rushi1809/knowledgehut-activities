var i=0;
do
{
    var random = Math.random();
    console.log(random);
    random = random * 1000000;
    random = parseInt(random);
    if(random>99999)
    {
        document.write("<br><h4> Sucessfully generated 6 digit OTP <br>"+random+"</br></h4></br>");
    }
    else 
    {
        i--;
        document.write("<br><h4>failed to generate desired OTP trying once again</h4></br>")
    }
    i++;
}while(i<1);
