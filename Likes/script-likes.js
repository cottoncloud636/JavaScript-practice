function like(id){ //call function like onclick, pass in id
    likes[id]++; //1st called likes(0),likes[0]++ -->likes[0]=9, now 9-->10
    select[id].innerHTML=likes[id]+" likes"; //returns 1st element that matches #"click1" and returns such text: likes[0] + likes --> 10 likes
}

var likes = [9, 12, 9]
var select = [
    document.querySelector("#click1"), //select[0]: if it find id match #"click1", return that element
    document.querySelector("#click2"),
    document.querySelector("#click3")
]

