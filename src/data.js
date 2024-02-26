import angularImg from "./assets/angular.png";
import reactImg from "./assets/react.png";
import vueImg from "./assets/vue.png";
import svelteImg from "./assets/svelte.png";

export const CORE_CONCEPTS = [
  {
    title: "Angular",
    image: angularImg,
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
  },
  {
    title: "React",
    image: reactImg,
    description:
      "React is a JavaScript library for building user interfaces, developed by Facebook.",
  },
  {
    title: "Vue.js",
    image: vueImg,
    description:
      "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
  },
  {
    title: "Svelte",
    image: svelteImg,
    description:
      "Svelte is a free and open-source front end compiler created by Rich Harris. It is used to create web applications with a focus on performance.",
  },
];

export const EXAMPLES = {
  angular: {
    title: "Angular",
    description:
      "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.",
    code: `
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
                })
      export class AppComponent {
      title = 'My Angular App';
  }`,
  },
  react: {
    title: "React",
    description:
      "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    code: `
        import React from 'react';
  
        function Welcome(props) {
           return <h1>Hello, {props.name}</h1>;
                                }
  
        export default Welcome;`,
  },
  vue: {
    title: "Vue.js",
    description:
      "Vue.js is a progressive framework for building user interfaces. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.",
    code: `
        <template>
          <div>
            <h1>{{ message }}</h1>
          </div>
        </template>
  
        <script>
          export default {
            data() {
          return {
            message: 'Hello Vue!'
          };
          }};
        </script>`,
  },
  svelte: {
    title: "Svelte",
    description:
      "Svelte is a new way to build web applications. It shifts the work of building applications from runtime to compile time, resulting in smaller bundle sizes, better performance, and simpler development experience.",
    code: `
        <script>
          let count = 0;
  
        function handleClick() {
          count += 1;
        }
        </script>
  
        <button on:click={handleClick}>
          Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>`,
  },
};
