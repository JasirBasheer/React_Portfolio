import '../styles/Home.css'
import Nav from "../components/Nav"
import SignGuestBook from '../components/SignGuestBook'
import Hero from '../components/Hero'
import NewsLetter from '../components/NewsLetter'
import SocialMedias from '../components/SocialMedias'

const Home = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100 dark:bg-[rgb(15,23,42)]">
      <div className="w-screen h-screen md:max-w-[85rem] relative grid grid-cols-12">
        <Nav />
        <div className="sm:col-span-10 col-span-12 bg-gray-100 dark:bg-[rgb(15,23,42)] sm:p-4 overflow-y-auto scrollbar-none">
          <SignGuestBook />
          <div className="grid grid-cols-12 sm:h-screen ">
            <div className="lg:col-span-8 col-span-12  sm:px-8 px-5">
              <Hero />
            </div>
            <div className="col-span-12 grid grid-cols-12 sm:px-8 px-5">
              <div className="md:col-span-8 col-span-12 grid grid-cols-12 ">
                <div className="sm:col-span-7 col-span-12  sm:h-[5rem] h-[rem] mt-11  flex items-center justify-start gap-6">
               <SocialMedias/>
                </div>

                <div className="col-span-12 grid grid-cols-12">
                  <div className="col-span-12 mt-3">
                    <p className='font-poppins font-normal text-[rgb(148,163,184)] ligth:text-[rgb(19,21,25)] text-[1.1rem]'>
                I also create content to inspire and help others get started with coding, and share my experiences as a developer and entrepreneur. With more than 20,000 followers on instagram, I have a small but growing community of developers. Check it out here - dhravya.dev
                      
                    </p>
                  </div>



                </div>
              </div>


              <div className="md:col-span-4 md:flex hidden justify-end ">
                <NewsLetter />
              </div>



            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Home