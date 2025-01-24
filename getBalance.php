<?php
// Include the database connection file
include 'config.php'; // Make sure this file contains your database connection logic

// Get the user_id from the query parameter
$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : null;

if ($user_id) {
    // Query to fetch the balance for the user
    $query = "SELECT balance FROM users WHERE id = ?";
    
    if ($stmt = $mysqli->prepare($query)) {
        // Bind the user_id to the query
        $stmt->bind_param("i", $user_id);
        
        // Execute the query
        $stmt->execute();
        
        // Bind the result to a variable
        $stmt->bind_result($balance);
        
        // Fetch the result
        if ($stmt->fetch()) {
            // Return the balance in JSON format
            echo json_encode([
                'status' => 'success',
                'balance' => $balance
            ]);
        } else {
            // If no user is found, return an error
            echo json_encode([
                'status' => 'error',
                'message' => 'User not found.'
            ]);
        }

        // Close the statement
        $stmt->close();
    } else {
        // Handle error if query preparation fails
        echo json_encode([
            'status' => 'error',
            'message' => 'Database query failed.'
        ]);
    }
} else {
    // If user_id is not provided, return an error
    echo json_encode([
        'status' => 'error',
        'message' => 'User ID is required.'
    ]);
}

// Close the database connection
$mysqli->close();
?>
