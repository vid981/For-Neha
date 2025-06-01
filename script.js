let currentPage = 1; const messages = [ "Happy birthday Madamji !!!", "It’s your special day", "So..........!!", "I want to make something special for you" ]; let msgIndex = 0; const openingCard = document.getElementById('openingCard'); const page1Text = document.getElementById('page1Text'); const voiceNote = document.getElementById('voiceNote'); const toPage3 = document.getElementById('toPage3'); const toPage4 = document.getElementById('toPage4');

openingCard.addEventListener('click', () => { showMessages(); });

function showMessages() { if (msgIndex < messages.length) { page1Text.innerText = messages[msgIndex]; msgIndex++; setTimeout(showMessages, 2000); } else { setTimeout(() => goToPage(2), 1000); } }

voiceNote.addEventListener('ended', () => { toPage3.classList.remove('hidden'); });

document.querySelectorAll('.flip-card').forEach(card => { card.addEventListener('click', () => { card.classList.add('flipped'); if ([...document.querySelectorAll('.flip-card')].every(c => c.classList.contains('flipped'))) { toPage4.classList.remove('hidden'); } }); });

toPage3.addEventListener('click', () => goToPage(3)); toPage4.addEventListener('click', () => goToPage(4));

function goToPage(n) { document.getElementById(page${currentPage}).classList.remove('active'); document.getElementById(page${n}).classList.add('active'); currentPage = n; }

