// ------------------------------
// Global Counters of heart,coin,and copy
// ------------------------------
let heartsCount = 0;
let coinsCount = 100;
let copyCount = 2;

// Get navbar elements
const navHeart = document.getElementById("navHeart");
const coinCount = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");

// Call History elements
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

// ------------------------------
// Card Functionality
// ------------------------------
for (let i = 1; i <= 6; i++) {
  const card = document.getElementById(`card-${i}`);
  if (!card) continue;

  const heartBtn = card.querySelector(".heart-btn");
  const copyBtn = card.querySelector(".copy-btn");
  const callBtn = card.querySelector(".call-btn");

  const serviceName = card.querySelector("span.font-bold").innerText;
  const serviceNumber = card.querySelector(".text-2xl").innerText;

  // Heart Button Click
  heartBtn.addEventListener("click", function()
   {
    heartsCount++;
    navHeart.innerText = heartsCount;
    heartBtn.classList.add("text-red-500");
  });

  // Copy Button 
  copyBtn.addEventListener("click", function()  {
    navigator.clipboard.writeText(serviceNumber)
      .then(() => {
        copyCount++;
        copyCountEl.innerText = copyCount;
        alert(`Number ${serviceNumber} copied to clipboard!`);
      })
      .catch(err => alert("Failed to copy: " + err));
  });

 // Call Button Click
callBtn.onclick = function () {
  if (coinsCount < 20) {
    alert("You don't have enough coins to make a call!");
    return;
  }

  coinsCount -= 20;
  coinCount.innerText = coinsCount;

  alert(`Calling ${serviceName} at ${serviceNumber}`);

  // Create a new "call history card" for each call

  const now = new Date();
  const timeStr = now.toLocaleTimeString();

  const section = document.createElement("div");
  section.className =
    "bg-gray-50 rounded-2xl p-4 mb-3 flex justify-between items-center w-full";

  section.innerHTML = `
    <div>
      <div class="font-semibold text-black">${serviceName}</div>
      <div class="text-black">${serviceNumber}</div>
    </div>
    <div class="text-black text-sm">${timeStr}</div>
  `;

  historyList.appendChild(section);

  // Hide "No calls yet" text

};

}

// ------------------------------
// Clear History Button
// ------------------------------
clearHistoryBtn.addEventListener("click", function(){
  historyList.innerHTML = "";
  
});

