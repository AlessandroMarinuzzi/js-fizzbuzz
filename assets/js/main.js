// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
var list = document.getElementById("result")

// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
for (var i=1; [i] <= 100; i++){
    switch (true) {
        case i % 3 == 0 && i % 5 == 0:
            list.innerHTML += 'FizzBuzz' + " ";
            break;

        case i % 3 == 0:
            list.innerHTML += 'Fizz' + " ";
            break;

        case i % 5 == 0:
            list.innerHTML += 'Buzz' + " ";
            break;
        
        default:
            list.innerHTML +=  i + " " ;
            break;
    }
}