import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft, faArrowRight);

// Disable inline css
// https://fontawesome.com/how-to-use/on-the-web/other-topics/security
config.autoAddCss = false;
