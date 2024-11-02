import React from 'react'
import './Service.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Service = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src="" alt="" />
      </div>
      <div className="services-container">
        <div className="item">
          <h2>01</h2>
          <h3>Website Development</h3>
          <p>Provide website development services focused on creating responsive,
            visually engaging, and user-friendly sites. From custom design to front
            and back-end development, my solutions include SEO, mobile optimization,
            and e-commerce integration to elevate your brand’s online presence.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
        <div className="item">
          <h2>02</h2>
          <h3>React Website Development</h3>
          <p>Specialize in React website development, delivering dynamic,
            high-performance web applications tailored to your business needs.
            My services include custom component development, responsive design,
            seamless user experiences, and optimized performance to create fast,
            interactive, and scalable websites.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
        <div className="item">
          <h2>03</h2>
          <h3>Wordpress Development</h3>
          <p>I offer expert WordPress website development services, crafting custom,
            responsive, and user-friendly websites. From theme customization to plugin
            integration, I create optimized and scalable sites designed to elevate your
            online presence and support your business goals effectively.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
        <div className="item">
          <h2>04</h2>
          <h3>Power BI Dashboard</h3>
          <p>Provide Power BI dashboard services to transform your data into actionable
            insights. With customized, interactive dashboards, I help you visualize key
            metrics, streamline reporting, and drive informed decision-making for
            enhanced business performance and strategic growth.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
        <div className="item">
          <h2>05</h2>
          <h3>Website Maintenance</h3>
          <p>Offer comprehensive website maintenance services to keep your site secure, updated,
            and running smoothly. From regular backups and security checks to performance optimization
            and content updates, I ensure your website remains functional and up-to-date,
            supporting your business effectively.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
        <div className="item">
          <h2>06</h2>
          <h3>Website Speed Optimization</h3>
          <p>I provide website speed optimization services to enhance loading times and improve
            user experience. My service includes image compression, code minification,
            cache setup, and server performance tuning, ensuring your website runs
            efficiently and ranks higher in search results.
          </p>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><a href="#contact"><button className='btn'>Get Into Touch</button></a></AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Service
