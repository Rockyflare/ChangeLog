# Tickets App - Changelog

## [Current Version] - September 28, 2025
- fixed tutorial button on mobile
- made the create ticket button easier to read
- changed ticket card colour for cancelled as well

## [e8b6c49] - September 25, 2025

### ✨ New Features
- **Settings Panel**: Access subscriptions, changelog, and feedback form all in one place
- **Bug Reporting**: Easily report issues directly from the app
- **Interactive Tutorials**: Help guides are now available throughout the app for better user experience
- **Enhanced Ticket Actions**: New action menu next to ticket close button includes:
  - **Copy Ticket**: Duplicate tickets and optionally remove the original (useful when changing contact info)
  - **Print Options**: Customize what information to include - notes, description, quotes, pricing, and time tracking

### 🔄 Improvements  
- **Cleaner Interface**: Completed tickets are now hidden by default to reduce clutter
- **Streamlined Navigation**: Account management moved to settings panel
- **Better Visual Feedback**: 
  - Filter button now shows as an icon with total count displayed
  - Status colors added to ticket list and headers for quick identification
  - Improved button sizes and visibility
  - Enhanced input field contrast for better readability
- **Mobile-First Design**: Create button repositioned for better mobile experience
- **Contact Management**: Contact buttons are now more prominent and accessible

### 🐛 Bug Fixes
- Significantly improved desktop experience and layout
- Fixed hidden close button issue on desktop
- Resolved ticket and contact overflow display issues  
- Special characters now supported in custom ticket IDs
- Eliminated double scrolling in notes section

### 📱 Interface Changes
- Removed calendar feature (based on usage patterns)
- Streamlined contact management (removed separate contact list view)

### 🔧 Technical Improvements *(Dev Notes)*
- Major codebase cleanup and optimization
- Migrated to new form system for better performance

## Version [f7fee71] - August 30, 2025

### 📊 Analytics Integration *(Build #19)*
- Added usage analytics to better understand user behavior and improve future updates
- *Dev: Analytics implementation for development insights*

## Version [f79b88d] - August 11, 2025  

### 🔗 Enhanced Connectivity *(Build #3)*
- **Smart Contact Integration**: Direct links between tickets and contact information
- **One-Click Communication**: Added call, text, and email buttons for instant contact
- **Financial Overview**: Total cost display for better project tracking

## Version [64f1e98] - August 8, 2025

### 🗑️ Data Management & UX Improvements *(Build #1)*
- **Complete Delete Functionality**: Full deletion support for tickets, notes, and contacts
- **Smart Saving**: 
  - Auto-save when closing the app
  - Quick action buttons now trigger saves
- **Custom Ticket IDs**: Fixed issue preventing custom ticket ID creation
- **Real-time Updates**: Contact information now updates immediately

## Version [c4c1eda] - August 7, 2025

### 🚀 Production Release *(Build #7)*
- **Public Launch**: App released to initial user base
- **Performance Optimization**: Database caching implemented for faster loading
- **Stability Confirmed**: All core features tested and verified

## Version [e9136c8] - July 31, 2025

### 🎯 Project Launch *(Initial Release)*
- First version of Tickets App created
