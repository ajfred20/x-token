<?php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Allow CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *"); // Allow from any origin
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE"); // Allow specific methods
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Include database connection
require_once 'config.php';

// Check the database connection
if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit();
}

// Handle pre-flight OPTIONS request (for CORS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get the JSON data from the request body
$data = json_decode(file_get_contents('php://input'));

// Check if the required data is available
if (!isset($data->email) || !isset($data->password) || !isset($data->confirmPassword)) {
    echo json_encode(['status' => 'error', 'message' => 'All fields are required']);
    exit();
}

// Sanitize inputs
$email = $data->email;
$password = $data->password;
$confirmPassword = $data->confirmPassword;

// Validate passwords
if ($password !== $confirmPassword) {
    echo json_encode(['status' => 'error', 'message' => 'Passwords do not match']);
    exit();
}

// Check if the email already exists in the database using prepared statements
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $email); // 's' means the email is a string
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email is already in use']);
    exit();
}

// Insert the new user into the database using prepared statements (storing plain password)
$sql = "INSERT INTO users (email, password, name) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$name = ''; // Default name, modify as needed
$stmt->bind_param('sss', $email, $password, $name); // 'sss' means the parameters are strings

if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Account created successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Error: ' . $stmt->error]);
}

// Close the database connection
$stmt->close();
$conn->close();
?>
