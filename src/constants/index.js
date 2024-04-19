import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {  doc5, testimonial1, testimonial2, testimonial3, user1, user2, user3 } from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contactus", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const doctors = [
  {
    id: "01",
    name: "Dr. Alfaz Ahmed",
    specialty: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    imgURL: doc5,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: "02",
    name: "Dr. Saleh Mahmud",
    specialty: "Neurologist",
    avgRating: 4.8,
    totalRating: 272,
    imgURL: doc5,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: "03",
    name: "Dr. Farid Uddin",
    specialty: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    imgURL: doc5,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
];

export const footerLinks = [
  {
    title: "Organisation",
    links: [
      { name: "Pricing", link: "/" },
      { name: "Reviews", link: "/" },
      { name: "Updates", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "customer@healthcare.com",
        link: "mailto:customer@healthcare.com",
      },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const testimonials = [
  {
    imgURL: testimonial2,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "Booking my doctor appointments has never been easier! The website is user-friendly and efficient. I can quickly find available slots, book, and receive reminders. Such a time-saver! Thank you for simplifying the process.",
  },
  {
    imgURL: testimonial1,
    customerName: "Andy Smith",
    rating: 5,
    feedback:
    "As a busy professional, the ease of scheduling appointments on this platform is a game-changer. I appreciate the seamless interface and the ability to book at my convenience. It takes the hassle out of managing my health appointments.",
  },
  {
    imgURL: testimonial3,
    customerName: "Sophia R.",
    rating: 4.5,
    feedback:
      "As a busy professional, the ease of scheduling appointments on this platform is a game-changer. I appreciate the seamless interface and the ability to book at my convenience. It takes the hassle out of managing my health appointments.",
  },
];

export const team = [
  {
    id:1,
    imgURL: doc5,
    name: "Morich Brown",
    designation: "CEO & Co-Founder",
    about:
      "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ",
  },
  {id:2,
    imgURL: doc5,
    name: "Andy Smith", 
    designation: "dental specialist",
    about:"Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit ",
  },
  {id:3,
    imgURL: doc5,
    name: "Sophia R.",
    rating: 4.5,
    about:
      "Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ",
  },
  {id:4,
    imgURL: doc5,
    name: "Andy Smith", 
    designation: "dental specialist",
    about:"Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ",
  },
  {id:5,
    imgURL: doc5,
    name: "Andy Smith", 
    designation: "dental specialist",
    about:"Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ",
  },
  {id:6,
    imgURL: doc5,
    name: "Andy Smith", 
    designation: "dental specialist",
    about:"Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit mi. ",
  },
];

export const Doctors=[[
  {
    "name": "Dr. John Doe",
    "email": "johndoe@example.com",
    "password": "123456",
    "phone": "+1 123-456-7890",
    "ticketPrice": "100",
    "role": "Doctor",
    "specialization": "General Medicine",
    "qualifications": "MBBS",
    "experiences": "5 years",
    "bio": "I am a dedicated and experienced doctor.",
    "about": "Dr. John Doe is a renowned General Medicine specialist with a rich experience of 5 years in the medical field.",
    "timeSlots": "9:00 AM - 1:00 PM, 2:00 PM - 6:00 PM",
    "reviews": "Great doctor!",
    "averageRating": "4.5",
    "totalRating": "100",
    "isApproved": "true",
    "appointments": "50"
  },
  {
    "name": "Dr. Jane Smith",
    "email": "janesmith@example.com",
    "password": "654321",
    "phone": "+1 987-654-3210",
    "ticketPrice": "150",
    "role": "Doctor",
    "specialization": "Dermatology",
    "qualifications": "MD",
    "experiences": "10 years",
    "bio": "I am a passionate and skilled dermatologist.",
    "about": "Dr. Jane Smith is a highly experienced Dermatology specialist with a decade of experience in the field.",
    "timeSlots": "10:00 AM - 2:00 PM, 3:00 PM - 7:00 PM",
    "reviews": "Very knowledgeable and friendly.",
    "averageRating": "4.8",
    "totalRating": "200",
    "isApproved": "true",
    "appointments": "75"
  },
  {
    "name": "Dr. David Johnson",
    "email": "davidjohnson@example.com",
    "password": "abcdef",
    "phone": "+1 555-555-5555",
    "ticketPrice": "120",
    "role": "Doctor",
    "specialization": "Cardiology",
    "qualifications": "DM",
    "experiences": "15 years",
    "bio": "I am a dedicated and skilled cardiologist.",
    "about": "Dr. David Johnson is a renowned Cardiology specialist with a vast experience of 15 years in the medical field.",
    "timeSlots": "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM",
    "reviews": "Highly recommended for heart-related issues.",
    "averageRating": "4.9",
    "totalRating": "300",
    "isApproved": "true",
    "appointments": "100"
  },
  {
    "name": "Dr. Sarah Williams",
    "email": "sarahwilliams@example.com",
    "password": "qwerty",
    "phone": "+1 111-111-1111",
    "ticketPrice": "90",
    "role": "Doctor",
    "specialization": "Pediatrics",
    "qualifications": "DCH",
    "experiences": "8 years",
    "bio": "I am a caring and experienced pediatrician.",
    "about": "Dr. Sarah Williams is a renowned Pediatrics specialist with 8 years of experience in the medical field.",
    "timeSlots": "9:00 AM - 1:00 PM, 2:00 PM - 6:00 PM",
    "reviews": "Great with kids!",
    "averageRating": "4.7",
    "totalRating": "150",
    "isApproved": "true",
    "appointments": "60"
  },
  {
    "name": "Dr. Michael Brown",
    "email": "michaelbrown@example.com",
    "password": "zxcvbn",
    "phone": "+1 222-222-2222",
    "ticketPrice": "130",
    "role": "Doctor",
    "specialization": "Orthopedics",
    "qualifications": "MS",
    "experiences": "12 years",
    "bio": "I am a skilled and dedicated orthopedic surgeon.",
    "about": "Dr. Michael Brown is a highly experienced Orthopedics specialist with 12 years of experience in the medical field.",
    "timeSlots": "10:00 AM - 2:00 PM, 3:00 PM - 7:00 PM",
    "reviews": "Performed my surgery perfectly.",
    "averageRating": "4.8",
    "totalRating": "250",
    "isApproved": "true",
    "appointments": "80"
  },
  {
    "name": "Dr. Emily Davis",
    "email": "emilydavis@example.com",
    "password": "poiuyt",
    "phone": "+1 333-333-3333",
    "ticketPrice": "110",
    "role": "Doctor",
    "specialization": "Gynecology",
    "qualifications": "DGO",
    "experiences": "9 years",
    "bio": "I am a compassionate and skilled gynecologist.",
    "about": "Dr. Emily Davis is a renowned Gynecology specialist with 9 years of experience in the medical field.",
    "timeSlots": "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM",
    "reviews": "Very friendly and helpful.",
    "averageRating": "4.6",
    "totalRating": "175",
    "isApproved": "true",
    "appointments": "55"
  },
  {
    "name": "Dr. Robert Wilson",
    "email": "robertwilson@example.com",
    "password": "mnbvcx",
    "phone": "+1 444-444-4444",
    "ticketPrice": "140",
    "role": "Doctor",
    "specialization": "Ophthalmology",
    "qualifications": "DOMS",
    "experiences": "11 years",
    "bio": "I am a dedicated and skilled ophthalmologist.",
    "about": "Dr. Robert Wilson is a highly experienced Ophthalmology specialist with 11 years of experience in the medical field.",
    "timeSlots": "9:00 AM - 1:00 PM, 2:00 PM - 6:00 PM",
    "reviews": "Highly recommended for eye-related issues.",
    "averageRating": "4.9",
    "totalRating": "275",
    "isApproved": "true",
    "appointments": "90"
  },
  {
    "name": "Dr. Olivia Taylor",
    "email": "oliviataylor@example.com",
    "password": "ytrewq",
    "phone": "+1 555-555-5555",
    "ticketPrice": "100",
    "role": "Doctor",
    "specialization": "Psychiatry",
    "qualifications": "MD",
    "experiences": "10 years",
    "bio": "I am a compassionate and skilled psychiatrist.",
    "about": "Dr. Olivia Taylor is a renowned Psychiatry specialist with a decade of experience in the medical field.",
    "timeSlots": "10:00 AM - 2:00 PM, 3:00 PM - 7:00 PM",
    "reviews": "Very understanding and helpful.",
    "averageRating": "4.7",
    "totalRating": "200",
    "isApproved": "true",
    "appointments": "70"
  },
  {
    "name": "Dr. Daniel Anderson",
    "email": "danielanderson@example.com",
    "password": "lkjhgf",
    "phone": "+1 666-666-6666",
    "ticketPrice": "120",
    "role": "Doctor",
    "specialization": "ENT",
    "qualifications": "MS",
    "experiences": "13 years",
    "bio": "I am a dedicated and skilled ENT specialist.",
    "about": "Dr. Daniel Anderson is a highly experienced ENT specialist with 13 years of experience in the medical field.",
    "timeSlots": "8:00 AM - 12:00 PM, 1:00 PM - 5:00 PM",
    "reviews": "Great with ear and throat issues.",
    "averageRating": "4.8",
    "totalRating": "250",
    "isApproved": "true",
    "appointments": "85"
  },
  {
    "name": "Dr. Sophia Martinez",
    "email": "sophiamartinez@example.com",
    "password": "asdfgh",
    "phone": "+1 777-777-7777",
    "ticketPrice": "130",
    "role": "Doctor",
    "specialization": "Dentistry",
    "qualifications": "BDS",
    "experiences": "14 years",
    "bio": "I am a skilled and dedicated dentist.",
    "about": "Dr. Sophia Martinez is a renowned Dentistry specialist with 14 years of experience in the medical field.",
    "timeSlots": "9:00 AM - 1:00 PM, 2:00 PM - 6:00 PM",
    "reviews": "Very professional and gentle.",
    "averageRating": "4.9",
    "totalRating": "300",
    "isApproved": "true",
    "appointments": "95"
  }
]]