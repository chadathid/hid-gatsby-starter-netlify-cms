import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
// import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ComponentPreview from "./preview-templates/ComponentPreview";
// import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import GettingStartedPagePreview from "./preview-templates/GettingStartedPagePreview";
import FundamentalsPageTemplate from "./preview-templates/FundamentalsPagePreview";
import UISHellPageTemplate from "./preview-templates/UISHellPagePreview";
import PageTemplatesPageTemplate from "./preview-templates/PageTemplatesPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
// CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("components", ComponentPreview);
CMS.registerPreviewTemplate("getting-started", GettingStartedPagePreview);
CMS.registerPreviewTemplate("fundamentals", FundamentalsPageTemplate);
CMS.registerPreviewTemplate("ui-shell", UISHellPageTemplate);
CMS.registerPreviewTemplate("page-templates", PageTemplatesPageTemplate);
