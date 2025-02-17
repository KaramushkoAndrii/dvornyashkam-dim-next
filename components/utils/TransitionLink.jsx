"use client";

// https://www.youtube.com/watch?v=fx6KMItwJAw
import { Link, useRouter } from "@/i18n/routing";
import { sleep } from "@/utils";

const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const transitionHandler = async (evt) => {
    evt.preventDefault();
    const body = document.querySelector("body");
    // Run some exit animation
    body?.classList.add("page-transition");
    // Delay before route change
    await sleep(500);
    window.scrollTo(0, 0);
    router.push(href);
    // Delay after route changed
    await sleep(500);
    // Run some enter animation
    body?.classList.remove("page-transition");
  };
  return (
    <Link href={href} {...props} onClick={transitionHandler}>
      {children}
    </Link>
  );
};

export default TransitionLink;
