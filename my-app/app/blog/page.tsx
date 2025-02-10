"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}
interface BlogPosts {
  [slug: string]: BlogPost;
}

const blogPosts: BlogPosts = {
  "mens-grooming-tips": {
    title: "Men's Grooming Tips for a Polished Look",
    image: "/images/image2.jpeg",
    excerpt: `
Grooming is an essential part of every man's daily routine. At Milele, we believe that looking good leads to feeling good. Here are our top grooming tips for men:</p>
`,
    slug: "mens-grooming-tips",
  },
};

export default function Blog(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-800 mb-12 text-center"
      >
        Milele Blog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(blogPosts).map(([slug, post], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Link href={`/blog/${slug}`} className="block">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-purple-800 mb-2 hover:text-purple-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
