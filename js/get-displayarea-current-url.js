let showUI = document.getElementsByClassName('ui-design');
let caseList = document.getElementsByClassName('ui-design')[0].children;

//把当前页面的URL存放到localstorage
function getlastURL() {
    let lastURL = window.location.href;
    localStorage.setItem ('trkey', lastURL);
    console.log (lastURL)
}

// 展示列表可交互元素绑定点击元素，并执行函数
for( i= 0; i < caseList.length; i++ ) {
    caseList[i].onclick = getlastURL;
}