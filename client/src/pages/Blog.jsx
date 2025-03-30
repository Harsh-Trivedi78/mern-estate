import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Cities for Real Estate Investment in 2025",
      excerpt: "Discover the best cities to invest in real estate for long-term growth and high ROI...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyRRfswgb3TKhqBfdZN2djC3IOQrZgehRvxw&s",
      date: "March 22, 2025",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Luxury vs. Affordable Housing: What's Right for You?",
      excerpt: "Explore the pros and cons of luxury and affordable housing to make an informed decision...",
      image: "https://media.licdn.com/dms/image/v2/D5612AQGdGkZCdvIIGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721628892210?e=2147483647&v=beta&t=RzRosWuWSOvoq7T0rZAkcPvu4HCuF0Fe2xEDsibGU44",
      date: "March 18, 2025",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "How to Get the Best Mortgage Rates in 2025",
      excerpt: "Learn the secrets to securing the lowest mortgage rates and saving thousands...",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIhmvE0glco7PSiNeDneAlMpdbOd0fRp5-A&s",
      date: "March 15, 2025",
      author: "Alex Johnson",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      {/* <header className="bg-white shadow-md py-5 px-6 md:px-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Real Estate Blog</h1>
        <button className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
          Subscribe
        </button>
      </header> */}

      {/* Featured Blog Section */}
      <section className="relative bg-cover bg-center h-[500px] text-white flex items-center px-6 md:px-16"
        style={{
          backgroundImage: "url('https://gi-strapi.s3.ap-south-1.amazonaws.com/how_to_invest_in_real_estate_in_2025_59d4169c9b.jpg')",
          backgroundSize: 'contain',
      backgroundPosition: ' center', // Moves the image to the right
      backgroundRepeat: 'no-repeat',
      width: '100%',
          
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h2 className="text-3xl font-bold mb-3">Investing in Real Estate: A 2025 Guide</h2>
          <p className="text-lg">Learn why real estate is the best investment for long-term wealth building.</p>
          <button 
  className="mt-4 bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
  onClick={() => window.location.href = 'https://www.gripinvest.in/blog/how-to-invest-in-real-estate'} // Replace with your URL
>
  Read More
</button>

        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
              <img src={blog.image}  alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                <div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
                  <span>{blog.date}</span>
                  <span>By {blog.author}</span>
                </div>
                {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Real Estate Blog | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default BlogPage;
