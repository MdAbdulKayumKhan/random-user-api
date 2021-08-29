// task 1
/* fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => console.log(data)) */

// task 2
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data))
}

const displayComments = comments =>{
    // console.log(comments);
    const commentsDiv = document.getElementById('comments');
        // for(const comment of comments){}
        comments.forEach(comment => {
            // console.log(comment)
        // destructure array object 
        const {name, body, email, id} = comment;
        const div = document.createElement('div');
        div.innerHTML =`
        <h3>Name: ${name}</h3>
        <P>Id: ${id} && Email: ${email}</P>
        <p onclick="getCommentId('${id}')">Comments: ${body}</p>
        
        `;
        commentsDiv.appendChild(div);
        });
    
}

// taks 3: auto loadData
// loadComments();

// task 4 forEach loop used

// task 5
const fetchedData = async (url) =>{
    const res = await fetch(url)
    const data = await res.json()
    return data;
}

const getCommentId = commentId =>{

    console.log(commentId, 'hiii');
    const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
    fetchedData(url)
    .then(data =>{
        // console.log(data)
        const {name, email, body, id} = data;
        const modeData = document.getElementById('mode-data');
        modeData.textContent = '';
        const div = document.createElement('div');
        div.innerHTML=`
            <h4> Name: <span>${id}</span>: ${name}</h4>
             <p>Comments: ${body}</p>
        `;
        modeData.appendChild(div);
       
        

    })

}

// task 6

 