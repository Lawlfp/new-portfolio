import Header from "./Header";
import './Contact.css';

function Contact(){
    return(
        <div className='flex flex-col   min-h-screen w-full bg-black '>
            <Header/>

            <div className=" bg-black text-white flex  justify-center ">
            <div className="w-full max-w-2xl lg:max-w-5xl flex flex-col ">
        

            <span
              className="fade-down text-2xl md:text-4xl text-white text-center underline decoration-4 underline-offset-10"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              Contact
            </span>

            <span className="fade-down text-[#B1B2B5] text-sm mx-auto text-center w-[80%] h-auto mt-[2vh]  md:mt-[3vh]">
              Open to collaborations, project inquiries, and interesting conversations.
              I typically respond within 24–48 hours.
            </span>


        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-1 lg:gap-8 mt-5 ">

          {/* Email */}
          <a
            href="mailto:christianjobtrio@gmail.com"
            className="fade-down  w-[80%]  mx-auto flex items-center gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-lg 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L13.03 12.7c-.64.4-1.41.4-2.06 0L2 7" />
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Email</span>
              <span className="text-sm md:text-base text-white">christianjobtrio@gmail.com</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Lawlfp"
            target="_blank"
            style={{ animationDelay: "150ms" }}
            className="fade-down w-[80%] mx-auto flex items-center gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-lg 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                -.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997 
                .108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                0-1.31.465-2.382 1.235-3.22-.135-.303-.54-1.52.105-3.176 
                0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404 
                c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23 
                .645 1.656.24 2.873.12 3.176.765.838 1.23 1.91 1.23 3.22 
                0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 
                0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 
                4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">GitHub</span>
              <span className="text-sm md:text-base text-white">@lawlfp</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/christian-job-trio-9886a4297/"
            target="_blank"
            style={{ animationDelay: "300ms" }}
            className="fade-down w-[80%] mx-auto flex items-center gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-lg 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
                        -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
                        c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 
                        2.37 4.267 5.455v6.286zM5.337 
                        7.433c-1.144 0-2.063-.926-2.063-2.065 
                        0-1.138.92-2.063 2.063-2.063 1.14 0 
                        2.064.925 2.064 2.063 0 1.139-.925 
                        2.065-2.064 2.065zm1.782 
                        13.019H3.555V9h3.564v11.452zM22.225 
                        0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                        23.227.792 24 1.771 24h20.451C23.2 24 24 
                        23.227 24 22.271V1.729C24 .774 23.2 0 
                        22.222 0h.003z" />
                        </svg>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">LinkedIn</span>
              <span className="text-sm md:text-base text-white">Christian Job Trio</span>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+639193742540"
            style={{ animationDelay: "450ms" }}
            className="fade-down w-[80%] mx-auto flex items-center gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-lg 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 
                19.8 19.8 0 01-8.63-3.07 
                19.5 19.5 0 01-6-6 
                19.8 19.8 0 01-3.07-8.67 
                2 2 0 012-2h3a2 2 0 012 1.72 
                12.8 12.8 0 00.7 2.81 
                2 2 0 01-.45 2.11L8.1 9.9a16 16 0 006 6l1.27-1.27 
                a2 2 0 012.11-.45 
                12.8 12.8 0 002.81.7 
                A2 2 0 0122 16.92z" />
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Phone</span>
              <span className="text-sm md:text-base text-white">+639193742540</span>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/triochristianjob"
            target="_blank"
            style={{ animationDelay: "600ms" }}
            className="fade-up w-[80%] mx-auto flex items-center gap-4 p-4 md:p-5 bg-white/[0.03] border border-white/10 rounded-lg 
                       hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-0.5 
                       transition-all duration-300"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 
                24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413 
                c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918 
                c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116 
                C23.407 24 24 23.406 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
            </svg>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Facebook</span>
              <span className="text-sm md:text-base text-white">triochristianjob</span>
            </div>
          </a>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Contact;