# Post Title Goes Here

*October 2026*

This is the template. Copy this whole folder, rename it, and replace this file with your post.
Everything is plain Markdown: **bold**, *italics*, [links](https://bchao1.github.io/), `inline code`, lists, and so on.

## Full-width figure

Put an image or video on its own line. The text in the square brackets becomes the caption.
Videos (`.mp4`, `.webm`) autoplay, loop, and are muted.

![A full-width figure. Captions can use *Markdown* and [links](https://bchao1.github.io/kamon/).](../../images/kamon.mp4)

## Side-by-side figures

Use a `row` block. The numbers after `row` set the widths: `1:1`, `1:2`, `1:1:1`, `2:1:1`, and so on.
Each image gets its own caption, and an optional `caption:` line goes under the whole row.

```row 1:1
![Left figure.](../../images/prof_pic_2.png)
![Right figure. Images and videos can be mixed.](../../images/kamon.mp4)
caption: An optional caption for the whole row.
```

```row 1:1:1
![](../../images/icip2021-results.gif)
![](../../images/tip2021.gif)
![](../../images/icassp2020-result.gif)
caption: Three equal columns, with no per-image captions.
```

## Math

Inline math like $p_\theta(x_{t-1} \mid x_t)$ and display math:

$$
\mathcal{L} = \mathbb{E}_{t, x_0, \epsilon} \left[ \lVert \epsilon - \epsilon_\theta(x_t, t) \rVert^2 \right]
$$

## Everything else

> Quotes look like this.

```python
# code blocks get a light gray background
print("hello")
```
