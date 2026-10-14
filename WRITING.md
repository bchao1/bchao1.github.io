# Writing blog posts and project write-ups

Posts are plain Markdown. There is no build step: push `post.md` and the page renders it.

## Folder layout

```
blog/
  _template/            copy this to start a new post
    index.html          same for every post, never edit
    post.md             the post itself
    figures/            images and videos for this post
  my-new-post/          one folder per blog post
projects/
  kamon/                one folder per project write-up
assets/
  post.css              shared look for every post
  post.js               turns post.md into the page
```

## Start a new post

1. Copy `blog/_template/` to `blog/<short-name>/` (or `projects/<short-name>/` for a project).
2. Write `post.md`. The first `# Heading` becomes the title, and the italic line under it is the date.
3. Put images and videos in that folder's `figures/`.
4. Preview it (see below), then add an entry on `projects.html` linking to `blog/<short-name>/`.

## Figures

Only two kinds.

**Full width**: an image or video on its own line. The text in brackets is the caption.

```
![Caption text, can use *Markdown*.](figures/teaser.png)
```

**Side by side**: a `row` block. The numbers set the width ratio (`1:1`, `1:2`, `1:1:1`, `2:1:1`, ...).
Each image has its own caption (leave the brackets empty for none), and an optional `caption:` line goes under the whole row.

````
```row 1:2
![Left caption](figures/a.png)
![Right caption](figures/b.mp4)
caption: Caption for the whole row.
```
````

Videos (`.mp4`, `.webm`) autoplay, loop, and are muted. On phones, rows stack vertically.

## Math

`$...$` for inline and `$$...$$` for display math (KaTeX).

## Preview locally

`post.md` is loaded by the browser, so opening `index.html` straight from Finder will not work. From the website folder:

```
python3 -m http.server
```

Then open `http://localhost:8000/blog/<short-name>/`.
