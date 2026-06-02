<?php
if (!isset($_POST['id']) || !isset($_POST['content'])) {
    http_response_code(400);
    echo "Missing parameters.";
    exit;
}

$id = $_POST['id'];
$newContent = $_POST['content'];
$filepath = '../library.html'; // Parent folder

$html = file_get_contents($filepath);
if ($html === false) {
    echo "Failed to load HTML.";
    exit;
}

libxml_use_internal_errors(true);
$doc = new DOMDocument('1.0', 'UTF-8');
$doc->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
$xpath = new DOMXPath($doc);

// Find target section
$targetNodeList = $xpath->query("//*[@id='{$id}-content']");
if ($targetNodeList->length === 0) {
    echo "Section not found.";
    exit;
}

$target = $targetNodeList->item(0);

// Remove old content
while ($target->firstChild) {
    $target->removeChild($target->firstChild);
}

// Load and adjust new content
$tempDoc = new DOMDocument();
$tempDoc->loadHTML('<?xml encoding="UTF-8"><div>' . $newContent . '</div>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
$body = $tempDoc->getElementsByTagName('div')->item(0);

// ✅ Fix image paths so they work from parent file (../deplibrary.html)
$images = $body->getElementsByTagName('img');
foreach ($images as $img) {
    $src = $img->getAttribute('src');
    if (strpos($src, 'libraryeditor/resources/') === false && strpos($src, 'http') !== 0) {
        $img->setAttribute('src', 'libraryeditor/resources/' . basename($src));
    }
}

$anchors = $body->getElementsByTagName('a');
foreach ($anchors as $a) {
    $href = $a->getAttribute('href');
    if (
        !empty($href) &&
        strpos($href, 'libraryeditor/resources/') === false &&
        strpos($href, 'http') !== 0 &&
        strpos($href, '#') !== 0 &&
        strpos($href, 'mailto:') !== 0
    ) {
        $a->setAttribute('href', 'libraryeditor/resources/' . basename($href));
    }
}

// Import content into main document
foreach ($body->childNodes as $child) {
    $imported = $doc->importNode($child, true);
    $target->appendChild($imported);
}

// Save updated HTML
file_put_contents($filepath, $doc->saveHTML());
echo "Section '{$id}' updated with correct resource paths!";
