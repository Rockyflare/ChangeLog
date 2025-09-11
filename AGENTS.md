# Agent Guidelines for ChangeLog Project

## Build Commands
- `pnpm install` - Install dependencies
- `pnpm run build` - Process changelogs and generate HTML
- `pnpm run build:watch` - Watch mode for development
- `pnpm run clean` - Remove dist directory

## Testing
- No test framework currently configured
- Run `pnpm test` (currently shows error message)

## Code Style Guidelines

### Language & Modules
- Use ES6 modules (`import`/`export`)
- Node.js with ES modules enabled (`"type": "module"` in package.json)

### Imports
- Group imports by type: Node.js built-ins, then external packages
- Use destructured imports: `import { readFile, writeFile } from 'fs/promises'`

### Naming Conventions
- Constants: UPPER_SNAKE_CASE (e.g., `CHANGELOGS_DIR`)
- Functions: camelCase (e.g., `processChangelogs`)
- Variables: camelCase (e.g., `markdownFiles`)

### Error Handling
- Use try/catch blocks for async operations
- Log errors with `console.error()` and exit with `process.exit(1)`
- Provide descriptive error messages

### Code Structure
- 2-space indentation
- Use async/await for file operations
- Template literals for string concatenation
- Descriptive console logging for user feedback

### File Organization
- Keep main logic in root-level scripts
- Use `dist/` for generated output
- Source files in appropriate directories (e.g., `changelogs/`)

### Dependencies
- Use pnpm for package management
- Currently uses: `marked` for Markdown processing