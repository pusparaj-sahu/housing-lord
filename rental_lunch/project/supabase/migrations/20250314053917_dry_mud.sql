/*
  # Add Sample Properties

  1. Changes
    - Insert sample properties with realistic data
    - Properties include various locations, prices, and features
    - Images from Unsplash for visual representation
*/

INSERT INTO properties (title, description, price, bedrooms, bathrooms, location, image_url, created_at)
VALUES
  (
    'Modern Downtown Loft',
    'Stunning loft apartment with floor-to-ceiling windows, exposed brick walls, and premium finishes. Features an open concept living area, gourmet kitchen, and private balcony with city views.',
    2500,
    2,
    2,
    'Downtown Seattle, WA',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80',
    now()
  ),
  (
    'Cozy Garden Cottage',
    'Charming cottage surrounded by a beautiful garden. Recently renovated with modern amenities while maintaining its historic character. Perfect for those seeking a peaceful retreat.',
    1800,
    1,
    1,
    'Capitol Hill, Seattle, WA',
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    now()
  ),
  (
    'Luxury Waterfront Villa',
    'Spectacular waterfront property with panoramic views. Features high-end appliances, smart home technology, private dock, and resort-style amenities. Perfect for luxury living.',
    5000,
    4,
    3.5,
    'Mercer Island, WA',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    now()
  ),
  (
    'Urban Studio Apartment',
    'Efficiently designed studio in the heart of the city. Features built-in storage solutions, modern kitchen, and large windows providing abundant natural light.',
    1500,
    0,
    1,
    'Belltown, Seattle, WA',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    now()
  ),
  (
    'Family Home with Garden',
    'Spacious family home with a large backyard, updated kitchen, and comfortable living spaces. Includes a finished basement and two-car garage.',
    3500,
    3,
    2.5,
    'Bellevue, WA',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
    now()
  ),
  (
    'Penthouse with City Views',
    'Luxurious penthouse offering panoramic city views, premium finishes, and extensive amenities. Features include a gourmet kitchen, private terrace, and floor-to-ceiling windows.',
    4500,
    3,
    3,
    'South Lake Union, Seattle, WA',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    now()
  );