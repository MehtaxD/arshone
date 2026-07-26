# Arshone CMS — Setup & Usage Guide

This guide assumes you have never coded before. Follow it top to bottom, in order.
Each step tells you exactly what to type and where.

---

## 1. Install the tools you need (one-time only)

1. **Install Node.js** — go to https://nodejs.org and download the "LTS" version. Install it
   like any normal program (click Next, Next, Finish).
2. **Get a code editor (optional but helpful)** — [VS Code](https://code.visualstudio.com) is
   free and makes it easy to open this project folder and edit `.env`.
3. **Open a terminal in this project folder:**
   - Windows: open the `arshone-main - Copy` folder in File Explorer, click the address bar,
     type `cmd`, press Enter.
   - Mac: right-click the folder in Finder → "New Terminal at Folder" (or open Terminal and
     `cd` into the folder).

---

## 2. Install the project's dependencies

In the terminal, run:

```
npm install
```

This downloads everything the project needs. It can take a minute or two.

---

## 3. Set your admin password

Open the `.env` file in this folder with any text editor (Notepad, VS Code, etc.). You'll see
two lines near the bottom:

```
ADMIN_PASSWORD="changeme123"
SESSION_SECRET="please-change-this-to-a-long-random-string"
```

- Change `ADMIN_PASSWORD` to whatever password you want to log into `/admin` with.
- Change `SESSION_SECRET` to any long random string (mash the keyboard, it just needs to be
  unique and secret — no need to remember it).
- Save the file.

Your database connection (`DATABASE_URL`) is already configured and already has the blog
table set up — you don't need to touch it.

---

## 4. Generate the database client

Run this once (and again any time you change `prisma/schema.prisma`):

```
npx prisma generate
```

---

## 5. Start the site

```
npm run dev
```

Leave this terminal window open — it's running your site. Now open a browser and go to:

- **Your public website:** http://localhost:3000
- **Your CMS admin panel:** http://localhost:3000/admin/login

Log in with the password you set in step 3.

To stop the site, click into the terminal and press `Ctrl + C`.

---

## 6. Using the CMS

Once logged in at `/admin`, you'll see:

- **Dashboard** — a quick overview: total posts, published, drafts, featured.
- **Blog Posts** — a list of every post, with a switch to publish/unpublish, an edit button,
  and a delete button.

**To write a new post:**
1. Click **New Post**.
2. Type a title — the URL slug fills in automatically (you can edit it).
3. Write a short excerpt (shown in the blog listing).
4. Write the full article in the editor (bold, italic, headings, lists, links, images all work
   via the toolbar).
5. Optionally fill in SEO title/description, category, tags, author, and a featured image.
6. Flip the **Published** switch on when you're ready for it to go live (leave it off to save
   as a draft).
7. Click **Create Post**.

Published posts appear automatically at `/blog` and get their own page at `/blog/your-slug`.
Nothing else needs to be touched — it's all pulled live from the database.

---

## 7. Putting it online (deployment)

The easiest option for a Next.js + Prisma site like this is **Vercel** (https://vercel.com):

1. Push this project to a GitHub repository.
2. Import that repository into Vercel.
3. In Vercel's project settings, add the same environment variables from your `.env` file
   (`DATABASE_URL`, `ADMIN_PASSWORD`, `SESSION_SECRET`).
4. Deploy.

**One important note about images:** uploaded images are currently saved to a folder on
whichever server is running the app (`public/uploads`). This works perfectly for local use or
a traditional server, but on Vercel (and most serverless hosts) that folder doesn't persist
between deployments — uploaded images could disappear after a redeploy. If you plan to deploy
to Vercel long-term, let me know and I can wire up a proper storage service (like Vercel Blob
or Cloudinary) instead — it's a small change.

---

## What's in this CMS

- Full blog post CRUD (create, edit, delete, publish/unpublish) in `/admin/blogs`
- Rich text editor (bold, italic, underline, headings, lists, quotes, links, images)
- Image upload for featured images
- SEO fields per post (SEO title, meta description) that feed the public page's `<head>`
- Simple category and tags (plain text — no separate pages to manage, just type them in)
- Password-protected admin area (`/admin/login`), everything else under `/admin` is locked
  behind it automatically
- Public blog list (`/blog`) and individual post pages (`/blog/your-slug`) reading live from
  the database
- Blog posts are automatically included in `sitemap.xml`

## What was cleaned up

The project you had was a partially-generated scaffold with a lot of empty placeholder files
and some duplicated logic (two database connection files, two blog forms, an unused API
folder, etc.). All of that has been removed and consolidated into one consistent structure so
there's only one correct way to do each thing.
