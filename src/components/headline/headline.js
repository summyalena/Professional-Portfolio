import React from 'react'
import styles from './Headline.module.css';
import SocialLinks from '../subcomponents/socialLinks';
import Writeup from '../subcomponents/writeup';
import ContactLink from '../subcomponents/ContactLink';
import BlogLink from '../subcomponents/BlogLink';

function Headline() {
  return (
    <div className={styles.container}>
        <SocialLinks/>
        <Writeup/>
        <BlogLink/>
    </div>
  )
}

export default Headline;