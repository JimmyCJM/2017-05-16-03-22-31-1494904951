module.exports = function main(input) {
        var line1='',line2='',line3='';
        var ar=new Array();
        for(var j=0;j<input.length;j++)
        {
	    ar[j]=parseInt(input[j]);
        }
    
  for(var i=0;i<input.length;i++)
  {
  switch(ar[i]){
  case 0 :
      line1 +='._.';
	  line2 +='|.|';
	  line3 +='|_|';
      if(i<(input.length-1))
      {
	 line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break; 
          
  case 1 : 
      line1 +='...';
	  line2 +='..|';
	  line3 +='..|';
	 if(i<(input.length-1))
     {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 2 : 
      line1 +='._.';
	  line2 +='._|';
	  line3 +='|_.';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 3 : 
      line1 +='._.';
	  line2 +='._|';
	  line3 +='._|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 4 : 
      line1 +='...';
	  line2 +='|_|';
	  line3 +='..|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;  
          
case 5 : 
      line1 +='._.';
	  line2 +='|_.';
	  line3 +='._|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 6 : 
      line1 +='._.';
	  line2 +='|_.';
	  line3 +='|_|';
	if(i<(input.length-1)){
	 line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 7 : 
      line1 +='._.';
	  line2 +='..|';
	  line3 +='..|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;
          
  case 8 : 
      line1 +='._.';
	  line2 +='|_|';
	  line3 +='|_|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;  
          
	case 9 : 
      line1 +='._.';
	  line2 +='|_|';
	  line3 +='..|';
	if(i<(input.length-1))
      {
	  line1 +=' ';
	  line2 +=' ';
	  line3 +=' ';
	  }
	  break;  
   default :
   break;	  
  }
  }
  var line=(line1+'\n'+line2+'\n'+line3+'\n')
  return line;
};
