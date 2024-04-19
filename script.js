navigator
  .getBattery()
  .then(function (battery) {
    // Get current battery level .
    setInterval(() => {
      let batteryLevel = battery.level * 100;
      let batteryStatus = battery.charging ? "Charging" : "Not charging";
      let batteryChargeingTime = battery.chargingTime / 60;
      let batteryDischargingTime = parseInt(battery.dischargingTime / 60);

      const html = `<h1 class="buttery-level" ">Battery level: ${batteryLevel}%</h1>
        <h2 class="buttery-status" style="text-align: center;">${batteryStatus}</h2>
        <h3 class="buttery-charging-time" style="text-align: center;">Battery charging time: ${batteryChargeingTime} minutes</h3>
        <h3 class="buttery-discharging-time" style="text-align: center;">Battery discharging time: ${batteryDischargingTime} minutes</h3>
        
      `;

      if (batteryStatus === "Charging") {
        const html = `<div>Your battery is charging. Please wait until it is fully charged.</div>`;
        document.body.innerHTML += html;
      } else if (batteryStatus === "Not charging" && batteryLevel >= 80) {
        const html = `<div>Your battery is almost full. You can unplug your device now safely.</div>`;
        document.body.innerHTML += html;
      }

      if (batteryStatus === "Not charging" && batteryLevel <= 20) {
        alert("Your battery is low. Please charge your device.");
      } else if (batteryStatus === "Charging" && batteryLevel === 100) {
        alert(
          "Your battery is fully charged. You can unplug your device now safely."
        );
      }

      if (batteryLevel <= 20) {
        document.body.style.backgroundColor = "red";
      } else if (batteryLevel <= 50) {
        document.body.style.backgroundColor = "orange";
      } else {
        document.body.style.backgroundColor = "green";
      }
      document.body.innerHTML = html;
    }, 1000);
  })
  .catch(function (e) {
    console.error(e);
  });
