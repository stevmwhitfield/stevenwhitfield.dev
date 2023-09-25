import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/solid/ChatBubbleLeftEllipsisIcon";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto flex flex-col items-center text-center">
      <h2 className="font-medium text-3xl mb-6 xl:text-4xl">Get In Touch</h2>
      <p className="mb-8">{"I'll"} do my best to reply within 24 hours.</p>
      <Link
        href={"mailto:stevmwhitfield@gmail.com"}
        className="flex gap-2 items-center py-3 px-6 bg-green rounded-full text-background hover:no-underline"
      >
        <span>{"Say Hello"}</span>
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
      </Link>
    </section>
  );
};

export default Contact;
