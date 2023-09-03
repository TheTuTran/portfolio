import { FC } from "react";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg mb-4">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>
      <a
        href="mailto:your.email@example.com"
        className="text-blue-500 underline"
      >
        your.email@example.com
      </a>
    </section>
  );
};

export default Contact;
