---
title: Obsidian to Substack, Medium, and LinkedIn
account: nuhgid
stage: done
completed_date: 2026-02-19
created: 2026-02-18
writing_started: 2026-02-18
category: Systems_and_Automation
tags:
  - publishing
  - automation
  - Obsidian
  - workflow
  - systems
related_articles:
  - digital-brain/Content_Archive/nuhgid/articles/20260211_Downloaded_my_brain_into_Claude_Code/20260211_Downloaded_my_brain_into_Claude_Code.md
folder_index: "[[Tasks_articles_nuhgid_writing_index]]"
voice_reference: digital-brain/Context/Personal/nuhgid_branding/work_account_nuhgid.md
---

# I wasted 10 minutes per article when repurposing to Substack and LinkedIn. Now it takes one command.

The part I dreaded the most when writing articles is not the writing itself, but what comes right after that:

Repurposing my long-form articles to different platforms (Substack, LinkedIn, Medium) because I had to manually copy and paste every image from the article into each platform's editor.

This manual workflow takes up at least 3-5 minutes of mindless copying and pasting, depending on how many images are in my articles.

I'd repurpose the same long-form article across every platform I'm on, and this manual work was extremely draining for me.

I used these repetitive steps to complete the task:

- Write the article on Obsidian (the writing hub for my Digital Brain)
- Import the Obsidian Markdown file to Notion (it formats everything well)
- Copy the entire Notion page to Substack, Medium, and LinkedIn
- Copy and paste every single image file into each editor

When I copied the images directly from the Notion page, it gave this error that the image was not found.

![[Pasted image 20260219110308.png]]

So instead, I had to manually copy each and every image I had in my article, wasting precious time on this task.

I thought it'd never be possible to get rid of this manual work, since each platform has its own formatting styles.

But everything changed when I saw this post, and I finally figured out how to save those extra minutes with a simple CMD + A, CMD + C, and CMD + V across all 3 platforms:

---

## How I finally found a solution

While looking through LinkedIn and Substack, I found @ArtemXTech's [article](https://substack.com/@artemxtech/p-185905853) about how he formatted his articles directly from Obsidian to Substack.

![[Pasted image 20260219111311.png]]

He mentioned it again in this [post](https://www.linkedin.com/feed/update/urn:li:activity:7420898606074884096/?originTrackingId=Xzr1C7JhSOcgdH1TpRUEUg%3D%3D) where he built an automation of that deploys his article images into his blog, and then extracts the HTML that can be copied directly to Substack (with all the images intact).

This was something I would have never thought of by myself. Maybe if I had given Claude the problem, it would have solved it for me.

**But I now have a clear roadmap of what worked for others, and it's time for me to emulate it for myself.**

So these were the context given to Claude to help me create something similar for me:

- What he said about converting to HTML
- The link to his [blog](https://artemxtech.github.io) which is likely how he converts his posts to HTML (thanks for making this public)

With this context, Claude gave me a roadmap on how I could create it for myself:

1. Create the blog with GitHub Pages 
2. Importing the pages from my Digital Brain to the blog repo
3. Generating the HTML from the article
4. Pasting the HTML into the Substack, LinkedIn, and Medium editors

And here's how you can do the same too:

---
## Creating a blog with GitHub Pages

Claude analysed Artem's blog and found that it uses @jzhao's [Quartz v4 site generator](https://github.com/jackyzha0/quartz) to publish the pages.

I was toying between self-hosting the site or doing it on GitHub, but finally decided on GitHub since this blog was just meant for HTML conversion (and just for my private use).

So I created a new blog repo on GitHub and cloned the template.

Claude guided me through every step, and it was quite straightforward to do (even with zero coding experience).


![[Pasted image 20260218221200.png]]

I did face some errors and had to troubleshoot the deployment, but Claude helped me to solve them.

![[Pasted image 20260218221400.png]]

After you've installed it, you'll get a simple blog website that's fully customisable ([here's mine](https://nuhgid.github.io/blog/)).

![[Pasted image 20260219133539.png]]


---

## Importing the pages from my Digital Brain to the blog repo

With the blog up and running, I could transfer the article (in Markdown format) and all of the related images to the blog repo, which then gets published on my blog (GitHub Pages).

So I created an `article-to-blog` Claude Skill that does this transfer for me.

But the tricky part was how Quartz organised the draft and image files differently from me:

The Markdown and the image files will all be in one folder, which gets messy when I publish different articles.
![[Pasted image 20260218220528.png]]

All of the images and markdown files of every article I publish will be inside this gigantic folder, while I prefer each article to have an individual folder.

So I asked Claude if it was possible to organise it in this way, and the task was done for me.

![[Pasted image 20260219113047.png]]

I'm now able to invoke the `article-to-blog` Skill once I finish writing, and it'll automatically commit and push the Markdown and image files into my blog repo.

One interesting roadblock I faced was trying to publish my Google API article to the blog, but it failed because it thought I was sharing my OAuth credentials inside (when they were just placeholders).

![[Pasted image 20260218221644.png]]

Once the files have been transferred, it'll take a while for the page to reflect on your blog.

All of my articles are under the `articles` folder, and this includes all of the images that I added with a nice UI.

---
## Generating the HTML from the article

I created another `article-to-html` skill that generates a local HTML file from my published blog page that I can copy directly into any of these editors.

In the initial run, it didn't convert any of the Markdown formatting.

So I had to train and let Claude know how I want the formatting to be, before it made the changes between the Markdown and HTML conversion.


![[Pasted image 20260218222915.png]]

![[Pasted image 20260219091746.png]]

This took a while as I looked for all the edge cases and asked Claude to update the HTML formatting accordingly.

On hindsight, I should have used the Skill from @kepano to understand Obsidian's Markdown format and use that to convert my file into an HTML instead.

https://x.com/kepano/status/2022342963259695311

The end product looks something like this, where I could copy the entire HTML file and then paste it directly to any of the editors.

![[Pasted image 20260219091941.png]]

---

## Pasting the HTML into the Substack, LinkedIn, and Medium editors

Once I went through multiple runs with Claude on the formatting, this becomes the easiest part.

In the past, I wasted many minutes looking for the right image file, and then pasting it into the editor (while waiting at least 10s for the image to be uploaded).

But now, all I need is to paste the HTML directly, and all of the images get uploaded in bulk.


![[Pasted image 20260219113504.png]]

This was the task that I dreaded the most because of how manual the actions are, and I'm finally glad to have found a solution that saves me so much time.

---

## There will always be a solution

What I learnt from this encounter is that no matter how complex or complicated the problem you face, Claude can find a way to solve it for you.

I thought it would never be possible to upload images in bulk to my long-form articles, but I've now saved precious minutes of my time.

*Now I only need to do these manual copying and pasting with the Twitter Article editor, and I'm looking to find a way on automating the image uploads too.*

The key skill to own right now is problem shaping, where we give enough details to Claude about:

- What our problem is
- What are the roadblocks we face
- What is the outcome we want to achieve

We take care of the what, while Claude takes care of the how. The clearer you can structure your problem, the easier it is for Claude to solve it for you.

If you'd like to use the same workflow, access the Skills I'm using daily here.

This adds one new capability to my Digital Brain, which now runs 85% of my life through a combination of Obsidian and Claude Code that remembers all the context I gave it inside Markdown files.

*I shared how I built one in this article [here](https://nuhgid.substack.com/p/day-1-build-your-digital-brain-in).*

