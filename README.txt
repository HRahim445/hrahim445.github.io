CV / Engineering Portfolio Website — Easy Editing Version

WHAT IS IN THIS FOLDER?
- index.html          Home page
- experience.html     Experience page
- qualifications.html Education, qualifications and skills
- projects.html       Project portfolio
- style.css           All visual styling
- script.js           Theme toggle, mobile menu and animations

IMPORTANT: THE WEBSITE DESIGN HAS NOT BEEN CHANGED.
This version only reorganises the code and adds comments so that you can
find and edit your content more easily.

HOW TO EDIT YOUR WEBSITE
1. Open the page you want to change.
2. Search for "EDIT:" to jump directly to the main editable areas.
3. Replace text inside square brackets, such as [YOUR_NAME].
4. Save the file and refresh the browser.

COMMON PLACEHOLDERS
[YOUR_NAME]       Your name
[YOUR_EMAIL]      Your email address
[LINKEDIN_URL]    Your LinkedIn profile URL
[GITHUB_URL]      Your GitHub profile URL
[PROJECT URL]     A project/GitHub/documentation link
[PROJECT IMAGE]   Temporary text where an image will go

ADDING A PROJECT
The project cards and full project sections are deliberately grouped and
labelled. Copy an existing PROJECT block, paste it below the previous one,
then change its text and ID (for example project-4).

ADDING AN EXPERIENCE ENTRY
Copy one of the labelled EXPERIENCE articles in experience.html and edit
its date, role, organisation and bullet points.

CHANGING COLOURS / APPEARANCE
The main design variables are near the top of style.css under
"THEME TOKENS". The dark and light themes are kept together there.

CHANGING ANIMATIONS
Animation and scroll-reveal rules are near the bottom of style.css.
The interaction code itself is in script.js.

CONTACT PAGE NOTE
This uploaded version contains the same files as the source ZIP and has not
added or removed pages. The navigation therefore remains unchanged.

ADDING PROJECT GALLERY MEDIA
Each project on projects.html now has a media gallery. The first .gallery-slide is
the hero/default image. To add another image, copy a .gallery-slide containing an
<img>. To add a video, copy one containing a <video> and change the source path.
The left/right buttons automatically cycle through all slides.
