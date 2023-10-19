function getFibonacciAt( n ){
    let f  = (n == 0) ? 0:
             (n == 1) ? 1 : 
            getFibonacciAt( n - 1 ) + getFibonacciAt( n - 2 );
            return f;
}
let n = Number(prompt("Posicion de fibonacci deseada: "));
alert(getFibonacciAt( n ));