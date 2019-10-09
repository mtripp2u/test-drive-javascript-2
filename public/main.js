let teamOneScore = 0
let teamTwoScore = 0

const teamOneScoreText = document.querySelector('.team-1-score')
teamOneScoreText.textContent = teamOneScore

const teamTwoScoreText = document.querySelector('.team-2-score')
teamTwoScoreText.textContent = teamTwoScore

const teamOneAddOne = () => {
  teamOneScore += 1
  teamOneScoreText.textContent = teamOneScore
  if (teamOneScore > 7)
{
  teamOneScoreText.style.color = 'yellow'
}
if (teamOneScore === 10){
  scoreReachesTen()
}}

const teamOneSubtractOne = () => {
  teamOneScore -= 1
  teamOneScoreText.textContent = teamOneScore
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  teamTwoScoreText.textContent = teamTwoScore
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  teamTwoScoreText.textContent = teamTwoScore
  }
  
  const main = () => {
  
  document.querySelector('button.team-1-add-1-button').addEventListener('click', teamOneAddOne)

  document.querySelector('button.team-1-subtract-1-button').addEventListener('click', teamOneSubtractOne)
  
  document.querySelector('.team-2-add-1-button').addEventListener('click', teamTwoAddOne)

  document.querySelector('.team-2-subtract-1-button').addEventListener('click', teamTwoSubtractOne)


}
  document.addEventListener('DOMContentLoaded', main)
