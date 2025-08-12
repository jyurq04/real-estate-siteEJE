import emmapfp from '../assets/profilephotos/emmapfp.jpg';
import jeffpfp from '../assets/profilephotos/jeffpfp.jpg';
import lenapfp from '../assets/profilephotos/lenapfp.jpg';

// Replace these imports or URLs with your actual icon assets
const linkedin_icon = 'path/to/linkedin_icon.png';
const instagram_icon = 'path/to/instagram_icon.png';
const facebook_icon = 'path/to/facebook_icon.png';
const wechat_icon = 'path/to/wechat_icon.png';
const youtube_icon = 'path/to/youtube_icon.png';
const x_icon = 'path/to/x_icon.png';

export const teamList = [
  {
    name: "Emma Ju",
    path: "emma-ju",
    position: "Luxury Real Estate Agent",
    phone: "(123) 456-7890",
    licenseNumber: "#12345678",
    email: "emmaju@acreny.us",
    image: emmapfp,
    addressLines: [
      "2160 N Central Rd #111,",
      "Fort Lee,",
      "NJ 07024"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Emma Ju",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Learn about the exclusive neighborhoods in Los Angeles and Beverly Hills."
    },
    bio: `Emma Ju is a seasoned real estate expert known for delivering tailored luxury home experiences.`
  },
  {
    name: "Jeffery Vasquez",
    path: "jeffery-vasquez",
    position: "Real Estate Agent",
    phone: "(201)-646-6474",
    licenseNumbers: [
      { state: "NJ", number: "#200300400" },
      { state: "NY", number: "#87654321" }
    ],
    email: "jeff4yourhome@gmail.com",
    image: jeffpfp,
    addressLines: [
      "2160 N Central Rd #111,",
      "Fort Lee,",
      "NJ 07024"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    hero: {
      title: "Jeffery Vasquez",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Expertise in New Jersey luxury condominiums and investment properties."
    },
    bio: `Jeffrey, a native New Yorker, entered the real estate industry in 2003, starting as a broker's assistant on Manhattans Upper East Side during a time of significant change in the Market.With a background in residential and commercial construction, he offers a wealth of experience and deep understanding. 
          He is a strong negotiator who always manages to find common ground without giving up leverage. `
  },
  {
    name: "Rita Zhang",
    path: "rita-zhang",
    position: "Real Estate Associate",
    phone: "(201) 555-2000",
    
    licenseNumber: "#200300400",
    email: "rita.zhang@acreny.us",
    image: "https://via.placeholder.com/300",
    addressLines: [
      "2160 N Central Rd #111,",
      "Fort Lee,",
      "NJ 07024"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Rita Zhang",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Focused on luxury rentals and buyer representation in Hudson County."
    },
    bio: `Rita Zhang is passionate about helping first-time buyers and renters navigate the market.`
  },
  {
    name: "Jason He",
    path: "jason-he",
    position: "Real Estate Agent",
    phone: "(201)696-6078",
    licenseNumbers: [
      { state: "NJ", number: "#2558165" },
    ],
    email: "jason.he@acreny.us",
    image: "https://via.placeholder.com/300",
    addressLines: [
      "2160 N Central Rd #111,",
      "Fort Lee,",
      "NJ 07024"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Jason He",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Specialist in Weehawken and Port Imperial real estate."
    },
    bio: `Born and raised in Bergen County, Jason has spent his entire life immersed in the communities he now serves. A graduate of the local school system, he understands the area’s neighborhoods, schools, and lifestyle on a personal level—knowledge that gives his clients a true insider’s advantage.  

          At just 21 years old, Jason combines youthful energy with a professional, results-driven approach. His deep local roots and genuine passion for helping others make him a trusted guide for buyers, sellers, and investors alike.  

          Whether assisting first-time homebuyers, marketing a property for top value, or matching families with the perfect neighborhood, Jason brings dedication, clear communication, and an unwavering commitment to his clients’ success. His fresh perspective, paired with an intimate understanding of Bergen County, ensures that every client benefits from both local expertise and modern market insight.`
  },
  {
    name: "Jenny Liu",
    path: "jenny-liu",
    position: "Residential Real Estate Agent",
    phone: "(201) 555-4000",
    licenseNumber: "#400500600",
    email: "jenny.liu@acreny.us",
    image: "https://via.placeholder.com/300",
    addressLines: [
      "789 Waterfront Blvd,",
      "West New York, NJ 07093"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Jenny Liu",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Helping families find their dream homes along the Gold Coast."
    },
    bio: `Jenny Liu is known for her warm demeanor, deep listening skills, and negotiation expertise.`
  },
  {
    name: "Jose Gonzalez",
    path: "jose-gonzalez",
    position: "Real Estate Consultant",
    phone: "(201) 555-5000",
    licenseNumber: "#500600700",
    email: "jose.gonzalez@acreny.us",
    image: "https://via.placeholder.com/300",
    addressLines: [
      "1010 Palisade Ave,",
      "Union City, NJ 07087"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Jose Gonzalez",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Bilingual service and personalized attention for every client."
    },
    bio: `Jose Gonzalez is fluent in Spanish and English, helping clients from all backgrounds succeed.`
  },
  {
    name: "Lena Li",
    path: "lena-li",
    position: "Real Estate Salesperson",
    phone: "(201) 917-547-7585",
    licenseNumbers: [
      { state: "NJ", number: "#2556681" },
    ],
    email: "lenali.realtor@gmail.com",
    image: lenapfp,
    addressLines: [
      "2160 N Central Rd #111,",
      "Fort Lee,",
      "NJ 07024"
    ],
    socialLinks: [
      { icon: linkedin_icon, link: "https://linkedin.com", label: "LinkedIn" },
      { icon: instagram_icon, link: "https://instagram.com", label: "Instagram" }
    ],
    ctaLink: "/about",
    ctaText: "Learn More",
    hero: {
      title: "Lena Li",
      backgroundImage: "https://via.placeholder.com/1200x400",
      description: "Focused on high-rise condos and young professionals' housing."
    },
    bio: `As a licensed real estate agent with 8 years of experience in marketing and analytics across luxury beauty and advertising, I bring a data-driven, client-centered mindset to real estate—an industry I’ve always been deeply passionate about. I’m detail-oriented in my research and committed to guiding clients through the real estate journey with clarity, efficiency, and trust.

          Originally from China, I first moved to the U.S. as an international student at Columbia University and later built my career and family here. I eventually put down roots in Bergen County, where my family has called home for nearly 30 years. I bring not only in-depth knowledge of the local market and what makes these communities special, but also a personal understanding of the choices and concerns immigrants face when building a new life here.

          Whether you’re buying, selling, or simply exploring your options, I’m here to be your trusted advisor and advocate every step of the way.
`
  }
];
