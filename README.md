# Reverse Engineered Crashalytics
Are you a vetaran of firebase? If you are, you must know about crashalytics. It's a service to report crashes to the person running it. However, there is one problem with it - **it isn't for the web**. I am here to make a clone of crashalytics solely for the web.

## Use
The premise is simple: report 5XX errors in the terminal. I made it using JavaScript and Python in under 3 hours. However, this is the shittiest clone ever of crashalytics. The design is super bad and I definetly did not do any DRY code. However, this JS + Python app is my first, and first is not always the best.

Run `node index.js` as usual. While it's running, run `python main.py`. The program will error otherwise.

If you are curious how I got the apps to communicate, I used a text file that JS creates and Python reads to it.

## Installation
Get the git repo:

```bash
git clone https://github.com/Noxlobin/reverse-engineered-crashalytics
```

Install packages (express):

```bash
npm install
```
