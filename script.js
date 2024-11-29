// Function to perform basic arithmetic (addition, subtraction, multiplication, and division)
function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;

    // Validate numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Perform the selected operation
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Cannot divide by zero";
        }
    }

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + result;
}

// Optional: Form Submission Handling (for educational purpose)
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = document.getElementById("age").value;

    // Display submitted form values (you could also store or send this data somewhere)
    alert("Form Submitted! Name: " + name + ", Email: " + email + ", Gender: " + gender + ", Age Range: " + age);
});
