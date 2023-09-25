import Skill from "../Skill";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto flex flex-col items-center text-center">
      <h2 className="font-medium text-3xl mb-6 xl:text-4xl">Current Tools</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
        <Skill icon={"devicon-html5-plain colored"} label={"HTML5"} />
        <Skill icon={"devicon-css3-plain colored"} label={"CSS3"} />
        <Skill icon={"devicon-javascript-plain colored"} label={"JavaScript"} />
        <Skill icon={"devicon-typescript-plain colored"} label={"TypeScript"} />
        <Skill icon={"devicon-react-plain colored"} label={"React"} />
        <Skill icon={"devicon-nextjs-plain colored"} label={"Next.js"} />
        <Skill icon={"devicon-tailwindcss-plain colored"} label={"Tailwind CSS"} />
        <Skill icon={"devicon-figma-plain colored"} label={"Figma"} />
        <Skill icon={"devicon-nodejs-plain colored"} label={"Node.js"} />
        <Skill icon={"devicon-csharp-plain colored"} label={"C#"} />
        <Skill icon={"devicon-sqlite-plain colored"} label={"SQL"} />
        <Skill icon={"devicon-mongodb-plain colored"} label={"NoSQL"} />
        <Skill icon={"devicon-git-plain colored"} label={"Git/GitHub"} />
        <Skill icon={"devicon-vscode-plain colored"} label={"VS Code"} />
        <Skill icon={"devicon-npm-original-wordmark colored"} label={"NPM"} />
        <Skill icon={"devicon-eslint-plain colored"} label={"ESLint"} />
      </div>
    </section>
  );
};

export default Skills;
