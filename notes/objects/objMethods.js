let user = {

    name: "Nandhakishor",
    age: 20,
    city: "Kottayam" };

    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));
    console.log(obj = Object.assign({}, user))
    console.log(Object.freeze(user))
    console.log(user.hasOwnProperty("location"))