const btn = document.getElementById('btn');
const gridBox = document.getElementById('grid');
const imgs = document.querySelectorAll('.cellImg');
const paragraph = document.querySelector('p')
const gridImg = document.getElementById('gridImg');
const fireworks = document.querySelector('.fireworks');
const audio = document.getElementById('mp3');


btn.addEventListener('click', () => {
    setTimeout(() => { btn.style.display = 'none' }, 100);
})
btn.addEventListener('click', () => {
    setTimeout(() => {
        [...imgs].forEach(function (img) {
            img.style.visibility = 'hidden'
        });
        gridImg.style.visibility = 'visible';
    }
        , 10000)
});
btn.addEventListener('click', () => {
    setTimeout(() => {
        gridImg.style.visibility = 'hidden';
        paragraph.style.visibility = 'visible';
        setTimeout(() => {
            fireworks.style.visibility = 'visible';
        }, 1000)
    }
        , 11000)
});
btn.onclick = function () {
    const grid = document.querySelector('.grid');
    const gridCells = Array.from(grid.querySelectorAll('.grid-cell img'));
    let index = 0;
    const interval = 1000;
    const intervalID = setInterval(function () {
        if (index <= 9) {
            let gridCell = gridCells[index];
            gridCell.style.visibility = 'visible';
        }
        index++;
        if (index >= gridItems.length) {
            index = 0;
            clearInterval(intervalID);
        }

    }, interval);
};



