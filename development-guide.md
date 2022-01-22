---
description: Johan Cervantes - December 17, 2021
---

# Development guide

## Setting up the environment

For reference, this is the current repository [https://github.com/CovEducation/coveducation.github.io](https://github.com/CovEducation/coveducation.github.io)

I assume that NPM & NodeJS are installed in the system. If not, [here's a guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

```bash
~ > git clone git@github.com:CovEducation/coveducation.github.io.git
~ > cd coveducation.github.io
# Install dependencies
~/coveducation.github.io > npm install 
~/coveducation.github.io > npm run build
```

If all the commands above worked, the environment has been setup correctly.&#x20;

## Running the site

```
~/coveducation.github.io > npm run serve
```

## Development

This command should hot-reload any changes made to the site:

```
~/coveducation.github.io > npm run develop
```

Other commands can be found in the projects'[ package.json](https://github.com/CovEducation/coveducation.github.io/blob/e16f9820d1a7776585533055514c47127ba2c88b/package.json) file.

## Deploying changes

1. Create a new branch with your changes
2. Create a pull-request and get it reviewed by someone.
   1. Feel free to assign them to me, I will do my best to review them in a reasonable time frame.
   2. If it's urgent, DM me on Messenger
3. After the PR is merged, a GitHub action picks up the changes, rebuilds then site, and deploys it.&#x20;
4. **DO NOT FORGET THIS STEP:**&#x20;
   1. For some reason, after the website is redeployed via Github pages, the redirect between coved.org -> coveducation.github.io is broken. You&#x20;
   2. Double check the project's setting page (**You need admin access for this!**). It should look like this:&#x20;
      1. ![](<.gitbook/assets/Screen Shot 2021-12-17 at 7.46.31 PM.png>)
