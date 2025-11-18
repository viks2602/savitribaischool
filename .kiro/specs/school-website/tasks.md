# Implementation Plan

- [x] 1. Initialize Next.js project with TypeScript and Tailwind CSS
  - Create Next.js 14+ project with App Router using `create-next-app`
  - Configure TypeScript with strict mode enabled
  - Set up Tailwind CSS with custom configuration for breakpoints and theme
  - Configure next.config.js for image optimization
  - Install required dependencies: Prisma, Nodemailer, React Hook Form, next-intl
  - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 20.1_

- [x] 2. Set up database schema and Prisma ORM
  - Create Prisma schema with Enquiry, News, Gallery, and Notice models
  - Add multilingual fields (titleMr, titleEn, contentMr, contentEn) to News, Gallery, and Notice models
  - Configure PostgreSQL connection in .env.local
  - Create initial migration for all database tables
  - Generate Prisma client
  - Create Prisma client singleton instance in lib/prisma.ts
  - _Requirements: 16.1, 16.4, 16.5, 22.1, 22.2_

- [x] 2.1 Configure internationalization with next-intl
  - [x] 2.1.1 Install next-intl package
    - Run npm install next-intl
    - _Requirements: 20.1_
  
  - [x] 2.1.2 Create i18n configuration file
    - Create i18n.ts with locale definitions (mr, en)
    - Set Marathi (mr) as default locale
    - Define locale names in both languages
    - _Requirements: 20.1, 20.3_
  
  - [x] 2.1.3 Create middleware for locale routing
    - Create middleware.ts with next-intl middleware
    - Configure locale prefix as 'as-needed' (hide /mr from URLs)
    - Set up matcher to exclude API routes and static files
    - _Requirements: 20.1, 21.4_
  
  - [x] 2.1.4 Restructure app directory for locale routing
    - Create [locale] directory under app/
    - Move all page routes under [locale]/ directory
    - Update layout.tsx to accept locale parameter
    - _Requirements: 20.1_
  
  - [x] 2.1.5 Create translation files
    - Create messages/ directory in project root
    - Create messages/mr.json with Marathi translations
    - Create messages/en.json with English translations
    - Add translations for navigation, common UI elements, and forms
    - Include school address in both languages
    - _Requirements: 20.2, 20.3, 20.4, 23.3_
  
  - [x] 2.1.6 Update environment variables
    - Add NEXT_PUBLIC_DEFAULT_LOCALE="mr" to .env
    - Add NEXT_PUBLIC_SCHOOL_ADDRESS_MR with Marathi address
    - Add NEXT_PUBLIC_SCHOOL_ADDRESS_EN with English address
    - Add NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL for Thalner Village location
    - Update .env.example with new variables
    - _Requirements: 20.1, 23.1, 23.2_

- [x] 3. Create global layout and reusable UI components
  - [x] 3.1 Implement root layout with font optimization
    - Set up Inter and Poppins fonts using next/font
    - Create root layout.tsx with HTML structure and global styles
    - Add metadata for default SEO tags
    - _Requirements: 10.1, 10.5_
  
  - [x] 3.2 Build Header component with logo
    - Create server component for Header with school logo
    - Implement responsive logo sizing
    - Use next/image for logo optimization
    - _Requirements: 11.1_
  
  - [x] 3.3 Build Navigation component with mobile menu
    - Create client component for interactive navigation
    - Implement hamburger menu for mobile viewports
    - Add desktop horizontal navigation
    - Implement active route highlighting using usePathname
    - Add smooth transitions for menu toggle
    - Use useTranslations hook for localized navigation labels
    - _Requirements: 11.1, 11.2, 11.3, 20.3_
  
  - [x] 3.3.1 Build LanguageSwitcher component
    - Create client component for language toggle
    - Display current language with visual indicator (मराठी/English)
    - Implement toggle button to switch between Marathi and English
    - Update URL with locale parameter on language change
    - Persist language preference in localStorage
    - Add smooth transition animation
    - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5_
  
  - [x] 3.4 Build Footer component
    - Create server component with three-column layout
    - Add quick links, contact info, and copyright
    - Display school address in current language (Thalner Village, Shirpur, Dhule 425405, Maharashtra)
    - Use useTranslations hook for localized footer content
    - Implement responsive stacking for mobile
    - _Requirements: 11.4, 23.3, 23.4_
  
  - [x] 3.5 Create reusable Button component
    - Implement Button with variant props (primary, secondary, outline)
    - Support both Link and button rendering based on href prop
    - Add size variants (sm, md, lg)
    - Include hover and disabled states
    - _Requirements: 2.5_
  
  - [x] 3.6 Create reusable Card component
    - Implement Card with consistent padding and shadow
    - Add optional hover effect
    - Support custom className prop
    - _Requirements: 5.3_
  
  - [x] 3.7 Create Accordion component for collapsible content
    - Implement client component with expand/collapse functionality
    - Add smooth height transitions
    - Include keyboard navigation support
    - Add ARIA attributes for accessibility
    - _Requirements: 4.4_
  
  - [x] 3.8 Create SignLanguageVideo component
    - Implement client component for video playback
    - Add HTML5 video player with custom controls
    - Include large, clear play/pause buttons
    - Add optional captions/subtitles support
    - Implement transcript toggle functionality
    - Add responsive video sizing
    - Implement lazy loading for video content
    - _Requirements: 17.1, 17.4_

- [x] 4. Implement Home page with all sections
  - [x] 4.1 Create HeroSection component
    - Build server component with full-width background image
    - Use next/image with priority loading for hero image
    - Add overlay text with gradient background
    - Include CTA buttons for admissions and contact
    - Implement responsive typography
    - _Requirements: 2.1, 2.5_
  
  - [x] 4.2 Create HighlightsSection component
    - Build server component with statistics grid
    - Implement 4-column desktop, 2-column tablet, 1-column mobile layout
    - Display student count, teacher count, years, and achievements
    - _Requirements: 2.2_
  
  - [x] 4.3 Create NewsPreview component with database integration
    - Build server component that fetches 3 most recent news items
    - Query News table using Prisma
    - Display news cards with image, title, excerpt, and date
    - Add "Read more" links and "View all news" button
    - Implement lazy loading for news images
    - _Requirements: 2.3, 12.1, 12.4_
  
  - [x] 4.4 Create TestimonialsSection component
    - Build server component with testimonial cards
    - Implement grid or carousel layout
    - Add quote styling with attribution
    - Integrate optional sign language videos for testimonials
    - _Requirements: 2.4, 17.1_
  
  - [x] 4.5 Add sign language videos to home page
    - Integrate SignLanguageVideo component for key sections
    - Add sign language video for school introduction
    - Add sign language video for admissions information
    - Ensure videos have captions and transcripts
    - _Requirements: 17.1, 17.3, 17.4_
  
  - [x] 4.6 Assemble Home page with all sections
    - Compose page.tsx with all home sections
    - Add metadata for SEO
    - Ensure mobile-first responsive layout
    - Emphasize visual content with large images and icons
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 10.1, 17.3, 17.5_

- [x] 5. Implement About Us page
  - Create server component for About page
  - Add school history section with rich text content and visual timeline
  - Add vision, mission, and values sections with supporting icons
  - Add principal's message section with sign language video
  - Create achievements timeline with chronological layout emphasizing visual milestones
  - Add infrastructure photo gallery using next/image
  - Implement responsive grid layout for photos
  - Highlight specialized facilities for deaf education
  - Add metadata for SEO
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 10.1, 17.2, 17.3, 18.1_

- [x] 6. Implement Academics page
  - Create server component for Academics page
  - Add curriculum overview section with visual infographics
  - Implement grade-wise information using Accordion component
  - Add teaching methodology section highlighting deaf education approaches
  - Showcase sign language instruction and communication support
  - Add visual learning techniques and assistive technology information
  - Create download button for academic calendar PDF
  - Implement responsive layout with proper content hierarchy
  - Add metadata for SEO
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 10.1, 18.2, 18.4_

- [x] 7. Implement Facilities page
  - Create server component for Facilities page
  - Add facilities list including specialized deaf education facilities
  - Highlight visual learning labs and assistive technology rooms
  - Add Library, Transport, Labs, Sports, CCTV sections
  - Implement grid layout for facility cards with prominent images
  - Add optimized images for each facility using next/image
  - Implement lazy loading for facility images
  - Add descriptive text with supporting icons for each facility
  - Include video tours of key facilities (optional)
  - Add metadata for SEO
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 10.1, 18.1_

- [x] 8. Implement Admissions page
  - Create server component for Admissions page
  - Add admission process steps in sequential order
  - Add eligibility criteria section for each grade
  - Add required documents list
  - Create download button for admission form PDF
  - Add CTA button linking to enquiry form
  - Add metadata for SEO
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 10.1_

- [x] 9. Implement Contact page with enquiry form
  - [x] 9.1 Create form validation utilities
    - Write email validation function with regex
    - Write phone number validation function
    - Write general field validation helpers
    - Create TypeScript types for form data
    - _Requirements: 7.3, 16.2, 16.3_
  
  - [x] 9.2 Build EnquiryForm component
    - Create client component with controlled form inputs
    - Add form fields: name, email, phone, childClass, message
    - Implement client-side validation with error display
    - Integrate Google reCAPTCHA v3
    - Add loading state during submission
    - Add success/error message display
    - Implement form reset after successful submission
    - Add ARIA labels for accessibility
    - _Requirements: 7.1, 7.2, 7.3, 7.5_
  
  - [x] 9.3 Create Contact page layout
    - Build server component for Contact page
    - Add school address section with localized address (Thalner Village, Shirpur, Dhule 425405, Maharashtra)
    - Embed Google Maps iframe with Thalner Village location coordinates
    - Add phone numbers and email with clickable links
    - Integrate EnquiryForm component with localized labels
    - Implement responsive layout
    - Add metadata for SEO in both languages
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 10.1, 23.1, 23.2, 23.3_

- [x] 10. Implement enquiry form API route
  - [x] 10.1 Create email service utility
    - Set up Nodemailer with SMTP configuration
    - Create email template for admin notifications
    - Write sendEnquiryEmail function
    - Add error handling for email failures
    - _Requirements: 7.4_
  
  - [x] 10.2 Build POST /api/enquiry route handler
    - Create route.ts in app/api/enquiry directory
    - Implement reCAPTCHA token verification with Google API
    - Add server-side validation for all form fields
    - Store enquiry in database using Prisma
    - Send email notification to admin using email service
    - Return appropriate success/error responses
    - Add error handling with proper HTTP status codes
    - _Requirements: 7.2, 7.3, 7.4, 7.5, 16.1, 16.2, 16.3, 16.4, 16.5_

- [x] 11. Implement News/Events pages
  - [x] 11.1 Create News listing page
    - Build server component that fetches all published news
    - Query News table ordered by createdAt descending
    - Display news cards in grid layout based on current locale
    - Show title (titleMr or titleEn), excerpt, image, and date for each article
    - Add "Read more" links to detail pages
    - Implement lazy loading for images
    - Add metadata for SEO in both languages
    - _Requirements: 12.2, 12.4, 12.5, 10.1, 22.3_
  
  - [x] 11.2 Create News detail page with dynamic routing
    - Build server component with dynamic [slug] route
    - Fetch single news article by slug using Prisma
    - Display full article content (contentMr or contentEn) based on current locale
    - Display optimized image
    - Generate dynamic metadata for SEO in both languages
    - Add back to news list link
    - Handle 404 for non-existent articles
    - Fallback to Marathi content if English not available
    - _Requirements: 12.3, 12.4, 12.5, 10.1, 10.2, 22.3, 22.5_

- [x] 12. Implement Gallery page (optional)
  - Create server component that fetches gallery images
  - Query Gallery table ordered by order field
  - Display titles and descriptions based on current locale (titleMr/titleEn, descriptionMr/descriptionEn)
  - Implement responsive grid layout for images
  - Use next/image with lazy loading for all gallery images
  - Add lightbox functionality for image viewing (client component)
  - Organize images by category if applicable
  - Add metadata for SEO in both languages
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 10.1, 22.4_

- [x] 13. Implement Notices page (optional)
  - Create server component that fetches notices
  - Query Notice table ordered by createdAt descending
  - Display notices list with localized titles (titleMr or titleEn), date, and file info
  - Add download/open links for PDF documents
  - Show file size for each notice
  - Add metadata for SEO in both languages
  - Fallback to Marathi title if English not available
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 10.1, 22.4, 22.5_

- [x] 14. Implement SEO and metadata
  - [x] 14.1 Create sitemap.ts
    - Generate sitemap with all static pages for both locales
    - Include dynamic news article URLs from database for both languages
    - Add lastModified dates
    - Include locale-specific URLs
    - _Requirements: 10.3, 20.1_
  
  - [x] 14.2 Create robots.txt
    - Add robots.txt to public directory
    - Allow all user agents
    - Disallow /api/ routes
    - Include sitemap URL
    - _Requirements: 10.4_
  
  - [x] 14.3 Add structured data for organization
    - Create JSON-LD schema for EducationalOrganization
    - Include school name, address (Thalner Village, Shirpur, Dhule 425405, Maharashtra), contact info
    - Add geo-coordinates for location
    - Add to root layout
    - _Requirements: 10.1, 10.2, 23.5_
  
  - [x] 14.4 Verify metadata on all pages
    - Ensure all pages have unique titles and descriptions in both languages
    - Add Open Graph tags for social sharing with locale support
    - Verify dynamic metadata for news articles in both languages
    - Add hreflang tags for language alternatives
    - _Requirements: 10.1, 10.2, 20.1_

- [x] 15. Create custom 404 page
  - Create not-found.tsx in app directory
  - Maintain site header and footer layout
  - Add friendly error message
  - Include navigation links to main pages
  - Add metadata for SEO
  - _Requirements: 15.1, 15.2, 15.3, 15.4_

- [x] 16. Implement responsive design and mobile optimization
  - Review all pages on mobile viewport (< 640px)
  - Review all pages on tablet viewport (768px - 1024px)
  - Review all pages on desktop viewport (> 1024px)
  - Verify touch-friendly tap targets (minimum 44px) - critical for visual navigation
  - Test navigation menu on mobile devices with clear visual indicators
  - Verify image responsiveness across all viewports
  - Test form usability on mobile devices
  - Ensure video players are responsive and easy to control
  - Verify visual hierarchy emphasizes images and icons over text
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 17.3, 17.5_

- [x] 17. Optimize performance
  - [x] 17.1 Implement image optimization
    - Verify all images use next/image component
    - Add priority loading for hero images
    - Implement lazy loading for below-fold images
    - Add blur placeholders for loading states
    - _Requirements: 9.2, 9.3, 9.4_
  
  - [x] 17.2 Implement code splitting
    - Use dynamic imports for heavy client components
    - Verify route-based code splitting
    - Lazy load lightbox component if used
    - _Requirements: 9.4_
  
  - [x] 17.3 Run Lighthouse audit
    - Test performance score (target 90+)
    - Test accessibility score
    - Test SEO score
    - Test best practices score
    - Fix any issues identified
    - _Requirements: 9.1_

- [x] 17.4 Update all pages with localized content
  - [x] 17.4.1 Update Home page with translations
    - Replace hardcoded text with useTranslations hook
    - Add translations for hero section, highlights, testimonials
    - Ensure all buttons and CTAs use translated text
    - _Requirements: 20.3, 20.4_
  
  - [x] 17.4.2 Update About page with translations
    - Replace hardcoded text with useTranslations hook
    - Add translations for history, vision, mission, values
    - Translate principal's message
    - Translate achievements timeline
    - _Requirements: 20.3, 20.4_
  
  - [x] 17.4.3 Update Academics page with translations
    - Replace hardcoded text with useTranslations hook
    - Add translations for curriculum overview
    - Translate grade-wise information in accordions
    - Translate teaching methodology section
    - _Requirements: 20.3, 20.4_
  
  - [x] 17.4.4 Update Facilities page with translations
    - Replace hardcoded text with useTranslations hook
    - Add translations for all facility descriptions
    - Translate facility names and details
    - _Requirements: 20.3, 20.4_
  
  - [x] 17.4.5 Update Admissions page with translations
    - Replace hardcoded text with useTranslations hook
    - Add translations for admission process steps
    - Translate eligibility criteria
    - Translate required documents list
    - _Requirements: 20.3, 20.4_
  
  - [x] 17.4.6 Update EnquiryForm with translations
    - Replace hardcoded labels with useTranslations hook
    - Add translations for form fields, placeholders, validation messages
    - Translate success/error messages
    - _Requirements: 20.4_

- [ ]* 18. Write integration tests for critical flows
  - Set up Playwright or Cypress testing framework
  - Write test for enquiry form submission flow
  - Write test for navigation between pages
  - Write test for responsive layout on different viewports
  - Write test for form validation and error display
  - Write test for language switching functionality
  - Write test for language persistence across page navigation
  - _Requirements: 7.2, 7.3, 11.1, 11.2, 11.3, 21.2, 21.4_

- [ ] 19. Set up deployment configuration
  - [ ] 19.1 Create environment variables configuration
    - Create .env.example with all required variables
    - Document each environment variable
    - Add .env.local to .gitignore
    - _Requirements: 17.1, 17.2, 17.3_
  
  - [ ] 19.2 Configure Vercel deployment
    - Connect repository to Vercel
    - Configure build settings
    - Add environment variables in Vercel dashboard
    - Set up PostgreSQL database (Supabase or NeonDB)
    - _Requirements: 17.5_
  
  - [ ] 19.3 Run database migrations in production
    - Execute Prisma migrations on production database
    - Generate Prisma client
    - Verify database connection
    - Seed database with sample multilingual content (news, notices, gallery)
    - _Requirements: 16.1, 16.5, 22.1, 22.2_
  
  - [ ] 19.4 Verify production deployment
    - Test all pages load correctly
    - Test enquiry form submission
    - Verify email notifications work
    - Test reCAPTCHA functionality
    - Run Lighthouse audit on production URL
    - Test responsive design on real devices
    - Verify sitemap.xml accessibility
    - Test 404 page
    - _Requirements: 9.1, 7.2, 7.4, 7.5, 10.3, 15.1_

- [ ]* 20. Add success stories and student achievements section
  - Create component to showcase deaf and mute student success stories
  - Add photos and videos of student achievements
  - Highlight alumni accomplishments
  - Include visual testimonials from students and parents
  - Add sign language videos for key success stories
  - _Requirements: 18.3, 18.5_

- [ ]* 21. Create documentation
  - Write README.md with project overview
  - Document environment variables setup
  - Document database setup and migrations
  - Document deployment process
  - Add code comments for complex logic
  - Create user guide for content updates
  - Document accessibility features for deaf and mute users
  - Document sign language video integration process
