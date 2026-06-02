<?php
$target_dir = "resources/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo "Resource uploaded.";
} else {
    echo "Upload failed.";
}
?>
