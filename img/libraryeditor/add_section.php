<?php
if (!isset($_POST['title'])) {
    echo "No title provided.";
    exit;
}

$title = htmlspecialchars($_POST['title']);
$timestamp = time();
$sectionId = "section" . $timestamp;
$collapseId = "collapse" . $timestamp;
$accordionId = "accordion" . rand(100, 999); // optional randomness

$htmlFile = '../library.html';
$html = file_get_contents($htmlFile);

// HTML template for the collapsible section
$newSection = <<<HTML
<div data-toggle="collapse" data-target="#$collapseId" class="accordion" id="$accordionId">
    <div class="card">
        <div class="card-header" id="heading$timestamp">
            <h2 class="mb-0">
                <div class="highlight_text1">
                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#$collapseId">
                        <i class="fa fa-plus"></i> 
                        <span style="text-decoration:none;font-size:12pt;color:black;width:300px">$title</span>
                    </button>
                </div>
            </h2>
        </div>
        <div id="$collapseId" class="collapse" aria-labelledby="heading$timestamp" data-parent="#$accordionId">
            <div class="card-body" id="$sectionId-content">
                <p>New section content here...</p>
            </div>
        </div>
    </div>
</div>

HTML;

// Insert before <div class="service_details_bottom_content">
$insertBefore = '<div class="service_details_bottom_content">';
if (strpos($html, $insertBefore) !== false) {
    $html = str_replace($insertBefore, $newSection . $insertBefore, $html);
} else {
    // Fallback: append to the end
    $html .= "\n" . $newSection;
}

// Save back to file
file_put_contents($htmlFile, $html);

// Save the title to JSON
$titlesFile = 'section_titles.json';
$titles = file_exists($titlesFile) ? json_decode(file_get_contents($titlesFile), true) : [];
$titles["$sectionId-content"] = $title;
file_put_contents($titlesFile, json_encode($titles, JSON_PRETTY_PRINT));

echo "Collapsible section added.";
?>
