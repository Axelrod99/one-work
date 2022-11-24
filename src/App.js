import { useState } from 'react'
import '../src/App.css'
import Header from './component/Header/index'
import hiring from './assets/images/hiring.png'
import first from './assets/icons/first.png'
import star from './assets/icons/Star.png'
import iicon from './assets/icons/iicon.png'
import grid1 from './assets/icons/grid1.png'
import blog1 from './assets/images/blog1.png'
import blog2 from './assets/images/blog2.png'
import blog3 from './assets/images/blog3.png'
import Footer from './component/Footer/index'
import x from './assets/icons/x.png'
import blue_facebook from './assets/icons/blue_facebook.png'
import blue_linkedin from './assets/icons/blue_linkedin.png'
import google from './assets/icons/google.png'
import metaMask from './assets/icons/metaMask.png'
import { useNavigate } from 'react-router'



function App() {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('bottles');

    if( email ==='') {
      console.log('error')
    }if(pass==='') {
      console.log('error')
    }
    else{
      navigate(
       `/Dashboard` 
      )
    }


  }


  const [activeTab, setActiveTab] = useState("freelance");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);


  return (
    <div>
      <Header 
        onClick={()=>setShowLoginModal(true)}
        onSignin={()=>setShowSigninModal(true)}
      />



      <div className='flex xo:flex-col sm:flex-row w-full p-10 h-[100vh] justify-center xo:gap-5 md:gap-0' id='aaa'>
        <div className='w-full flex flex-col justify-center'>
          <p className='font-bold text-2xl md:text-3xl'>Be your own boss</p>
          <p className='font-semibold'>Work from anywhere and earn crypto. One-Work is a global marketplace where you can find interesting and profitable gigs to do.</p>
          <div className='flex gap-2 my-4'>
            <button className='h-9 items-center bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded flex whitespace-nowrap'>Find Jobs</button>
            <button className=' bg-purple-600 h-9 items-center hover:bg-transparent hover:text-purple-500  text-white font-semibold hover:border-purple-600 py-2 px-4 border border-purple-500 hover:border-transparent rounded flex whitespace-nowrap'>Find Talents</button>
          </div>
        </div>

        <div className='xo:w-full md:w-full flex justify-center items-center'>
          <img alt='hiring' className='xo:h-60 md:h-60 flex' src={hiring} />
        </div>
      </div>


      <section className='bg-[#B5AFFF29] grid'>
        <div className='py-10'>
          <div className='flex justify-between px-14'>
            <p className='font-bold'>New Gigs</p>
            <p className='text-xs flex items-center font-semibold text-[#7C60FF]'>Show all gigs</p>
          </div>
          <p className='font-semibold px-14'><span className='text-[#7C60FF] font-semibold'>22,765</span> available on the platform</p>

          <div className='justify-items-center pt-5 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bx:grid-cols-2 gap-4 px-10'>
            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img alt='first' className='xo:h-7 sm:h-10 mt-1' src={first} />
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img alt='star' className='mt-1' src={star} /></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs xo:my-2 sm:my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='text-xs mb-1 xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='text-xs mb-1 bg-slate-300 xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='xo:text-[11px] sm:text-xs bg-slate-300 xo:w-40 sm:w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='xo:text-md sm:font-semibold'>$800</p>
                <button className=' sm:h-6 text-sm bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img alt='first' className='xo:h-7 sm:h-10 mt-1' src={first} />
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img alt='star' className='mt-1' src={star} /></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs xo:my-2 sm:my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='mb-1 text-xs xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='mb-1 text-xs bg-slate-300 xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='xo:text-[11px] sm:text-xs bg-slate-300 xo:w-40 sm:w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='xo:text-md sm:font-semibold'>$800</p>
                <button className=' sm:h-6 text-sm bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img alt='first' className='xo:h-7 sm:h-10 mt-1' src={first} />
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img alt='star' className='mt-1' src={star} /></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs xo:my-2 sm:my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='mb-1 text-xs xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='mb-1 text-xs bg-slate-300 xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='xo:text-[11px] sm:text-xs bg-slate-300 xo:w-40 sm:w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='xo:text-md sm:font-semibold'>$800</p>
                <button className=' sm:h-6 text-sm bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>

            <div className='h-60 w-48 bg-white rounded-md p-2'>
              <div className='flex gap-2'>
                <img alt='first' className='xo:h-7 sm:h-10 mt-1' src={first} />
                <div>
                  <p className='text-sm font-semibold'>Guy Hawkins</p>
                  <div className='flex text-sm'><p className='flex'>5<span><img alt='star' className='mt-1' src={star} /></span>(8)</p></div>
                </div>
              </div>

              <p className='text-xs xo:my-2 sm:my-5 font-semibold'>I will fork Pancake swap and Uniswap on various networks.</p>

              <div className='flex flex-col'>
                <button className='mb-1 text-xs xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Solidity</button>
                <button className='mb-1 text-xs bg-slate-300 xo:w-16 sm:w-20 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Javascript</button>
                <button className='xo:text-[11px] sm:text-xs bg-slate-300 xo:w-40 sm:w-44 border-2 border-purple-300 hover:border-transparent rounded  bg-transparent hover:bg-purple-600 text-purple-700 font-semibold hover:text-white'>Smart Contract Development</button>
              </div>

              <div className='flex justify-between mt-4'>
                <p className='xo:text-md sm:font-semibold'>$800</p>
                <button className=' sm:h-6 text-sm bg-purple-600 hover:bg-purple-600 text-white font-semibold hover:text-white border border-purple-500 hover:border-transparent rounded'>More info</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className='hidden sm:flex justify-around py-10'>
          <div>
            <p className='font-bold md:text-3xl xs:text-lg'>New Crypto Jobs</p>
            <p className='md:text-xl xs:text-sm'><span className='text-[#7C60FF]'>22,765</span> available on the platform</p>
          </div>

          <div className='bg-[#D9D9D9] h-10 w-60 rounded-3xl flex -mt-3 -ml-10'>

            <button
              onClick={() => setActiveTab("freelance")}

              className={`${activeTab === "freelance" ? "bg-white border-2 border-purple-100" : ""} w-32 h-10 rounded-3xl`}>
              <p className='h-10 flex  rounded-3xl justify-center items-center text-xs font-semibold'>Freelance</p>
            </button>



            <button

              onClick={() => setActiveTab("fulltime")}
              className={`${activeTab === "fulltime" ? "bg-white border-2 border-purple-100" : ""} w-32 h-10 rounded-3xl`}>

              <p className='ml-5 h-10 flex items-center text-xs font-semibold'>Fulltime</p>

            </button>
          </div>

          <p className='text-xs flex items-center text-purple-600'>Show all jobs</p>
        </div>

        <div className='py-5 grid sm:px-10 gap-3 lg:grid-cols-2 justify-items-center'>

          <div className='so:w-[320px] xo:w-[350px] sm:h-[340px] sm:w-[380px] bg-[#F3F2FF] rounded-md p-2'>

            <div className='flex so:flex-col xo:flex-row w-full my-5 px-5 justify-start'>

              <div className='w-[50%]'>
                {activeTab === "freelance" ? <img alt='icon' className='so:h-10 xo:h-14' src={iicon} /> : null}
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                    <p className='my-2 font-semibold xo: so:text-sm xo:text-lg'>mini crypto exchange web by laravel</p>
                    <p className='text-xs font-semibold'>Hiring Freelancer</p>
                  </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>


          </div>


          <div className='so:w-[320px] xo:w-[350px] sm:h-[340px] sm:w-[380px] bg-[#F3F2FF] rounded-md p-2'>

            <div className='flex so:flex-col xo:flex-row w-full my-5 px-5 justify-start'>

              <div className='w-[50%]'>
                <img alt='icon' className='so:h-10 xo:h-14' src={iicon} />
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                    <p className='my-2 font-semibold xo: so:text-sm xo:text-lg'>mini crypto exchange web by laravel</p>
                    <p className='text-xs font-semibold'>Hiring Freelancer</p>
                  </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>


          </div>


          <div className='so:w-[320px] xo:w-[350px] sm:h-[340px] sm:w-[380px] bg-[#F3F2FF] rounded-md p-2'>

            <div className='flex so:flex-col xo:flex-row w-full my-5 px-5 justify-start'>

              <div className='w-[50%]'>
                <img alt='icon' className='so:h-10 xo:h-14' src={iicon} />
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                    <p className='my-2 font-semibold xo: so:text-sm xo:text-lg'>mini crypto exchange web by laravel</p>
                    <p className='text-xs font-semibold'>Hiring Freelancer</p>
                  </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

          </div>


          <div className='so:w-[320px] xo:w-[350px] sm:h-[340px] sm:w-[380px] bg-[#F3F2FF] rounded-md p-2'>

            <div className='flex so:flex-col xo:flex-row w-full my-5 px-5 justify-start'>

              <div className='w-[50%]'>
                <img alt='icon' className='so:h-10 xo:h-14' src={iicon} />
              </div>

              <div className='flex flex-col'>
                <div className='flex flex-col'>
                  <div className='px-3'>
                    <p className='my-2 font-semibold xo: so:text-sm xo:text-lg'>mini crypto exchange web by laravel</p>
                    <p className='text-xs font-semibold'>Hiring Freelancer</p>
                  </div>


                  <p className='text-xs my-5'>I have a website where I am facing concurrency issues, I already have identified the specific code where there is the issue but I need that someone can explain me why the.........</p>

                  <div className='flex gap-2 my-4'>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Web, Mobile Software Development</button>
                    <button className='border-2 border-purple-300 text-xs text-[purple] bg-transparent p-1 rounded-md'>Crypto</button>
                  </div>
                </div>

              </div>
            </div>

            <div className='flex justify-between px-1'>
              <p className='text-lg p-1 font-semibold'>$800</p>
              <button className='border-2 border-purple-300 text-xs text-[white] bg-purple-300 p-1 rounded-md w-20'>More info</button>
            </div>

          </div>
        </div>


        <div className='px-10 py-2 w-full'>

          <p className='px-10'>How can you find work?</p>

          <div className='grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center'>
            <div className='w-60 py-7'>
              <img alt='grid' className='h-14' src={grid1} />
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='w-60 py-7'>
              <img alt='grid' className='h-14' src={grid1} />
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='w-60 py-7'>
              <img alt='grid' className='h-14' src={grid1} />
              <p className='pt-1'>Create account</p>
              <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

        </div>

      </section>


      <section className='p-10 bg-[#7C60FF]'>
        <div className='flex justify-between'>
          <p className='text-3xl font-semibold text-white'>Skills</p>
          <p className='text-sm flex items-center text-white'>Show all gigs</p>
        </div>

        <p className='text-white'>Hire professionals with a wide range of skills, or offer your own in-demand expertise.</p>

        <div>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>IT & NETWORKING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>DATA SCIENCE & ANALYTICS</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ACCOUNTING & CONSULTING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>SALES & MARKETING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>TRANSLATION</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>CUSTOMER SERVICE</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>GAMING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ENGINEERING & ARCHITECTURE</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>WRITING</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>ADMIN SUPPORT</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>WEB, MOBILE & SOFTWARE DEV</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>LEGAL</button>
          <button className='text-xs bg-white p-2 rounded-lg m-2'>DESIGN & CREATIVE</button>
        </div>
      </section>


      <section className='p-10'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Blog</p>
          <p className='text-xs flex items-center'>Show more articles</p>
        </div>

        <div className='flex so:flex-col md:flex-row py-10 justify-around items-center'>
          <div className='w-[270px] h-[410px] '>
            <img alt='blog3' className='p-4' src={blog3} />

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs border-b-2 border-indigo-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          <div className='w-[270px] h-[410px]'>
            <img alt='blog1' className='p-4' src={blog1} />

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs border-b-2 border-indigo-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          <div className='w-[270px] h-[410px] sm:mt-10 mt-7 md:mt-14'>
            <img alt='blog2' className='p-4' src={blog2} />

            <p className='text-xs py-3'>Aug 16, 2022</p>
            <p className='text-sm font-semibold pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className='text-xs  border-b-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies scelerisque nibh elementum nibh dui commodo neque, adipiscing......</p>
          </div>

          {/* <img alt='photo' className='' src={blog2}/>
          <img alt='photo' className='' src={blog3}/> */}
        </div>
      </section>


        {showLoginModal && <>
          <form onSubmit={handlesubmit} className='w-80 h-96 bg-white rounded-xl border-2 border-purple-600 fixed m-auto top-0 bottom-0 right-0 left-0 z-[999]'>

            <button
              onClick={()=>setShowLoginModal(false)}
              className='flex justify-end p-2 w-fit'>
              <img alt='x' className='flex' src={x} />
            </button>

            <div className='flex justify-center'>
              <p className='text-3xl font-bold my-2'>Login</p>
            </div>

            <div className='w-full flex flex-col items-center gap-2'>
              <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} type={'email'} className='border-2 w-[85%] h-11 rounded-md border-purple-500'></input>
              <input onChange={(e) => setPass(e.target.value)} placeholder='Password' value={pass} type={'password'} className='border-2 border-purple-500 w-[85%] h-11 rounded-md'></input>
            </div>

            <div className='w-full'>
              <p className='px-7 text-slate-400'>Forgot Password?</p>
            </div>

            <div className='flex justify-center'>
              <button type='submit' className='border-2 border-purple-300 text-sm font-bold text-[purple] bg-transparent p-1 rounded-md px-4'>Login</button>
            </div>

            <div className='flex justify-center gap-2 py-2'>
              <a href='#'><img alt='fb' className='flex' src={blue_facebook} /></a>
              <a href='#'><img alt='linked_in' className='flex' src={blue_linkedin} /></a>
              <a href='#'><img alt='google' className='flex' src={google} /></a>
              <a href='#'><img alt='metamask' className='flex' src={metaMask} /></a>
            </div>

          </form>



          <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
        </>}



        {showSigninModal && <>
          <form className='w-80 h-96 bg-white rounded-xl border-2 border-purple-600 fixed m-auto top-0 bottom-0 right-0 left-0 z-[999]'>

            <button
              onClick={()=>setShowSigninModal(false)}
              className='flex justify-end p-2 w-fit'>
              <img alt='x' className='flex' src={x} />
            </button>

            <div className='flex justify-center'>
              <p className='text-3xl font-bold my-2'>Signup</p>
            </div>

            <div className='w-full flex flex-col items-center gap-2'>
              <input placeholder='Email' className='border-2 w-[85%] h-11 rounded-md border-purple-500'></input>
              <input placeholder='Password' type={'password'} className='border-2 border-purple-500 w-[85%] h-11 rounded-md'></input>
              <input placeholder='Confirm Password' type={'password'} className='border-2 border-purple-500 w-[85%] h-11 rounded-md'></input>
            </div>

            <div className='flex justify-center py-1'>
              <button className='border-2 border-purple-300 text-sm font-bold text-[purple] bg-transparent p-1 rounded-md px-4'>Signup</button>
            </div>

            <div className='flex justify-center gap-2 py-2'>
              <a href='#'><img alt='fb' className='flex' src={blue_facebook} /></a>
              <a href='#'><img alt='linkedin' className='flex' src={blue_linkedin} /></a>
              <a href='#'><img alt='google' className='flex' src={google} /></a>
              <a href='#'><img alt='metamask' className='flex' src={metaMask} /></a>
            </div>

          </form>

          <div className='fixed w-screen h-screen bg-[#00000055] top-0 left-0' />
        </>}



      
      <Footer />



    </div>
  );
}

export default App;
