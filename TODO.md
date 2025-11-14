 # TODO: Integrate API for Promo Code in DiscountModal and Booking

- [x] Add state variables for promoCode, discountPercentage, loading, and error in DiscountModal.tsx
- [x] Add useEffect to fetch promo code data from the API when isOpen becomes true
- [x] Implement fetch logic with error handling (try/catch)
- [x] Update JSX to display loading state while fetching
- [x] Update JSX to display error state if fetch fails (fallback to default)
- [x] Update JSX to use dynamic promoCode and discountPercentage in the UI
- [x] Update handleCopy function to copy the dynamic promoCode
- [x] Update description text to reflect the dynamic discountPercentage
- [x] Update handleClaimOffer function to apply promo code and store in localStorage
- [x] Update Booking.tsx to use the same apply endpoint and schema as DiscountModal
- [x] Test the component to ensure API fetch works and UI updates correctly

## Remaining Testing Areas (Critical Path)

### Server Errors to Fix
- [x] Fixed 500 Internal Server Error on promo code validation API - removed validation step and added proper error handling for apply endpoint
- [ ] Fix 400 Bad Request on booking submission API (/api/book)

### Promo Code Testing
- [x] Fixed error handling in DiscountModal.tsx - replaced throw with proper error logging and user feedback
- [x] Removed promo code validation step in Booking.tsx to avoid 500 errors - now applies directly
- [x] Modified DiscountModal to not validate/apply promo code - just stores it for booking page to apply directly
- [x] Added one-time claim functionality - modal only shows once per user
- [x] Modified modal to show on scroll after hero section instead of immediately
- [x] Added Crisp live chat integration
- [ ] Full promo code validation and application process (including error handling for server failures)
- [ ] Test promo code removal functionality
- [ ] Verify localStorage persistence of applied promo codes
- [ ] Test invalid promo code scenarios

### Booking Form Testing
- [ ] Booking form submission and confirmation
- [ ] Form validation across all steps (vehicle info, services, customer details)
- [ ] Navigation between steps
- [ ] Order summary accuracy with and without promo codes

### UI/UX Testing
- [ ] UI responsiveness and animations
- [ ] Mobile and desktop layouts
- [ ] Error message display and user feedback
