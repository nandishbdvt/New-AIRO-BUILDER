<?php
$file = '../library.html'; // Use server-relative path

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: text/html');
    header('Content-Disposition: attachment; filename="library.html"');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
} else {
    echo "File not found.";
}
?>
