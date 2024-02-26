import Facebook from '/imgs/logo-facebook.svg';
import GitHub from '/imgs/logo-github.svg';
import LinkedIn from '/imgs/logo-linkedin.svg';
import YouTube from '/imgs/logo-youtube.svg';

function Footer() {
  return (
    <div className="mt-auto flex flex-col items-center bg-neutral-100">
      <div className="flex">
        <img
          src={GitHub}
          alt="github"
          className="m-2 size-7 cursor-pointer hover:opacity-50"
        />
        <img
          src={LinkedIn}
          alt="linkedin"
          className="m-2 size-7 cursor-pointer hover:opacity-50"
        />
        <img
          src={Facebook}
          alt="facebook"
          className="m-2 size-7 cursor-pointer hover:opacity-50"
        />
        <img
          src={YouTube}
          alt="youtube"
          className="m-2 size-7 cursor-pointer hover:opacity-50"
        />
      </div>
      <div className="m-2 text-xs">
        &copy; Copyright 2024 by LearnReact Inc.
      </div>
    </div>
  );
}

export default Footer;
