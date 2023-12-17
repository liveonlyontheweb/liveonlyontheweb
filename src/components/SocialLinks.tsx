import classNames from 'classnames';
import { FunctionComponent } from 'react';

import VKLogo from '../assets/fa6-brands_vk.svg?react';
import InstagramLogo from '../assets/formkit_instagram.svg?react';
import SoundCloudLogo from '../assets/icomoon-free_soundcloud2.svg?react';
import classes from './SocialLink.module.css';

// TODO: Add spring animations
// https://www.react-spring.dev/
const SocialLinks = () => {
  const links: Array<{
    href: string;
    text: string;
    logo: FunctionComponent;
  }> = [
    {
      href: 'https://soundcloud.com/liveonlyontheweb',
      text: 'SoundCloud',
      logo: SoundCloudLogo,
    },
    {
      href: 'https://www.instagram.com/liveonlyontheweb/',
      text: 'Instagram',
      logo: InstagramLogo,
    },
    {
      href: 'https://vk.com/liveonlyontheweb',
      text: 'VK',
      logo: VKLogo,
    },
  ];

  return (
    <div className={classes.social_links}>
      {links.map((link, index) => (
        <a
          className={classNames(classes.link_wrapper, 'text-sm text-bold')}
          href={link.href}
          key={index}
        >
          <link.logo />
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
