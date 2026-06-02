<?php
if (!isset($_POST['section_id'])) {
    echo "No section ID provided.";
    exit;
}

$sectionId = $_POST['section_id'];
$htmlFile = '../library.html';

if (!file_exists($htmlFile)) {
    echo "HTML file not found.";
    exit;
}

$html = file_get_contents($htmlFile);

// Load the HTML into DOMDocument
libxml_use_internal_errors(true); // Suppress HTML5 parsing warnings
$dom = new DOMDocument();
$dom->loadHTML(mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8'));

$xpath = new DOMXPath($dom);

// Find the div with the matching section ID (e.g., section172342-content)
$sectionDiv = $xpath->query("//*[@id='$sectionId']")->item(0);

if (!$sectionDiv) {
    echo "Section ID not found.";
    exit;
}

// Traverse up to find the parent <div class="accordion">
$accordionDiv = $sectionDiv;
while ($accordionDiv && $accordionDiv->nodeType === XML_ELEMENT_NODE) {
    if ($accordionDiv->hasAttribute("class") && strpos($accordionDiv->getAttribute("class"), "accordion") !== false) {
        break;
    }
    $accordionDiv = $accordionDiv->parentNode;
}

// Remove the accordion div
if ($accordionDiv && $accordionDiv->parentNode) {
    $accordionDiv->parentNode->removeChild($accordionDiv);
}

// Save the cleaned HTML
$newHtml = $dom->saveHTML();



file_put_contents($htmlFile, $newHtml);

// Also remove title from section_titles.json
$titlesFile = 'section_titles.json';
$titles = file_exists($titlesFile) ? json_decode(file_get_contents($titlesFile), true) : [];
unset($titles[$sectionId]);
file_put_contents($titlesFile, json_encode($titles, JSON_PRETTY_PRINT));

echo "Section deleted successfully.";
?>
