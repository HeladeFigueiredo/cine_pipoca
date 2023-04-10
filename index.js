const cards = document.getElementsByClassName('card');

for (const card of cards) {
    const overlay = card.getElementsByClassName('card-img-overlay')[0]

    card.onmouseover = function() {
        overlay.style.display = 'block';
    };

    card.onmouseout = function() {
        overlay.style.display = 'none';
    };
};


