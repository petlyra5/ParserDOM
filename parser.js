window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const db = [];

    function recursion(element) {
        element.childNodes.forEach(elem => {

            if(elem.className == 'title' ) {
                const obj = {
                    header: elem.nodeName,
                    content: elem.textContent
                };

                db.push(obj);
            } else {
                recursion(elem);
            }

        });
    }

    recursion(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(db)
    })
    .then(response => response.json())
    .then(json => console.log(json));

});
