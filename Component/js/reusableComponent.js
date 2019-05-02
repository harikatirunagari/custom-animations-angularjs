/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.factory('reusableComponent',function(){
   console.log('in reusablecomaponent');
    var    extractPaddingPropertyFromElement = function(ele){
            var a = angular.element(ele);
            var paddingProperty = {};
            var k;
            if(a.css('padding-left')){
                k = this.parseIntConversion(a.css('padding-left'));
                paddingProperty['padding-left'] = k;
            }
            if(a.css('padding-right')){
               k = this.parseIntConversion(a.css('padding-right'));
               paddingProperty['padding-right'] = k; 
            }
            if(a.css('padding-top')){
                k = this.parseIntConversion(a.css('padding-top'));
                paddingProperty['padding-top'] = k;
            }
            if(a.css('padding-bottom')){
                k = this.parseIntConversion(a.css('padding-bottom'));
                paddingProperty['padding-bottom'] = k;
            }
            
            return paddingProperty;
        }
        
    var    assignPaddingPropertyForElement = function(ele,paddingProperty){
            var a = angular.element(ele);
            var k;
            var l;
            
            l = checkPaddingInObj('padding-left',paddingProperty);            
            k = assignPx(l);
            a.css('padding-left',k);
            
            l = checkPaddingInObj('padding-right',paddingProperty);           
            k = assignPx(l);
            a.css('padding-right',k);
            
            l = checkPaddingInObj('padding-top',paddingProperty);           
            k = assignPx(l);
            a.css('padding-top',k);
            
            l = checkPaddingInObj('padding-bottom',paddingProperty);           
            k = assignPx(l);
            a.css('padding-bottom',k);          
            
            
        }
        
    var extractPaddingFromObj = function(obj){
        paddingPropObj = {};
        
        paddingPropObj['topPadding'] = checkPaddingInObj('padding-top',obj);
        paddingPropObj['bottomPadding'] = checkPaddingInObj('padding-bottom',obj);
        paddingPropObj['leftPadding'] = checkPaddingInObj('padding-left',obj);
        paddingPropObj['rightPadding'] = checkPaddingInObj('padding-right',obj);
        
        return paddingPropObj;
    }
    
    var checkPaddingInObj = function(paddingProperty,obj){
        if(obj[paddingProperty]){
            return obj[paddingProperty];
        }
        return 0;
    }
    
    var assignPx = function(l){
        return this.parseIntConversion(l)+'px';
    }
    
    function setTopPos(ele,tval){
        ele.css({
            'top':this.assignPx(tval)
        });
    }
    
    function setLeftPos(ele,lval){
        ele.css({
            'left':this.assignPx(lval)
        });
    }
    
    function setBottomPos(ele,bval){
        ele.css({
            'bottom':this.assignPx(bval)
        });
    }
    
    function setRightPos(ele,rval){
        ele.css({
            'right':this.assignPx(rval)
        });
    }

    function setHeight(ele,hval){
        hval = checkVal(hval);        
        ele.css({
            'height':this.assignPx(hval)
        });
    }
    
    function setWidth(ele,val){
        val = checkVal(val);
        ele.css({
            'width':this.assignPx(val)
        });
    }
    
    function setPaddingLeft(ele,lp){
        lp = checkVal(lp);
        ele.css({
            'padding-left':this.assignPx(lp)
        });
    }
    
    function setPaddingRight(ele,rp){
        rp = checkVal(rp);
        ele.css({
            'padding-right':this.assignPx(rp)
        });
    }
    
    function setPaddingTop(ele,tp){
        tp = checkVal(tp);
        ele.css({
            'padding-top':this.assignPx(tp)
        });
    }
    
    function setPaddingBottom(ele,bp){
        bp = checkVal(bp);
        ele.css({
            'padding-bottom':this.assignPx(bp)
        });
    }
      
    function checkVal(val){
        if(val > 0)
            return val;
        return 0;
    }
        
    return{
        parseIntConversion: function(val){
            return parseInt(val);
        },
        setSpeedforEachStep : function(givenSpeed,givenPercent){
            givenSpeed = this.parseIntConversion(givenSpeed);
            givenPercent = this.parseIntConversion(givenPercent)
            return givenSpeed/givenPercent;           
        },
       
        setOverflowProperty : function(ele,val){
            ele.css('overflow',val);
        },
        
        dimensionsWithContent : function(ele){
            var dimensions = {};
            dimensions.height = ele.height();
            dimensions.width = ele.width();
            
            return dimensions;
        },
        
        dimensionsWithPadding : function(ele){
            var dimensions = {};
            dimensions.height = ele.innerHeight();
            dimensions.width = ele.innerWidth();
            
            return dimensions;
        },
        
        dimensionsWithPaddingAndBorder : function(ele){
            var dimensions = {};
            dimensions.height = ele.outerHeight();
            dimensions.width = ele.outerWidth();
            
            return dimensions;
        },
        
        setHeightAndWidth : function(ele,height,width){
            ele.css({
                'height':height+'px',
                'width':width+'px'
            });
        },
        setVisibility : function(ele,val){
            ele.css({
                'visibility':val
            });
        },
        extractPaddingPropertyFromElement : extractPaddingPropertyFromElement,
        extractPaddingFromObj : extractPaddingFromObj,
        assignPaddingPropertyForElement : assignPaddingPropertyForElement,
        assignPx : assignPx,
        
  
        
        setHeight : setHeight,
        setWidth : setWidth,
        setPaddingLeft : setPaddingLeft,
        setPaddingRight : setPaddingRight,
        setPaddingTop : setPaddingTop,
        setPaddingBottom : setPaddingBottom,
        
        setTopPos : setTopPos,
        setLeftPos : setLeftPos,
        setRightPos : setRightPos,
        setBottomPos : setBottomPos
    }
});
