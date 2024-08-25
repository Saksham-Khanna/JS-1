// stack - primitive (numbers/boolean)     heap - non primitive ()
let ytname = "yoyo"
let other = ytname
console.log(other)

let user1 = {
    email : 'skshm@google.com',
    upi : 'skm@ybl'
}

let user2 = user1

user2.email = 'chairocode@yt.com'
console.log(user2.email);
console.log(user1.email);
