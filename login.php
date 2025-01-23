<?php
// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Enable CORS for the frontend
header("Access-Control-Allow-Origin: http://localhost:3001"); // Change to match your frontend
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Database connection settings
$host = 'localhost';
$db = 'x-token';
$user = 'root';
$pass = '';

// Connect to the database
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

// Get the JSON payload from the frontend
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

// Validate JSON payload
if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit;
}

// Extract email and password
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// Validate email and password
if (empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email and password are required']);
    exit;
}

// Query the database for the user
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to prepare statement']);
    exit;
}
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

$user = $result->fetch_assoc();

// Verify the password (plaintext comparison)
if ($password !== $user['password']) {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid email or password']);
    exit;
}

// Login successful
echo json_encode([
    'message' => 'Login successful',
    'redirect' => '/dashboard',
    'user' => [
        'name' => $user['name'],
        'email' => $user['email'],
    ]
]);

// Clean up
$stmt->close();
$conn->close();
?>
