// Countdown to GTA 6 launch — Nov 19, 2026
const targetDate = new Date('2026-11-19T00:00:00');

function updateCountdown(){
  const now = new Date();
  let diff = targetDate - now;

  if (diff <= 0){
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent = '00';
    document.getElementById('cd-secs').textContent = '00';
    return;
  }

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= day * (1000 * 60 * 60 * 24);
  const hrs = Math.floor(diff / (1000 * 60 * 60));
  diff -= hrs * (1000 * 60 * 60);
  const mins = Math.floor(diff / (1000 * 60));
  diff -= mins * (1000 * 60);
  const secs = Math.floor(diff / 1000);

  document.getElementById('cd-days').textContent = String(day).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hrs).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Basic client-side validation feedback before Mailchimp redirect/submit
const form = document.getElementById('mc-embedded-subscribe-form');
const msg = document.getElementById('form-msg');
const emailInput = document.getElementById('mce-EMAIL');

form.addEventListener('submit', function(e){
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)){
    e.preventDefault();
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'form-msg error';
    return;
  }
  msg.textContent = 'Submitting…';
  msg.className = 'form-msg';
  // Form proceeds to Mailchimp (opens in new tab via target="_blank").
});
