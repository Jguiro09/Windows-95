//create new function to contain all the steps and make it asynchronous
async function newFormHandler(event) {
    event.preventDefault();
    //create variables
    const mailTo = document.getElementById("mailto-box").value.trim();
    const subject = document.getElementById("subject-box").value.trim();
    const msg = document.getElementById("msg-box").value.trim();
    //send fetch request to add a new email message
    const response = await fetch("/api/sent", {
        //here we're using POST method because we are CREATING or ADDING a new message to the database
        method: "POST",
        body: JSON.stringify({
            mailTo,
            subject,
            msg,
        }),
        headers: {
            "content-Type": "application/json",
        }
    });
    //if the email info is added,we will be rerouted to the home page
    if (response.ok) {
        document.location.replace("/");
    } else {
        window.alert("Message failed to send");
    }
}
document.getElementById("new-msg-form").addEventListener("submit", newFormHandler);