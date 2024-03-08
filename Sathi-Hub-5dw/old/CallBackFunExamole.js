//
function greet(name , cb)
{
    console.log('Hello' + name + '!');//greet()
    cb();//vishal
    
}

function goodBye()
{
    console.log("goodBye");

}

greet('Good Morning', goodBye); // Hello Good Morning! goodBye