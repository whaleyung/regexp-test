
let str = `
    010-1234-5678
    thesecon@gmail.com
    https://www.omdbapi.com/?apikiey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    abbcccdddd
`

// 생성자 방식
// const regexp = new RegExp('the', 'gi')


// 리터럴 방식
// const regexp = /the/gi

// 메소드 연습
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// 플래그 연습
// console.log(str.match(/\.$/gim))

// 패턴 연습
// console.log(
//     str.match(/\b\w{2,3}\b/g)
// );  


// const h = `  the hello  world       !

// `

// console.log(
//     h.replace(/\s/g, '')
// )

console.log(
    str.match(/(?<=@).{1,}/g)
)