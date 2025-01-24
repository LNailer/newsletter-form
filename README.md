https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv

## Brief

Your challenge is to build out this newsletter form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

    Add their email and submit the form
    See a success message with their email after successfully submitting the form
    See form validation messages if:
        The field is left empty
        The email address is not formatted correctly
    View the optimal layout for the interface depending on their device's screen size
    See hover and focus states for all interactive elements on the page

Download the project and go through the README.md file. This will provide further details about the project and help you get set up.

## 💡Ideas to test yourself


1. Write your styles using a pre-processor, such as Sass, Less or Stylus
2. Train your eye for detail by getting your solution as close to the design as you can
3. Try estimating the time it will take for you to build the project. Then see if the time taken matches up to your estimate. Project estimations are a skill that is often overlooked but is essential for professional developers


------
## Luke's notes
I'll run the clock as I'm working on this project.
Just started the clock now.
06/01/2025 - (Monday) - 7:57 am

The estimating idea above - seems very valuable. At this stage it really is a guess.
I'm going to say 18 hours to be conservative. It may be much less, but it may take longer. This includes deployment to github pages.
There are 6 steps they've got in the existing readme. I'm giving myself what seems like a generous 3 hours per step.

## Step 1. Initialise public repo on GitHub for the project.
>> I got thie done. 8:09 am.
Read the suggested gitHub docs at
- https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories
- https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
That's quickstart for repositories and cloning a repository.
I've also init ed git on the project.

•••••
## Step 2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
>> I'll try git hub pages for this. I have set up one of these ages ago, but will now review.
See how far I get in the next 13 mins.
(also need to publish my local changes back to gitHub.)
Pushed local readme to gitHub.

8:31 am 
35 minutes up. Still need to learn how to publish a GitHub page.
I have one, but creating new ones for projects with unique URLs..
How is this done? Will google next time.

-----------
07/01/2025 - (Tuesday) 7:25 pm
Watched a vid on setting up a github page.
Set up the github page. Took <15 mins.
Live URL is now at:
https://lnailer.github.io/newsletter-form/

Have spent 50 mins on this project now.

----------
18/01/2025 - (Saturday) 
took a break to review responsive design.
Jumping back in now - 8:06 pm.

I'll start with mobile. Grid. The demo piece at 500 px width.
Float it on white.

At 700 break for the blue bg and introduce the card.

20mins of work - progress made on first mobile state.
I've got correct width. H1, p, list items and a button.
Good start.

-------
19/01/2025 - (Sunday) 6:30 am
want to get the font right and the image in - working on that now.
6:43 am - I think I'm good with the fonts now. Will add the image.

7:08 am - got the image in but can't get mobile column to sit right.
padding margin centre is off.
margin 0 auto doesn't seem to be working and I'm fighting with divs
for different variations of not quite right.
Will take a break then read more.
+ 40m

8:20 am came back, refreshed browser - all looks good.
+ 12mins
got list updated with custom SVG check marks.

12:39 pm 
now trying to indent / format list check marks correctly.
12:59 pm - looking at other examples online, looks like a task
for flex or grid to get the bullets to be centre aligned and not 
aligned to the top.
1:18 pm - got it.
Put it in a grid - fought with my own typos - naming classes.
Feeling better with grid. Looks right on point vs design brief.
+ 40m.

====
1hr 30m on Sunday.

===
Another 35m spent on Sunday.
Initial design, spacing and colour is more or less perfect
now for mobile. No form functionality.
Will for desktop responsive state next, which is 1440px.

===
20/01/2025 - (Monday) 7:52 pm
just ddid another 40m of good progress
have got desktop card shape and image positioned.
need to centre text on the left and add drop shadow.

===
6:52 pm 21/01/2025 - (Tuesday)
just spent 8 mins and found this
vid
https://www.youtube.com/watch?v=vgmwEiT1wzc
Net Ninja walkthrough on form validation
testing against RegEx.
He does it for a phone number - I can do
it using the RegEx rules for an email.

8:45 pm took another 15m
wrote a regex email validation function
that I've tested as working in the
console. Now need to implement with
the html.

===
22/01/2025 - (Wednesday) 7:00 am
15m spent - something wrong w my
implementation. Next ref to check is
net ninja regex js implmentation.
https://github.com/iamshaunjp/regex-playlist/blob/lesson-16/validation.js

5:31 pm just found a 16 line js example on codepen
https://codepen.io/saigowthamr/pen/bGGzGoZ
Will give this a go after walking dog.

====
23/01/2025 - (Thursday) 7:27 am

https://www.youtube.com/watch?v=In0nB0ABaUk
WDS form validation vid - is ok.

https://www.youtube.com/watch?v=-HeadgoqJ7A
this one has some nice use of focus styling which feels like good accessibility.

just watched 30mins of form vids. 
Also looks like brief does *not* require
things actually being processed with input
emails being collected or sent to an inbox
somewhere. Just state/msg changes to show
error or success for desktop or mobile.

====
24/01/2025 - (Friday) 7:58 am
I mucked around with the WDS form from video above. Reproduced parts of it and identified error in my set up.
I've now got my button set up with prevent
default and a console log coming through.
It's a start on the JS.
+40m work this morning.

====
25/01/2025 - (Saturday) 7:24 am
Cleaned up my JS.
The input email is now being returned to the console.
Now I know that value is captured I can test it with regex.
- if valid go to success state.
- if invalid go to error message.
+25m
