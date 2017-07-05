module.exports = function main(input) {
        var line1 = new Array(),line2 = new Array(),line3 = new Array();
        var ar=new Array();
        for(var i=0;i<input.length;i++)
        {
	    ar[i]=parseInt(input[i]);
        }
    
  for(var i=0;i<input.length;i++)
  {
  switch(ar[i]){
  case 0 :
	line1[i] ='._.';
	line2[i] ='|.|';
	line3[i] ='|_|';
	break; 
          
  case 1 : 
	line1[i] ='...';
	line2[i] ='..|';
	line3[i] ='..|';
	break;
          
  case 2 : 
	line1[i] ='._.';
	line2[i] ='._|';
	line3[i] ='|_.';
	break;
          
  case 3 : 
	line1[i] ='._.';
	line2[i] ='._|';
	line3[i] ='._|';
	break;
          
  case 4 : 
	line1[i] ='...';
	line2[i] ='|_|';
	line3[i] ='..|';
	break;  
          
  case 5 : 
	line1[i] ='._.';
	line2[i] ='|_.';
	line3[i] ='._|';
	break;
          
  case 6 : 
	line1[i] ='._.';
	line2[i] ='|_.';
	line3[i] ='|_|';
	break;
          
  case 7 : 
	line1[i] ='._.';
	line2[i] ='..|';
	line3[i] ='..|';
	break;
          
  case 8 : 
	line1[i] ='._.';
	line2[i] ='|_|';
	line3[i] ='|_|';
	break;  
          
  case 9 : 
	line1[i] ='._.';
	line2[i] ='|_|';
	line3[i] ='..|';
	break;  
  default :
  break;	  
  }
  }
  var l1=line1[0];l1.push(line1[1]);l1.push(line1[2]);
  var l2=line2[0];l2.push(line2[1]);l2.push(line2[2]);
  var l3=line3[0];l3.push(line3[1]);l3.push(line3[2]);
  l1.join(' ');
  l2.join(' ');
  l3.join(' ');
  var line=(l1+'\n'+l2+'\n'+l3+'\n')
  return line;
};
