import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (data.success) {
      alert('Message submitted!')
      setForm({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      })
    } else {
      alert('Something went wrong')
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Server error')
  }
}


  return (
    <section className="min-h-screen bg-zinc-950 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-green-400">Us</span>
        </h1>
        <p className="text-gray-400 mb-16 max-w-xl">
          Have a question, idea, or collaboration in mind?
          Drop your details and we’ll get back to you.
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO PANEL */}
          <div className="relative p-8 rounded-2xl
                          bg-gradient-to-br from-zinc-900 to-zinc-950
                          border border-green-400/20">

            <div className="absolute left-0 top-8 h-20 w-1 bg-green-400" />

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-300 text-sm">
              <p><span className="text-green-400">Email:</span> yourmail@example.com</p>
              <p><span className="text-green-400">Phone:</span> +91 XXXXX XXXXX</p>
              <p><span className="text-green-400">Address:</span> Home / Office / Anywhere</p>
            </div>

            <div className="mt-8 flex gap-6 text-sm">

  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-400 transition"
  >
    LinkedIn
  </a>

  <a
    href="mailto:yourmail@example.com"
    className="text-gray-400 hover:text-green-400 transition"
  >
    Email
  </a>

</div>

          </div>

          {/* RIGHT FORM CARD */}
          <div className="relative p-8 rounded-2xl
                          bg-zinc-900 border border-green-400/30">

            {/* corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-green-400" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-green-400" />

            <h3 className="text-white text-xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800 text-white p-3 rounded outline-none
                           focus:ring-2 focus:ring-green-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800 text-white p-3 rounded outline-none
                           focus:ring-2 focus:ring-green-400"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-zinc-800 text-white p-3 rounded outline-none
                           focus:ring-2 focus:ring-green-400"
              />

              <input
                type="text"
                name="address"
                placeholder="Address (Home / Office)"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-zinc-800 text-white p-3 rounded outline-none
                           focus:ring-2 focus:ring-green-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800 text-white p-3 rounded outline-none
                           focus:ring-2 focus:ring-green-400"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-green-400 text-black
                           py-3 rounded font-semibold
                           hover:bg-green-300 transition"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
