# Tickets App - Changelog

## [Current] - Sep 15, 2025 (16)

### Added
- settings button
- bug reports
- subscriptions (includes new payments backend powered by stripe)
- change log 
- feature voting (no limit on submissions so just be genetal)
- demo / tutorials
- when searching contacts will now appear at the bottom of your search

### Changed
- completed tickets now are hidden
- account management is inside settings button
- filter button is now an icon
- edit buttons are bigger and text not icons
- edit buttons now swap to cancel button so you can only save 
with bottom button or by leaving

### Fixed
- fixed desktop hidden close button

### Removed
- calendar 
- dedicated contact view 

### could not reproduce 
- input issues with ticket stub 
(please submit a bug if its still happening)

### Technical
- cleaned up code base a lot
- moved over to a new form system
- migrated to a new backend (this is what the app runs on)

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
