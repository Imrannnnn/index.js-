//Simple ApP using promise 

function getname() {
    
    return new Promise((resolve, reject) => {
    
        const name = window.prompt("Enter your name")

        if(typeof name === 'string' && name.length > 0) {
            setTimeout(()=>{
                resolve(name);

            }, 2000)

        }
        else {
            reject("Enter a valid name or username")
        }

    })
}

function getAge() {
    return new Promise((resolve, reject)=> {

let age = Number(window.prompt("enter age"))

if(!isNaN(age) && age >= 18) {
    setTimeout(()=> {

        resolve(age)
    }, 2000) 

    } 
    
    else {
        reject("your age is small please")
    }

}

) 
}


getname().then((value)=> {
    console.log(value); return getAge()
}) 
.then(function(value)
{
  console.log(value); console.log("DOne")

}).catch( error => {
    console.error(error)

})