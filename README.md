# Access
**Username:**  Admin
**Password:**  Admin

# Deployment on GitHub Pages
1.- Open your package.json and add a homepage field for your project:
`homepage": "https://myusername.github.io/my-app`

2.- Install gh-pages and add deploy to scripts in package.json
`npm install --save gh-pages`

3.- Add the following scripts in your package.json:
```javascript
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

4.- Then run:
`npm run deploy`

5.- Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch