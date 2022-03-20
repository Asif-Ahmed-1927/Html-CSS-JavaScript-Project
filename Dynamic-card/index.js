//dummy data//

//  const posts=[
//     {
//         title :"this is title1",
//         body :"this is body 1"
//     },
    
//     {
//         title:"this is title1",
//         body:"this is body 1"
//     },
    
//     {
//         title:"this is title1",
//         body:"this is body 1"
//     },
    
//     {
//         title:"this is title1",
//         body:"this is body 1"
//     }]

/* <div class="post">
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>

</div> */

//fetch data//

const fetchData= async(config)=>{
    try{
        const res= await axios(config);
        return res.data;
    }catch(error){
        throw Error("data is not fetched");
    }
    
 
};

//selection//

const postsElement= document.querySelector('.posts');

const loadAllData= async()=>{
    const posts=  await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=>{
        const postElement= document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`<h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;

        postsElement.appendChild(postElement);
        

    });

}
loadAllData()


    

