const myPromise = new Promise((resolve, reject) => {
    resolve("Success")

})

.then (value => {
    console.log(value)
})

.catch(err => {
    console.log(err)
})
