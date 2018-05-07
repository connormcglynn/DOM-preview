var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const li = event.target.parentElement;
        
        li.parentNode.removeChild(li);
    });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('navigation to ', event.target.textContent, ' was prevented.');
})