function $(id){
    return document.getElementById(id)
};

function getstyle(obj,style){
    return obj.currentStyle?boj.currenStyle[style]:getComputedStyle(obj)[style]            
};
        var lione=$('lione');
        var li2l=$('li2l');
        var li3l=$('li3l');
        var li4l=$('li4l');
        var lionex=$('lionex');
        var li2lx=$('li2lx');
        var li3lx=$('li3lx');
        var li4lx=$('li4lx');
        var menu1=$('menu1');
        var menu2=$('menu2');
        var menu3=$('menu3');
        var menu4=$('menu4');
        var leftu=$('leftu');
        var leftux=$('leftux');
        var main1=$('main1');
        var na1=$('na1');
        var na2=$('na2');
        var na3=$('na3');
        var na4=$('na4');
        var va1=$('va1');
        var va2=$('va2');
        var va3=$('va3');
        var va4=$('va4');
        var iwc=$('iwc');
        var hd33=$('hd33');
        var topr2=$('.topr2');
        var hidden2=$('hidden2');
        var top=document.getElementsByClassName(top)[0];
        // alert(top.innerHeight);
        // alert(top.innerHTML);
        va1.onmouseenter=function(){
            na1.style.color='#41cac0';
        };

        va1.onmouseleave=function(){
            na1.style.color='#b1b1b1';
        }
        va2.onmouseenter=function(){
            na2.style.color='#41cac0';
        };

        va2.onmouseleave=function(){
            na2.style.color='#b1b1b1';
        }
        va3.onmouseenter=function(){
            na3.style.color='#41cac0';
        };

        va3.onmouseleave=function(){
            na3.style.color='#b1b1b1';
        }
        va4.onmouseenter=function(){
            na4.style.color='#41cac0';
        };

        va4.onmouseleave=function(){
            na4.style.color='#b1b1b1';
        }
        
        // var lione=$('lione');
        var onoff=1;
        var onoff2=1;
        var onoff3=1;
        var onoff4=1;
        var onoff5=1;
        var onoff6=1;
        var add1=$('add1');
        var topr2=$('topr2');
           var topr2=$('topr2'); lione.onclick=function(){
                if(onoff){
                menu1.style.display="block";
                add1.innerHTML="-";
                onoff=0;
                }
                else{
                    menu1.style.display="none";
                    add1.innerHTML="+";
                    onoff=1;
                 }
                }//onclick
            li2l.onclick=function(){
                if(onoff2){
                menu2.style.display="block";
    
                onoff2=0;
                }
                else{
                    menu2.style.display="none";
                    onoff2=1;
                 }
                }//onclick  
            li3l.onclick=function(){
                    if(onoff3){
                    menu3.style.display="block";
        
                    onoff3=0;
                    }
                    else{
                        menu3.style.display="none";
                        onoff3=1;
                     }
                    }//onclick 
            li4l.onclick=function(){
                if(onoff4){
                menu4.style.display="block";
            
                onoff4=0;
                }
                else{
                    menu4.style.display="none";
                    onoff4=1;
                    }
                }//onclick  



                lionex.onclick=function(){
                    if(onoff){
                    menu1x.style.display="block";
        
                    onoff=0;
                    }
                    else{
                        menu1x.style.display="none";
                        onoff=1;
                     }
                    }//onclick
                li2lx.onclick=function(){
                    if(onoff2){
                    menu2x.style.display="block";
        
                    onoff2=0;
                    }
                    else{
                        menu2x.style.display="none";
                        onoff2=1;
                     }
                    }//onclick  
                li3lx.onclick=function(){
                        if(onoff3){
                        menu3x.style.display="block";
            
                        onoff3=0;
                        }
                        else{
                            menu3x.style.display="none";
                            onoff3=1;
                         }
                        }//onclick 
                li4lx.onclick=function(){
                    if(onoff4){
                    menu4x.style.display="block";
                
                    onoff4=0;
                    }
                    else{
                        menu4x.style.display="none";
                        onoff4=1;
                        }
                    }//onclick      
                    iwc.onclick=function(){
                        if(onoff6){
                        hd33.style.visibility="visible";
                        onoff6=0;
                        }
                        else{
                            hd33.style.visibility="hidden";
                            onoff6=1;
                            }
                        }//onclick        
                topr2.onclick=function(){
                    if(onoff5){
                    hidden2.style.display="block";
                
                    onoff5=0;
                    }
                    else{
                        hidden2.style.display="none";
                        onoff5=1;
                        }
                    }//onclick      
       
        var rtu1=$('rtu1');
        var rtu2=$('rtu2');
        var rtu3=$('rtu3');
        var rtu4=$('rtu4');
        var lionex=$('lionex');
        var lionex2=$('lionex2');
        var lionex3=$('lionex3');
        var lionex4=$('lionex4');

        lionex.onmouseleave=function(){
            rtu1.style.color='#a5aaaf';
        }
        lionex.onmouseenter=function(){
            rtu1.style.color='#ff6c60';
        };
        lionex2.onmouseleave=function(){
            rtu2.style.color='#a5aaaf';
        }
        lionex2.onmouseenter=function(){
            rtu2.style.color='#ff6c60';
        };
        lionex3.onmouseleave=function(){
            rtu3.style.color='#a5aaaf';
        }
        lionex3.onmouseenter=function(){
            rtu3.style.color='#ff6c60';
        };
        lionex4.onmouseleave=function(){
            rtu4.style.color='#a5aaaf';
        }
        lionex4.onmouseenter=function(){
            rtu4.style.color='#ff6c60';
        };


        var rtu21=$('rtu21');
        var rtu22=$('rtu22');
        var rtu23=$('rtu23');
        var rtu24=$('rtu24');
        var lione=$('lione');
        var lionex12=$('lionex12');
        var lionex13=$('lionex13');
        var lionex14=$('lionex14');

        lione.onmouseleave=function(){
            rtu21.style.color='#a5aaaf';
        }
        lione.onmouseenter=function(){
            rtu21.style.color='#ff6c60';
        };
        lionex12.onmouseleave=function(){
            rtu22.style.color='#a5aaaf';
        }
        lionex12.onmouseenter=function(){
            rtu22.style.color='#ff6c60';
        };
        lionex13.onmouseleave=function(){
            rtu23.style.color='#a5aaaf';
        }
        lionex13.onmouseenter=function(){
            rtu23.style.color='#ff6c60';
        };
        lionex14.onmouseleave=function(){
            rtu24.style.color='#a5aaaf';
        }
        lionex14.onmouseenter=function(){
            rtu24.style.color='#ff6c60';
        };