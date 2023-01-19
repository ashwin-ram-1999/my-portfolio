import React, { useState } from "react";

function EmailMe() {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e, inp) => {
    setEmailData({ ...emailData, [inp]: e.target.value });
  };

  const sendEmail = () => {
    alert(JSON.stringify(emailData, null, 2));
  };

  return (
    <div>
      <div
        className="w-3/4 border-2 border-solid  m-5"
        style={{ minHeight: "80vh" }}
      >
        <div className="m-4 text-2xl text-blue-900">Email Me!</div>
        <div className="border-2 border-solid p-4 m-4 flex flex-col mb-4">
          {Object.keys(emailData).map((inp) => {
            if (!inp.match("body")) {
              return (
                <>
                  <label className="ml-5 text-blue-800">
                    {inp.toLocaleUpperCase()}
                  </label>
                  <input
                    name={inp}
                    onChange={(e) => handleChange(e, inp)}
                    className="border-2 border-solid border-gray-300 m-4 rounded h-10"
                    key={inp}
                  />
                </>
              );
            }
          })}
          <label className="ml-5 text-blue-800">BODY</label>
          <textarea
            name="body"
            value={emailData.body}
            onChange={(e) => handleChange(e, e.target.name)}
            className="border-2 border-solid border-gray-300 m-4 rounded-md"
            style={{ padding: "0 0 400px 0", wordBreak: "break-word" }}
          />
          <button
            className="border-2 border-solid block bg-blue-300 hover:bg-blue-400 text-black uppercase text-lg mx-auto p-4 rounded-md"
            onClick={() => sendEmail()}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailMe;
