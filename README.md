# Documentation of the attention data collecting and analyzing project

## Introduction

In this project, we tried to mesure attention through a webpage using only the information available there. To do so, we used a dataset called [“The Attentive Cursor Dataset”](https://www.frontiersin.org/articles/10.3389/fnhum.2020.565664/full). Our project is made of two parts : 

- `./python_data-mining_etc/` contains all the jupyter notebooks that have been used to analyse the dataset and produce a Keras model for tensorflow.js.
- `./website/` contains the files used to generate the website.

## Website

A hosted version of the state of the project from the 18/06/2022 is available at : [https://persuasiveness.web.app/](https://persuasiveness.web.app/).  

### Small tutorial

To change things on this project, we recommend netherless that you run a local version. 

To do so :

- Make sure you have Node.js installed
- in the project repo, do `npm install`
    - This should install everything you need to run this project (Vue 3, Vite, tensorflow.js, tailwindCSS…)
- Do `npm run dev` to run a local dev server of the project with vite.

### Workflow of the website

The website is based on a series of vue.js components. You can see how they are implemented in the `App.vue` file.

The content of the pages is generated in `Content.vue` with some text loaded from `/src/assets/articles.txt` and are browsed with the buttons of `Buttons.vue`.The implementation of the tensorflow.js model is entirely contained in the `Results.vue` component. 

### Credit

This project was made by @Eliaz-LR and @JulesDuteyrat .