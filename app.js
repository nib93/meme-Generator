const form = document.querySelector('.form')
const display = document.querySelector('.output')

form.addEventListener('submit', function (event) {

    event.preventDefault();
    const meme = document.createElement('div');
    const closeX = document.createElement('span');
    closeX.innerText = 'X';
    closeX.className = 'closeX';
    meme.appendChild(closeX);
    display.appendChild(meme);
    meme.className = 'meme';

    //get image-url and display 
    const inputUrl = document.querySelector('input[name=img-url]').value;
    const imgMeme = document.createElement('img');
    imgMeme.className = 'img-meme';
    imgMeme.setAttribute('src', inputUrl);
    meme.appendChild(imgMeme);

    //Add Top-text 
    const topInput = document.querySelector('input[name=top]').value;
    const topText = document.createElement('h3');
    topText.className = 'topText';
    topText.innerText = topInput;
    meme.appendChild(topText);

    //Add bottom-text
    const bottomInput = document.querySelector('input[name=bottom]').value;
    const bottomText = document.createElement('h3');
    bottomText.className = 'bottomText';
    bottomText.innerText = bottomInput;
    meme.appendChild(bottomText);

    form.reset();
});

display.addEventListener('click', function (event) {

    if (event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
    }

});
