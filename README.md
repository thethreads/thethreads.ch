thethreads.ch
=============

# Development

To setup your development environment...

1. Make sure to clone this repository with its submodules via `git clone --recursive`.
2. Setup Node.js
  1. `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
  2. `sudo apt-get install -y nodejs`
3. Run `npm install` in this directory
4. To compile (and watch) the LESS files (located in `style/`, run `npm run watch-css`

The final compiled and combined CSS file is located in `dist/`.
Make sure to commit the compiled CSS whenever you commit changes to the `.less` source files!
