export async function GET() {
  return new Response(
    `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
<loc>https://boikontho.com/</loc>
<lastmod>2022-12-05T19:35:16+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://boikontho.com/register</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/details/faq</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/booklist</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/creator</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/details/about-us</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/details/career</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/csr</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/details/terms-of-use</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/details/privacy-policy</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://boikontho.com/login</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.64</priority>
</url>
<url>
<loc>https://boikontho.com/details/contact-us</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.64</priority>
</url>
<url>
<loc>https://boikontho.com/creator/register</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.64</priority>
</url>
<url>
<loc>https://boikontho.com/creator/login</loc>
<lastmod>2022-12-06T12:03:53+00:00</lastmod>
<priority>0.64</priority>
</url>
</urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}