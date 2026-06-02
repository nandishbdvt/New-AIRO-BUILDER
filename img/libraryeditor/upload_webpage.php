<?php
$data = json_decode(file_get_contents("php://input"), true);
if (isset($data['html'])) {
    $file = '../library.html'; // Correct relative path
    if (file_put_contents($file, $data['html']) !== false) {
        echo "Webpage saved successfully!";
    } else {
        echo "Failed to save webpage.";
    }
} else {
    echo "No data received.";
}
?>

