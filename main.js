let d = document
let body = d.querySelector('body')
let timeStik = d.querySelectorAll('.time_quarter')
let themeBtn = d.querySelector('.themebtn')
let hourHand = d.querySelector('.hour_hand')
let minuteHand = d.querySelector('.minute_hand')
let secondHand = d.querySelector('.second_hand')
let digitalTime = d.querySelector('.digital_time')
let ampm = 'AM'
let ampmField = d.querySelector('.ampm')
let dateField = d.querySelector('.date')
let consle = d.querySelector('.console')
let mName = ['Jan','Fab','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


for (var i = 0; i < timeStik.length; i++) {
  timeStik[i].style.transform = `rotate(${i * 30}deg)`
}


themeBtn.addEventListener('click', changeTheme)


function changeTheme(){
  body.classList.toggle('dark')
}

function clockAndDate() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
 
  
  day = day < 10 ? '0' + day : day 
  amp = hour > 12 ? 'PM' : ampm
  hour = hour > 12 ? hour - 12 : hour 
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  
  
  hourHand.style.transform = `rotate( ${(hour * 30)+ minute / 2}deg)`
  minuteHand.style.transform = `rotate( ${minute * 6}deg)`
  secondHand.style.transform = `rotate( ${second * 6}deg)`
  
  digitalTime.innerHTML = `${hour}:${minute}`
  ampmField.innerHTML = ampm
  
  dateField.innerHTML = `${day} ${mName[month]}, ${year}`
  
  
  setTimeout(clockAndDate , 1000)
}
clockAndDate()
