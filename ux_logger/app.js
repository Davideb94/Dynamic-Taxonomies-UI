var fs = require( "fs" );

var readme = fs.readFile( "readme.txt", "utf8", function( err, data ){
    
    console.log( data );
    fs.writeFileSync( "writeme.txt", data + " added content!");
    
    
} );

console.log( "hola" );