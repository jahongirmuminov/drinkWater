const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const remained = document.getElementById('remained');
const percantage = document.getElementById('percantage');

smallCups.forEach((cup, ind) => {
    cup.addEventListener('click', () => highlightCups(ind));
});

function highlightCups(ind) {
    console.log(ind);
    if (
        smallCups[ind].classList.contains('full') &&
        !smallCups[ind].nextElementSibling.classList.contains('full')
    ) {
        ind--;
    }
    smallCups.forEach((cup, ind2) => {
        if (ind2 <= ind) {
            return cup.classList.add('full');
        }
        cup.classList.remove('full');
    });
    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percantage.style.visibility = 'hidden';
        percantage.style.height = 0;
    } else {
        percantage.style.visibility = 'visible';
        percantage.style.height = `${(fullCups / totalCups) * 330}px`;
        percantage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
}