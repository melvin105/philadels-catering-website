# Contact Us and Newsletter Forms Setup

## Overview
The website now has fully functional contact and newsletter subscription forms that integrate with Netlify Forms.

## Forms Implemented

### 1. Contact Form (`/contact`)
- **Location**: Contact page (`pages/contact.tsx`)
- **Fields**: Name, Email, Phone (optional), Message
- **Features**:
  - Client-side validation
  - Loading states
  - Success/error feedback
  - Honeypot spam protection
  - Form reset on successful submission

### 2. Newsletter Subscription Form
- **Location**: Footer component (`components/Footer.tsx`)
- **Fields**: Email
- **Features**:
  - Email validation
  - Loading states
  - Success/error feedback
  - Honeypot spam protection
  - Auto-clear success message

## Netlify Forms Integration

Both forms are configured to work with Netlify Forms:

```html
<form 
  name="contact" 
  method="POST" 
  data-netlify="true" 
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <div style={{ display: 'none' }}>
    <input name="bot-field" />
  </div>
  <!-- form fields -->
</form>
```

## Key Features

### Form Validation
- Email format validation using regex
- Required field validation
- Input trimming to remove whitespace

### User Experience
- Loading states with disabled inputs during submission
- Clear success/error messages
- Auto-clearing success messages
- Responsive design

### Spam Protection
- Honeypot fields (hidden bot-field inputs)
- Client-side validation
- Proper form encoding

## Deployment Notes

1. **Netlify Forms**: Forms will automatically work when deployed to Netlify
2. **Form Detection**: Netlify will detect forms during build process
3. **Submissions**: Form submissions will appear in Netlify dashboard
4. **Notifications**: Can be configured in Netlify dashboard

## Testing

### Local Development
- Forms will show validation and UI feedback
- Actual submissions require deployment to Netlify

### Production Testing
1. Deploy to Netlify
2. Test form submissions
3. Check Netlify dashboard for submissions
4. Verify email notifications (if configured)

## Form Names
- Contact form: `contact`
- Newsletter form: `newsletter`

These names are used in the Netlify dashboard to identify form submissions.
