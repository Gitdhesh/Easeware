function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-green-400/10">
      <div className="max-w-7xl mx-auto px-6 py-10
                flex items-center justify-center">


    

        {/* ICON LINKS */}
        <div className="flex gap-6">

          {/* GITHUB */}
<a
  href="https://github.com/Gitdhesh"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-green-400 transition"
  aria-label="GitHub"
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.6-.7.2-.7.6-1.1.9-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.2a11.4 11.4 0 013 0C15.9 5.5 17 5.8 17 5.8c.6 1.6.2 2.7.1 3 .7.8 1.1 1.9 1.1 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.9 1 .9 2v3c0 .3.2.7.8.6A11.5 11.5 0 0023.5 12C23.5 5.7 18.3.5 12 .5z"/>
  </svg>
</a>


         

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/siddhesh-kulkarni-1464402a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h4v12H3zM9 8.98h3.8v1.6h.1c.5-1 1.8-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7v6.7h-4v-5.9c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2v6h-4z"/>
            </svg>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:yourmail@example.com"
            className="text-gray-400 hover:text-green-400 transition"
            aria-label="Email"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4h20v16H2zm10 7L3.5 6h17z"/>
            </svg>
          </a>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-xs pb-4">
        © {new Date().getFullYear()} EASEWARE. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
