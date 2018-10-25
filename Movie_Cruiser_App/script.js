const resul=document.getElementById("result");
const favorites=document.getElementById('fav');
favorites.style.display="none";
const button=document.getElementById('clear');
let count=0;;
document.getElementById("submitmovie").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("hii");
 //resul.innerHTML="hello";
  const movie=document.getElementById('searchmovie').value;
  fetch('https://api.themoviedb.org/3/search/movie?api_key=21699785017e4ac5ebe6dc0c8ff351ab&query='+movie)
  .then(resp =>resp.json())
  .then(posts=>{
   // console.log(posts.results.length);
    //console.log(Object.values(posts.results));
     obj=posts; 
     resul.innerHTML="";
     console.log(obj.results.length);
     let len=obj.results.length;
     for(let i=0;i<len;i++){
        span=document.createElement('span');
        span.style.float="left";
        span.style.width=" 50%";
        span.style.height=" 30%";
        span.style.marginLeft="15%"
      // span.className.style.padding=" 0 10px";
        span.style.boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
        span.style.padding="16px";
        span.style.textAlign="center";
        btn=document.createElement('button');
        //btn.style.background= " url('fav.jpeg') no-repeat right top";
        //btn.style.backgroundSize = "50px 30px";
       // btn.id="addfav"+i;
       //btn.style.float="left";
       btn.style.left="10%";
       btn.style.width=" 10%";
      //  btn.style.height=" 10%";
          btn.style.marginLeft="15%"
     // span.className.style.padding=" 0 10px";
         btn.style.boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    //  btn.style.padding="16px";
          btn.style.textAlign="center";
      //  btn.style.background="#121212";
       // btn.style.color="white";
       var img=new Image();
       img.src='fav.jpeg';
        btn.innerText=img; 
        span.innerHTML=obj.results[i].title+"<br>";
        span.appendChild(btn);
        resul.appendChild(span); 
        // add to favorites event 
       
         btn.addEventListener("click",function(e){
           e.preventDefault();
           console.log(obj.results[i].title);
                addToFav(obj.results[i].title);
         })     
      }

});
})

function addToFav(movie){
  localStorage.setItem("movieName"+count,movie);
   var moviename=localStorage.getItem("movieName"+count);
  count++;
}

var movielist=document.getElementById('favlist');
movielist.addEventListener("click",toggeleFav);

function showFavMovie(){
  favorites.innerHTML="";
      list=new Array();
      
      for(let i=0;i<localStorage.length;i++)
      {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        list.push(value);
      }
  //  var newlist=new Array();
   newlist= removeDuplicates(list);
   console.log("newlist Array == "+newlist);
   for(let j=0;j<newlist.length;j++)
   {
      span=document.createElement('span');
      // span.className="column";
      span.style.float="left";
      span.style.width=" 70%";
      span.style.height=" 30%";
      span.style.marginLeft="15%"
      // span.className.style.padding=" 0 10px";
      span.style.boxShadow= "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
      span.style.padding="16px";
      span.style.textAlign="center";
      // background-color: #f1f1f1;
      span.innerHTML="<br>"+newlist[j]+"<hr>";
      favorites.appendChild(span);
   }
}
function toggeleFav(e){
  e.preventDefault();
  //alert(favorites.style.display);
  if(favorites.style.display=="none"){
    favorites.style.display="block";
    // let text=document.getElementsById("fav");
    // text.document.getElementsByTagName("h5");
    // text.innerHTML="Favorites";
    //text.innerText="Favorites";
    showFavMovie();
  }
  else{
    favorites.style.display="none";
  }
}


function removeDuplicates(arr){
    let unique_array = []
    //hello hello are you
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array;
}



















