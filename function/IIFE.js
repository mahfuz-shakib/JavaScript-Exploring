//  Immediately function called when it's created. No mannual called needed.
//  systax: 
/*
    ( 
        function myFun(received_parameters)
        {
            // statements
        } 
    )(given_arguments);
*/

(
    function displayMessage()
    {
        console.log('Hello World');
    }
)();

(
    function displayMessage2(msg)
    {
        console.log(msg);
    }
)('Beautiful bangladesh');