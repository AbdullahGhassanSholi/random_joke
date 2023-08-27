document.getElementById('disp').onclick = () => {
  let request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
  );
  request.responseType = 'json';
  request.send();
  request.onload = () => {
    //   console.log(request.responseText);
    //   document.write(request.responseText);

    // console.log(request.response);
    let posts = request.response;
    //   for (post of posts) {
    //     console.log(post.title);
    //     document.getElementById(
    //       'table'
    //     ).innerHTML += `<td> ${post.id}</td><td>${post.title}</td><td>${post.body}</td>`;
    //   }
    //console.log(posts.joke);

    // console.log(posts.joke);

    document.getElementById('joke').innerHTML = posts.joke;
  };
};
