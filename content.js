// 1. Create the Swiggy Button
const btn = document.createElement("button");
btn.id = "swiggy-cook-btn";
btn.innerHTML = "🛒 <b>Cook This via Swiggy</b>";
btn.style.display = "none"; // Start hidden
document.body.appendChild(btn);

// 2. Logic to show/hide based on YouTube URL
function checkYoutubeState() {
  const isVideo = window.location.href.includes("watch") || window.location.href.includes("shorts");
  btn.style.display = isVideo ? "flex" : "none";
}

// 3. Handle YouTube's "Soft" Navigation (it doesn't fully reload pages)
window.addEventListener("yt-navigate-finish", checkYoutubeState);
checkYoutubeState(); // Initial check

// 4. Action when clicked
btn.addEventListener("click", () => {
  const videoUrl = window.location.href;
  
  // Visual feedback for the user
  btn.innerHTML = "⏳ <b>Reading Recipe...</b>";
  btn.style.backgroundColor = "#5d8ed5"; // Turn blue while processing
  
  // For now, we alert the URL. In the next phase, we send this to your AI Backend.
  setTimeout(() => {
    alert(`AI Agent Triggered!\n\nI am now parsing this video:\n${videoUrl}\n\nNext Step: We will map these ingredients to Swiggy Instamart.`);
    btn.innerHTML = "🛒 <b>Cook This via Swiggy</b>";
    btn.style.backgroundColor = "#fc8019";
  }, 1000);
});