export async function searchUser(username) {
  const user = await fetch(`https://api.github.com/users/${username}`, {
    method: "GET",
  })
  .then(async (response) => {
    if (response.ok) {
      const responseConvert = await response.json();
      localStorage.setItem("user", JSON.stringify(responseConvert)) // salva no localstorage para poder trocar de pagina e continuar as infos
      location.replace("./src/pages/profile.html")
    } else {
      location.replace("./src/pages/error.html")
    }
  })

  return user

}

export async function searchPosts(username) { //request para repositório 
  const post = await fetch(`https://api.github.com/users/${username}/repos`, {
    method: "GET",
  })
  .then(async (response) => {
    if (response.ok) {
      const responseConvert = await response.json();
      localStorage.setItem("repos", JSON.stringify(responseConvert)) 

      } else {
      console.log("erro")
    }
  })

  return post

}

