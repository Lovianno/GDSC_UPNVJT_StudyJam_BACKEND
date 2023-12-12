const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

function randomChoices() {
  const choices = ["gunting", "batu", "kertas"]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

console.clear()

console.log(
  "Selamat datang di permainan Gunting, Batu, Kertas\n" +
  "Pilihan kamu akan dibandingkan dengan pilihan komputer\n" 
  
)

readLine.question("Masukkan pilihan anda (gunting, batu, kertas): ", (answer) => {
  const PLAYER_CHOICE = answer.toLowerCase()
  const COMPUTER_CHOICE = randomChoices()

  console.log(`Player memilih : ${PLAYER_CHOICE}`)
  console.log(`Computer memilih : ${COMPUTER_CHOICE}`)

     if(PLAYER_CHOICE === COMPUTER_CHOICE) {
    console.log("DRAW!")
  } else if(PLAYER_CHOICE === "gunting" && COMPUTER_CHOICE === "kertas") {
    console.log("PLAYER WIN!")
  } else if (PLAYER_CHOICE === "batu" && COMPUTER_CHOICE === "gunting") {
    console.log("PLAYER WIN!")
  } else if (PLAYER_CHOICE === "kertas" && COMPUTER_CHOICE === "batu") {
    console.log("PLAYER WIN!")
  } else {
    console.log("COMPUTER WIN!")
  }

  readLine.close()
})


