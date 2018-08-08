console.log("connected"); //verify js connection
txt = "";

document.getElementById("bookmarkSubmit").addEventListener("click", getTxt);

function getTxt() {
	let a = [];
    let txt = document.getElementById("bookmarks").value;
    let bookmarks = txt.split(','); //split text string by comma
    var counter = 1; //counter for page number to get around zero-based indexing
    //if bookmarks separated by line break use split("\n") and push else push by comma
    for (i=0; i<bookmarks.length; i++){
        a.push("BookmarkBegin\n" + "BookmarkTitle:" + bookmarks[i]  + "\nBookmarkLevel:1"  + "\nBookmarkPageNumber:" + counter++ + "\n");//variable that's holding bookmarks text
        //only printing the last loop iteration instead of appending
    };
  	document.getElementById("resultstxt").value = a.join('');
};