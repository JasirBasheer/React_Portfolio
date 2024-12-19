const Hero = () => {
  return (
    <div className="w-full ">
      <div className="sm:pt-14 pt-6 pb-5">
        <img src="https://dhravya.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-banner.25fc5987.png&w=1920&q=75" className='rounded-2xl w-full' alt="" />
      </div>

      <h4 className='text-[1.3rem] font-poppins font-normal'>Hi, I'm <span className="font-poppins text-[#0EA5E9]">Jasir Basheer</span></h4>

      <h1 className='sm:text-[3rem] text-[2rem] font-custom font-medium'>
        I make <span className='text-[#16A34A]'>full-stack</span> products that people <span className="text-[#F472B6]">love.</span>
      </h1>        
      <p className='mt-4 font-poppins font-normal text-[rgb(148,163,184)] text-[1.1rem]'>Developer, 2x acquired Founder, Indie Hacker, OSS Contributor, Guitarist and Student. I play read, write and travel for fun.</p>

    </div>

  )
}

export default Hero