<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $html = $_POST['html'] ?? '';
    $file ='/jnndemo/library.html';

    if (file_put_contents($file, $html)) {
        echo "✅ File saved successfully!";
    } else {
        echo "❌ Failed to save file.";
    }
}
?>
