let noOfPosts = 0
let id = null

const resetPopup = () => {
    id = null
    const blogTitle = document.getElementById("title")
    const blogDescription = document.getElementById("detail")
    blogTitle.value = null
    blogDescription.value = null
}

window.onload = () => {
    
    document.getElementById("addBlog").onclick = () => {
        document.getElementById("popupContact").style.display = "flex"
    }
    
    document.querySelector("button#close").onclick = () => {
        document.getElementById("popupContact").style.display = "none"
        if(id != null) {
            resetPopup()
        }
    }
    
    document.getElementById("post").onclick = () => {
        const posts = document.querySelector(".body-div2")
        const blogTitle = document.getElementById("title")
        const blogDescription = document.getElementById("detail")
    
        let post = document.createElement("div")
        post.className = "article-card"
        noOfPosts++
        post.id = id == null ? "flashcard" + noOfPosts : id
    
        let img = document.createElement("img")
        img.src = "assets/java card image.svg"
        post.appendChild(img)
    
        let h1 = document.createElement("h1")
        h1.textContent = blogTitle.value
        post.appendChild(h1)
        
        let p1 = document.createElement("p")
        p1.textContent = blogDescription.value
        post.appendChild(p1)

        let p2 = document.createElement("p")
        const currDate = new Date()
        p2.textContent = `Posted on: ${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()} ${currDate.getHours()}h:${currDate.getMinutes()}m`
        post.appendChild(p2)
        
        let buttons = document.createElement("div")
        buttons.className = "card-buttons"
    
        let edit = document.createElement("button")
        edit.className = "edit"
        edit.textContent = "Edit"
        edit.onclick = () => {
            id = post.id
            blogTitle.value = h1.textContent
            blogDescription.value = p1.textContent
            document.getElementById("popupContact").style.display = "flex"
        }
        buttons.appendChild(edit)
    
        let del = document.createElement("button")
        del.className = "delete"
        del.textContent = "Delete"
        del.onclick = () => {
            post.remove()
        }
        buttons.appendChild(del)
    
        post.appendChild(buttons)
    
        if(id == null){
            posts.appendChild(post)
        } else {
            posts.replaceChild(post, document.getElementById(id))
            resetPopup()
        }
        document.getElementById("popupContact").style.display = "none"
    }

}