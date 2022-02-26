# Electron with GUI in Docker (VSCode Dev Container)

Demonstration of how to run an electron application inside a vscode devcontainer but with the GUI running on the host machine. Neat!

This uses the docker image from the Playwright project (https://playwright.dev/docs/docker) because there are a bunch of dependencies that Chromium requires that they've so kindly already figured out for me.

This demo also assumes that you're using X11 as your display server :)