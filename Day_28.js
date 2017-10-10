process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main (){
    var n = parseInt(readLine());
    var arr = [];
    for (var i = 0; i < n; i++)
        arr.push(readLine());
    
    var gmail = arr.filter(function(x) { return(x.includes("@gmail.com")) });
    gmail.sort();
    var names = gmail.map(function(x) { return(x.slice(0,x.indexOf(' '))) });
    
    names.forEach(function(name) {
        console.log(name);
    })

}
