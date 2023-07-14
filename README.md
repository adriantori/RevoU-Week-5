# RevoU Week 5 Assignment - Project Milestone 1

Creates company profile using all the skills previously learned

## Assignment Information

1. I made "what-if" scenario if I have a web development company called Codegree
2. The website has to be mobile friendly / responsive.
3. Once its done, it gets deployed on Netlify and configured with custom domain (my.id).

### Advanced Information

1. I used global variable to managed all color used in website.
2. Every section have "snap" effect when nearby.
3. in Services section, there's wave effects created using SVG.

### Additional information

If Smooth Scrolling doesnt work, you can try enabling it by following [this tutorial](https://www.majorgeeks.com/content/page/how_to_enable_or_disable_smooth_scrolling_in_google_chrome.html#:~:text=If%20your%20Google%20Chrome%20seems,on%20the%20bottom-right%20corner.)

Media query are optimized for 1440px and 425px, with small adjustment at 1024px and 768px.

### Deploy Link

[https://adriantori.my.id](https://adriantori.my.id)

## Detailed Info

In this section, I'll try to explain most of the feature I wrote in this project

### Navbar - Normal

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-19-35-44-image.png)

1. There's vertical animation from top to bottom, followed by staggered animation on nav items.

2. Each nav items will scroll to each section when clicked.

### Navbar - Mobile

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-19-54-12-image.png)

1. There's vertical animation from top to bottom, then bounced up

2. Each nav items will scroll to each section when clicked.

3. Navbar wont close if you click on outside of the element.

4. Navbar icon will change from "hamburger" to "cross" depending if its closed or opened.

### Sidebar

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-21-36-53-image.png)

1. Each section will have its own sidebar (disabled on mobile view).

2. User can click on the dots to go to that section.

3. When scrolled, the active dots will changed accordingly.

### H1 section

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-19-58-18-image.png)

1. Each color of "CoDeGree" is made out of span.

2. Below it, there's rolling text with transition of Y-axis from top to bottom.

3. The text loop indefinitely.

### The C U B E

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-19-59-45-image.png)

1. Its comprised of 5 span.

2. Each span have rotateY transform and translateZ for each Child until it becomes cube.

3. The finished cube then animated using RotateX to gives its tilted appearance and RotateY to make it spin.

4. Each breakpoints requires its own sets of width due to unreliable scaling properties.

### Opening Section

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-20-07-49-image.png)

1. The title have slide animation from left to right.

2. Each div has line-height and position relative to make it snap to the top.

3. Column-count are used to limit items per column, depending on screensize, it may increased or decreased.

4. When hovered, it will transition to its description.

5. It has animation of fade-in staggered.

### Services Section

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-20-45-00-image.png)

1. Each div on the left side can be clicked.

2. When clicked, every other div will be grayed out.

3. It also changes div content according to selected option.

### Showcase Section

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-21-38-55-image.png)

1. User can change Navbar and Footer by clicking on the Arrow.

2. User can change Background and Text Color according to Color Picker.



### Contact Us

![](B:\Works\RevoU\Week%205\Project%20Milestone\Assets\Images\Readme\2023-07-14-21-40-47-image.png)

1. Contact Us is created using Grid.

2. "Send a message" grid item using Flex.

3. Maps used are from Google Maps embed.

## Sign-up to Netlify

assuming you already have GitHub account:

1. Go to netlify.com

2. Click Log in

3. Log in with GitHub

4. Authorize access for netlify.com

### Connect to Github

1. Go to Team overview menu, click Add new site, Import an existing project
   
   ![github login](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-11-16-10-image.png?msec=1689337551317)

2. Click GitHub

3. Pick a repository you want to add
   
   ![github repo](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-11-17-41-image.png?msec=1689337551298)

4. Scroll down, Deploy Site

### Auto Deploy

Once you deploy the site, it will be automatically refreshed when you Push things to your GitHub.

## Buying Domain

1. Go to your favorite domain site (in this case I'm using Domainesia.com)

2. Type your domain name you want, click "Cari Domain", click "Daftarkan Domain"
   
   ![domainesia](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-11-58-47-image.png?msec=1689337551362)

3. Click "Masukkan Troli" and follow the instruction for payment option

4. Once payment is made, you can now use your Domain in the next step

## Setting up Cloudflare

1. Go to "dash.cloudflare.com", click Sign up, follow the instruction and confirm your email

2. Login using the account you just made

3. Click "Add a site" button on the right-side of the web page

4. Enter your site name, click Add site

5. Scroll down and click Free, then Continue

6. Copy Nameserver 1 & 2, later you'll need this to overwrite your domain Nameserver
   
   ![cloudflare nameserver](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-10-25-image.png?msec=1689337551311)

7. Go to your domain provider, click Domains -> your Domain Name
   
   ![domainesia select domain](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-05-28-image.png?msec=1689337551316)

8. click Nameservers, and paste Nameservers provided by Cloudflare
   
   ![domainesia change nameserver](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-06-30-image.png?msec=1689337551297)

### Setting DNS

1. go to your cloudflare account, click your website name -> DNS -> Records, click Add record
   
   ![cloudflare dns record](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-18-05-image.png?msec=1689337551292)

2. Enter "Type: CNAME, Name: @, IPv4 address: your Netlify.app link (i.e website.netlify.app)"

3. Enter "Type: CNAME, Name: www, IPv4 address: your Domain name (i.e domain.site)"

## Connecting Domain in Netlify

1. Login to your Netlify account, then click your deployed website.

2. go to Site overview -> Domain settings
   
   ![netlify domain](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-13-08-image.png?msec=1689337551317)

3. Click Add domain alias, type your domain name, click Add domain
   
   ![netlify domain name](file://B:\Works\RevoU\Week 4\0 Assignment\Assets\Images\Readme\2023-07-07-12-14-28-image.png?msec=1689337551315)

4. Wait for awhile and your site is ready to be used