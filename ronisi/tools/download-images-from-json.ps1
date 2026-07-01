param(
  [string]$JsonPath = ".\ronisi-google-sites-images.json",
  [string]$OutputDir = ".\public\images\google-sites"
)
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
$urls = Get-Content $JsonPath | ConvertFrom-Json
$i = 1
foreach ($url in $urls) {
  $name = "google-site-image-$('{0:d3}' -f $i).jpg"
  $out = Join-Path $OutputDir $name
  Write-Host "Downloading $url -> $out"
  try { Invoke-WebRequest -Uri $url -OutFile $out } catch { Write-Warning "Failed: $url" }
  $i++
}
