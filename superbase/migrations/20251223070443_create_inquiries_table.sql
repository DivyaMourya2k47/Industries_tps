/*
  # Create Inquiries Table

  ## Overview
  Creates a table to store customer inquiries submitted through the contact form on the TPS Industries website.

  ## New Tables
    - `inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `company_name` (text) - Name of the customer's company
      - `contact_person` (text) - Name of the person submitting the inquiry
      - `email` (text) - Contact email address
      - `phone` (text) - Contact phone number
      - `industry` (text) - Industry sector of the customer
      - `product_requirement` (text) - Specific product(s) the customer is interested in
      - `message` (text) - Additional details or message from the customer
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of the inquiry (default: 'new')

  ## Security
    - Enable Row Level Security (RLS) on `inquiries` table
    - Add policy to allow public insert access (for form submissions)
    - Add policy to allow authenticated users to read all inquiries (for admin access)

  ## Notes
    - Public can only insert (submit) inquiries
    - Only authenticated users can view inquiries
    - All inquiries are timestamped for tracking
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  industry text NOT NULL,
  product_requirement text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view inquiries"
  ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);
