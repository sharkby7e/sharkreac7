import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="text-secondary text-4xl text-center">Contact Me!</h1>
      <form>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Basil Keating "
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              class="input input-bordered mt-1 block w-full
            invalid:border-pink-500 invalid:text-pink-600"
              type="email"
              placeholder="email@website.com"
              // class="input input-bordered"
            />
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Message</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Say something nice"
              ></textarea>
            </div>

            <button type="submit" class="btn gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Send Love!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
