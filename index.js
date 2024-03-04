 function copyEmail() {
            // Get the text content from the element with id "myInput"
            var textToCopy = document.getElementById("myEmail").innerText;
            var tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999)
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }
        function copyPhone() {
            var textToCopy = document.getElementById("myPhone").innerText;
            var tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.setSelectionRange(0, 99999);
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        }