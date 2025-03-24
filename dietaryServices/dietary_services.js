let userRole = "employee";
let accessLevel;
if (userRole === "employee") {
    accessLevel = "Full access granted";
} else if (userRole === "enrolledMember") {
    accessLevel = "Authorized access to Dietary Services and one=on-one interaction with dietician";
} else if (userRole === "subscriber") {
    accessLevel = "Partial access to facillitate Dietary Services Only";
} else {
    accessLevel = "No access granted, Please Enroll or Subscribe to avail this facillity";
}
console.log("Access Level:", accessLevel);
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "employee") {
        userMessage = "Welcome, Employee!";
} else if (userRole === "enrolledMember"){
        userMessage = "Welcome, Member";
} else if (userRole === "subscriber") {
        userMessage = "Welcome, Subscriber"; 
}  
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);
let userType = "Access Level";
let userCategory;
switch (userType) {
    case "employee":
        userCategory = "Employee";
        break;
    case "enrolledMember":
        userCategory = "Member";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Non-Subscriber";
}
console.log("User Category:", userCategory);
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);