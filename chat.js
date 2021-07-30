window.onload = () => {

    document.getElementById("chatbot_toggle").onclick = function () {
        if (document.getElementById("chatbot").classList.contains("collapsed")) {
            document.getElementById("chatbot").classList.remove("collapsed")
        }
        else {
            document.getElementById("chatbot").classList.add("collapsed");
        }
    }

    let ran = 0;
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
        ran = 1;
    }


    function firstBotMessage() {
        let firstMessage = "Hi, How can I help you?";
        var div = document.createElement("div");
        div.innerHTML =
            "<div class='chat-message-received'>" +
            firstMessage +
            "</div>";
        div.className = "chat-message-div";
        document.getElementById("message-box").appendChild(div);
        if (!ran) {
            let time = getTime();
            $("#chat-timestamp").append(time);
        }

        // document.getElementById("userInput").scrollIntoView(false);
    }


    firstBotMessage();


    let getResponse = () => {
        let userText = $("#message").val();
        var div = document.createElement("div");
        div.innerHTML = "<span style='flex-grow:1'></span><div class='chat-message-sent'>" + userText + "</div>";
        div.className = "chat-message-div";
        document.getElementById("message-box").appendChild(div);
        document.getElementById("message-box").scrollTop = document.getElementById(
            "message-box"
        ).scrollHeight;
        document.getElementById("message").value = "";
    }

    $("#message").keypress(async (e) => {
        if (e.key == "Enter") {
            console.log('pressed enter');
            getResponse();
        }
    })

}


