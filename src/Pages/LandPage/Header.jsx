import React from 'react'
import styled from 'styled-components'
import { BsChevronDown } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import "./styles.css"
const Header = () => {

 
  return (
    <>
     <Container>
      <main className='flex flex-1 justify-between items-center bg-home-bg px-4 h-18  fixed-to-top max-w-7xl mx-auto -mt-[0.7rem] -pt-2 md:-mt-1 lg:mt-0 py-2 z-10' >
        <img src="Assets/Logo/TheHunt(bg).png" alt="The-Hunt" className='w-44 -ml-4  mt-2 cursor-pointer object-contain' />
        <section className='flex items-center space-x-4'>
        <nav className='text-nav-text lw:hidden lg:block'>
          <ul className='flex space-x-5 items-center' >           
           {[
              ['For Companies'],
              ['For Talents'],
              ['About'],
             
            ].map((link, index ) => {
              let classname = "flex space-x-2 items-center relative cursor-pointer";
              let absdiv = "absolute left-0 right-0 bottom-[12px]";
              let description;
              if (index === 1 ) {
                description = (
                  <div className='absolute -bottom-9 left-[400px] text-white flex gap-2 py-4 px-10 rounded-md desc-container opacity-0 pointer-events-none bg-home-bg'>
                    {[
                      ["How it works"],
                      ["Clients"],
                      ["Refer Companies"]
                    ].map((desc) => ( 
                      <>
                      <Link className='relative desc-hover mr-2' key={index}>{desc}</Link>
                      </>
                    ))}
                  </div>
                ) ;
              }

              if (index === 2) {
                description = (
                  <div className='absolute -bottom-9 left-[580px] text-white flex gap-2 px-10 py-4 rounded-md second-desc-container bg-home-bg opacity-0 pointer-events-none'>
                    {[
                      ["How it works"],
                      ["Benefits"],
                      
                    ].map((desc) => (
                      <Link className='relative desc-hover mr-2' key={index}>{desc}</Link>
                    ))}
                  </div>
                ) ;
              }
              else if (index == 3) {
                description = (
                  <div className='absolute -bottom-9 left-[740px] text-white flex gap-2 px-10 py-4 rounded-md third-desc-container opacity-1 pointer-events-none'>
                    {[
                      ["Mission"],
                      ["FAQ"],
                      
                    ].map((desc) => (
                      <Link className='relative desc-hover mr-2' key={index + 1}>{desc}</Link>
                    ))}
                  </div>
                ) ;
              }

              return (
                <>

                <li className={classname} key={index}>
                <p className='text-nav-text position'>{link}</p>
                <BsChevronDown className='chev transition-all duration-200' />
               </li>
               {description}
               </>
              );
             
            })}

              {[
                ["Blogs"],
                ["Login"]
              ].map((link, index) => (
                <div className="relative lg-btn hover:cursor-pointer" key={index}>{ link }</div>
              ))
              }
          
            <button className='ring ring-white ring-[2px] rounded-full py-1 px-4 hover:btn-hover transition-all duration-200 '>
              Recruit
            </button>
            <Link to={'/signup'}>
              <button className=' bg-mid-white text-home-bg rounded-full py-1 px-4 hover:btn-hover2 transition-all duration-200 '>
                Sign up
              </button>
            </Link>
           
          </ul>
        </nav>
       
        <span className='menu h-[2.5px] w-[30px] bg-white relative lw:block lg:hidden cursor-pointer'></span>
        </section> 
      </main>

     </Container>
    </>
  )
}

const Container = styled.header`
 
  li, .desc-hover {
    &:hover {
      .chev {
        transform: rotate(180deg);
      }
      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
      
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #fff;
      bottom: -8px;
      left: 0; right: 0;
      opacity: 0;
      transform: scaleX(0);
      transition:  all 250ms;
      transform-origin: left;
    }
  }
  
   .lg-btn {
    &:hover {
        &::after {
          opacity: 1;
      transform: scaleX(1);
        }
    }
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      background-color: #fff;
      bottom: -8px;
      left: 0; right: 0;
      opacity: 0;
      transform: scaleX(0);
      transition:  all 250ms;
      transform-origin: left;
    }
  }
  .menu {
      &:after {
        content: "";
        height: 2.5px;
       background-color: #fff;
       position: absolute; 
       left: 0; right: 0; bottom: 0; top: 10px;
       cursor: pointer;
      }
  }
 

 
`


export default Header


