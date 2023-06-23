import { searchUser, searchPosts } from "./request.js";


function handleSearch() { //pesquisa username
    const input = document.querySelector(".index__input")
    const button = document.querySelector(".index__button")

    button.addEventListener("click", () => {
        const username = input.value

        localStorage.setItem("username", username)

        searchUser(username);
        searchPosts(username)

    })
}






handleSearch()

