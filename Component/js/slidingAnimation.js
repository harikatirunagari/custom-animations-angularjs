app.factory('slideAnimation',function(customBackground,reusableComponent,$timeout){
    console.log('slideAnimation');
    // for slideleft , slideRight
    var eleDimensions;
    var paddingProps;
    var desiredHeight;
    var desiredWidth;
    
    
    function getEleDimensions(ele){
        eleDimensions = reusableComponent.dimensionsWithContent(ele);
    }
    
    function getPaddingProps(ele){
        paddingProps = reusableComponent.extractPaddingPropertyFromElement(ele);
    }
    
    function assignDimen(){
        desiredHeight = eleDimensions.height;
        desiredWidth =  eleDimensions.width;
    }
    
    function VerticalslideDown(ele){
       /* ele.css({                
            'width':'0px',
            'padding-left':'0px',
            'padding-right':'0px',
            'visibility':'hidden'
        }); 
       */
       reusableComponent.setWidth(ele,0);
       reusableComponent.setPaddingLeft(ele,0);
       reusableComponent.setPaddingRight(ele,0);
       
       
    }
    
    function horizontalsideDown(ele){
        reusableComponent.setHeight(ele,0);
        reusableComponent.setPaddingTop(ele,0);
        reusableComponent.setPaddingBottom(ele,0);
        
    }
    
    function slideDown(ele){
        reusableComponent.setVisibility(ele,'hidden');
        reusableComponent.setOverflowProperty(ele,'hidden');
         $timeout(function(){
            reusableComponent.setVisibility(ele,'visible');
        },1000);
    }
   
    
   
    
    function dimensionCal(ele){
        getEleDimensions(ele);
        getPaddingProps(ele);
        assignDimen();
    }
    
    function leftEndPos(){
        return desiredWidth + paddingProps['padding-left'] + paddingProps['padding-right'];
    }
    
    function topEndPos(){
        return desiredHeight + paddingProps['padding-top'] + paddingProps['padding-bottom'];
    }
    
    return{
        setLeftSlideDown : function(ele,params){
            
            console.log('in slide Down');            
            params.direction = 'leftRight'; 
            dimensionCal(ele);
            VerticalslideDown(ele);
            slideDown(ele);
            
            //reusableComponent.setOverflowProperty(ele,'hidden');            
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps);
            
        },
        setLeftSlideUp : function(ele,params){
            
            params.direction = 'leftSlideUp';
           
            dimensionCal(ele)
            reusableComponent.setOverflowProperty(ele,'hidden');
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps);
            //removeOverflowAfterTimeperiod(ele,params.speed);          
            
          
        },
        setRightSlideDown : function(ele,params){
           /* var percentageOfArea = reusableComponent.parseIntConversion(params.percentageOfArea);
            var speedofEachstep = reusableComponent.setSpeedforEachStep(params.speed,params.percentageOfArea);*/
            dimensionCal(ele);
           VerticalslideDown(ele);           
            
            //console.log(desiredWidth  + ' '+leftPadding + '' + rightPadding);
            var leftPosition = leftEndPos();
            console.log('leftPosition ' +leftPosition );
            slideDown(ele);
            
            params.leftPosition = leftPosition;
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps);
            
            //animateRightSlideDown(ele,desiredWidth,leftPadding,rightPadding,leftPosition,percentageOfArea,speedofEachstep);
        },
        setRightSlideUp : function(ele,params){
            dimensionCal(ele);
            reusableComponent.setOverflowProperty(ele,'hidden');
            var leftPosition = leftEndPos();
            console.log('leftPosition ' +leftPosition );
            params.leftPosition = leftPosition;
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps);
        },
        setBottomSlideDown : function(ele,params){
            dimensionCal(ele);
            horizontalsideDown(ele);
            slideDown(ele);
            
            var topPosition = topEndPos();
            params.topPosition = topPosition;
            
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps);            
        },
        setBottomSlideUp : function(ele,params){
            dimensionCal(ele);
            
            var topPosition = topEndPos();
            params.topPosition = topPosition;
            
            customBackground.setBackground(ele,params,desiredHeight,desiredWidth,paddingProps); 
            
        }
        
    }
});








