function minMeetingRooms(intervalos) {

    if (intervalos.length === 0) {
        return 0
    }

    let inicios = []
    let fins = []

    // separar horários
    for (let intervalo of intervalos) {
        inicios.push(intervalo[0])
        fins.push(intervalo[1])
    }

    // ordenar
    inicios.sort((a, b) => a - b)
    fins.sort((a, b) => a - b)

    let salas = 0
    let maxSalas = 0

    let i = 0
    let j = 0

    while (i < inicios.length) {

        // precisa de nova sala
        if (inicios[i] < fins[j]) {
            salas++
            i++
        } 
        
        // reutiliza sala
        else {
            salas--
            j++
        }

        maxSalas = Math.max(maxSalas, salas)
    }

    return maxSalas
}

console.log(
    minMeetingRooms([[0,30], [5,10], [15,20]])
)