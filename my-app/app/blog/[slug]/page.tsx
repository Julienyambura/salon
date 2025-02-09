/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface BlogPost {
  title: string;
  image: string;
  content: string;
}

interface BlogPosts {
  [slug: string]: BlogPost;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const blogPosts: BlogPosts = {
    "castor-oil-benefits": {
      title: "The Benefits of Castor Oil for Hair Growth",
      image: "/blog-castor-oil.jpg",
      content: `
    <p>Castor oil has been used for centuries as a natural remedy for various ailments, including hair loss and thinning. At Milele, we've incorporated this powerful oil into many of our treatments due to its numerous benefits for hair health.</p>
    
    <h2>How Castor Oil Promotes Hair Growth</h2>
    <p>Castor oil is rich in ricinoleic acid, a fatty acid that penetrates the scalp and hair follicles, providing the following benefits:</p>
    <ul>
    <li>Improves blood circulation to the scalp</li>
    <li>Balances scalp pH and can help resolve scalp infections</li>
    <li>Nourishes the scalp and strengthens the roots</li>
    <li>Adds volume and shine to the hair</li>
    </ul>

    <h2>How to Use Castor Oil for Hair Growth</h2>
    <p>For best results, we recommend the following method:</p>
    <ol>
    <li>Mix castor oil with a carrier oil like coconut or jojoba oil</li>
    <li>Massage the mixture into your scalp</li>
    <li>Leave it on for at least 30 minutes or overnight</li>
    <li>Wash thoroughly with a mild shampoo</li>
    </ol>

    <p>At Milele, we offer professional castor oil treatments that can be customized to your specific hair needs. Visit us to experience the transformative power of castor oil for yourself!</p>
  `,
    },
    "relaxation-techniques": {
      title: "Top 5 Relaxation Techniques for Stress Relief",
      image: "/blog-relaxation.jpg",
      content: `
    <p>In today's fast-paced world, stress has become a common part of our daily lives. At Milele, we believe in the importance of holistic wellness, which includes managing stress effectively. Here are our top 5 relaxation techniques for stress relief:</p>

    <h2>1. Deep Breathing Exercises</h2>
    <p>Deep breathing is a simple yet powerful relaxation technique. It's easy to learn, can be practiced anywhere, and provides a quick way to get your stress levels in check.</p>

    <h2>2. Progressive Muscle Relaxation</h2>
    <p>This technique involves tensing and then relaxing different muscle groups in your body. It helps you become more aware of physical sensations and can help you unwind.</p>

    <h2>3. Mindfulness Meditation</h2>
    <p>Mindfulness meditation encourages you to focus on the present moment, acknowledging and accepting your thoughts, feelings, and bodily sensations without judgment.</p>

    <h2>4. Yoga</h2>
    <p>Yoga combines physical postures, breathing techniques, and meditation, providing a comprehensive approach to stress relief and overall wellness.</p>

    <h2>5. Aromatherapy</h2>
    <p>Certain scents can have a calming effect on the brain. Essential oils like lavender, chamomile, and ylang-ylang are known for their relaxing properties.</p>

    <p>At Milele, we incorporate many of these techniques into our spa treatments. Visit us to experience a truly relaxing and rejuvenating experience!</p>
  `,
    },
    "mens-grooming-tips": {
      title: "Men's Grooming Tips for a Polished Look",
      image: "/blog-mens-grooming.jpg",
      content: `
    <p>Grooming is an essential part of every man's daily routine. At Milele, we believe that looking good leads to feeling good. Here are our top grooming tips for men:</p>

    <h2>1. Develop a Skincare Routine</h2>
    <p>A basic skincare routine should include cleansing, moisturizing, and sun protection. Choose products that suit your skin type for best results.</p>

    <h2>2. Maintain Your Beard</h2>
    <p>If you have facial hair, keep it well-groomed. Regular trimming, washing, and conditioning will keep your beard looking its best.</p>

    <h2>3. Don't Neglect Your Hair</h2>
    <p>Regular haircuts and proper hair care can make a big difference in your appearance. Use quality hair products and consider treatments for issues like dandruff or thinning hair.</p>

    <h2>4. Pay Attention to Your Nails</h2>
    <p>Clean, well-trimmed nails are a sign of good grooming. Consider regular manicures for an extra touch of polish.</p>

    <h2>5. Invest in Quality Grooming Tools</h2>
    <p>From razors to nail clippers, using high-quality tools can improve your grooming results and make the process more enjoyable.</p>

    <p>At Milele's barbershop, we offer a range of services to help you look your best. From haircuts to beard trims and facials, we've got you covered. Book an appointment today!</p>
  `,
    },
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div className="text-center text-purple-700">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-700 mb-8 text-center"
      >
        {post.title}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />
        <div
          className="prose prose-lg prose-purple"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </div>
  );
}
