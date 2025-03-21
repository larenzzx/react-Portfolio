import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const InputBox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill out all fields before sending!",
      });
      return;
    }

    emailjs
      .sendForm("service_vyz19ms", "template_gv1chvm", form.current, {
        publicKey: "abQOvAcfydX4GgF5f",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            icon: "success",
            title: "Message sent",
            text: "Thank you for reaching out to me, will get back to you soon!",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Failed to Send!",
            text: "Something went wrong. Please try again.",
          });
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 rounded-2xl bg-gray-800 bg-opacity-10 p-4 text-center shadow-lg shadow-[rgba(255,255,255,0.1)] backdrop-blur-md"
    >
      <div className="grid gap-y-4 sm:grid-cols-2 sm:justify-center sm:gap-x-2 md:gap-x-4">
        <input
          type="text"
          className="input input-bordered w-full bg-gray-400 bg-opacity-10 bg-clip-padding"
          placeholder="Name"
          name="from_name"
          required
        />
        <input
          type="text"
          className="input input-bordered w-full bg-gray-400 bg-opacity-10 bg-clip-padding"
          name="from_email"
          placeholder="Email"
          required
        />
      </div>

      <textarea
        className="textarea textarea-bordered min-h-32 w-full bg-gray-400 bg-opacity-10 bg-clip-padding sm:min-h-40 md:min-h-48"
        name="message"
        placeholder="Write your message here"
        required
      ></textarea>

      <input
        type="submit"
        className="btn btn-primary w-full"
        value="Send message"
      />
    </form>
  );
};
