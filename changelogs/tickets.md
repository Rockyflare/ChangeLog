# Tickets App - Changelog

## [Current] - Sep 15, 2025 (16)

### Added
- settings button
    - subscriptions 
    - change log 
    - feed back form
- bug reports
- demo / tutorials
- added a actions menu near ticket close
    - delete button is moved here
    - copy function for tickets
        - allows you to delete the previous ticket 
        (this is for needing to change the contact/kinda fun solution for ui/ux problem)
    - print function
        - lets you choose what to show: notes, description, quote, price, time worked on (created date - now)
- added tutorials

### Changed
- completed tickets now are hidden by default
- account management is inside settings button
- filter button is now an icon
- filter total is shown
- edit buttons are bigger and replaced with text where needed
- made contact buttons more prominent
- added a bit of status colouring in ticket list and the header of the ticket
- moved create button to bottom to fill bottom to fit rest of ui
- added more contrast as i noticed inputs were hard to see
- removed double scroll in notes

### Fixed
- desktop view is a lot better
- fixed desktop hidden close button
- tickets overflow
- contacts overflow
- can now add special characters to ticket ids/stubs

### Removed
- calendar 
- dedicated contact list view

### Technical
- cleaned up code base a lot
- moved over to a new form system

## [f7fee71] - Aug 30, 2025 (19)
added tracking to the app
so we can better understand how to build the app
with less time wasted


## [f79b88d] - Aug 11, 2025 (3)
added linking to drawers and contacts,
added call text and email links, added total cost display

## [64f1e98] - Aug 8, 2025 (1)
hooked up deletions for tickets notes and contacts
improved save buttons
- auto saves when you quit 
- quick action button acts as a save
fixed ticket stub input problem (couldn't add your own ids)
contacts now update

## [c4c1eda] - Aug 7, 2025 (7)
released app in the wild for my one set of users
got caching working so we don't hit the db constantly
everything seems to be working fine

## [e9136c8] - Jul 31, 2025 (0)
initial project start
