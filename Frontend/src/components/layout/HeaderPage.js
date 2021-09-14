import Link from 'next/link'
import React from 'react';

const HeaderPage = () => (
  <div className='header-wrapper' style={{backgroundColor: '#014452'}}>
    <nav>
      <Link href='/'>
        <a>KAIROS - Sistema Administrativo para la Gestión</a>
      </Link>
    </nav>

    <style jsx>{`
      .header-wrapper {
        padding: 20px;
        background: #111;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }
      a {
        padding: 10px 0;
        margin: 0 15px 0 0;
        white-space: nowrap;
        color: #fff;
      }
      a:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    `}</style>
  </div>
)

export default HeaderPage
