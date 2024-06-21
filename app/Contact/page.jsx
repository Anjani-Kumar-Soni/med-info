"use client";
import React, { useState } from "react";
// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";

const Page = () => {
  const [heading, setHeading] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transporter = nodemailer.createTransport({
      // host: "smtp.forwardemail.net",
      host: "sandbox.smtp.mailtrap.io",
      // port: 465,
      port: 2525,
      secure: true,
      auth: {
        user: "c3a78f104c2878",
        pass: "b0c9c27684312a",
      },
    });

    // const emailHtml = render(<Email url="https://example.com" />);

    const options = {
      from: "<c3a78f104c2878>",
      to: "mobigency77@gmail.com",
      subject: "hello world",
      // html: emailHtml,
    };

    await transporter.sendMail(options);
  };
  return (
    <div className="grid place-items-center h-screen bg-slate-600">
      <div className="p-3 bg-white max-w-md w-full rounded-lg border border-t-2 border-primary">
        <h1 className="font-bold text-xl my-4 text-center text-gray-600">
          Any doubt? Contact us
        </h1>
        <form>
          <div className="px-4">
            <div className="mb-4">
              <label
                htmlFor="heading"
                className="leading-7 text-sm text-gray-600"
              >
                Subject
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={heading}
                placeholder="Write your query title here"
                onChange={(e) => setHeading(e.target.value)}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="desc" className="leading-7 text-sm text-gray-600">
                Query
              </label>
              <textarea
                id="desc"
                name="desc"
                placeholder="Write your query description here"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full border-b-4 bg-white rounded border border-third focus:border-second focus:ring-2 focus:ring-third text-base outline-none text-second py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="w-full bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
