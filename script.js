document.addEventListener("DOMContentLoaded", () => {

  // heart btn function
  const lifeCount = document.getElementById("life");
  const heartBtns = document.querySelectorAll(".heart-icon");

  let life = 0;
  lifeCount.innerText = life;

  heartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      life++;
      lifeCount.innerText = life;
    });
  });


  // call btn function
  const coinEl = document.getElementById("coin");
  const callHistory = document.querySelector(".call-history ul");
  // default coin
  let coins = Number(coinEl.innerText) || 0;
  // get call btn
  const callBtns = document.querySelectorAll(".call-btn");
  callBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const serviceName = card.querySelector(".info h1").innerText;
      const serviceNumber = card.querySelector(".info h2").innerText;
      // check coin for calling
      if (coins < 20) {
        alert("Not enough coins to make a call!");
        return;
      }
      // calling alert
      alert(`📞 Calling ${serviceName} - ${serviceNumber}`);
      // decrease 20 coin for per call
      coins -= 20;
      coinEl.innerText = coins;
      //add call in call history
      const li = document.createElement("li");
      li.className = "flex justify-between items-center gap-2 bg-[#fafafa] rounded-lg mt-2 mb-2";
      li.innerHTML = `
        <div>
          <p class="font-semibold">${serviceName}</p>
          <p class="text-[#5c5c5c]">${serviceNumber}</p>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>
      `;
      callHistory.prepend(li);
    });
  });
  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener("click", () => {
    callHistory.innerHTML = ""; // remove all li items
  });


  // copy button function
  const copyEl = document.getElementById("copy");
  let copies = Number(copyEl.innerText) || 0;
  // get copy btn
  const copyBtns = document.querySelectorAll(".copy-btn");
  copyBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const serviceNumber = card.querySelector(".info h2").innerText;
      // copy on clipboard
      navigator.clipboard.writeText(serviceNumber).then(() => {
        alert(`Copied Number - ${serviceNumber}`);
        copies++;
        copyEl.innerText = copies;
      })
    });
  });
});