<?php
$data = json_decode(file_get_contents("php://input"), true);
if (isset($data['html'])) {
    $filePath = __DIR__ . '/../deptlibrary.html'; // Go up one level from libraryeditor
    if (file_put_contents($filePath, $data['html']) !== false) {
        echo "Webpage uploaded and saved successfully!";
    } else {
        echo "Failed to save the webpage.";
    }
} else {
    echo "No data received.";
}
?>
