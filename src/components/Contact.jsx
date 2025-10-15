// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  const [status, setStatus] = React.useState("idle"); // idle | success | error
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    const el = document.getElementById("page_url");
    if (el) el.value = window.location.href;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const url = form.action;
    const formData = new FormData(form);

    try {
      // Apps Script often lacks CORS headers; "no-cors" + optimistic success.
      await fetch(url, { method: "POST", body: formData, mode: "no-cors" });
      setStatus("success");        // show the alert
      form.reset();                // clear the form
      // NOTE: do NOT scroll here; wait until user closes the alert
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong submitting the form. Please try again or email Joel directly.");
      // Do not scroll yet—let user see the error where they are
    }
  };

  const handleCloseAlert = () => {
    // First scroll to the very top so they see the page header again
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Then redirect after a short delay (lets the scroll animate)
    setTimeout(() => {
      window.location.href = "https://joeljcoleman.com";
    }, 600);
  };

  return (
    <section id="contact" className="section bg-section">
      <div className="container-narrow min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="w-full max-w-3xl mx-auto">

          {/* Success / Error Alert */}
          {status === "success" && (
            <div
              role="alert"
              aria-live="polite"
              className="mb-6 rounded-xl border border-green-500/40 bg-green-500/10 p-4 text-green-100 flex items-start justify-between gap-4"
            >
              <p className="text-sm">
                <span className="font-semibold">Thanks for your submission,</span> we'll get back to you as soon as possible!
              </p>
              <button
                type="button"
                onClick={handleCloseAlert}
                className="shrink-0 rounded-lg px-3 py-1.5 bg-green-600/20 hover:bg-green-600/30 focus:outline-none focus:ring-2 focus:ring-green-400"
                aria-label="Close and go to joeljcoleman.com"
                title="Close"
              >
                Close
              </button>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-100"
            >
              <p className="text-sm">{errorMsg}</p>
            </div>
          )}

          <div className="mb-6 rounded-xl border border-card-border bg-card p-4 text-center text-on-card">
            <p>
              Joel typically responds within <span className="font-semibold">three business days</span> to
              schedule a <span className="font-semibold">complimentary consultation</span>.
            </p>
          </div>

          <div className="rounded-2xl border border-card-border bg-card p-6 md:p-8 shadow-soft text-on-card">
            <h1 className="text-2xl font-semibold">Get in touch</h1>

            <form
              name="contact"
              method="POST"
              action="https://script.google.com/macros/s/AKfycbyhwjVfnDEGGy1d8A8TSunw0kF5o4W83uizcVwbFe4HBAWTfVK_p_CyqPWwEprzA1J0WQ/exec"
              className="mt-6 space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              {/* Hidden fields */}
              <input type="hidden" name="thankyou" value="https://joeljcoleman.com" />
              <input type="hidden" name="page_url" id="page_url" value="" />
              <input type="hidden" name="secret" value="jgfsfsdhfdshfdshfds" />
              <input type="hidden" name="ajax" value="1" />

              {/* Row: Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-on-card">
                    Name <span className="text-section">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-1 block w-full rounded-xl border border-field-border bg-card p-3 text-on-card placeholder-placeholder focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-on-card">
                    Email <span className="text-section">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@district.org"
                    className="mt-1 block w-full rounded-xl border border-field-border bg-card p-3 text-on-card placeholder-placeholder focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60"
                  />
                </div>
              </div>

              {/* Row: Organization / Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="org" className="block text-sm font-medium text-on-card">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="org"
                    required
                    placeholder="District / School / Org"
                    className="mt-1 block w-full rounded-xl border border-field-border bg-card p-3 text-on-card placeholder-placeholder focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-on-card">
                    Role (optional)
                  </label>
                  <input
                    id="role"
                    name="role"
                    placeholder="Superintendent, Board Chair, Principal…"
                    className="mt-1 block w-full rounded-xl border border-field-border bg-card p-3 text-on-card placeholder-placeholder focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-on-card">
                  Message <span className="text-section">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Share your priorities, timeline, and any context you'd like Joel to review."
                  className="mt-1 block w-full rounded-xl border border-field-border bg-card p-3 text-on-card placeholder-placeholder focus:border-brand/70 focus:outline-none focus:ring-2 focus:ring-brand/60"
                />
              </div>

              <button
                type="submit"
                className="btn w-full bg-section text-ink hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-section focus:ring-offset-2 focus:ring-offset-card"
              >
                Send message
              </button>

              <p className="text-xs text-on-card-muted">
                Prefer email?{" "}
                <a className="underline text-section hover:opacity-90" href="mailto:joeljcoleman@gmail.com">
                  joeljcoleman@gmail.com
                </a>
              </p>
            </form>
          </div> 
        </div>
      </div>
    </section>
  );
}
