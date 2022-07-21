async function getInfo() {
    
    const stopIdElement = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const timetableElement = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement}`;

        stopNameElement.textContent = 'Loading...';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
}