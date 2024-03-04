// string - e.g. "name", "number"
// number - e.g. 24, 24.1, 1230e
// boolean - true, false, 1 or 0, -1 = false, .0 = true
// object - ["apple", "banana", "grape"]
            // [1, 2, 3, 4]
            // [1, "apple", true]
            // [
            // [1,2,3],
            // undefined = null


            console.log("Hello World", ["apple", "banana", "grape"]);
            //console.error("Hello World");
            //console.warn("Hellow World");
            console.table(["apple", "banana", "grape"]);
            //let name = true;
            //console.log(typeof(name));
            let txtUsename = document.querySelector("#txtUsername");
            let btnRegister = document.querySelector("#btnRegister");
        
            btnRegister.onclick = function () {
                register(txtUsename.value)
            }
            //variables

            function register (username) {
                console.log(username)
            }