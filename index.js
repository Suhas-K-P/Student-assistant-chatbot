// JavaScript code to handle the chatbot interaction

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let inputValue = inputField.value.trim();
    
    if (inputValue !== "") {
        displayUserMessage(inputValue);
        setTimeout(() => processBotResponse(inputValue), 500); // Slight delay to simulate bot thinking
    }
    
    inputField.value = ""; // Clear the input field after sending
}

// Function to handle user input when pressing Enter key
function handleInput(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

// Function to display user's message
function displayUserMessage(message) {
    let chatWindow = document.getElementById("chatWindow");
    
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = `<p>${message}</p>`;
    
    chatWindow.appendChild(userMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Function to process bot's response based on user's input
function processBotResponse(input) {
    let chatWindow = document.getElementById("chatWindow");
    
    let botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");

    // Responses based on input
    switch (input) {
        case "1":
            botMessage.innerHTML = `<p><strong>Student's Section</strong><br>
                                    - Fees: ₹50,000 per semester.<br>
                                    - Syllabus: You can download the latest syllabus from the student portal.<br>
                                    - Attendance: Check your attendance online.</p>`;
            break;
        case "2":
            botMessage.innerHTML = `<p><strong>Faculty Section</strong><br>
                                    - Portal: Faculty can log in to the academic portal to manage classes.<br>
                                    - Admin Details: Update personal info in the HR portal.<br>
                                    - Exam: Manage exam schedules through the faculty dashboard.</p>`;
            break;
        case "3":
            botMessage.innerHTML = `<p><strong>Parent's Section</strong><br>
                                    - School Fees: ₹50,000.<br>
                                    - Results: Available through the parent login portal.<br>
                                    - Contact: For assistance, call +91-123-456-7890.</p>`;
            break;
        case "4":
            botMessage.innerHTML = `<p><strong>Visitor's Section</strong><br>
                                    - Visiting Hours: Mon-Fri 9 AM to 5 PM.<br>
                                    - Contact: For inquiries, email admin@crce.edu.</p>`;
            break;
        default:
            botMessage.innerHTML = `<p>Sorry, I don't understand. Please enter a valid option from 1 to 4.</p>`;
            break;
    }
    
    chatWindow.appendChild(botMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
}
