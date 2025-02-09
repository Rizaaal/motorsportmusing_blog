import dateUtils from "./date";

export function getPostURL(post){
  const postDate = new Date(post.frontmatter.pubDate);
  const year = postDate.getFullYear();
  const month = dateUtils.monthNames[postDate.getMonth()];
  const title = post.frontmatter.title;

  return `${import.meta.env.BASE_URL}/posts/${year}/${month}/${title}`
}
