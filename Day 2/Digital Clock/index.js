function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
  
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];
  
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day}/${month}/${year}`;
  
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
  }
  
  // Initial call to display the time and date immediately on load
  updateTime();
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  

