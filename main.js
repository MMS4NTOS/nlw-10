let delay = -0.4;

function createCard(date, day, game) {
delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span> </h2> 
                <ul>
                 ${game}
                </ul>
  </div>
  `
}

function createGame(player1, hour, player2) {
return `
   <li> 
       <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}"> 
        <strong>${hour}</strong> 
       <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
  </li>
`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("china", "23:17", "nipon") +
      createGame("brazil", "15:41", "croatia") +
      createGame("denmark", "02:22", "fiji")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("guinea", "14:00", "argentina") +
      createGame("brazil", "15:00", "hongkong") +
      createGame("croatia", "15:00", "korea") + 
      createGame("cazak", "15:00", "madeira")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("denmark", "15:00", "nipon") +
      createGame("hongkong", "15:00", "china") +
      createGame("croatia", "15:00", "fiji")
  )

  