let message
function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400){
    message = "This one is on me!"
  }else if(rideLength > 400 && rideLength <= 2000){
    message = "That will be twenty bucks."
  }else if(rideLength > 2000 && rideLength <= 2500){
    message = "I will gladly take your thirty bucks."
  }else{
    message = "No can do."
  }
  return message
}

function ternaryCheckCity(city){
  message = city === "NYC" ? "Ok, sounds good." : "No go."
  return message
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
     message = "Thank you so much."
     break
    case 'not as generous':
      message = "Thank you."
      break
      default:
        message = "Bye."
        break
  }
  return message
}

