function processData(input) {
    //Enter your code here
    //console.log(input);
    var a=[];
    
    a = input.split("\n");
    n =  parseInt(a[0]);
    
     for (var x = 0; x < n; x++)
     { 
            var m = a[x + 1];
            var l = m.length;
            var arr = m.split('');
            var rodd = "";
            var reven = "";
         
         for(var i=0;i<l;i++)
        {
            if (i%2 == 0)
             {
                 reven=reven+m[i];
             }else{
                 rodd=rodd+m[i];
             }
            
           
        }
          console.log(reven + " " +rodd);
     }

} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
    
   // 
    
    
});
