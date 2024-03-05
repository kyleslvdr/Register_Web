// string - e.g. "name", "number"
// number - e.g. 24, 24.1, 1230e
// boolean - true, false, 1 or 0, -1 = false, .0 = true
// object - ["apple", "banana", "grape"]
            // [1, 2, 3, 4]
            // [1, "apple", true]
            // [
            // [1,2,3],
            // undefined = null


            //console.log("Hello World", ["apple", "banana", "grape"]);
            //console.error("Hello World");
            //console.warn("Hellow World");
            //console.table(["apple", "banana", "grape"]);
            //let name = true;
            //console.log(typeof(name));
            let txtUsename = document.querySelector("#txtUsername")
            let txtPassword = document.querySelector("#txtPassword")
            let txtConfirmPassword = document.querySelector("#txtConfirmPassword")
            let btnRegister = document.querySelector("#btnRegister")
        
            btnRegister.onclick = function () {
                register(txtUsename.value, txtPassword.value, txtConfirmPassword.value)
            }
            //variables

            function register (username, password, confirmPassword) {
                //....... If else........ if else
                // Conditional Operators ( Greater Than >, Less Than<, Equal ==, Not !, Or || )
                // Greater Than or Equal >=, Less Than or Equal <=
                // Not Equal !=
                console.log(username, password, confirmPassword)

                if (password == confirmPassword && password != "" && confirmPassword != "" ) {
                    return console.log ("Password Match!")
                } else { if (password == "" || confirmPassword == ""){
                    return console.log ("Password must not be empty.")
                }
                else {
                    return console.log ("Password does not Match.")
                }    
            }
        }