import React from 'react';
import './comp/share.css';

function Share() {
  return (
    <nav>
        <ul>
            <li><a href="https://www.instagram.com/ashu_0_4_/" target={"_blank"}><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100069219315975" target={"_blank"}><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://www.linkedin.com/in/ashutosh-jha-a22448241/" target={"_blank"}><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href='https://github.com/k-Geeku'  target={"_blank"}><ion-icon name="logo-github"></ion-icon>
            </a></li>
        </ul>
    
    </nav>
  )
}

export default Share