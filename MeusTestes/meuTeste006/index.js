const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.getElementById('loading')
const postsContainer = document.getElementById('posts-container')

async function getAllposts(){
    const response = await fetch(url)

    console.log(response)

    const data = await response.json()

    console.log(data)

    loadingElement.classList.add('hide')

    data.map((post) =>{
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")
        
        title.innerText = post.title;
        body.innerText =post.body;
        link.innerText = "ler";
        link.setAttribute("hef", `/post.html?id=${post.id}`)

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

getAllposts()