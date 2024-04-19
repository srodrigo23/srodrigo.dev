'use client'

import 'bulma/css/bulma.min.css';
import {Button, Container, Navbar} from 'react-bulma-components'

export default function Home() {
  return (
    <div>
      <Navbar className='is-dark'>
        <Navbar.Brand>
          <Navbar.Item>
            <h1 className='title has-text-white p-4'>Sergio Rodrigo</h1>
          </Navbar.Item>
          <Navbar.Burger/>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container align='right'>
            {/* <Navbar.Item hoverable>
              <Navbar.Link>
                First
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href='#'>
                  This is a item 1
                </Navbar.Item>
                <Navbar.Item href='#'>
                  This is a item 2
                </Navbar.Item>
                <Navbar.Divider/>
                <Navbar.Item href='#'>
                  After divider
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item> */}
            <Navbar.Item href="#">
              Projects
            </Navbar.Item>
            <Navbar.Item active={true} href="#">
              Experience
            </Navbar.Item>
            <Navbar.Item href="#">
              Involvements
            </Navbar.Item>
            <Navbar.Item >
              <div className='buttons'>
                <Button className='is-warning'>Contact me!</Button>
              </div>
            </Navbar.Item>
          </Navbar.Container>-
        </Navbar.Menu>
      </Navbar>
    </div>
  );
}
