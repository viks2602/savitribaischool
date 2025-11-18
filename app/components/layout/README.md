# LanguageSwitcher Component

## Overview
The LanguageSwitcher component provides a toggle button for switching between Marathi (मराठी) and English languages throughout the website.

## Features
- ✅ Visual toggle indicator showing current language
- ✅ Smooth transition animations
- ✅ Persists language preference in localStorage
- ✅ Updates URL with locale parameter on language change
- ✅ Displays current language with native script (मराठी/English)
- ✅ Loading state during language switch
- ✅ Accessible with ARIA labels
- ✅ Responsive design

## Usage

```tsx
import LanguageSwitcher from '@/app/components/layout/LanguageSwitcher';

export default function Header() {
  return (
    <header>
      <nav>
        {/* Your navigation items */}
      </nav>
      <LanguageSwitcher />
    </header>
  );
}
```

## How It Works

1. **Initial Load**: Checks localStorage for saved language preference
2. **Language Toggle**: Clicking the button switches between Marathi and English
3. **URL Update**: Updates the URL path with the new locale (e.g., `/en/about`)
4. **Persistence**: Saves the selected language to localStorage
5. **Default Locale**: Marathi (mr) is the default and doesn't show in URL

## Technical Details

- **Type**: Client Component (`'use client'`)
- **Dependencies**: 
  - `next-intl` for internationalization
  - `next/navigation` for routing
- **State Management**: Uses React hooks (useState, useEffect, useTransition)
- **Styling**: Tailwind CSS with smooth transitions

## Accessibility

- ARIA label describes the action ("Switch to English" or "Switch to Marathi")
- Keyboard accessible
- Visual feedback for hover and disabled states
- Loading indicator during transition

## Customization

You can customize the appearance by modifying the Tailwind classes in the component:

```tsx
// Change colors
className="bg-blue-100 hover:bg-blue-200" // Instead of gray

// Change size
className="px-4 py-3" // Larger padding

// Change animation duration
className="transition-all duration-500" // Slower transition
```
