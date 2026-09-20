$images = Get-ChildItem -Path "images" -Filter "*.jpeg" | Select-Object -ExpandProperty Name
$photos_array = "const photos = [`n"
foreach ($img in $images) {
    $photos_array += "  { src: `"images/$img`", caption: `"`" },`n"
}
$photos_array += "];"

$script_content = Get-Content -Path "script.js" -Raw
$new_content = $script_content -replace '(?s)const photos = \[.*?\];', $photos_array
Set-Content -Path "script.js" -Value $new_content -Encoding UTF8
Write-Host "Updated script.js with $($images.Count) images."
