const a = [1, 2, 3, 4]

let b = a.filter(item => {
    return item > 2
})
console.log(a)
console.log(b)
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
// a.forEach(item => {
//     console.log(item)
// })



let numberId = Math.floor(Math.random() * 100)
fetch(`https://jsonplaceholder.typicode.com/posts/${numberId}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })
