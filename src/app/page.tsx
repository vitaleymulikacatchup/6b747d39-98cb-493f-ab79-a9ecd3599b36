"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Calendar, ChefHat, Gift, Handshake, MessageSquare, Sparkles, TrendingUp, Users, Star } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            {"name": "Menu", "id": "menu"},
            {"name": "About", "id": "about"},
            {"name": "Reviews", "id": "testimonials"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="Plaza Restaurant"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Plaza Restaurant"
          description="Experience culinary excellence in an elegant atmosphere where every dish tells a story of passion and perfection"
          tag="Fine Dining Experience"
          tagIcon={Sparkles}
          buttons={[
            {"text": "View Menu", "href": "menu"},
            {"text": "Book Table", "href": "contact"}
          ]}
          imageSrc="https://pixabay.com/get/gd932d120d39280b98caf4d6835a3aa3d24d3f26be9b58101cfb46ae9116276c7297be20466589af8d2839de289c29f9e1ea717b6ca56e93d5d70d492538935fd_1280.jpg"
          imageAlt="Elegant Plaza Restaurant interior"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="At Plaza Restaurant, we create unforgettable dining experiences through exceptional cuisine, warm hospitality, and an atmosphere that celebrates the art of fine dining"
          buttons={[
            {"text": "Our Story", "href": "about"},
            {"text": "Meet Chef", "href": "team"}
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Menu"
          description="Discover our carefully crafted dishes made with the finest ingredients and culinary expertise"
          tag="Featured Dishes"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              "id": "pasta",
              "name": "Truffle Pasta",
              "price": "$28",
              "imageSrc": "https://pixabay.com/get/gceea74bf84021e05b7861d053bd651c98ef323fef501830c4bd1de5825fc92ddee922e2058c0c1b1cc7c52b1a17366887e64f7d3da68ce983e8205a8abd3be98_1280.jpg",
              "imageAlt": "Gourmet truffle pasta"
            },
            {
              "id": "salmon",
              "name": "Grilled Salmon",
              "price": "$34",
              "imageSrc": "https://pixabay.com/get/g61cbb46798bd4254a58b6bcec829625975a72777a58accec59f8f168162b229019454c57fe11828dcf7abba15ca11440c8859719e7df0e3246d65e2d51effead_1280.jpg",
              "imageAlt": "Grilled salmon with vegetables"
            },
            {
              "id": "dessert",
              "name": "Chocolate Soufflé",
              "price": "$16",
              "imageSrc": "https://pixabay.com/get/g08f47303471f04bb128a820179dbe7ca5afede0abb69ea51f1f8652f903d24213ffea148624c429b58499a5c81ce39e96f7036ea9c6c79ebfa5304cda286f765_1280.jpg",
              "imageAlt": "Chocolate dessert"
            },
            {
              "id": "salad",
              "name": "Caesar Salad",
              "price": "$18",
              "imageSrc": "https://pixabay.com/get/g3e2fd9ceed79855b99b69704e428ef735c594ba8e7383b7da326e18e438a2ddbfa2dc2ca34b9474fbc933d80e8660bd7_1280.jpg",
              "imageAlt": "Fresh caesar salad"
            }
          ]}
        />
      </div>

      <div id="signature" data-section="signature">
        <ProductCardTwo
          title="Chef's Signature Dishes"
          description="Our most celebrated creations that showcase culinary artistry and exceptional flavor"
          tag="Signature Selection"
          tagIcon={Award}
          textboxLayout="split"
          animationType="blur-reveal"
          gridVariant="two-columns-alternating-heights"
          buttons={[
            {"text": "Full Menu", "href": "menu"},
            {"text": "Reserve Now", "href": "contact"}
          ]}
          products={[
            {
              "id": "signature-steak",
              "brand": "Chef's Special",
              "name": "Wagyu Ribeye Steak",
              "price": "$85.00",
              "rating": 5,
              "reviewCount": "127",
              "imageSrc": "https://pixabay.com/get/g9a54d2db3d27dbf0e4109ea1bbbd82855186e45378737654243fdbb0f846405f43e64e30fe93575ca65ebaebaa3ee7add5ecf6444b5cad6d49704caec59b72cb_1280.jpg",
              "imageAlt": "Premium wagyu ribeye steak"
            },
            {
              "id": "signature-seafood",
              "brand": "Ocean Fresh",
              "name": "Lobster Thermidor",
              "price": "$68.00",
              "rating": 5,
              "reviewCount": "89",
              "imageSrc": "https://pixabay.com/get/g6196c1fb98f2a99f0a0eccf5e72965ffd6c5b7e6aa24b90d4cf41752e7352ac3c0cb9de864aff955422a1e4476c5c592d06f4e12338c848b13ae3844fec7eb37_1280.jpg",
              "imageAlt": "Lobster thermidor seafood platter"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Dining Experiences"
          description="Choose from our curated dining experiences designed for every occasion"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="scale-rotate"
          plans={[
            {
              "id": "lunch",
              "badge": "Popular Choice",
              "badgeIcon": Sparkles,
              "price": "$45",
              "subtitle": "Perfect for business meetings",
              "features": [
                "3-course lunch menu",
                "Wine pairing included",
                "Premium seating",
                "Complimentary dessert"
              ],
              "buttons": [
                {"text": "Book Lunch", "href": "contact"},
                {"text": "View Menu", "href": "menu"}
              ]
            },
            {
              "id": "dinner",
              "badge": "Chef's Choice",
              "badgeIcon": Award,
              "price": "$85",
              "subtitle": "Ultimate fine dining experience",
              "features": [
                "7-course tasting menu",
                "Premium wine selection",
                "Chef's table option",
                "Personalized service"
              ],
              "buttons": [
                {"text": "Reserve Table", "href": "contact"},
                {"text": "Special Menu", "href": "menu"}
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Plaza Restaurant Excellence"
          description="Numbers that reflect our commitment to exceptional dining experiences"
          tag="Our Achievement"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="opacity"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              "id": "1",
              "icon": Users,
              "title": "Happy Guests",
              "value": "15,000+"
            },
            {
              "id": "2",
              "icon": Star,
              "title": "Five Star Reviews",
              "value": "4.8"
            },
            {
              "id": "3",
              "icon": ChefHat,
              "title": "Years Experience",
              "value": "25+"
            },
            {
              "id": "4",
              "icon": Award,
              "title": "Culinary Awards",
              "value": "12"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from our valued customers about their memorable dining experiences"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          testimonials={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "role": "Food Critic",
              "company": "Gourmet Magazine",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g63211cba9d3c11b0aef132d9b82f0d73afb66ac4030ee22fb3f56945fd7ef910adc73cc8e9d55e73b0164fdcc11aa93ee724860187371f75b2240a0b508bcb4a_1280.jpg",
              "imageAlt": "Sarah Johnson portrait"
            },
            {
              "id": "2",
              "name": "Michael Chen",
              "role": "Business Executive",
              "company": "Tech Corp",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g16f7a6e85574830d963bb3dbd04b54415ba55ac4b1b8c1a079622a7eff25ddfcb4b334d929e04e5e366113f0a1d20f687f010e95759d66de9a883963a842dc29_1280.jpg",
              "imageAlt": "Michael Chen portrait"
            },
            {
              "id": "3",
              "name": "Emily Rodriguez",
              "role": "Wedding Planner",
              "company": "Elegant Events",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g6249cbe57cef734ddbd77d354810e8cf4d682e9527e7d08e508a3c5d190f75414cc96ea1dedb336205ed770759d5afc450f1edf7722bd50583b8c69141461822_1280.jpg",
              "imageAlt": "Emily Rodriguez portrait"
            },
            {
              "id": "4",
              "name": "David Thompson",
              "role": "Local Resident",
              "company": "Plaza Neighborhood",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/gf8e8a2465d8d8ea8a8d52331f6433fe88934293ca3db0dcf928cc653b56326ca4f7c43f6586722171ac00b96dd7c3d1460484372142e2ef075b63ee70a2fbcdc_1280.jpg",
              "imageAlt": "David Thompson portrait"
            },
            {
              "id": "5",
              "name": "Lisa Martinez",
              "role": "Anniversary Couple",
              "company": "Celebrating 20 Years",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/g90fa0b44ee1f3844cc3983201bddd15bc229f4fbdbe4dfdef096b9487b64e54fe93cb3f3bce1b5ee5c632a66199b79a10e4e77ff4247a09e8a456eddda113d52_1280.jpg",
              "imageAlt": "Lisa Martinez portrait"
            },
            {
              "id": "6",
              "name": "James Wilson",
              "role": "Corporate Client",
              "company": "Business Dinners",
              "rating": 5,
              "imageSrc": "https://pixabay.com/get/gfc5588b3b84b99629f6f781eac46de7beac079d08f7c8a530427323616c3bb769ce4bfd66ef5de995e1665e20b0d2c6b6b337a7af1f3837c51879f1bf6fd8a60_1280.jpg",
              "imageAlt": "James Wilson portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="We work with the finest local suppliers and partners to bring you exceptional quality"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          speed={35}
          showCard={true}
          logos={[
            "https://pixabay.com/get/gb4b3cfe812227dc714cde05f3a779c35decf20cf774cf1a1e5b08e5d788b1c71462fe6832fa8ce84b904d762e5e87725a603d4d2216f39e30982e47cb6f6c42e_1280.jpg",
            "https://pixabay.com/get/gd34c9ac0fe349ed7d89f02171cca66ba4d2ea25cfb8590fd2b79310394df11a9cd07a2790dd594a27e5adfbbe3b69073c9dbfc6e789b566cfaf121e485059c7f_1280.jpg",
            "https://pixabay.com/get/gd1c956df2a631ad08f2fff52340b6014a4315bb13aac39e93d505cddcf5688e7016f31a6a54fb40fe1d7760a148c6bed25cfcb99e74173c4038ecade890494db_1280.jpg",
            "https://pixabay.com/get/g52243347f484b7e5afbfb1bcb480cbbd96f7902deb41bf2618b59bcfb44dbb5b5fe579d0db6c6291c51c605ece13ab88ed5225024d25ddeb1950c077004c019f_1280.jpg",
            "https://pixabay.com/get/g0553a7ecf75cd54171b4d280075520b88803ff6828c98118af458f9204bfcbd74665b018fc031d762baaa89522a390affdf5bd89686374fca9f50b12b426eeb8_1280.jpg",
            "https://pixabay.com/get/gcde7d41024feabb5237125b9a966cc1cbe51d1fdfc6380834679258724613f9a2cace4eff308931f16facb4edda7b56653b8b4971ca8001b15d14a44ef52a517_1280.jpg",
            "https://pixabay.com/get/g3ef9adbed18387360f5b9831204b13aec451d92492e6581a4324a0a6790bb40808aea2bb189acdead88b004cb15503ba70fa74a684e65dd51d2ead9375084c20_1280.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Book Your Table Today"
          description="Experience the finest dining at Plaza Restaurant. Reserve your table for an unforgettable culinary journey."
          imageSrc="https://pixabay.com/get/gd7e72876aacd4351043e34a001e7d0c1479e9d3cd05e493964d67f170d0aa3cb81571d5f6b365749398467fae807267cc9af55c251026242415c37dd063bde7c_1280.jpg"
          imageAlt="Plaza Restaurant dining room"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Make Reservation"
          termsText="We'll contact you within 24 hours to confirm your reservation details."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              "title": "Restaurant",
              "items": [
                {"label": "Menu", "href": "menu"},
                {"label": "About Us", "href": "about"},
                {"label": "Chef's Story", "href": "team"},
                {"label": "Private Events", "href": "events"}
              ]
            },
            {
              "title": "Services",
              "items": [
                {"label": "Reservations", "href": "contact"},
                {"label": "Catering", "href": "catering"},
                {"label": "Wine Selection", "href": "wine"},
                {"label": "Gift Cards", "href": "gifts"}
              ]
            },
            {
              "title": "Contact",
              "items": [
                {"label": "Location", "href": "location"},
                {"label": "Hours", "href": "hours"},
                {"label": "Contact Info", "href": "contact"},
                {"label": "Reviews", "href": "testimonials"}
              ]
            }
          ]}
          logoText="Plaza Restaurant"
          copyrightText="© 2025 Plaza Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}