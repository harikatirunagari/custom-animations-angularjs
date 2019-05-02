# Background-and-sliding-animations

Created custom directive that can :-<br/>
a) slide down or up, the element in all the 4 directions(top,bottom,left,right).<br/>
b) achieving transition in background application from all the 4 directions(top,bottom,left,right).<br/>

<p align="center">
    <img  alt="component" src="img/img.png"/>
</p>


The component along with the buttons(Reset,Animate) can be reused or alone the component can be reused.

Reset Button   - The Reset Button is used to reset the initial given properties.<br/>
Animate Button - The Animate Button would initiate the related animation.

# View Demo :-
Please [Click here](https://plnkr.co/edit/olWqhcm3Au52CqZpSR50)


# Technologies used:- 
Angular JS, Jquery, CSS3


 
## Here we have more control on the animation by specifying:-
a) the speed of the animation<br/>
b) percentage of area to be covered in each iteration<br/>


``````````````````````
 Speed of Each Iteration : speed/percentageOfArea
 
````````````````````````````````


# Syntax for the directive:-

For the background transition:-
```
<custom-Heading animationeffect='' params="{
              'direction':'',
              'speed':'',
              'percentageOfArea':'',
              'backgroundColor':''}">
   specify the content to be in element
</custom-Heading>
```

For sliding the element:-
```
<custom-Heading animationeffect='' params="{
              'direction':'',
              'speed':'',
              'percentageOfArea':''}">
   specify the content to be in element
</custom-Heading>
```


# Attributes of the  Directive :- 
animationeffect - slide the element or apply background <br/>
params <br/>

## animationeffect
```````
animationeffect : backgroundTransition | Slide
                   

```````
backgroundTransition is related to the background animations.<br/>
Slide is for sliding the element.<br/>


## params:
speed - duration in which the animation to be completed <br/>
percentageOfArea - part of the area in th element to be covered in each iteration <br/>
direction - the direction in which the animation to be applied <br/>
backgroundColor - to set the backgroundcolor of the element <br/>



## direction

```
direction : topBottom | leftRight | rightLeft | bottomTop | 
            leftSlideDown   | leftSlideUp    | 
            RightSlideDown  | RightSlideUp   | 
            BottomSlideDown | BottomSlideUp  |
            SlideDown       | SlideUp
            
```

topBottom,leftRight,rightLeft,bottomTop are related to 'backgroundTransition'<br/>
leftSlideDown,leftSlideUp are related to slide the element from left<br/>
RightSlideDown,RightSlideUp are related to slide the element from right<br/>
BottomSlideDown, BottomSlideUp are related to  slide the element from bottom<br/>
SlideDown, SlideUp are related to slide the element from top<br/>


The initial CSS properties are to be given through the controller in which the directive exists.


 
 



