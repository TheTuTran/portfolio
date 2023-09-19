"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CreateMessagePayload } from "@/lib/validators/message";
import { useToast } from "@/hooks/useToast";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const { mutate: createMessage, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateMessagePayload = {
        name: name,
        email: email,
        text: message,
      };

      const { data } = await axios.post("/api/contact", payload);
      return data as string;
    },
    onError: () => {
      toast({
        title: "There was an error.",
        description: "Could not create message.",
        variant: "destructive",
      });
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description:
          "Thanks for the message, I'll get right back once I see the message.",
        variant: "default",
      });
      setName("");
      setEmail("");
      setMessage("");
    },
  });

  return (
    <div className="flex flex-col items-center shadow-md rounded-md ">
      <h1 className="text-3xl font-bold mb-4 text-center ">Contact Me</h1>
      <p className="text-lg mb-4 text-center">
        Have a project in mind or just want to say hi? Feel free to reach out!
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createMessage();
        }}
        className="mt-4 w-[80vw]"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2 ">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring bg-slate-300 focus:border-blue-300 text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium  mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring bg-slate-300 focus:border-blue-300 text-gray-800"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-mediummb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring bg-slate-300 focus:border-blue-300 text-gray-800"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 ${
              isLoading && "disabled"
            }`}
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-6 text-center bg-gray-700 py-4 px-6 flex items-center justify-center gap-4 rounded-md">
        <p>Other ways to get in touch: </p>
        <Link href="mailto:tutran.stl@gmail.com">
          <AiTwotoneMail size={40} />
        </Link>
        <Link href="https://www.linkedin.com/in/tutrancsci/">
          <AiFillLinkedin size={40} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
