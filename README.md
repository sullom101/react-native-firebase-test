# challenge

You can use the API to access your documents at https://launchlibrary.net/docs/1.4/api.html.
We expect you to develop a React-Native Application using it.
You are free to use the UI library you want.


Login Screen mockup: (log in.png)
Login Screen; On this screen, the user must log in to the system with the information he / she has registered in the system. You membership
If not, you should direct it to the Register screen from this screen and after completing the membership process
it should reach my app's Dashboard screen.

● Preferably we expect Firebase Auth to be used.

● Must be able to login with Email and Password.

Register Screen mockup: (sign up.png)
Register Screen: On this screen, the user must be logged in by entering information. Email and password are enough for the user to be a member.

Dashboard Screen mockup: (list.png)
On this screen, we passed the 6 months and will be realized in the next 3 months.
launches should be listed. When the page is first opened, 10 items should be listed, then the rest of the list should be displayed 10 by 10 with the infinite scroll method, if any.
For each launch;

● Launch name,

● Launch Date (should be formatted according to GMT + 3, if not determined yet, as TBD. we should see)

● The image of the Rocket used in the launch (whichever is the lowest imageSize returned from the API should be used. If no rocket information is returned for launch, a placeholder image we should see) Clicking on any launch element should go to the second screen.


Launch Detail Screen - Information Tab mockup: information.png

On this screen, the name of the Launch, the image of the rocket used in the launch 
(again, the smallest imageSize or placeholder image should come).
Launch ID as detail information, if launch has We should be able to see its status. LaunchStatus, not integer status
We should see it as the description returned from the endpoint. Clicking the back button should return.
Launch Detail Screen

** Mission Tab mockup: missions.png
Again we ask you to put a favorite (star) button on the launch detail screen, and Clicking (saving it in Firebase will earn you plus points.)
We expect you to add to favorites as Async Storage will be stored. Also, we don't expect you to make a list of favorites. Once a favorite launch detail is opened,simply show that it has been added to your favorites.

Using React Navigation and Redux will earn you plus points.
