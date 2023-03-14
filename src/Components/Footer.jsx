import React from 'react'
import styled from 'styled-components'
import {GrLinkedinOption} from "react-icons/gr"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF, FaDiscord} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Footer = () => {
    const socials = [
        {name: "LinkedIn", url: "", icon: <GrLinkedinOption className='text-xl md:text-2xl' />},
        {name: "Twitter", url: "", icon: <BsTwitter className='text-xl md:text-2xl' />},
        {name: "Facebook", url: "", icon: <FaFacebookF className='text-xl md:text-2xl' />},
        {name: "Discord", url: "", icon: <FaDiscord className='text-xl md:text-2xl' />},
    ]
  return (
    <>
      <Container className='-mt-14 pb-20 ml-5'>
        <section>
            <div className='flex flex-col'>
                <figure>
                    <img src="Assets/Logo/TheHunt(bg).png" alt="TheHunt" className='w-40 md:w-52 -ml-5' />
                    <figcaption className='tracking-wide text-[16px] md:text-xl'>SignUp, Discover, Profit.</figcaption>
                </figure>
                <ul className='flex gap-3 mt-3 items-center'>
                    {
                        socials.map(({name, url, icon}) => (
                            <li key={name}>
                                <a
                                 href={url}
                                 rel={'noreferral noopener'}
                                 target='_blank'
                                 >
                                    {icon}
                                </a>
                            </li>
                        ))
                    }
            </ul>

            </div>

            <div className='flex flex-col'>
                <h3 className='text-xl tracking-wide font-semibold mb-1'>Companies</h3>
                <ul className='flex flex-col gap-1'>
                    <li>
                        <Link>How it works</Link>
                    </li>
                    <li>
                        <Link>Clients</Link>
                    </li>
                    <li>
                        <Link>Products and services</Link>
                    </li>
                    <li>
                        <Link>Investor relation</Link>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col'>
                <h3 className='text-xl tracking-wide font-semibold mb-1'>Talents</h3>
                <ul className='flex flex-col gap-1'>
                    <li>
                        <Link>How it works</Link>
                    </li>
                    <li>
                        <Link>Rates and avalability</Link>
                    </li>
                    <li>
                        <Link>Products and services</Link>
                    </li>
                    <li>
                        <Link>Pay range</Link>
                    </li>
                </ul>
            </div>
        </section>

        <section className='mt-4 md:mt-6'>
            <p className='text-[14px] md:text-xl'>TheHunt is a comprehensive platform that facilitates job seekers and companies to explore and search for job openings, talents across various industries and location. </p>
        </section>

        <section className='mt-4 md:mt-6 flex flex-col sm:flex-row justify-between items-center pr-10'>
            <p className='text-xl '> &#169; TheHunt</p>
            <div>
                <ul className='flex items-center gap-2'>
                    <li>
                        <Link to={"/"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Privacy</Link>
                    </li >
                    <li className='w-[max-content]'>
                        <Link to={"/"}>Terms and condition</Link>
                    </li>
                    <li></li>
                </ul>
            </div>
        </section>
      
      </Container>
    </>
  )
}

const Container = styled.footer`
    section:first-child {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(275px, .5fr));
     grid-gap: 15px;

     div:first-child li {
        transition: all 150ms;
        color: #fff;
        padding: 3px;
        &:hover {
            color:rgba(15,23,42) ;
            background-color: #fff;
            border-radius: 50%;
        }
    }

    div:nth-child(2) li, div:nth-child(3) li  {
        a:hover {
            text-decoration: underline;
        }
    }
}
    section:nth-child(3) li {
        a {
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export default Footer
