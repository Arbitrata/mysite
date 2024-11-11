import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://medium.com/feed/@andyirungu")
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = Array.from(xmlDoc.getElementsByTagName("item"));
        const blogs = items.map((item) => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          description: item.querySelector("description").textContent,
        }));
        setBlogs(blogs);
      });
  }, []);

  return (
    <div className="w-full h-fit">
      <h2>My Medium Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
