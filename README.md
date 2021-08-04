## Getting Started

Run the development server or [click here to see the production version website]("https://ethanbonin.github.io/ethanbonin").

```bash
yarn dev
```

## Why
I built this website as a memento to myself. At first, I wanted to build it to have a _website_ resume 
(because that's what all the cool kids do), but as 
I was building it, I realized how awesome my journey has been to get this spot in my career. 
This website will always be a __work in progress__. My goal is continuously improve it once or twice a year. 
It will also be a reality check to see if I have become stagnate.

## Frameworks
- [React](https://reactjs.org)
    -
    - I used react for my front-end framework. I found it very compatible for Storybook and Next.Js. 
      React is one of those skills that you will never be able to depart from, mostly because you will need a website version of any application you ever build.
      I'm a huge fan of declarative frameworks. It takes less time to build the UI components and gives me more time to think of fun and innovated things.
- [Next.JS](https://nextjs.org)
    -
    - I've used Gatsby in the past for statically generated websites, but I wanted to gain the experience of using Next.JS.
    One of the major perks that I could see myself using Next.JS in my future web projects is the Server Side Rendering
      (SSR) feature. 9 times out of 10 I need a backend server for my application, so Next.JS will work perfect for that.
      
- [Storybook](https://storybook.js.org)
    -
    - This came at recommendation of a company that I interviewed with. I've seen Storybook used in the past, but it has seriously changed the game of 
    React development for me. It is __always__ the goal to have simple and decoupled React components as possible. 
      With Storybook, it always gives you a bird eye view of your project components and ensure that your components are easily testable.
      Storybook also creates auto-generated documentation for lazy developers! The less I have to write, THE BETTER.
      
## Testing
For testing, I used kept it as simple as possible. I used [Jest]("https://jestjs.io") for an easy (basically near 0 config) testing framework.
I used [enzyme]("https://enzymejs.github.io/enzyme/") to create the components independently for snapshot testing. 
I mostly used enzyme because it had easily functionality for using the manipulating the components into different states. [Also, the docs are fantastic.](https://enzymejs.github.io/enzyme/) 

## Code Quality
I like to set up [eslint](https://eslint.org) for ALL my web projects.Having [eslint](https://eslint.org) is a game changer for code quality.
When working with many developers: the stricter the rules, the better. ( <**ahem**> - That is why static languages are the best too - <**/ahem**>)
I like the view web development like the wild-wild-west. If you have no law, then it's going to be killer (for the bug fixes and code readability in the future).
[Next.JS](https://nextjs.org) was awesome for this too. It will not compile / export if you do not take care of all your warnings and errors before hand!

Lastly, when using a linter, it's important to keep on task before pushing up commits. SOMETIMES you can forget to `lint` your code before you push.
That is why I use [pre-commit](https://pre-commit.com) for running commands before I commit any of my work. So before I actually "git add .", 
it runs a lint for me to ensure that I have fixed all issues first! 

## CI / CD
I keep this simple. The `main/master` branch is always the latest production version. Everything else is development (for the most part - look at `gh-pages` branch to see what I am talking about).
When I want to release a new version for production, I have to create a `Pull Request` and all tests must pass before I can merge (see `test.yml` in workflows). I run these tests via [Github Actions](https://github.com/features/actions).
If everything checks, then I can merge the branch. On `push/merge` of the `development` branch to the `main/master` branch, 
it will run another [Github Action](https://github.com/features/actions) called `release.yml` to build the production-build from Next.JS. 
It will then push the build to the `gh-pages` branch. From there, [Github Pages](https://pages.github.com) will read the statically built website from that branch.
I used [Github Pages](https://pages.github.com) because it's free and simple 😜.

 <br/>
 <br/>
 <br/>
 <br/>

#### General Thoughts to maybe write about.
- <s> Used Enzyme to be able to shallow create and easily simulate mouse over events
- Used Jest for the testing framework
- Used enzyme-to-json for easy snapshot testing
- Used Storybook to easily create uncoupled components
- Used next.JS for creating a FAST statically generated website
- Used Github actions for CI/CD
- Talk about CSS.module styling `skill.module.css`
- Used JSON file format for (projectSkills.JSON)
- Used pre-commit
</s>
  