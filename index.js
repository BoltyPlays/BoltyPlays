import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

/*
ScrollSmoother.min.js is a Club GreenSock perk

import { ScrollSmoother } from "gsap/ScrollSmoother";

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

/*
Fix ScrollTrigger
*/
