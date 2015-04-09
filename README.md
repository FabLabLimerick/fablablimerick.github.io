
# FABLABLIMERICK Website

## Step by Step Guide for adding an Event Post (March 2015)

This guide is for editors of FabLab Limerick website.

### Step #1: Register in https://github.com/

FabLab Limerick Website is hosted in github so you will need to create an account in github.com and ask the web administer to grant you access to the website.

### Step #2: Log in into http://prose.io

Prose.io is a content editor for GitHub designed for managing website. Go to http://prose.io/ and authorize on github, this will connect prose to github.

### Step #3: Explore project
In prose.io, you will see a list of projects that you can edit. Click *View Project* for **fablablimerick.github.io** within the group **FabLabLimerick**.

### Step #4: Switch to branch *developer*

In prose.io, swicth to branch **developer** by clicking on the dropdown at the right top side. Next you will see a list of files, each file corresponds with an event.
Please be sure you switch to branch **developer** before doing any changes.

### Step #5: Create a new event file
In prose.io, on toolbar above click on **new file** and the editor window will open. Start replacing *untitled* at the top of the window by the event title.

On the right side of the editor window you will find the following options:

- Edit
- Preview
- Metadata
- Settings
- Save

### Step #6: Add text and upload image for the event

In prose.io editor window, write the event content using markdown format. Markdown is a markup language with plain text formatting syntax for easy conversion into HTML. Do not worry, markdown has a very gentle learning curve.

On toolbar above, click on the **?** button to learn how to include format using markdown such as headers, bold style, lists, etc. 
At any moment you can click the **view** button on the right top side and see the formatted text.

For uploading an image, on toolbar above click the **image** button and then upload an image by dragging and dropping. Make sure the image has a width of  1600px and 80% of JPEG compression. The uploaded image will be automatically stored at **app/img/events/** absolute path (please make sure this path is correct). Take note of the image path and name for later to be fill out in the metadata (please note that metadata asks for relative path and this is absolute). You need to click on **insert** in order for the image to be uploaded to **app/img/events/** path, however the line of text automatically added into the event body needs to be removed. This image will be used both as thumbnail and background. For now only one image per event is permitted. 

If you choose to use an image that has been already uploaded for another event, then on toolbar above click the **image** button, select image from the list and take note of the image path and name for later to be fill out in the metadata (please note that metadata asks for relative image path and this is absolute).

### Step #7: Fill out Metadata

In prose.io editor window, it is very important to fill out the metadata information regarding the event accordingly. Click on **metadata** button on the right top side and fill out the form. There are help labels for every input data.

At this point you can go back to **edit** or **preview** until the event post is finished.

Clarifications about metadata:

- The slug is the event file name (excluding date), it has to be lowercase words without accent and separated by dash. 

- Prose.io prepopulates the filename field with the current date prefix, yyyy-mm-dd, so the final event file name is: "yyyy-mm-dd-slug.md”.

- The permalink is the final URL of the event page in the website, therefore the more info field should be equal to this URL in the newsletter.

### Step #8: Rename event file name

In prose.io editor window, it is key to rename event file name using the event celebration date (by default the date of the file creation is used by prose.io). Click on **settings** button on the right top side and edit the **file path** accordingly.

This date will be used to order the event listing in the home page and event page, that's is why is so important.

### Step #9: Save the event

In prose.io editor window, click on **save** on the right top side and you will be asked to review your changes. You will notice that the event content is shown in plain text where the metadata is at the beginning within **---** marks, and the body text next. 

Introduce a comment describing the changes you just made in the event and click **commit**.

### Step #10: Published event

Once your event is finished and ready to be published ask your web administrator to update the live web version.

For any question please send email to info@colaborativa.eu

