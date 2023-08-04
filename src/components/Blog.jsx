import React from 'react';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        <article>
          <h2>Post Title 1</h2>
          <p>This is the content of the first blog post.</p>
        </article>
        <article>
          <h2>Post Title 2</h2>
          <p>This is the content of the second blog post.</p>
        </article>
        {/* Add more articles here */}
      </div>
    </div>
  );
}

export default Blog;
