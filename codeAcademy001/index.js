let userName;
if(userName === 'Jane'){
  console.log(`Hello, ${userName}!`)
}else{
  console.log('Hello!')
}

let userQuestion = " "
console.log(userQuestion)

let eightBall = " "

let randomNumber = Math.floor(Math.random() * 8)
if(randomNumber === 0){
  eightBall = 'It is certain'
  console.log(eightBall)
}else if(randomNumber === 1){
  eightBall = 'It is decidedly so'
  console.log(eightBall)
}else if(randomNumber === 2){
  eightBall = 'Reply hazy try again'
  console.log(eightBall)
}else if(randomNumber === 3){
  eightBall = 'Cannot predict now'
  console.log(eightBall)
}else if(randomNumber === 4){
  eightBall = 'Do not count on it'
  console.log(eightBall)
}else if(randomNumber === 5){
  eightBall = 'My sources say no'
  console.log(eightBall)
}else if(randomNumber === 6){
  eightBall = 'Outlook not so good'
  console.log(eightBall)
}else if(randomNumber === 7) {
  eightBall = 'Signs point to yes'
  console.log(eightBall)
}

