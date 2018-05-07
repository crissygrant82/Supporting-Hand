import React from 'react';
import {Link} from 'react-router-dom';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Hero from 'grommet/components/Hero';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';


import logo from '../logo/hand2.png';

const Nav = () =>{
  return(
  <Section>
    <Section>
    <Header float={true}
        pad='small'
        size='xsmall'
        splash={false}
        fixed={false}
        >
        <Link to='/'><Image src={logo} size='thumb'/></Link>


                <Box flex={true}
                  justify='end'
                  direction='row'

                  responsive={false}>
                    <Menu responsive={true}
                          inline={true}
                          direction='row'>
                        <Anchor size='small' tag='h5'>
                          <Link to='/donors'>Search Donors</Link>
                        </Anchor>
                        <Anchor size='small' tag='h5'  colorIndex='neutral-1'>
                          <a href='https://www.donorschoose.org/about'>
                            Learn More about DonorsChoose.org</a>
                        </Anchor>
                  </Menu>
              </Box>
          </Header>
        </Section>
        <Section>
              <Hero background={<Image src='https://c1.staticflickr.com/4/3837/14173066439_a131eed12e_b.jpg'
                        fit='cover'
                        full={true} />}
                        backgroundColorIndex='dark'>
                <Box direction='row'
                        justify='center'
                        align='center'>
                        <Box basis='1/2'
                          align='end'
                          pad='medium' />
                      <Box basis='1/2'
                          align='start'
                          pad='medium'>
                              <Heading margin='none'>
                                  Supporting Hand
                              </Heading>
                      </Box>
                </Box>
        </Hero>
        </Section>
  </Section>

  )
}

export default Nav;