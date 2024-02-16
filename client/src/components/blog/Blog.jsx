import React from "react";
import "./BlogPage.css";

const posts = [
  {
    id: 1,
    title: "A complete guide to buying property in DHA Multan",
    content: "DHA Multan is a popular destination for real estate investment in Pakistan, thanks to its prime location and world-class amenities. But before you invest, it's important to understand the buying process and the various types of properties available. In this blog post, we'll provide a complete guide to buying property in DHA Multan, covering everything from the paperwork to the best neighborhoods to invest in.",
    author: "Malik Ahmed",
    date: "May 1, 2023",
  },
  {
    id: 2,
    title: "Top 3 reasons to invest in DHA Multan",
    content: "There are many reasons why investors are flocking to DHA Multan - but what are the top factors driving this trend? In this blog post, we'll highlight the top 3 reasons to invest in DHA Multan, including its prime location, world-class amenities, and strong growth potential.",
    author: "Noor Riaz",
    date: "May 5, 2023",
  },
  {
    id: 3,
    title: "Benefits of working with a real estate agent",
    content: "Buying or selling a home can be a daunting task, and it can be helpful to have an experienced professional on your side. In this blog post, we'll explore some of the benefits of working with a real estate agent, including their knowledge of the local market, negotiating skills, and ability to guide you through the process.",
    author: "Jane Smith",
    date: "May 5, 2023",
  },
  {
    id: 4,
    title: "The future of DHA Multan: What's next for this thriving community?",
    content: "DHA Multan has already made a name for itself as one of Pakistan's premier housing societies, but what does the future hold for this thriving community? In this blog post, we'll explore some of the upcoming developments and projects planned for DHA Multan, including new residential and commercial areas, as well as improvements to existing infrastructure and amenities.",
    author: "Subhan Khan",
    date: "May 5, 2023",
  },
];

function BlogPage() {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Explore Our Blog!</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p className="post-meta">
              By {post.author} on {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
