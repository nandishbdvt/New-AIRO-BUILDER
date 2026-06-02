<?php
$uploadDir = 'resources/';

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0775, true);
}

if (!isset($_FILES['resources'])) {
    echo "No files uploaded.";
    exit;
}

$uploaded = [];

foreach ($_FILES['resources']['name'] as $index => $name) {
    $tmpName = $_FILES['resources']['tmp_name'][$index];
    $safeName = basename($name);
    $targetPath = $uploadDir . $safeName;

    if (move_uploaded_file($tmpName, $targetPath)) {
        $uploaded[] = $safeName;
    }
}

if (count($uploaded) > 0) {
    echo "Uploaded successfully: " . implode(", ", $uploaded);
} else {
    echo "Upload failed.";
}
?>
