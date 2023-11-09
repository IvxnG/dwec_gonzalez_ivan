let li = document.querySelectorAll('li');
let links = "https://google.com https://duckduckgo.com https://www.bing.com https://www.ecosia.org/ https://www.wolframalpha.com/";
links = links.split(" ");

li.forEach((element, index) => {
    let a = document.createElement('a');
    a.textContent = "Link a " + element.textContent;
    a.href = links[index];
    element.textContent = "";
    element.append(a);
});
console.log(links);