// script.js
// DOM পুরো লোড হওয়ার পর JS রান হবে
document.addEventListener("DOMContentLoaded", function () {
  // সব Call button নাও
  const callButtons = document.getElementsByClassName("btn-call");
  // History list ul
  const callList = document.getElementById("call-list");
  // Clear button
  const clearBtn = document.getElementById("clear-history");

  // প্রতিটি Call button-এ click event
  for (const button of callButtons) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      // Call card parent খুঁজো
      const card = event.target.closest(".max-w-full");
      if (!card) return;

      // Title এবং Number
      const title = card.querySelector(".title").innerText;
      const number = card.querySelector(".number").innerText;

      // Current time
      const time = new Date().toLocaleTimeString();

      // নতুন history item তৈরি
      const li = document.createElement("li");
      li.classList.add("history-item", "mb-2", "flex", "justify-between", "items-start");

      li.innerHTML = `
      <div class="flex flex-col">
       <p class="history-title font-normal text-xs">${title}</p>
       <p class="history-number text-xs text-gray-700">${number}</p>
      </div>
      <div>
       <p class="history-time text-xs text-gray-500">${time}</p>
      </div>
      `;


      // History list-এ append করা
      callList.appendChild(li);

      // Scroll auto bottom
      callList.scrollTop = callList.scrollHeight;
    });
  }

  // Clear button click
  clearBtn.addEventListener("click", function () {
    callList.innerHTML = "";
  });
});
