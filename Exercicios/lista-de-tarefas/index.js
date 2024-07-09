const form = document.querySelector('form#form')
const inputTask = document.querySelector('#task')
const Ol = document.querySelector('#todo-list')

let task = []

function renderTaskHtml(taskTitle, done = false){
    const li = document.createElement('li')
    
    const inputCheck = document.createElement('input')
    inputCheck.setAttribute('type', 'checkbox')
    inputCheck.addEventListener('change', (event) =>{
        const liToToggle = event.target.parentElement;

        const spanToToggle = liToToggle.querySelector('span')

        const done = event.target.checked

        if(done) {
            spanToToggle.style.textDecoration = 'line-through'
        }else{
            spanToToggle.style.textDecoration = 'none'
        }

        task = task.map(t => {
            if(t.title === spanToToggle.textContent){
                return {
                    title: t.title,
                    done: !t.done
                }
                
            }
                return t

        })
        localStorage.setItem('tasks', JSON.stringify(task))
    })
    inputCheck.checked = done
    

    const span = document.createElement('span')
    span.textContent = taskTitle
    if (done){
        span.style.textDecoration = 'line-through'
    }

    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'remover'
    buttonDelete.style.backgroundColor = 'red'
    buttonDelete.addEventListener('click', (click) =>{

        const liToRemove = click.target.parentElement

        const titleToRemove = liToRemove.querySelector('span').textContent

        task = task.filter(t => t.title !== titleToRemove)

        Ol.removeChild(liToRemove)

        localStorage.setItem('tasks', JSON.stringify(task))
    })

    li.appendChild(inputCheck)
    li.appendChild(span)
    li.appendChild(buttonDelete)
    
    Ol.appendChild(li)
}

window.onload = () =>{
    const taskOnLocalStorage = localStorage.getItem("tasks")

    if(!taskOnLocalStorage) return

    task = JSON.parse(taskOnLocalStorage)

    task.forEach(t => {
        renderTaskHtml(t.title, t.done)
    });
}
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskTitle = inputTask.value;
    

    if(taskTitle.length < 3){
        alert('porfavor digite uma tarefa valida');
        return;
    }

    task.push({
        title: taskTitle,
        done: false
    })
    localStorage.setItem('tasks', JSON.stringify(task))

    console.log(task);

    renderTaskHtml(taskTitle)

    inputTask.value = ''
});