---
title: 'Composer commands'
description: 'List of composer commands'
pubDate: 'Nov 11 2025'
heroImage: '../../assets/placeholders/composer-placeholder.png'
---

### Composer Commands Cheatsheet

![Composer Cheatsheet](../../assets/cheatsheets/composerCheatsheet.png) 

### Composer Commands

```bash
composer init               # Create a new composer.json file interactively
composer install            # Install dependencies listed in composer.lock
composer update             # Update all dependencies to latest allowed versions
composer require vendor/pkg # Add a new package and update composer.json + lock
composer remove vendor/pkg  # Remove a package and update composer.json + lock
composer dump-autoload      # Regenerate autoload files (after adding new classes)
composer show               # List all installed packages
composer show vendor/pkg    # Show details about a specific package
composer outdated           # List packages with newer versions available
composer diagnose           # Check for common setup or environment issues
composer run-script name    # Run a custom script defined in composer.json
composer global require pkg # Install a package globally (available system-wide)
composer global update      # Update globally installed packages
```

### External resources

[composer](https://getcomposer.org/)

