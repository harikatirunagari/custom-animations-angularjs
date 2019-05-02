app.factory('customBackground',function(reusableComponent){
    var properties = {};
    console.log('in custom Background');
    function animateTopDown(topPosition,isSlideUp){
        //console.log('final h '+givenHeight);
        console.log('in animateHorizontal');
        //console.log(topPadding + ' '+givenHeight +' ' + bottomPadding );
        
        var tPos = 0;
        if(topPosition && !isSlideUp){
            tPos = topPosition;
        }
        var ele = properties.ele;
        var givenHeight = properties.givenHeight;
        var percentageOfArea = properties.percentageOfArea;
        var speedofEachstep = properties.speedofEachstep;
        var topPadding = properties.topPadding;
        var bottomPadding = properties.bottomPadding;
        
        
        var tp = initialisationOfVariables(topPadding,isSlideUp);
        var bp = initialisationOfVariables(bottomPadding,isSlideUp);
        var h = initialisationOfVariables(givenHeight,isSlideUp);
        
        function animateHeight(){
           // console.log('h ' + h);
           console.log(tp + ' ' + h + ' ' + bp+ ' ' + tPos);
            angular.element(ele).animate({
                'height':h+'px',
                'padding-top':tp+'px',
                'padding-bottom':bp+'px',
                'top':tPos+'px'
            },speedofEachstep,function(){
                if(!isSlideUp){
                   slideDownBottomCallBack();
                }
                else{
                    if(tp == 0 && h == 0 && bp == 0){
                        reusableComponent.setVisibility(ele,'hidden');
                    }else{
                       slideUpBottomCallBack();
                    }
                    
                }
               
            });
        }
        animateHeight();   
        
        function slideUpBottomCallBack(){
            console.log(tp +' ' +h+ ' ' + bp + ' ' + tPos);
            var tp1 = tp, h1 = h, bp1 = bp;
            console.log(tp + ' '+ h + ' ' + bp);
            var ktp = generateTheFraction(topPadding,percentageOfArea);
            var kh = generateTheFraction(givenHeight,percentageOfArea);
            var kbp = generateTheFraction(bottomPadding,percentageOfArea);
            var tposition = generateTheFraction(topPosition,percentageOfArea);
            
            if(tp>0 && (tp - ktp) > 0){
                tp = tp - ktp;                
            }
            else{ tp = 0;}
            
            if(h > 0 && (h - kh) > 0){
                h = h - kh;
            }else{
                h = 0;
            }
            if(bp > 0 && (bp - kbp) > 0){
                bp = bp - kbp;
            }else{
                bp = 0;
            }
            
            if(tPos  < topPosition){
                tPos  += tposition;
            }
            
           if(tp > 0 || h > 0 || bp > 0 || tPos  < topPosition){
               console.log(tp + ' '+ h + ' ' + bp);
               animateHeight();
           }else if((tp1 > 0 && tp == 0) || (h1 > 0 && h == 0) || (bp1 > 0 && bp == 0) ){
                animateHeight();
           }
        }
        
        function slideDownBottomCallBack(){
            tp += generateIncrementDimension(topPadding,tp,percentageOfArea);
            h += generateIncrementDimension(givenHeight,h,percentageOfArea);
            bp += generateIncrementDimension(bottomPadding,bp,percentageOfArea);

            if(tPos > 0){
                tPos -= generateTheFraction(topPosition,percentageOfArea);
            }
               
            
             console.log(tp + ' ' + h + ' ' + bp+ ' ' + tPos);
            if((tp && (tp <= topPadding)) || (h && (h <= givenHeight)) || (bp && (bp <= bottomPadding)) || (topPosition && (tPos > 0))){

               if((tp == topPadding) && (h == givenHeight) && (bp == bottomPadding)){
                   tPos = 0;
                  // reusableComponent.setOverflowProperty(ele,'visible');
               }
                animateHeight();     
            }
        }
        
    }
    
    
    
    
    
    
    function animateLeftRight(isSlideUp,leftPos){
        console.log('in animateVertical');
        //console.log('final w ' + givenWidth);
        //console.log(percentageOfArea);
        //console.log(leftPadding + ' '+givenWidth +' ' + rightPadding);
        
        var ele = properties.ele;
        var givenWidth = properties.givenWidth;
        var percentageOfArea = properties.percentageOfArea;
        var speedofEachstep  = properties.speedofEachstep;
        var leftPadding = properties.leftPadding;
        var rightPadding = properties.rightPadding;
        
        var w = initialisationOfVariables(givenWidth,isSlideUp);
        var lp = initialisationOfVariables(leftPadding,isSlideUp);
        var rp = initialisationOfVariables(rightPadding,isSlideUp);
        
        var lpos;
        if(!isSlideUp && (leftPos > 0)){
            lpos = leftPos;
        }else{
            lpos = 0;
        }
       
        console.log(leftPos);
        //console.log(lp + ' ' + w + ' ' + rp);
        
        function animateWidth(){
           // console.log(lp + ' ' + w + ' ' + rp);
            angular.element(ele).animate({
                'width':w+'px',
                'padding-left':lp+'px',
                'padding-right':rp+'px',
                'left':lpos+'px'
            },speedofEachstep,function(){
                if(isSlideUp){                    
                    if(lp == 0 && w == 0 && rp == 0){
                        reusableComponent.setVisibility(ele,'hidden');
                    }else{
                        slideUpCallback(); 
                    }
                }
                else{                    
                    if(lp == leftPadding && w == givenWidth && rp == rightPadding){
                        reusableComponent.setOverflowProperty(ele,'visible');
                    }
                        slideDwnCallback();
                    
                }
               // console.log(lp + ' ' + w + ' ' + rp);
            });
        }
        
        animateWidth(); 
        
        
        
        function slideDwnCallback(){
            lp += generateIncrementDimension(leftPadding,lp,percentageOfArea);
            w +=  generateIncrementDimension(givenWidth,w,percentageOfArea);
            rp += generateIncrementDimension(rightPadding,rp,percentageOfArea);
           
            if(lpos > 0){
               lpos -=  generateTheFraction(leftPos,percentageOfArea);
            }
            
            if((lp && (lp <= leftPadding)) || (w && (w <= givenWidth)) || (rp && (rp <= rightPadding)) || (lpos && (lpos == 0))){
              //  console.log(lp + ' ' + w + ' ' + rp);
                animateWidth(); 
            }
        }
        
        function slideUpCallback(){ 
            var lp1 = lp, w1 = w, rp1 = rp;
            console.log(lp + ' '+ w + ' ' + rp);
            var klp = generateTheFraction(leftPadding,percentageOfArea);
            var kw = generateTheFraction(givenWidth,percentageOfArea);
            var krp = generateTheFraction(rightPadding,percentageOfArea);
            var lposition = generateTheFraction(leftPos,percentageOfArea);
            
            if(lp>0 && (lp - klp) > 0){
                lp = lp - klp;                
            }
            else{ lp = 0;}
            
            if(w > 0 && (w - kw) > 0){
                w = w - kw;
            }else{
                w = 0;
            }
            if(rp > 0 && (rp - krp) > 0){
                rp = rp - krp;
            }else{
                rp = 0;
            }
            
            if(lpos < leftPos){
                lpos += lposition;
            }
            
           if(lp > 0 || w > 0 || rp > 0 || lpos < leftPos){
               console.log(lp + ' '+ w + ' ' + rp);
               animateWidth();
           }else if((lp1 > 0 && lp == 0) || (w1 > 0 && w == 0) || (rp1 > 0 && rp == 0) ){
                animateWidth();
           }
        }
        
    }
    
    function initialisationOfVariables(prop,isSlideUp){
            if(isSlideUp){
                return prop;
            }
            return 0;
        }
   
   function generateTheFraction(prop,percentageOfArea){
       return prop/percentageOfArea;
   }
    
    
    
    function generateIncrementDimension(dim,val,percentageOfArea){
        if(dim){
            if(val <= dim){
               return dim/percentageOfArea;                
            }
            
        }
        return 0;
    }
    
    function widthWithPadding(obj){
       reusableComponent.setWidth(obj.ele,obj.givenWidth);
       reusableComponent.setPaddingLeft(obj.ele,obj.leftPadding);
       reusableComponent.setPaddingRight(obj.ele,obj.rightPadding);
       
    }
    
    function heightWithPadding(obj){
        reusableComponent.setHeight(obj.ele,obj.givenHeight);
        reusableComponent.setPaddingTop(obj.ele,obj.topPadding);
        reusableComponent.setPaddingBottom(obj.ele,obj.bottomPadding);
      
    } 
    
   
    
    function topBottom(){
        widthWithPadding(properties);
        //reusableComponent.setTopBottomStyles(properties.ele,0,0);
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,0);
        animateTopDown(0,false);
    }
   
    function bottomTop(){
        widthWithPadding(properties);
        //reusableComponent.setBottomTopStyles(properties.ele,0,0);
        //reusableComponent.setBottomPos(properties.ele,0);
        var topPosition = properties.givenHeight + properties.bottomPadding + properties.topPadding;
        reusableComponent.setTopPos(properties.ele,topPosition);
        reusableComponent.setLeftPos(properties.ele,0);
        animateTopDown(topPosition,false);
    }
    
    function leftRight(){
        heightWithPadding(properties);
        //reusableComponent.setLeftRightStyles(properties.ele,0,0);
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,0);
        animateLeftRight(false,0);
    }
    
    function rightLeft(){
        heightWithPadding(properties);       
        reusableComponent.setTopPos(properties.ele,0);        
        var leftPosition = properties.leftPadding + properties.givenWidth + properties.rightPadding;
        animateLeftRight(false,leftPosition);
    }
    
    function leftSlideUp(){
        heightWithPadding(properties);       
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,0);
        animateLeftRight(true,0);
    }
    
    function rightSlideDown(leftPosition){
        console.log('in right SlideDown');
        heightWithPadding(properties);
        leftPosition = reusableComponent.parseIntConversion(leftPosition);
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,leftPosition);
        animateLeftRight(false,leftPosition);
    }
    
    function rightSlideUp(leftPosition){
        console.log('in right Slide Up');
        heightWithPadding(properties);
        leftPosition = reusableComponent.parseIntConversion(leftPosition);
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,0);
        animateLeftRight(true,leftPosition);
    }
    
    function bottomSlideDown(topPosition){
        console.log('in bottom Slide Down');
        widthWithPadding(properties);
        topPosition = reusableComponent.parseIntConversion(topPosition);
        reusableComponent.setTopPos(properties.ele,topPosition);
        reusableComponent.setLeftPos(properties.ele,0);
        animateTopDown(topPosition,false);
    }
    
    function bottomSlideUp(topPosition){
        console.log('in bottom Slide Up');
        widthWithPadding(properties);
        topPosition = reusableComponent.parseIntConversion(topPosition);
        reusableComponent.setTopPos(properties.ele,0);
        reusableComponent.setLeftPos(properties.ele,0);
        animateTopDown(topPosition,true);
    }
    return {
        setBackground : function(ele,params,givenHeight,givenWidth,paddingProperties){
            percentageOfArea = reusableComponent.parseIntConversion(params.percentageOfArea);
            var speedofEachstep = reusableComponent.setSpeedforEachStep(params.speed,params.percentageOfArea);
            givenHeight = reusableComponent.parseIntConversion(givenHeight);
            givenWidth = reusableComponent.parseIntConversion(givenWidth);
            
            //console.log('say Hello');
            
            //console.log(ele);
            console.log(params['direction']);
            
            var topPadding=0,bottomPadding=0,leftPadding=0,rightPadding=0;
            var paddingProperties = reusableComponent.extractPaddingFromObj(paddingProperties);
            //console.log(paddingProperties['padding-top']);
            //console.log(paddingProperties);
            
            topPadding = paddingProperties['topPadding'];
            bottomPadding = paddingProperties['bottomPadding'];
            leftPadding = paddingProperties['leftPadding'];
            rightPadding = paddingProperties['rightPadding'];
            
         
            var background = 'red';
            if(params.backgroundColor){
                background = params.backgroundColor;
            }
            ele.css({
                'background-color':background
            });
            
            properties.ele = ele;            
            //properties.params = params
            properties.givenHeight = givenHeight;
            properties.givenWidth = givenWidth;
            
            properties.topPadding = topPadding;
            properties.bottomPadding = bottomPadding;
            properties.leftPadding = leftPadding;
            properties.rightPadding = rightPadding;
            
        
           
            properties.percentageOfArea = percentageOfArea;
            properties.speedofEachstep = speedofEachstep;
            //properties.backgroundColor = backgroundColor;
           
           console.log('ELEMENT');
           if(params.direction == 'topBottom'){
                topBottom();
           }
           else if(params.direction == 'bottomTop'){
                bottomTop();
           }
           else if(params.direction == 'leftRight'){
                leftRight();
           }
           else if(params.direction == 'rightLeft'){
                rightLeft();
           }
           else if(params.direction == 'leftSlideUp'){
                leftSlideUp();                
           }
           else if(params.direction == 'RightSlideDown'){
                rightSlideDown(params.leftPosition);
           }
           else if(params.direction == 'RightSlideUp'){
               rightSlideUp(params.leftPosition);
           }
           else if(params.direction == 'BottomSlideDown'){
               bottomSlideDown(params.topPosition);
           }
           else if(params.direction == 'BottomSlideUp'){
               bottomSlideUp(params.topPosition);
           }
          
        },
        widthWithPadding : widthWithPadding,
        heightWithPadding : heightWithPadding
    }
});
