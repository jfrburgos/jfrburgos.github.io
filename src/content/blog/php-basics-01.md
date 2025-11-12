---
title: 'PHP basics - 01'
description: 'Basic tutorial to setup PHP'
pubDate: 'Nov 11 2025'
heroImage: '../../assets/placeholders/php-placeholder.png'
---


## This is a tutorial on how to install and start programming in PHP

### Installation

This command will install **PHP**, **Composer**, and the **Laravel installer** on macOS, Windows, or Linux.

[php.new](https://php.new/)

[PHP and the Laravel Installer](https://laravel.com/docs/12.x#installing-php)

```bash
php --version

PHP 8.4.1 (cli) (built: Nov 21 2024 08:58:25) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.4.1, Copyright (c) Zend Technologies

---

composer --version

Composer version 2.8.3 2024-11-17 13:13:04
PHP version 8.4.1 (/home/$USER/.config/herd-lite/bin/php)
Run the "diagnose" command to get more detailed diagnostics output.

---

laravel --version

Laravel Installer 5.14.0
```


You can also use **XAMPP**, which includes **Apache**, **MariaDB**, and **PHP**.

[XAMPP](https://www.apachefriends.org/index.html)

### Database setup

**SQLite** is a great option and is installed with just one command (Linux).

[SQLite](https://www.sqlite.org/index.html)

```bash
sudo apt install sqlite3
```

If you want a GUI for sqlite you can use **sqlitebrowser**.

[DB Browser for SQLite](https://sqlitebrowser.org/)

Another great option is to use **Docker**, which allows you to run a **database management system** like **PostgreSQL** in seconds.

[Docker](https://docs.docker.com/)

[PostgreSQL](https://www.postgresql.org/)

[Run Postgres in a Docker Container](https://www.youtube.com/watch?v=Hs9Fh1fr5s8)

To interact with the database running inside the container you can use **DBeaver Community**.

[DBeaver Community](https://dbeaver.io/)

### Code editors

Recommended **code editors** for programming in PHP.

Personally I use **Visual Studio Code** and **Neovim**.

[PhpStorm](https://www.jetbrains.com/phpstorm/)

[Sublime Text](https://www.sublimetext.com/)

[NvChad - Neovim config](https://nvchad.com/)

[Visual Studio Code](https://code.visualstudio.com/)

#### VS Code extensions for PHP

[PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)

[Laravel](https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel)

##### Themes and icons

[Catppuccin for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)

[Catppuccin Icons for VSCode](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons)

##### Fonts

[JetBrains Mono](https://www.jetbrains.com/lp/mono/)

[Nerd Fonts](https://www.nerdfonts.com/)

### First Program

Create a file called **index.php** in any code editor of your choice.

Each block of PHP code must go inside `<?php ?>`

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Hello, World!</title>
</head>
<body>
    <h1>
      <?php echo 'Hello, World!'; ?>
    </h1>
</body>
</html>
```

Now start the server

```bash
php -S localhost:8080
```

![php server](../../assets/php/server0.png)

![php server](../../assets/php/server.png)
