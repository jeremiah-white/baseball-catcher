# Removed Affiliate Programs Documentation

This document records the affiliate programs and advertising that were present in the original HTML site and have been removed during the migration to Next.js. Ad placeholders have been added using the `bc-adspot` class for potential future monetization.

## Amazon Associates

**Affiliate ID:** `basebcatch-20`

The original site contained Amazon Associates product iframes throughout the sidebar areas. These were typically 120x240px product widgets promoting baseball-related books and equipment.

Example of original code:
```html
<iframe src="http://rcm.amazon.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&nou=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=basebcatch-20&o=1&p=8&l=as1&m=amazon&f=ifr&ref=tf_til&asins=146343961X" style="width:120px;height:240px;" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"></iframe>
```

## LinkSynergy / Rakuten Marketing

**Affiliate ID:** `UJstJl0h6R8`

The site contained LinkSynergy affiliate links, primarily for HomerunMonkey (a baseball equipment retailer).

Example of original code:
```html
<a href="http://click.linksynergy.com/fs-bin/click?id=UJstJl0h6R8&offerid=192915.10000003&subid=0&type=4">
  <IMG border="0" alt="HomerunMonkey" src="http://ad.linksynergy.com/fs-bin/show?id=UJstJl0h6R8&bids=192915.10000003&subid=0&type=4&gridnum=4">
</a>
```

## ShareASale

The site contained ShareASale affiliate links to various baseball equipment retailers:

### Baseball Rampage
```html
<a href="http://www.anrdoezrs.net/e7102shqnhp475957A84659D8568" target="_top">Baseball Rampage</a>
<img src="http://www.lduhtrp.net/gq121h48x20MPNRNPSQMONRVQNOQ" width="1" height="1" border="0"/>
```

### Baseball Express
Various product links were included pointing to Baseball Express through ShareASale tracking.

## Google AdSense

**Publisher ID:** `pub-5991098243970414`

The original site contained multiple Google AdSense ad units:

### Ad Formats Used:
- **468x60 Banner** - Placed at the top of main content areas
- **120x600 Skyscraper** - Placed in left sidebar areas

Example of original code:
```html
<script type="text/javascript"><!--
google_ad_client = "pub-5991098243970414";
google_ad_width = 468;
google_ad_height = 60;
google_ad_format = "468x60_as";
google_ad_type = "text_image";
google_ad_channel = "4454452953";
google_color_border = "FFFFFF";
google_color_bg = "FFFFFF";
google_color_link = "0000FF";
google_color_url = "336699";
google_color_text = "000000";
//--></script>
<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
```

## Removed Analytics

The following analytics scripts were also removed:

### Google Analytics (Legacy Urchin)
```html
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript">
_uacct = "UA-437402-1";
urchinTracker();
</script>
```

### StatCounter
```html
<script type="text/javascript" language="javascript">
var sc_project=1655785;
var sc_invisible=1;
var sc_partition=15;
var sc_security="ce9d188f";
</script>
<script type="text/javascript" language="javascript" src="http://www.statcounter.com/counter/counter.js"></script>
```

## Ad Placeholder Implementation

All removed ads have been replaced with placeholder components using the `bc-adspot` class. These can be easily hidden site-wide by adding the following CSS:

```css
.bc-adspot {
  display: none;
}
```

### Available Placeholder Sizes:
- `bc-adspot--sidebar` - 120x600px (for sidebar skyscraper ads)
- `bc-adspot--banner` - 468x60px (for content banner ads)
- `bc-adspot--leaderboard` - 728x90px (for header/footer ads)
- `bc-adspot--small` - 120x240px (for small sidebar widgets)

### Placeholder Locations:
1. **Left Sidebar** - Present on Guide, Gear, Drills, and Strength Training section pages
2. **Right Sidebar** - Present on most content pages
3. **Main Content Area** - Available for banner placement

## Re-enabling Advertising

To add advertising back to the site:

1. Update the `AdSpot` component at `src/components/AdSpot.tsx`
2. Add your ad network's script to `src/app/layout.tsx`
3. Replace the placeholder content with actual ad code

For Google AdSense:
```tsx
// In AdSpot.tsx
return (
  <ins className="adsbygoogle"
       style={{ display: 'block' }}
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true">
  </ins>
);
```

## Notes

- The original site's affiliate links were often placed in "compare" pages that had minimal educational content
- Brand-specific pages (Wilson, Rawlings, etc.) in the gear section were primarily affiliate storefronts and have been consolidated into the main gear overview page
- The contact email on the original site (`mdanner66 (at) hotmail (dot) com`) has been replaced with a contact form using Resend for email delivery
