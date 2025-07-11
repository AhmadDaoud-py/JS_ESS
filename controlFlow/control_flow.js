let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole == 'admin'){
        userMessage = "welcome Admin!";
    }else{
        userMessage = "Welcome user!";
    }
}else{
    userMessage = "please log in to access the system";
}

console.log("user message :", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);