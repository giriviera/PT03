document.querySelector('#search').addEventListener('click', getUser);

function getUser(e){
    const name = document.querySelector('#code').value;

    fetch(`https://fordemo-ot4j.onrender.com/users/${name}`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('.result').innerHTML = `
        <div style="background-color: white; color: black; padding: 4px 16px; border-radius: 8px;">User ID: ${data.id}</div>`;
    })
    .catch((err) => {
        document.querySelector('.result').innerHTML = `
        <div style="color: red;">Error: ${err.message}</div>`;
    });

    e.preventDefault();
}