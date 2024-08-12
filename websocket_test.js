const statusDiv = document.getElementById('status');

// const socket = new SockJS('http://localhost:8080/ws');
// const socket = new WebSocket('ws://localhost:8080/ws');
const socket = new SockJS('/ws');
const stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    statusDiv.textContent = 'Connected: ' + frame;
    stompClient.subscribe('/topic/test', function (message) {
        console.log('Received: ' + message.body);
        statusDiv.textContent = 'Received: ' + message.body;
    });
}, function (error) {
    console.error('Connection error: ' + error);
    statusDiv.textContent = 'Connection error: ' + error;
});