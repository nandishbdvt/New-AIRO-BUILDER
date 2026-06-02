<?php
$data = json_decode(file_get_contents("php://input"), true);
$file = "resources/" . basename($data['filename']);
if (file_exists($file)) {
    unlink($file);
    echo "Deleted successfully.";
} else {
    echo "File not found.";
}
?>
