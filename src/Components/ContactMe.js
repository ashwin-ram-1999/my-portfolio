import React, { useRef } from "react";
import { resumeLink } from "../Constants/constants";
import emailjs from "emailjs-com";
function ContactMe() {
  const emailData = {
    from_name: "",
    from_email: "",
    subject: "",
    html_message: "",
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zet50dv",
        "template_dbwxqxg",
        form.current,
        "4phmAnua7oJF8YSkF"
      )
      .then(
        (result) => {
          alert("Email Sent Successfully!", JSON.stringify(emailData, null, 2));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="flex">
        <h1 className="font-sans text-5xl m-10">My Socials</h1>
      </div>
      <div className="border-2 border-solid" />
      <div className="flex w-full content-evenly">
        <div
          className="w-2/4 border-2 border-solid m-4"
          style={{ minHeight: "80vh" }}
        >
          <div className="m-4 text-2xl text-blue-900">Social Media</div>
          <div className="m-4">
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>
              <a href={resumeLink} target="_blank" download>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download My Resume!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-3/4 border-2 border-solid m-4"
          style={{ minHeight: "80vh" }}
        >
          <div className="m-4 text-2xl text-blue-900">Email Me!</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="border-2 border-solid p-4 m-4 flex flex-col mb-4">
              {Object.keys(emailData).map((inp) => {
                if (!inp.match("html_message")) {
                  return (
                    <>
                      <label className="ml-5 text-blue-800">
                        {inp.toLocaleUpperCase()}
                      </label>
                      <input
                        name={inp}
                        className="border-2 border-solid border-gray-300 m-4 rounded h-10"
                        key={inp}
                      />
                    </>
                  );
                }
              })}
              <label className="ml-5 text-blue-800">BODY</label>
              <textarea
                name="html_message"
                className="border-2 border-solid border-gray-300 m-4 rounded-md"
                style={{ padding: "0 0 400px 0", wordBreak: "break-word" }}
              />
              <button
                className="border-2 border-solid block bg-blue-300 hover:bg-blue-400 text-black uppercase text-lg mx-auto p-4 rounded-md"
                type="submit"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
