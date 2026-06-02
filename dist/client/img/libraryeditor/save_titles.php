<?php
if (!isset($_POST['id']) || !isset($_POST['title'])) {
    http_response_code(400);
    echo "Missing parameters.";
    exit;
}

$id = $_POST['id'];
$title = $_POST['title'];

$titlesFile = 'section_titles.json';
$titles = [];

if (file_exists($titlesFile)) {
    $titles = json_decode(file_get_contents($titlesFile), true);
}

$titles[$id] = $title;
file_put_contents($titlesFile, json_encode($titles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo "Title for section '{$id}' saved.";
?>
