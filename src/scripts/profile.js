export function renderUser(user) {
  const header = document.querySelector(".profile__header")
  
  header.insertAdjacentHTML ("afterbegin", `<div class="profile_div">
  <img src="${user.avatar_url}" alt="user" />
  <p>${user.name}</p>
  </div>`)
}

export function renderPosts(posts) {
  
  posts.forEach(function (post) {
    const ul = document.querySelector(".profile__ul") 
    
    ul.insertAdjacentHTML ("afterbegin", `<li>
    <h4>${post.name}</h4>
    <p>
    ${post.description}
    </p>
    <a href="${post.html_url}" target="_blank">Repositório</a>
    </li>`)
  })
  
}

function showInfos() { // transforma json em objeto para renderizar
  const user = JSON.parse(localStorage.getItem("user"))
  const posts = JSON.parse(localStorage.getItem("repos"))

    renderUser(user)
    renderPosts(posts)
 }

 function handleBack() { //volta da pagina do perfil para página inicial
  const backButton = document.querySelector("button")

  backButton.addEventListener("click", () => {
    location.replace("../../")

  })
}

 showInfos()
 handleBack()