import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

// import AboutPagePreview from "./preview-templates/AboutPagePreview";
// import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ComponentPreview from "./preview-templates/ComponentPreview";
import WidgetPostPreview from "./preview-templates/WidgetPostPreview";
// import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import GettingStartedPagePreview from "./preview-templates/GettingStartedPagePreview";
import FundamentalsPageTemplate from "./preview-templates/FundamentalsPagePreview";
import UIShellPageTemplate from "./preview-templates/UIShellPagePreview";
import PageTemplatesPageTemplate from "./preview-templates/PageTemplatesPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
// CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
// CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("components", ComponentPreview);
CMS.registerPreviewTemplate("widgets", WidgetPostPreview);
CMS.registerPreviewTemplate("getting-started", GettingStartedPagePreview);
CMS.registerPreviewTemplate("fundamentals", FundamentalsPageTemplate);
CMS.registerPreviewTemplate("ui-shell", UIShellPageTemplate);
CMS.registerPreviewTemplate("page-templates", PageTemplatesPageTemplate);
