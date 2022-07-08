/*Task 4*/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

/*function isJsonCorrect(str) {
    try {
        JSON.stringify(str)
        JSON.parse(str)
    } catch (error) {
        return false
    }
    return true
}*/

/*Task 5*/
const socketGetUsers = new WebSocket("ws://localhost:3000");

socketGetUsers.onopen = () =>  console.log('OPEN')

socketGetUsers.onmessage = ev => {
    console.log(ev)
}

setTimeout(() => {
    socketGetUsers.close()
    console.log('CLOSE')
}, 500)

socketGetUsers.onclose = () =>  console.log('CLOSE')

socketGetUsers.onerror = error => console.log(error.message)