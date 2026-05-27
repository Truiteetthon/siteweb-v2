import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";

const site = lume();

site.use(
  multilanguage({
    languages: ["fr", "en"],
    defaultLanguage: "fr",
  }),
);

site.add("style.css");

site.add("script.js");

site.add("photos");

site.add("projets");

site.add("contact");

site.add("Fonts");

export default site;
