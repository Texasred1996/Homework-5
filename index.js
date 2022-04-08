const moment = require("./moment");

$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, h:mm a')));

$(document).ready(function(){

let saveBtn= $('.saveBtn');
let output= $('#currentDay');
let dateBtn= $('.dateBtn');
let currentTime=moment().hours();

saveBtn.on('click', function (){
let inputValue=$(this).siblings('.description').val()
let id=$(this).parent().attr('id')
localStorage.setItem(id,inputValue)
});

$('#9 .description').val(localStorage.getItem('6'))
$('#10 .description').val(localStorage.getItem('7'))
$('#11 .description').val(localStorage.getItem('8'))
$('#12 .description').val(localStorage.getItem('9'))
$('#13 .description').val(localStorage.getItem('10'))
$('#14 .description').val(localStorage.getItem('11'))
$('#15 .description').val(localStorage.getItem('12'))
$('#16 .description').val(localStorage.getItem('1'))
$('#17 .description').val(localStorage.getItem('2'))
$('#15 .description').val(localStorage.getItem('3'))
$('#16 .description').val(localStorage.getItem('4'))
$('#17 .description').val(localStorage.getItem('5'))

// change text area background to distinguish between past pres or fut
// compare current time to time block
// if time block is less than current time then add class of past
// repeat for pres and fut
let updateTime  = moment().hours();

function updateTime () {
$('.time-block').each(function(){
let timeBlock= $(this).attr('id')
console.log(timeBlock)
if (currentTime < timeBlock) {
    $(this).addClass('past');
    $(this).addClass('pres');
    $(this).addClass('fut');
}
else if(currentTime < timeBlock) {
    $(this).addClass('fut');
    $(this).addClass('pres');
    $(this).addClass('past');
}
else{
    $(this).addClass('pres');
    $(this).addClass('fut');
    $(this).addClass('past');
}
})
}
updateTime()
})

