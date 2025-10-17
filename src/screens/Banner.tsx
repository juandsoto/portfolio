import { KeyboardArrowDown, PictureAsPdf } from '@mui/icons-material';

import { Networking, ProfileImage } from '@/components';
import cv from '@/docs/resume.pdf';

export const Banner = () => {
  return (
    <div className="section flex flex-col">
      <div className="mt-24 flex justify-center lg:justify-start">
        <div className="hidden sm:flex flex-col gap-8 items-center justify-center">
          <Networking />
        </div>
        <div className="sm:pl-8 lg:flex-1 flex items-center justify-between gap-8">
          <div className="flex-1 flex flex-col gap-2 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="lg:hidden w-8 xs:w-12 sm:w-16">
                <ProfileImage />
              </div>
              <h1 className="font-bold tracking-wide">Juan David Soto</h1>
            </div>
            <h2 className="text-secondary capitalize font-semibold pre-line">Software Engineer</h2>
            <div className="max-w-xl">
              <p>
                <span className="font-bold text-lg pr-2">Hi!</span>I'm Juan David.
              </p>
              <p>
                Software engineer with 4 years of experience delivering user-focused applications as part of
                collaborative, cross-functional teams. Committed to clear communication, aligned goals, and continuous
                learning contributing to projects with a strong sense of responsibility and attention to detail.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap items-stretch gap-2">
              <a className="btn-secondary px-6 py-4 flex items-center gap-4" href="#projects">
                Check out some projects!
                <KeyboardArrowDown />
              </a>
              <a
                className="border border-secondary rounded-lg px-6 py-4 flex items-center gap-2"
                href={cv}
                download="Curriculum Vitae - Juan David Soto"
              >
                Download CV
                <PictureAsPdf className="text-secondary" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block w-56 2xl:w-72">
            <ProfileImage />
          </div>
        </div>
      </div>
    </div>
  );
};
