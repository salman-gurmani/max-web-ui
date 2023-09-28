export interface ProjectDetailTypes {
  key: string
  title: string
  image: string

  description: string
  uniquePoints: string[]
  features: string[]
  technologies: string[]
  Year: string
  Category: string
  Tags: string
}
const projectDetailsData: ProjectDetailTypes[] = [
  {
    key: 'bestow',
    title: 'Bestow',
    image: 'v1694585531/Icons/WebsiteIcons/E-Commerce_jzau4v.png',
    description:
      'Bestow is a website that lets you buy and sell anything online. Whether you are looking for clothes, books, electronics, furniture, or services, you can find it on Bestow. Bestow is more than just an e-commerce website. It is also a showcase of the work of its creator, who is a talented web developer with expertise in various technologies. Bestow offers you a smooth and enjoyable online shopping experience. You can browse through thousands of products and services, search for what you need, add items to your cart, and pay securely online. You can also rate and review your purchases, and get feedback from other customers. Bestow also provides you with fast delivery and excellent customer service. You can contact the creator anytime if you have any questions or suggestions. Bestow is the ultimate online shopping destination for anyone who wants to buy or sell anything online. Visit Bestow today and discover the amazing products and services that await you.',
    uniquePoints: [
      'Diverse Delights: Step into a treasure trove featuring an extensive range of products, all under the esteemed banner of Bestow.',
      'Seamless Navigation: The Bestow interface boasts intuitive navigation, ensuring an effortless shopping experience that leaves a lasting impression.',
      'Tailored Recommendations: Experience the power of AI-driven personalization at Bestow, where every product suggestion enriches your shopping adventure.',
      'Secure Sanctuary: Rest easy knowing that your data and transactions are safeguarded within its impenetrable fortress of cutting-edge security measures.',
      'Customer-Centric Excellence: The dedicated support team at Bestow is committed to delivering an exceptional shopping experience, guiding you every step of the way towards complete satisfaction.',
    ],
    features: [
      'Responsive design',
      'Search function',
      'Shopping cart',
      'Checkout system',
      'Feedback system',
      'Contact form',
    ],
    technologies: [
      'Front-end: React, Bootstrap, Next.js',
      'Back-end: Node.js, Express',
      'Database: MongoDB',
      'Hosting: AWS',
    ],
    Year: '2022',
    Category: 'Web Develeopment',
    Tags: 'E-Commerce',
  },
  {
    key: 'gamerworld',
    title: 'Gamer World',
    image: 'v1694585531/Icons/WebsiteIcons/Gaming_a83emn.png',
    description:
      'Gamer is a website that lets you buy and sell game equipment for real money. Whether you are looking for consoles, controllers, headsets, keyboards, mice, or other accessories, you can find it on Gamer. Gamer is more than just a game equipment website. It is also a community of gamers who share their passion and expertise. Gamer offers you a safe and convenient online trading experience. You can browse through thousands of game equipment listings, search for what you need, compare prices and ratings, and make offers or bids online. You can also sell your own game equipment and earn cash. Gamer also provides you with fast shipping and excellent customer service. You can contact the seller or buyer anytime if you have any questions or issues. Gamer is the ultimate online trading destination for anyone who wants to buy or sell game equipment online. Visit Gamer today and discover the amazing game equipment that await you.',

    uniquePoints: [
      'Vast Gaming Selection: Explore an extensive catalog of gaming hardware, software, accessories, and collectibles, all under one roof.',
      "Gamer-Centric Interface: Our website's design is inspired by gaming aesthetics, ensuring an immersive and intuitive shopping experience",
      'Exclusive Deals: Enjoy exclusive discounts, bundles, and promotions, allowing you to level up your gaming arsenal without breaking the bank.',
      'Community Hub: Join our thriving gaming community, participate in discussions, and stay up-to-date with the latest gaming news, events, and releases.',
      'Security First: We prioritize your online security with state-of-the-art encryption and data protection protocols, guaranteeing a safe and worry-free shopping experience.',
    ],
    features: [
      'Secure marketplace',
      'Competitive pricing algorithms',
      'Wide selection handling',
      'Community engagement mechanism',
    ],
    technologies: [
      'Front-end: Angular, Bootstrap, Socket.io',
      'Back-end: Python, Django, Celery',
      'Database: PostgreSQL',
      'Hosting: Heroku',
    ],
    Year: '2022',
    Category: 'Web Develeopment',
    Tags: 'E-Commerce',
  },
  {
    key: 'nest mart',
    title: 'Nest Mart',
    image: 'v1694585534/Icons/WebsiteIcons/Mart_ezjdac.png',
    description:
      'Nest Mart is a website that lets you order groceries and essentials online. Whether you are looking for fresh fruits and vegetables, dairy and bakery products, meat and seafood, snacks and beverages, or personal and household items, you can find it on Nest Mart. Nest Mart is more than just a grocery website. It is also a platform that connects you with local farmers, producers, and suppliers who offer quality products at reasonable prices. Nest Mart offers you a convenient and hassle-free online shopping experience. You can browse through thousands of products and categories, search for what you need, add items to your cart, and pay securely online. You can also choose from different delivery options, such as same-day delivery, next-day delivery, or scheduled delivery. Nest Mart also provides you with excellent customer service. You can contact the support team anytime if you have any questions or issues. Nest Mart is the ultimate online grocery destination for anyone who wants to order groceries and essentials online. Visit Nest Mart today and discover the amazing products and services that await you',

    uniquePoints: [
      'Product Variety: Sourcing and managing an extensive range of grocery items, from fresh produce to household goods, required meticulous inventory management and supplier relationships.',
      'Intuitive Interface: Designing an easy-to-navigate website that prioritizes user experience while offering a comprehensive product selection posed a creative challenge.',
      'Delivery Logistics: Ensuring timely and efficient delivery services, especially in peak demand periods, required optimizing delivery routes and resources.',
      'Quality Assurance: Maintaining the quality and freshness of products during the delivery process was crucial to meet customer expectations.',
      'Security and Privacy: Implementing robust data protection measures to safeguard customer information and transactions, ensuring trust and confidentiality.',
    ],
    features: [
      'Best items per client recommendation',
      'Categorized filters',
      'Shopping Cart',
      'Checkout System',
      'Feedback System',
    ],
    technologies: [
      'Front-end: React, Bootstrap, Redux',
      'Back-end: Java, Spring Boot, Kafka',
      'Database: MySQL',
      'Hosting: Azure',
    ],
    Year: '2022',
    Category: 'Web Develeopment',
    Tags: 'E-Commerce',
  },
  {
    key: 'magone',
    title: 'MagOne',
    image: 'v1694585532/Icons/WebsiteIcons/Mag_One_agwmoe.png',
    description:
      'Magone is a website that lets you read and write about the latest news from various categories and sources. Whether you are interested in politics, sports, entertainment, business, technology, or health, you can find it on Magone. Magone is more than just a news website. It is also a platform that allows you to share your opinions, insights, and perspectives on the news that matters to you. Magone offers you a simple and engaging online reading and writing experience. You can browse through thousands of news articles and blogs from reputable sources, search for what you need, follow your favorite topics and writers, and comment on the posts. You can also create your own blog and publish your own news stories and opinions, and get feedback from other readers. Magone also provides you with useful features and tools to enhance your blogging skills, such as analytics, SEO, monetization, and social media integration. Magone is the ultimate online news destination for anyone who wants to read and write about the news online. Visit Magone today and discover the amazing news stories and blogs that await you.',

    uniquePoints: [
      'Genre Versatility: Magone empowers you to effortlessly present news stories across a spectrum of genres, from politics and technology to entertainment and sports, appealing to a broad and diverse audience.',
      'Intuitive Interface: The template offers a user-friendly and aesthetically pleasing design that enhances the overall reading experience and encourages exploration.',
      'Tailored Customization: Customize Magone to align with your brand identity through personalized layouts, color schemes, and fonts, ensuring a distinct and cohesive online presence.',
      'Content Highlights: Prominently feature critical news stories, trending topics, and editors picks to engage and inform your audience effectively.',
      'Performance Optimization: Magone is meticulously engineered with performance in mind, guaranteeing swift loading times and seamless interactions for your valued visitors.',
    ],
    features: [
      'Diverse and reliable news recommendation',
      'Interactive and social strategies',
      'Dynamically Creative and expressive',
      'Support System',
    ],
    technologies: [
      'Front-end: React, Bootstrap, Axios',
      'Back-end: Node.js, Express',
      'Database: MongoDB',
      'Hosting: AWS',
    ],
    Year: '2022',
    Category: 'Web Develeopment',
    Tags: 'News Blogger',
  },
]

export default projectDetailsData
