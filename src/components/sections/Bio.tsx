import Link from "next/link";

const Bio = () => {
  return (
    <section id="bio" className="container mx-auto flex flex-col items-center text-center">
      <h2 className="font-medium text-3xl mb-4 xl:text-4xl">{"Hi, I'm Steven."}</h2>
      <p className="mb-6">
        A recent computer science graduate from Florida Polytechnic University - currently seeking opportunities to join
        a team and contribute my technical expertise to innovative projects that solve real-world problems.
      </p>
      <div className="flex gap-x-4">
        <Link
          href={"https://www.linkedin.com/in/stevenmwhitfield/"}
          className="flex items-center gap-2 hover:no-underline [&>span]:hover:underline"
        >
          <i className="devicon-linkedin-plain text-2xl" />
          <span>LinkedIn</span>
        </Link>
        <div>&middot;</div>
        <Link
          href={"https://github.com/stevmwhitfield"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:no-underline [&>span]:hover:underline"
        >
          <i className="devicon-github-plain text-2xl" />
          <span>GitHub</span>
        </Link>
      </div>
    </section>
  );
};

export default Bio;
