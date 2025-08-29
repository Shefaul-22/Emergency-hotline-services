// console.log("JS file is connected");

const callButtons = document.getElementsByClassName("btn-call");

const callList = document.getElementById("call-list");

const clearBtn = document.getElementById("clear-history");

const coin = document.getElementById("coin-balance");
let coins = parseInt(coin.innerText);
console.log(coins);



for (const button of callButtons) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }


    // Card container
    const card = event.target.parentElement.parentElement;


    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".number").innerText;

    const time = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Dhaka'

    });

    coins = coins - 20;
    alert(`Calling ${title} at ${number}`);
    coin.innerText = coins;



    // For Create List
    const li = document.createElement("li");
    li.classList.add("history-item", "mb-2", "flex", "justify-between", "items-start");

    li.innerHTML = `
      <div class="flex xl:justify-center justify-between items-center gap-2 bg-[#FAFAFA] rounded-lg shadow-md w-full p-2">
        <div class="flex flex-col">
          <p class="history-title font-hind font-semibold text-sm pb-2">${title}</p>
          <p class="history-number text-xs text-gray-700">${number}</p>
        </div>
        <div class="xl:w-1/2">
          <p class="history-time text-xs text-gray-500 ">${time}</p>
        </div>
      
      </div>
      `;


    callList.appendChild(li);

  });
};


// For Clear history
clearBtn.addEventListener("click", function () {
  callList.innerHTML = "";
});


// For heart count

const hearts = document.getElementsByClassName("white-heart");
const heartCountValue = document.getElementById("heart-count");

let heartCount = parseInt(heartCountValue.innerText);

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    heartCount++;
    heartCountValue.innerText = heartCount;

    heart.classList.toggle("text-red-500");
    heart.classList.toggle("fa-solid");


  });
};

// For copy button click and copy count

const copyButtons = document.getElementsByClassName("btn-copy");
const copyCountValue = document.getElementById("copy-count");


let copyCount = parseInt(copyCountValue.innerText);

for (const button of copyButtons) {
  button.addEventListener("click", function (event) {
    event.preventDefault();


    const card = event.target.parentElement.parentElement;


    const number = card.querySelector(".number").innerText;


    navigator.clipboard.writeText(number).then(function () {
      alert(`Number ${number} copied to clipboard!`);

      copyCount++;
      copyCountValue.innerText = copyCount;

    })
  });
};