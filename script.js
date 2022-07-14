let id=null
class Blog {

    constructor(title, details, noOfPosts){
        this.title=title
        this.detail=details
        this.noOfPosts=noOfPosts
    }

    resetPopup = () => {
        id = null
        this.title.value = null
        this.detail.value = null
    }

    addTitle = (h1, post) => {
        
        h1.textContent = this.title.value
        post.appendChild(h1)
    }

    addDetails = (p1, post) => {
        
        p1.textContent = this.detail.value
        post.appendChild(p1)

        let p2 = document.createElement("p")
        const currDate = new Date()
        p2.textContent = `Posted on: ${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()} ${currDate.getHours()}h:${currDate.getMinutes()}m`
        post.appendChild(p2)
    }


    addBlog = () => {
        let h1 = document.createElement("h1")
        let p1 = document.createElement("p")
        let post = document.createElement("div")
        post.className = "article-card"
        this.noOfPosts++
        post.id = id == null ? "flashcard" + noOfPosts : id

        let img = document.createElement("img")
        img.src = "assets/java card image.svg"
        post.appendChild(img)
    
        this.addTitle(h1, post)
        this.addDetails(p1, post)

        let buttons = document.createElement("div")
        buttons.className = "card-buttons"
    
        let edit = document.createElement("button")
        edit.className = "edit"
        edit.textContent = "Edit"
        edit.onclick = () => {
            id = post.id
            this.title.value = h1.textContent
            this.detail.value = p1.textContent
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
        return post
    }

}


let noOfPosts = 0;
window.onload = () => {
    const posts = document.querySelector(".body-div2")
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
        const blogTitle = document.getElementById("title")
        const blogDescription = document.getElementById("detail")
        
        noOfPosts++;
        const BG = new Blog(blogTitle,blogDescription,noOfPosts)
        let post=BG.addBlog()

        if(id == null){
            posts.appendChild(post)
        } else {
            posts.replaceChild(post, document.getElementById(id))
            BG.resetPopup()
        }
        document.getElementById("popupContact").style.display = "none"
    }

}